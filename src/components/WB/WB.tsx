import { End } from "../generals/Input/End";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ResultList} from "../History/hooks";
import {IResult} from "../../utils/interfaces";

export default function WBPage() {
    const index:any = useParams();
    // const [data, setData] = useState<any | null>(null);
    // console.log(index)
    // useEffect(() => {
    //     if (index){
    //         (async () => {
    //         const [next, res] = await ResultList();
    //         if (res.length) setData(res[index.id]);
    //     })();
    //     }
    // }, []);
    return (
        <End
            type="wb"
            title="Описание товара для WB"
            subTitle="Генерация описаний товаров для интернет магазина и маркетплейсов "
            index={index.id}
        />
    );
}
