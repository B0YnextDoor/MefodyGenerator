import {
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { IResult } from "../../../utils/interfaces";
import { OZONIcon } from "../static/ozon";
import { convertDateTime } from "../../../utils/date/converFromIso";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { WBIcon } from "../static/wb";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { RichIcon } from "../static/rich";
import { IoMdRefresh } from "react-icons/io";
import {Link} from "react-router-dom";

interface IProps {
    data: IResult;
    index: number;
}

export const HistoryItem = ({ data,index }: IProps) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        setOpen(!open);
        e.stopPropagation();
    };


    const items = [
        { name: "Название товара: ", value: data.name },
        { name: "Техническое описание: ", value: data.description },
        { name: "Ключевые слова: ", value: data.seo },
        {
            name: "Преимущества товара: ",
            value:
                data.advantages &&
                data.advantages.map((adv) => adv.value).join(" "),
        },
        {
            name: "Текст описания: ",
            value:
                data.type === "rich"
                    ? `{
                          content: [
                              {
                                  widgetName: "raShowcase",
                                  type: "billboard",
                                  blocks: [
                                      {
                                          imgLink: "",
                                          img: {
                                              src: "https://cdn1.ozone.ru/s3/rich-content/placeholder/1416x708.png",
                                              srcMobile:
                                                  "https://cdn1.ozone.ru/s3/rich-content/placeholder/640x640.png",
                                              alt: "",
                                              position: "width_full",
                                              positionMobile: "width_full",
                                          },
                                          title: {
                                              content: ["${data.name}"],
                                              size: "size4",
                                              align: "left",
                                              color: "color1",
                                          },
                                          text: {
                                              size: "size2",
                                              align: "left",
                                              color: "color1",
                                              content: [
                                                  "${data.content}",
                                              ],
                                          },
                                      },
                                  ],
                              },
                          ],
                          version: 0.3,
                      }`
                    : data.content,
        },
    ];

    return (
        <>
            <FullCard
                open={open}
                handleOpen={(flag: boolean) => setOpen(flag)}
                items={items}
            />
            <Card
                className="HistoryCard"
                onClick={handleCardClick}
                sx={{
                    minHeight: "89px",
                    maxHeight: isClicked ? "600px" : "89px",
                    background:
                        data.status === "pending"
                            ? "#F6F8F9"
                            : data.status === "failure"
                            ? "#f2c5c2"
                            : "",
                }}
            >
                <CardContent
                    className="HistoryCardContent"
                    style={{ opacity: isClicked ? 1 : 0.7 }}
                >
                    <div>
                        <Row>
                            <Col md={2}>
                                {data.type === "wb" ? (
                                    <WBIcon />
                                ) : data.type === "ozon" ? (
                                    <OZONIcon />
                                ) : (
                                    <RichIcon />
                                )}
                            </Col>
                            <Col
                                style={{
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                }}
                            >
                                {data.type === "wb"
                                    ? "WB"
                                    : data.type === "ozon"
                                    ? "OZON"
                                    : "Rich"}
                            </Col>
                            <Col md={3}>
                                {isClicked && (
                                    <IconButton onClick={handleButtonClick}>
                                        <OpenInFullIcon />
                                    </IconButton>
                                )}
                                {isClicked && (
                                    <Link to={`/profile/${data.type}/${index}`}><IoMdRefresh /></Link>

                                )}
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md={2}></Col>
                            <Col
                                style={{
                                    color: "#71717A",
                                    fontSize: "14px",
                                    lineHeight: "12px",
                                    fontWeight: 400,
                                }}
                            >

                                {data.name}
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md={2}></Col>
                            <Col
                                style={{
                                    color: "#71717A",
                                    fontSize: "14px",
                                    lineHeight: "12px",
                                    fontWeight: 400,
                                }}
                            >
                                {convertDateTime(data.date)}
                            </Col>
                        </Row>
                        {isClicked && (
                            <Row>
                                <Col md={2}></Col>
                                <Col
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    <Item items={items} />
                                </Col>
                            </Row>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

const Item = ({ items }: any) => {
    return (
        <div className="d-flex flex-column">
            {items.map((item: any) => (
                <div
                    className="my-2"
                    style={{ fontSize: "12px", lineHeight: "12px" }}
                >
                    <span>{item.name}</span>
                    <span
                        style={{
                            color: "#71717A",
                            display: "-webkit-box",
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            whiteSpace: "normal",
                        }}
                    >
                        {item.value}
                    </span>
                </div>
            ))}
        </div>
    );
};

interface IFull {
    items: any;
    open: boolean;
    handleOpen: (flag: boolean) => void;
}

const FullCard = ({ items, handleOpen, open }: IFull) => (
    <Dialog open={open} onClose={() => handleOpen(false)}>
        <DialogTitle>Описание</DialogTitle>
        <DialogContent>
            <div className="d-flex flex-column">
                {items.map((item: any) => (
                    <div
                        className="my-2"
                        style={{ fontSize: "16px", lineHeight: "21px" }}
                    >
                        <span>{item.name}</span>
                        <span
                            style={{
                                color: "#71717A",
                                overflow: "hidden",
                                whiteSpace: "normal",
                            }}
                        >
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => handleOpen(false)}>Закрыть</Button>
        </DialogActions>
    </Dialog>
);
