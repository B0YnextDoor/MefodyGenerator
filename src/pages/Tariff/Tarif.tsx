import {
  Backdrop,
  Button,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { TariffItem } from "../../components/Tariff/TariffItem";
import { PromoInput } from "../../components/Tariff/PromoInput";
import { useState } from "react";
import { AccountHeader } from "../../components/Tariff/Account";
import { user } from "../..";
import { observer } from "mobx-react-lite";

export default observer(function TariffPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:767px)");

  const handleOpen = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <>
      {loading && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
          onClick={() => setLoading(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <AccountHeader />
      <PromoInput open={open} handleOpen={handleOpen} />
      <div
        className={`${isMobile ? "m-3 pt-0" : "m-5 pt-5"}  `}
        style={{ height: "80%" }}
      >
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            disabled={user.is_promocode_used}
            onClick={() => handleOpen(true)}
          >
            Ввести промокод
          </Button>
        </div>
        <hr />
        <div className="d-flex h-100 flex-wrap" style={{ overflow: "auto" }}>
          {Tarifs.map((item) => (
            <TariffItem
              handlerLoading={(flag: boolean) => setLoading(flag)}
              key={item.name}
              name={item.name}
              surname={item.surname}
              price={item.price}
              amount={item.amount}
              features={item.features}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </>
  );
});

const Tarifs = [
  {
    name: "Бесплатный",
    surname: "Для тестирования",
    price: "0",
    amount: 2,
    count: 100,
    features: ["2 массовые генерации", "5 разовых генераций", "До 5000 знаков"],
  },
  {
    name: "Стартовый",
    surname: "Для тех кто только начинает",
    price: "1590",
    amount: 1590,
    count: 100,
    features: [
      "100 генераций",
      "₽ 15.9 за генерацию",
      "До 100 000 знаков",
      "10+ шаблонов",
      "Чат с AI-копирайтером",
      "История генераций",
    ],
  },
  {
    name: "Базовый",
    surname: "для владельца небольшого бизнеса",
    price: "6 490",
    amount: 6490,
    count: 500,
    features: [
      "500 генераций",
      "₽ 12.9 за генерацию",
      "До 500 000 знаков",
      "10+ шаблонов",
      "Чат с AI-копирайтером",
      "История генераций",
    ],
  },
  {
    name: "Профи",
    surname: "Для компаний и контент мейкеров",
    price: "9 990",
    amount: 9990,
    count: 1000,
    features: [
      "1000 генераций",
      "₽ 9.9 за генерацию",
      "До 1 000 000 знаков",
      "10+ шаблонов",
      "Чат с AI-копирайтером",
      "История генераций",
    ],
  },
  {
    name: "Бизнес",
    surname: "Для больших бизнесов и агенств",
    price: "11 990",
    amount: 11990,
    count: 1500,
    features: [
      "1500 генераций",
      "₽ 7.9 за генерацию",
      "До 1 500 000 знаков",
      "10+ шаблонов",
      "Чат с AI-копирайтером",
      "История генераций",
      "Массовая генерация описаний товаров (по запросу)",
    ],
  },
];
