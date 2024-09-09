import { DescTitle } from "../generals/Title";
import { MassItem } from "./comp/MassItem";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function MassPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1700 });

  return (
    <div className="px-4 mt-5">
      <DescTitle
        type=""
        title="Создание массовых описаний"
        subTitle="Этот раздел позволяет вам массово генерировать контент для описаний"
      />

      <div
        className={`d-flex align-items-center justify-content-center position-relative my-${
          isMobile ? "5" : "0"
        }`}
        style={{ height: `${isMobile ? "" : "78vh"}` }}
      >
        <MassItem />
      </div>
      {isMobile || isTablet ? (
        <></>
      ) : (
        <div className="position-absolute" style={{ bottom: 0, right: 0 }}>
          <Image alt="" src={require("./static/robot.png")} />
        </div>
      )}
    </div>
  );
}
