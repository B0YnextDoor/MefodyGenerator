import { Route, Routes } from "react-router-dom";
import { ProfileHeader, ProfileHeaderMobile } from "./Header/Header";
import { ProfileRoots } from "../../utils/path";
import { useMediaQuery } from "@mui/material";
import { when } from "mobx";
import { user } from "../..";
import { observer } from "mobx-react-lite";

export default observer(function ProfilePage() {
  when(
    () => !user.email.length,
    () => {
      user.getMe();
    }
  );

  const renderRoutes = () => {
    return ProfileRoots.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ));
  };
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <div className="d-flex h-100">
      {isMobile ? <></> : <ProfileHeader />}

      <div className={`w-100`}>
        {isMobile ? <ProfileHeaderMobile /> : <></>}

        <Routes>{renderRoutes()}</Routes>
      </div>
    </div>
  );
});
