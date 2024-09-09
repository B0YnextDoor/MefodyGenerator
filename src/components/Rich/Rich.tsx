import { Route, Routes } from "react-router-dom";
import { RichRoot } from "../../utils/path";

export default function RichPage() {
    const renderRoutes = () => {
        return RichRoot.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
        ));
    };

    return <Routes>{renderRoutes()}</Routes>;
}
