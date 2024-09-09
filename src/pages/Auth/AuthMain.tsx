import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { LoginRoots } from "../../utils/path";
import { Toast, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { About } from "../../components/About/About";
import { FAQ } from "../../components/FAQ/FAQ";
import { Exmpl } from "../../components/Exmpl/Exmpl";
import { Pluses } from "../../components/Pluses/Pluses";
import { Connect } from "../../components/Connect/Connect";
import { Header } from "../../components/Header/Header";

export default function AuthPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1090 });

  const [showA, setShowA] = useState<string>("");

  useEffect(() => {
    if (showA?.length > 0) {
      const intervalId = setInterval(() => {
        setShowA("");
        clearInterval(intervalId);
      }, 3000);
    }
  }, [showA]);

  const handleShow = (str: string) => {
    setShowA(str);
  };

  const TostItem = (
    <Toast
      style={{
        position: "absolute",
        left: "50%",
        top: "-25%",
        transform: "translate(-50%, -50%)",
        zIndex: 10000,
      }}
    >
      <Toast.Body className="text-primary">{showA}</Toast.Body>
    </Toast>
  );

  const renderRoutes = () => {
    return LoginRoots.map(({ path, Component }) => (
      <Route
        key={path}
        path={path}
        element={<Component handleShow={handleShow} />}
      />
    ));
  };

  return (
    <>
      <Header isMobile={isMobile} isTablet={isTablet} />
      <div className="d-flex h-100" style={{}}>
        {isMobile || isTablet ? (
          <></>
        ) : (
          <div style={{ zIndex: -1, maxWidth: "600px" }}>
            <Image src={require("./static/logo.png")} width="600px" />
          </div>
        )}

        <div
          className="m-auto"
          style={{ maxWidth: "526px", position: "relative" }}
        >
          {showA && TostItem}
          <Routes>{renderRoutes()}</Routes>
        </div>
      </div>
      <About />
      <FAQ />
      <Exmpl />
      <Pluses />
      <Connect />
      <div
        className="p-3  d-flex justify-content-between"
        style={{
          width: "100%",
          background: "#1976d2",
          color: "white",
          zIndex: 999999,
        }}
      >
        <div>
          Наименование: ООО "ЗОДИАК БЕСПРОВОДНЫЕ РЕШЕНИЯ"
          <br /> ИНН: 7720294847 <br />
          КПП: 772001001 <br />
          Расчётный счет: №40702810301500105022
        </div>
        <div>
          Название банка: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" <br /> БИК: 044525999{" "}
          <br />
          Город: г. Москва <br />
          Корр. счет: 30101810845250000999
        </div>
      </div>
    </>
  );
}
