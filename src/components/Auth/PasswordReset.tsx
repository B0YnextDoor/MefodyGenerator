import {
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface IProps {
    handleShow: (str: string) => void;
}

export const PasswordResetPage = ({ handleShow }: IProps) => {
    const isMobile = useMediaQuery("(max-width:767px)");

    const { uid, token } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        new_password: "",
        re_new_password: "",
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (
            formData.new_password.length &&
            formData.re_new_password.length &&
            formData.new_password === formData.re_new_password
        ) {
            setLoading(true);
            try {
                await axios.post(
                    `${process.env.REACT_APP_BASE_URL}auth/users/reset_password_confirm/`,
                    { ...formData, token, uid }
                );

                handleShow("Успешно");
                navigate("/");
            } catch (error) {
                handleShow("Ошибка повторите попытку");
            } finally {
                setLoading(false);
            }
        } else {
            handleShow("Пароли не совпадают");
        }
    };

    return (
        <>
            <FormControl
                variant="outlined"
                style={{ marginBottom: isMobile ? "20px" : "40px" }}
                fullWidth={true}
            >
                <InputLabel>Новый пароль</InputLabel>
                <OutlinedInput
                    type="email"
                    onChange={(event: any) =>
                        setFormData({
                            ...formData,
                            new_password: event.target.value,
                        })
                    }
                    style={{
                        borderRadius: "15px",
                        background: "#F8FAFC",
                        width: isMobile ? "100%" : "",
                    }}
                    label="Новый пароль"
                />
            </FormControl>
            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel>Повторите новый пароль</InputLabel>
                <OutlinedInput
                    style={{
                        marginBottom: isMobile ? "20px" : "40px",
                        borderRadius: "15px",
                        background: "#F8FAFC",
                        width: isMobile ? "100%" : "",
                    }}
                    onChange={(event: any) =>
                        setFormData({
                            ...formData,
                            re_new_password: event.target.value,
                        })
                    }
                    label="Повторите новый пароль"
                />
            </FormControl>

            <div className="d-flex justify-content-center">
                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    fullWidth
                    variant="contained"
                >
                    Сохранить пароль
                </Button>
            </div>
        </>
    );
};
