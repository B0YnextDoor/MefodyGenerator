import { useMediaQuery } from "@mui/material";
import { ProfileItem } from "./Main/Item";

export default function MainPage() {
    const isMobile = useMediaQuery("(max-width:767px)");

    return (
        <div style={{ width: "100%", marginTop: "10vh" }} className="px-5">
            <div className={`${isMobile ? "" : "mx-5"} `}>
                <span
                    className="fw-bold"
                    style={{
                        fontSize: `${isMobile ? "20px" : "36px"}`,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                    }}
                >
                    Что собираемся генерировать?
                </span>
                <br />
                <span style={{ fontSize: `${isMobile ? "15px" : "24px"}` }}>
                    Выберите описание для одной из следующих платформ
                </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between flex-wrap">
                <ProfileItem
                    typeMes="wb"
                    title="Создание описания для WB"
                    text="Эта кнопка предназначена для создания описания для страницы
                    WB"
                />
                <ProfileItem
                    typeMes="ozon"
                    title="Создание описания для OZON"
                    text="Эта кнопка предназначена для создания описания для страницы Ozon"
                />
                <ProfileItem
                    typeMes="rich"
                    title="Создание описания Rich-контента"
                    text="Эта кнопка предназначена для создания описания Rich-контента"
                />
                <ProfileItem
                    typeMes="mass"
                    title="Массовая генерация"
                    text="Эта кнопка предназначена для массовой генерации описаний"
                />
            </div>
        </div>
    );
}
