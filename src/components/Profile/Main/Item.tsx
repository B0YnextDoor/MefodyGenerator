import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
    typeMes: string;
    title: string;
    text: string;
}

export const ProfileItem = ({ typeMes, title, text }: IProps) => {
    const isMobile = useMediaQuery("(max-width:767px)");

    return (
        <Link to={typeMes} style={{ textDecoration: "none" }} className="my-4">
            <div
                className={`d-flex border ${
                    isMobile ? "px-1 py-2" : "py-2 px-3"
                } `}
                style={{
                    maxWidth: "350px",
                    borderRadius: "10px",
                }}
            >
                <div className="me-2">
                    <img src={require(`./static/${typeMes}.png`)} alt="" />
                </div>
                <div>
                    <span className="fw-bold" style={{ fontSize: "15px" }}>
                        {title}
                    </span>
                    <br />
                    <span
                        style={{
                            color: "#71717A",
                            fontSize: "14px",
                        }}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </Link>
    );
};
