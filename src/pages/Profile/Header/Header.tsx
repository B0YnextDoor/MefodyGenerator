import { Image } from "react-bootstrap";
import { HorizontalLine } from "../../../components/generals/HorizontalLine/HorizontalLine";
import { Buttons } from "./Header/Buttons";
import { Drawer, IconButton, Link } from "@mui/material";
import { POLITICA } from "../../../utils/consts";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const ProfileHeader = () => {
  return (
    <>
      <div
        className="h-100 py-4 d-flex flex-column"
        style={{
          background: "#F6F8F9",
          width: "15vw",
          minWidth: "330px",
        }}
      >
        <div className="flex-grow-1 d-flex flex-column">
          <div className="d-flex mb-2">
            <div>
              <Image alt="" src={require("../static/logo.png")} rounded />
            </div>
            <div>
              <span className="fw-bold">Мефодий</span>
              <br />
              <span style={{ color: "#84919A" }}>Описание продукта</span>
            </div>
          </div>
          <HorizontalLine />
          <div className="mb-2">
            <Buttons />
          </div>
        </div>
        <div className="ms-4">
          <Link href={POLITICA}>Пользовательское Соглашение</Link>
        </div>
      </div>
    </>
  );
};

export const ProfileHeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={handleOpen}>
        <ProfileHeader />
      </Drawer>

      <div className="d-flex justify-content-end mx-1">
        <IconButton onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );
};
