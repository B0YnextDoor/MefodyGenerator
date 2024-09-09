import { End } from "../generals/Input/End";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ResultList} from "../History/hooks";

export default function OZONPage() {
    const index:any = useParams();
    const [data, setData] = useState<any | null>(null);
    console.log(index)
    useEffect(() => {
        if (index){
            (async () => {
            const [next, res] = await ResultList();
            if (res.length) setData(res[index.id]);
        })();
        }
    }, []);
    return (
        <End
            type="ozon"
            title="Описание товара для Ozon"
            subTitle="Генерация описаний товаров для интернет магазина и маркетплейсов "
            index={index.id}
        />
    );
}
