import { Link } from "react-router-dom";
import { Buy } from "./static/Buy";
import { Money } from "./static/Money";
import { Mail } from "./static/Mail";
import { observer } from "mobx-react-lite";
import { user } from "../..";
import { MdLogout } from "react-icons/md";
import { Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export const AccountHeader = observer(() => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1700 });

  return (
    <div
      className={`d-flex AccountTip ${
        isMobile ? "flex-wrap" : ""
      } mx-3 justify-content-center `}
      style={
        isTablet || isMobile
          ? {}
          : {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }
      }
    >
      <Link
        to=""
        className="AccountButton p-3 d-flex align-items-center"
        style={{ textDecoration: "none" }}
      >
        <Buy />
        <span className="AccountLink">Купить описания</span>
      </Link>
      <div className="AccountButton p-3 d-flex align-items-center">
        <Money />
        <span className="AccountLink">
          Количество доступных описаний: {user.count_desc}
        </span>
      </div>
      <div className="AccountButton p-3 d-flex align-items-center">
        <Mail />
        <span className="AccountLink">{user.email}</span>
        <Button onClick={() => user.logout()}>
          <MdLogout size={24} color={"#000"} />
        </Button>
      </div>
    </div>
  );
});
