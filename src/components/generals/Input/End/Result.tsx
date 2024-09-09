import { Button, CircularProgress, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { getResult } from "./hooks";
import { user } from "../../../..";

interface IProps {
    handler: (string: string) => void;
    taskID: string | null;
}

export const ResultComp = observer(({ handler, taskID }: IProps) => {
    const [value, setValue] = useState<string | null>(null);
    const [number, setNumber] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (taskID === null) return;

        const interval = setInterval(async () => {
            if (number > 35) {
                clearInterval(interval);
                setLoading(false)
                return;
            }

            try {

                const data = await getResult(taskID);
                if (data && data.status === "success") {
                    setValue(data.content);
                    setNumber(0);
                    clearInterval(interval);
                    setLoading(false)
                } else if (data && data.status === "failure") {
                    setValue("Извините произошла ошибка");
                    clearInterval(interval);
                    setLoading(false)
                } else if (data && data.status === "pending") {
                    setNumber(number + 1);
                }
            } catch (error) {
            }
        }, 7000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskID]);

    const handleGenerateClick = () => {
        setLoading(true);
        handler("save");
    };

    return (
        <>
            <div>
                <span className="fw-bold">Результат</span>
                <div style={{ position: 'relative' }}>
                    <TextField
                        value={value}
                        disabled={true}
                        multiline={true}
                        minRows={20}
                        maxRows={20}
                        className="inputField"
                        fullWidth
                        placeholder="Здесь появится сгенерированный текст"
                    />
                    {loading ?
                        <CircularProgress
                            size={24}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px', // половина высоты спиннера
                                marginLeft: '-12px', // половина ширины спиннера
                            }}
                        />

                    : ''}

                </div>
                {loading ? <span className="d-flex flex-row">Загрузка обычно занимает пару минут</span>:''}
                <div className="d-flex flex-row-reverse my-5">

                    <Button
                        disabled={!(user.count_desc > 0) || loading}
                        sx={{ px: 3, py: 1, borderRadius: "10px" }}
                        variant="contained"
                        onClick={handleGenerateClick}
                    >
                        Сгенерировать
                    </Button>
                    <Button
                        disabled={loading}
                        sx={{ px: 3, py: 1, borderRadius: "10px", mx: 3 }}
                        variant="outlined"
                        onClick={() => handler("reset")}
                    >
                        Сбросить
                    </Button>
                </div>
            </div>
        </>
    );
});
