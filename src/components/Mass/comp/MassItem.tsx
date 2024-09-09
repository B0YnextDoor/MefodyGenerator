import { Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import { useMediaQuery } from "react-responsive";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import { CreateMass } from "../hooks";
import { ExelIcon } from "../static/Excel";
import { GoogleSheetIcon } from "../static/GoogleSheet";
import { user } from "../../..";

export const MassItem = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [file, setFile] = useState<File | null>(null);
    const filePondRef = useRef<any>(null);

    const handleDog = () => {
        const fileUrl = process.env.PUBLIC_URL + "/files/1.xlsx";

        saveAs(fileUrl, "exmpl.xlsx");
    };

    const handleFileUpload = (files: any) => {
        if (files && files.length > 0) {
            setFile(files[0].file);
        }
    };

    const handleUploadClick = async () => {
        if (!file) {
            return;
        }

        const form = new FormData();

        form.append("mass_file", file);

        await CreateMass(form);

        if (filePondRef.current) {
            filePondRef.current.removeFile();
        }

        setFile(null);
    };

    return (
        <div
            style={{
                background: "white",
                zIndex: 999,
                width: "518px",
                height: "328px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "15px",
            }}
            className="px-3 py-2"
        >
            <div className="d-flex flex-column">
                <span className="fw-bold my-1">1. Скачать шаблон</span>
                <div className="d-flex">
                    <Button
                        onClick={handleDog}
                        color="success"
                        variant="contained"
                        sx={{ marginRight: "15px" }}
                    >
                        <ExelIcon /> <span className="ms-1">Скачать Excel</span>
                    </Button>
                    <a
                        href="https://docs.google.com/spreadsheets/d/165n0Yr4TZ8MH5acMUBGdAXSp1rLRyWgX-e-6WlzbH4E/edit#gid=0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button color="success" variant="contained">
                            <GoogleSheetIcon />
                            <span className="ms-1">Скачать Google Sheets</span>
                        </Button>
                    </a>
                </div>
                <span className="fw-bold my-1">
                    2. Заполни описание детально в шаблоне
                </span>
                <span className="mx-4" style={{ fontSize: "12px" }}>
                    предлагаем заполнить описания товаров в шаблоне, следуя
                    указанным правилам и требованиям
                </span>
                <span className="fw-bold my-1">
                    3. Загрузите подготовленный файл
                </span>

                <Row className={`align-items-center mt-${isMobile ? "" : "5"}`}>
                    <Col>
                        <FilePond
                            ref={filePondRef}
                            allowFileSizeValidation={true}
                            maxFileSize="10MB"
                            storeAsFile={true}
                            onupdatefiles={handleFileUpload}
                            acceptedFileTypes={[
                                ".xlsx",
                                ".xls",
                                "applicatinon/vnd.ms-excel",
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            ]}
                            allowMultiple={false}
                            required={true}
                            labelIdle={`${
                                isMobile ? "" : "Перетаскивайте файлы или "
                            }<span class="filepond--label-action">Browse</span>`}
                        />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button
                            sx={{ px: 3, py: 2, borderRadius: "10px" }}
                            variant="contained"
                            onClick={handleUploadClick}
                            disabled={!(user.count_desc > 0)}
                        >
                            Сгенерировать
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
