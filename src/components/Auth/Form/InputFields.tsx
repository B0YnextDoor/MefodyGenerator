import {
    Checkbox,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    useMediaQuery,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link } from "react-router-dom";
import { POLITICA } from "../../../utils/consts";

interface IProps {
    email: string;
    password: string;
    setEmail: (value: string) => void;
    setPass: (value: string) => void;
}

export const InputForms = ({ email, password, setEmail, setPass }: IProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isMobile = useMediaQuery("(max-width:767px)");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className="w-100">
            <FormControl
                variant="outlined"
                style={{ marginBottom: isMobile ? "20px" : "40px" }}
                fullWidth={true}
            >
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                    type="email"
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    style={{
                        borderRadius: "15px",
                        background: "#F8FAFC",
                        width: isMobile ? "100%" : "",
                    }}
                    label="Email"
                />
            </FormControl>
            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel>Пароль</InputLabel>
                <OutlinedInput
                    style={{
                        borderRadius: "15px",
                        background: "#F8FAFC",
                        width: isMobile ? "100%" : "",
                    }}
                    value={password}
                    onChange={(e: any) => setPass(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <div
                className={`d-flex justify-content-between flex-wrap my-${
                    isMobile ? "1" : "3"
                }`}
            >
                <div className="d-flex align-items-center">
                    <Checkbox defaultChecked />
                    <span>Запомнить меня</span>
                </div>
                <div className="d-flex align-items-center">
                    <Link to="/recover">Забыли пароль?</Link>
                </div>
                <Link to={POLITICA}>Пользовательское Соглашение</Link>
            </div>
        </div>
    );
};
