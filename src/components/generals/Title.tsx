import { useMediaQuery } from "react-responsive";

interface IProps {
    type: string;
    title: string;
    subTitle: string;
}

export const DescTitle = ({ type, title, subTitle }: IProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            <div className="d-flex align-items-center">
                <span
                    className="fw-bold"
                    style={{ fontSize: `${isMobile ? "22px" : "36px"} ` }}
                >
                    {title}
                </span>
                <div className="ms-4">
                    {type && (
                        <img src={require(`./static/${type}.png`)} alt="" />
                    )}
                </div>
            </div>
            <div>
                <span
                    style={{
                        color: "#252C32",
                        fontSize: "18px",
                        letterSpacing: "-0.252px",
                        whiteSpace: `${isMobile ? "normal" : "nowrap"}`,
                    }}
                >
                    {subTitle}
                </span>
            </div>
            <hr />
        </div>
    );
};
