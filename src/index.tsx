import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "filepond/dist/filepond.min.css";
import { BrowserRouter } from "react-router-dom";
import { registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import User from "./store/User";
import { GoogleOAuthProvider } from "@react-oauth/google";

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

interface State {
    user: User;
}

export const user = new User();

export const Context = createContext<State>({
    user,
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={{ user }}>
                <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
                >
                    <App />
                </GoogleOAuthProvider>
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>
);
