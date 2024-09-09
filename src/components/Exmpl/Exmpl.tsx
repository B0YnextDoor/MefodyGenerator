import { useMediaQuery } from "@mui/material";

type Img = {
  id: number;
  text: string;
};
const Imgs: Img[] = [
  {
    id: 1,
    text: "После входа выбираем, что необходимо сгенерировать.",
  },
  {
    id: 2,
    text: "Заполняем необходимые поля и нажимаем кнопку генерировать.",
  },
];

export const Exmpl = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        paddingTop: "0px",
        width: "100%",
        color: "black",
        zIndex: 999999,
      }}
    >
      <h1 style={{ marginBottom: "15px" }}>Как пользоваться</h1>
      {Imgs.map((img) => (
        <div key={img.id} style={{ display: "flex", flexDirection: "column" }}>
          <p>{img.text}</p>
          <hr style={{ width: "50%" }} />
          <img
            src={`/exmpl${img.id}.png`}
            alt=""
            width={isMobile ? 300 : 700}
            height={isMobile ? 200 : 500}
          />
        </div>
      ))}
    </div>
  );
};
