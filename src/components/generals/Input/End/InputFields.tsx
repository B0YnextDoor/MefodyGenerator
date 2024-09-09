import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Market from "../../../../store/CreateMarket";
import { IAdvantages } from "../../../../utils/interfaces";
import { observer } from "mobx-react-lite";
import { requestCreate } from "./hooks";
import { user } from "../../../..";
import { useParams } from "react-router-dom";
import { ResultList } from "../../../History/hooks";

interface IProps {
  status: string;
  handler: (flag: string) => void;
  type: string;
  handleTaskID: (flag: string | null) => void;
  handleShow: (text: string) => void;
  index: any;
}

interface IProps {
  status: string;
  handler: (flag: string) => void;
  type: string;
  handleTaskID: (flag: string | null) => void;
  handleShow: (text: string) => void;
  index: any;
}

export const InputField = observer(
  ({ status, handler, type, handleTaskID, handleShow, index }: IProps) => {
    const [category, setCategory] = useState<string>(Market.get("category"));
    const [name, setName] = useState<string>(Market.get("name"));
    const [nameErr, setNameErr] = useState<boolean>(false);
    const [description, setDescription] = useState<string>(
      Market.get("description")
    );
    const [descriptionErr, setDescriptionErr] = useState<boolean>(false);
    const [seo, setSeo] = useState<string>(Market.get("seo"));
    const [seoErr, setSeoErr] = useState<boolean>(false);
    const [advantages, setAdvantages] = useState<Array<IAdvantages>>(
      Market.get("advantages")
    );

    const reset = () => {
      Market.reset();
      setSeo("");
      setAdvantages(Market.get("advantages"));
      setDescription("");
      setName("");
      setNameErr(false);
      setCategory("");
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (index) {
            const [next, res] = await ResultList();
            if (res.length) {
              const data = res[index];
              console.log("Fetched data:", data);
              setName(data ? data.name : "");
              setAdvantages(data ? data.advantages || [] : []);
              setSeo(data ? data.seo.toString() : "");
              setDescription(data ? data.description : "");
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [index]);
    useEffect(() => {
      if (status === "reset") {
        reset();
      } else if (status === "save") {
        let err = false;

        if (!name.length) {
          setNameErr(true);
          err = true;
        }

        if (!seo.length) {
          setSeoErr(true);
          err = true;
        } else {
          const isValidString = seo.match(/^(.+(,\s)?)+.+$/);

          if (isValidString?.length) {
            const arr = seo.split(",");
            Market.set("seo", arr);
          } else {
            setSeoErr(true);
            err = true;
          }
        }

        if (!description.length) {
          setDescriptionErr(true);
          err = true;
        }
        Market.set("description", description);
        Market.set("name", name);
        Market.set("category", category);

        if (err) {
          handler("pending");
          return;
        } else {
          const fetch = async () => {
            const response = await requestCreate(type, Market.getContent());
            if (response) {
              handleTaskID(response.taskID);
              // reset();
            }
          };

          handleShow(
            "Подождите, описание генерируется. Обычно это занимает не больше  минуты"
          );
          fetch();
        }
      }

      handler("pending");
      user.getMe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const handleChange = (event: any) => {
      setCategory(event.target.value);
    };

    const handleNameText = (e: any) => {
      if (e.target.value.length <= 64) {
        Market.set("name", e.target.value);
        setName(e.target.value);
        if (nameErr) setNameErr(false);
      } else {
        setNameErr(true);
      }
    };

    const handleDescriptionText = (e: any) => {
      setDescription(e.target.value);
      Market.set("description", e.target.value);
      if (descriptionErr) setDescriptionErr(false);
    };

    const handlerInputAdv = (e: any) => {
      const obj = { name: e.target.name, value: e.target.value };
      const new_advs = advantages.map((item) =>
        item.name === e.target.name ? obj : item
      );
      setAdvantages(new_advs);
      Market.set("advantages", new_advs);
    };

    return (
      <>
        <span className="fw-bold">Название товара</span>
        <div className="d-flex mb-4">
          <FormControl
            variant="outlined"
            fullWidth
            className="me-3"
            error={nameErr}
          >
            <InputLabel>Имя</InputLabel>
            <OutlinedInput
              label="Имя"
              className="inputField"
              value={name}
              onChange={handleNameText}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth className="me-3">
            <InputLabel>Категория товара</InputLabel>
            <OutlinedInput
              label="Категория товара"
              className="inputField"
              value={category}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div className="mb-4">
          <span className="fw-bold" style={{ fontSize: "16px" }}>
            Техническое описание
          </span>
          <TextField
            fullWidth
            value={description}
            onChange={handleDescriptionText}
            placeholder="Введите основную информацию о вашем товаре"
            className="inputField"
            required={true}
            error={descriptionErr}
          />
        </div>
        <div className="mb-4">
          <span className="fw-bold">Ключевые слова</span>
          <TextField
            fullWidth
            placeholder="Введите ключевые слова через запятую, например: Яблоко, фрукты, полезное"
            className="inputField"
            required={true}
            onChange={(e: any) => setSeo(e.target.value)}
            value={seo}
            error={seoErr}
          />
        </div>
        <div className="mb-4">
          <span className="fw-bold">Преимущества товара</span>
          {/* optimize */}
          {advantages
            ? advantages.map((item) => (
                <TextField
                  key={item.name}
                  fullWidth
                  placeholder="Введите преимущество товара"
                  className="inputField my-1"
                  name={item.name}
                  value={item.value}
                  onChange={handlerInputAdv}
                />
              ))
            : ""}
        </div>
      </>
    );
  }
);
