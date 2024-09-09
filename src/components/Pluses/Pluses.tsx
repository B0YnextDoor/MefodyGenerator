export const Pluses = () => {
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
      <h1>Преимущества</h1>
      {PlusList.map((plus, id) => (
        <p key={id} style={{ padding: "10px", marginBottom: "7px" }}>
          {plus}
        </p>
      ))}
    </div>
  );
};

const PlusList: string[] = [
  "-  Возможность массовой генерации описаний для товаров",
  "-  Доработка текстов профессиональным копирайтером под ключ",
  "-  Создание RICH-контента",
  "-  Создание описаний, адаптированных под требования маркетплейсов OZON и Wildberries",
];
