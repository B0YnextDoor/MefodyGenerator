import "./Header-module.css";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Header = ({ isMobile, isTablet }: any) => {
  const [show, setShow] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case "О сервисе": {
        scroll.scrollTo(!isMobile ? 700 : 800, options);
        break;
      }
      case "FAQ": {
        scroll.scrollTo(!isMobile ? 1200 : 1500, options);
        break;
      }
      case "Как пользоваться": {
        scroll.scrollTo(!isMobile ? 2400 : 2900, options);
        break;
      }
      case "Преимущества": {
        scroll.scrollTo(3400, options);
        break;
      }
      default: {
        scroll.scrollTo(!isMobile ? 4000 : 3800, options);
        break;
      }
    }
  };
  return (
    <header style={isMobile || isTablet ? { justifyContent: "right" } : {}}>
      {isMobile || isTablet ? (
        <>
          <button onClick={() => setShow(true)}>
            <MenuIcon color="primary" sx={{ fontSize: 60 }} />
          </button>
          <Drawer anchor={"right"} open={show} onClose={() => setShow(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setShow(false)}
              onKeyDown={() => setShow(false)}
            >
              <ul
                className="navbar"
                style={{ flexDirection: "column", alignItems: "start" }}
              >
                {HeaderBar.map((el) => (
                  <li key={el}>
                    <button
                      style={{ fontSize: 22 }}
                      onClick={(e) => handleClick(e)}
                    >
                      {el}
                    </button>
                  </li>
                ))}
              </ul>
            </Box>
          </Drawer>
        </>
      ) : (
        <ul className="navbar">
          {HeaderBar.map((el) => (
            <li key={el}>
              <button onClick={(e) => handleClick(e)}>{el}</button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

const HeaderBar: string[] = [
  "О сервисе",
  "FAQ",
  "Как пользоваться",
  "Преимущества",
  "Обратная связь",
];

const options = {
  delay: 0,
  duration: 120,
  smooth: true,
};
