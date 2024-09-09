import { Button, Card, CardContent } from "@mui/material";
import { IResult } from "../../../utils/interfaces";
import { ExelIcon } from "../../Mass/static/Excel";
import { $api } from "../../../utils/api/api";
import {Col, Row} from "react-bootstrap";
import {convertDateTime} from "../../../utils/date/converFromIso";

interface IProps {
    data: IResult;
}

export const MassItem = ({ data }: IProps) => {
    const handleClick = async () => {
        const mass_url = data.mass_file.replace(/^http:/, "https:");
        const response = await $api.get(mass_url, {
            responseType: "blob",
        });

        const blob = new Blob([response.data], {
            type: response.headers["content-type"],
        });
        const blobURL = window.URL.createObjectURL(blob);

        const tempLink = document.createElement("a");
        tempLink.href = blobURL;
        tempLink.setAttribute("download", "mass.xlsx");
        tempLink.click();

        window.URL.revokeObjectURL(blobURL);
    };

    return (
        <Card
            className="HistoryCard"
            sx={{
                minHeight: "89px",
                background:
                    data.status === "pending"
                        ? "#F6F8F9"
                        : data.status === "failure"
                        ? "#f2c5c2"
                        : "",
            }}
        >
            <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                    <ExelIcon />
                    <Button
                        variant="contained"
                        color={
                            data.status === "pending"
                                ? "info"
                                : data.status === "failure"
                                ? "error"
                                : "success"
                        }
                        onClick={handleClick}
                    >
                        {data.status === "pending"
                                ? "Файл готовится.."
                                : data.status === "failure"
                                ? "Ошибка"
                                : "Скачать файл"}
                    </Button>

                </div>

            </CardContent>
        </Card>
    );
};
