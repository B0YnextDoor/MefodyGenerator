import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GoogleAuth = () => {
    const navigate = useNavigate();

    const onSuccess = async (response: any) => {
        if (response.credential) {
            try {
                const serverResponse = await axios.post(
                    process.env.REACT_APP_BASE_URL + "google/verify/",
                    {
                        token: response.credential,
                    }
                );
                if (serverResponse.data && serverResponse.data.access) {
                    localStorage.setItem("mptok", serverResponse.data.access);
                    let date = new Date();
                    document.cookie = `mptok=${
                        serverResponse.data.refresh
                    }; path=/;expires=${date.setTime(
                        date.getTime() + 60 * 60 * 24
                    )}`;

                    navigate("/profile");
                }
            } catch (error) {
                console.error("Ошибка при проверке токена на сервере", error);
            }
        } else {
            console.error("Ошибка при получении токена Google", response);
        }
    };

    const onFailure = () => {
        console.log("Google Failure");
    };

    return <GoogleLogin onSuccess={onSuccess} onError={onFailure} />;
};
