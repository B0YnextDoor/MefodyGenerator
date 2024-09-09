import { Questions } from "./que";

export const FAQ = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        paddingTop: "0px",
        width: "100%",
        color: "black",
        zIndex: 999999,
      }}
    >
      <h1>FAQ</h1>
      {Questions.map((quest) => (
        <div
          key={quest.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "12px",
            borderRadius: "12px",
            backgroundColor: "transparent",
            marginBottom: "15px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>{quest.que}</p>
          {quest.ans.map((answ, id) => (
            <p key={id}>{answ}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
