import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { createPayment } from "./hooks";

interface IProps {
  name: string;
  surname: string;
  price: string;
  features: Array<string>;
  handlerLoading: (flag: boolean) => void;
  amount: number;
  count: number;
}

export const TariffItem = ({
  name,
  surname,
  price,
  features,
  handlerLoading,
  amount,
  count,
}: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClick = async () => {
    handlerLoading(true);
    const confirmation_url = await createPayment(amount, count);
    if (confirmation_url) {
      window.location.href = confirmation_url;
    }
  };

  return (
    <>
      <div
        className="mx-3 my-2 "
        style={{
          position: "relative",
          width: "292px",
          height: "666px",
        }}
      >
        <div>
          <div className="my-2">
            <span className="fw-bold mb-1" style={{ fontSize: "22px" }}>
              {name}
            </span>
            <br />
            <span style={{ color: "#64748B" }}>{surname}</span>
          </div>
          <div className="d-flex align-items-center my-3">
            <span
              style={{
                fontSize: isMobile ? "30px" : "58px",
                fontWeight: 600,
              }}
              className="me-1"
            >
              ₽{price}
            </span>
            <span
              style={price != "0" ? { color: "#4B5768" } : { display: "none" }}
            >
              / Месяц
            </span>
          </div>
          <div className="d-flex flex-column my-4">
            {features.map((str, index) => (
              <div key={index} className="my-2">
                <Image src={require("./static/select.png")} fluid />
                <span className="fw-bold mx-2">{str}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="position-absolute d-flex justify-content-center w-100"
          style={{ bottom: 0 }}
        >
          <Button variant="outlined" sx={{ px: 5 }} onClick={handleClick}>
            Выбрать
          </Button>
        </div>
      </div>
    </>
  );
};
