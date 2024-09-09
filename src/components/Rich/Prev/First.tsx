import { Link } from "react-router-dom";

export const FirstType = () => {
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
                <div className="d-flex justify-content-center flex-column">
                    <img alt="" src={require("./static/first.png")} />
                </div>
                <div className="my-2">
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
        </Link>
    );
};
