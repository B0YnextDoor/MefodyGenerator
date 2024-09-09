interface IProps {
    text: string;
}

export const Nitem = ({ text }: IProps) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <span className="fw-bold">{text}</span>
        </div>
    );
};
