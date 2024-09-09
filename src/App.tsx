import "./App.scss";
import { MainRoots } from "./utils/path";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
    const renderRoutes = () => {
        return MainRoots.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
        ));
    };
    return (
        <Routes>
            {renderRoutes()}
            <Route path="/error" element={<></>} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default App;
