import { useEffect, useState } from "react";
import { Nitem } from "../generals/Nitem";
import { DescTitle } from "../generals/Title";
import { IResult } from "../../utils/interfaces";
import { ListItems } from "./components/ListItems";
import { ResultList } from "./hooks";

export default function HistoryPage() {
    const [list, setList] = useState<Array<IResult> | null>(null);
    const [next, setNext] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const [next, res] = await ResultList();

            setNext(next);

            if (res.length) setList([...(list || []), ...res]);
        })();
    }, []);

    return (
        <div className="px-4 mt-4" style={{ height: "80%" }}>
            <DescTitle
                type=""
                title="Здесь отображается история ваших описаний"
                subTitle="Нажмите на плашку, что бы увидеть подробности"
            />
            {list ? (
                <ListItems list={list} />
            ) : (
                <div className="position-relative h-100">
                    <Nitem text="У вас еще нет списаний" />
                </div>
            )}
        </div>
    );
}
