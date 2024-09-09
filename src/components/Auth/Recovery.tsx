import {
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { RecoveryPassHook } from "./hooks";

export default function RecoveryPage() {
    const isMobile = useMediaQuery("(max-width:767px)");
    const [email, setEmail] = useState<string | null>();
    const [status, setStatus] = useState<boolean>(false);

    const handleClick = async () => {
        const st = email && (await RecoveryPassHook(email));
        if (st) {
            setEmail("");
            setStatus(false);
        } else setStatus(true);
    };

    return (
        <div className="d-flex flex-column text-center px-3">
            <span
                style={{
                    fontSize: isMobile ? "32px" : "45px",
                    fontWeight: 550,
                    letterSpacing: "-2px",
                }}
            >
                Восстановить пароль
            </span>
            <span
                style={{ color: "#828282" }}
                className={`my-${isMobile ? "2" : "4"}`}
            >
                Введите свой адрес электронной почты для процесса проверки, мы
                отправим 4-значный код на ваш адрес электронной почты.
            </span>
            <FormControl variant="outlined" className="mb-4" fullWidth={true}>
                <InputLabel htmlFor="outlined-adornment-password">
                    Email
                </InputLabel>
                <OutlinedInput
                    error={status}
                    value={email}
                    style={{
                        borderRadius: "15px",
                        background: "#F8FAFC",
                    }}
                    onChange={(e: any) => setEmail(e.target.value)}
                    label="Email"
                />
            </FormControl>

            <Button
                disabled={!Boolean(email?.length)}
                sx={{ px: 3, py: 2 }}
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Дальше
            </Button>
        </div>
    );
}
