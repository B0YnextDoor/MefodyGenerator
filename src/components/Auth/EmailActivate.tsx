import { Button } from "@mui/material";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EmailActivatePage() {
    const { uid, token } = useParams();
    const navigate = useNavigate();
    const [isHandled, setIsHandled] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        const Fetch = async () => {
            try {
                const data = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}auth/users/activation/`,
                    { token, uid }
                );

                if (data.status === 204) {
                    setStatus(
                        "Ваш аккаунт успешно активирован. Происходит перенаправление"
                    );
                    const intervalId = setInterval(() => {
                        navigate("/");
                        clearInterval(intervalId);
                    }, 1000);
                } else {
                    setStatus("Извините, повторите попытку позже");
                }
            } catch (err) {
                console.log(err);
                setStatus("Извините, повторите попытку позже");
            } finally {
                setIsHandled(true);
            }
        };

        if (!isHandled) {
            Fetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHandled]);

    return (
        <div style={{ fontSize: "20px" }}>
            {!isHandled ? (
                <Spinner animation="grow" variant="primary" />
            ) : (
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                        <span className="text-primary fw-bold my-5 mx-3">
                            {status}
                        </span>
                        <Spinner animation="grow" variant="primary" />
                    </div>
                    <Button onClick={() => navigate("/")}>Войти</Button>
                </div>
            )}
        </div>
    );
}
