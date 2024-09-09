import { Col } from "react-bootstrap";
import { InputForms } from "./Form/InputFields";
import { HorizontalLine } from "../generals/HorizontalLine/HorizontalLine";
import { Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { user } from "../..";
import { GoogleAuth } from "./Form/GoogleAuth";

interface IProps {
  handleShow: (str: string) => void;
}

export const Forms = observer(({ handleShow }: IProps) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = async () => {
    setDisabled(true);
    if (!(email.length && password.length)) {
      handleShow("Логин и пароль не могут быть пустыми");
      setDisabled(false);
      return;
    }
    await user.login(email, password);

    if (user.getAuth()) {
      navigate("/profile");
      setEmail("");
      setPass("");
    } else if (user.errorMessage.length) {
      handleShow(user.errorMessage);
    }

    setDisabled(false);
  };

  useEffect(() => {
    (async () => {
      await user.checkAuth();
      if (user.getAuth()) navigate("/profile");
    })();
  }, []);

  return (
    <div className="position-relative ">
      <Col className="justify-content-center d-flex">
        <span
          style={{
            fontSize: isMobile ? "30px" : "45px",
            fontWeight: 500,
            lineHeight: "30px",
            letterSpacing: "-2px",
          }}
        >
          Создать Аккаунт/Войти
        </span>
      </Col>
      <Col className="mt-4 d-flex justify-content-center">
        <GoogleAuth />
      </Col>
      <HorizontalLine text="или" />
      <InputForms
        email={email}
        setEmail={setEmail}
        password={password}
        setPass={setPass}
      />
      <Button
        disabled={disabled}
        sx={{ width: "100%" }}
        variant="contained"
        color="primary"
        fullWidth={true}
        onClick={handleClick}
      >
        Войти
      </Button>
    </div>
  );
});
