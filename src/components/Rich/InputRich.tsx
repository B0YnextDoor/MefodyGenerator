import { End } from "../generals/Input/End";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ResultList} from "../History/hooks";

export const InputRich = () => {
    const index:any = useParams();
    const [data, setData] = useState<any | null>(null);
    console.log(index)
    useEffect(() => {
        if (index){
            (async () => {
            const [next, res] = await ResultList();
            if (res) setData(res[index.id]);
                console.log(data);
            })();
        }
    }, []);
    return (
        <>
            <End
                type="rich"
                title="Описание товара для Rich-контента"
                subTitle="Генерация описаний товаров для Rich-контента  "
                index={index.id}
            />
        </>
    );
};
