import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const LastPrev = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const Item = (
        <>
            <div className="d-flex justify-content-center flex-column">
                <Image src={require("./static/last.png")} fluid />
            </div>
            <div className="my-5">
                <div>
                    <span className="fw-bold" style={{ fontSize: "24px" }}>
                        Заголовок
                    </span>
                </div>
                <span style={{ color: "#667085" }}>
                    Равным образом рамки и место обучения кадров влечет за собой
                    процесс внедрения и модернизации системы обучения кадров,
                    соответствует насущным потребностям.
                </span>
            </div>
        </>
    );

    return (
        <Link to="/profile/rich/content" className="text-decoration-none">
            <div
                className="py-5  px-3"
                style={{
                    color: "#101828",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                }}
            >
                <div className="d-flex">
                    <div>{Item}</div>
                    <div className={`mx-${isMobile ? "1" : "5"}`}></div>
                    <div>{Item}</div>
                </div>
            </div>
        </Link>
    );
};
