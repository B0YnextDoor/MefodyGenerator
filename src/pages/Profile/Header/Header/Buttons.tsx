import { MdEdit } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiTransferAlt } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <>
      <Link to="/profile" className="text-decoration-none">
        <Button
          className="py-3"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <MdEdit color="#252C32" size={20} />
          <span
            style={{ color: "#252C32", whiteSpace: "nowrap" }}
            className="px-1"
          >
            Сгенерировать описание
          </span>
        </Button>
      </Link>
      <Link to="/profile/tariff" className="text-decoration-none">
        <Button
          className="py-3"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <FaHandHoldingDollar color="#252C32" size={20} />
          <span style={{ color: "#252C32" }} className="px-1">
            Тарифы
          </span>
        </Button>
      </Link>
      <Link to="/profile/history" className="text-decoration-none">
        <Button
          className="py-3"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <BiTransferAlt color="#252C32" size={20} />
          <span style={{ color: "#252C32" }} className="px-1">
            История описаний
          </span>
        </Button>
      </Link>
      <Link to="/profile/connect" className="text-decoration-none">
        <Button
          className="py-3"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <IoMdHelpCircle color="#252C32" size={20} />
          <span style={{ color: "#252C32" }} className="px-1">
            Связаться с нами
          </span>
        </Button>
      </Link>
    </>
  );
};
