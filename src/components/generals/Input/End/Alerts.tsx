import { Alert, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

interface IProps {
    handleShow: (text: string) => void;
    show: string;
}

export const Alerts = ({ show, handleShow }: IProps) => {
    const isMobile = useMediaQuery("(max-width:767px)");

    useEffect(() => {
        if (show.length) {
            const timeout = setTimeout(() => {
                handleShow("");
            }, 7000);

            return () => clearTimeout(timeout);
        }
    }, [show]);

    return (
        <div
            style={{
                zIndex: 99999,
                width: "100%",
            }}
        >
            {show.length > 0 && (
                <div
                    style={{
                        position: "absolute",
                        right: "3%",
                        top: "2%",
                        minWidth: isMobile ? "400px" : "800px",
                    }}
                >
                    <Alert severity="info">{show} </Alert>
                </div>
            )}
        </div>
    );
};
