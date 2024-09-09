interface IProps {
    text?: string;
}

export const HorizontalLine = ({ text }: IProps) => {
    return (
        <div className="horizontal-line">
            <span className="line"></span>
            {text && <span className="text">{text}</span>}
            <span className="line"></span>
        </div>
    );
};
