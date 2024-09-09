import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { checkPromo } from "./hooks";
import { useState } from "react";
import { user } from "../..";

interface IProps {
    open: boolean;
    handleOpen: (flag: boolean) => void;
}

export const PromoInput = ({ open, handleOpen }: IProps) => {
    const [promo, setPromo] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);

    const handleClick = async () => {
        const flag = await checkPromo(promo);

        if (!flag) {
            setErr(true);
            return;
        }
        setPromo("");
        user.getMe();
        handleOpen(false);
    };

    return (
        <Dialog open={open} onClose={() => handleOpen(false)}>
            <DialogTitle>Введи промокод</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    label="Введи промокод"
                    type="email"
                    fullWidth
                    variant="standard"
                    error={err}
                    onChange={(e: any) => setPromo(e.target.value)}
                    value={promo}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleOpen(false)}>Закрыть</Button>
                <Button variant="contained" onClick={handleClick}>
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
