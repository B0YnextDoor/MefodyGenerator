import { IResult } from "../../../utils/interfaces";
import { HistoryItem } from "./Item";
import { MassItem } from "./MassItem";

interface IProps {
    list: Array<IResult> | null;
}

export const ListItems = ({ list }: IProps) => {
    return (
        <div className="d-flex flex-wrap justify-content-start align-items-start">
            {list?.map((item: IResult, index:number) => (
                <div
                    className="flex-fill"
                    style={{
                        minWidth: "253px",
                        maxWidth: "253px",
                        flex: "0 0 calc(25% - 10px)",
                        margin: "5px",
                    }}
                >
                    {item.name ? (
                        <HistoryItem data={item} index={index}/>
                    ) : (
                        <MassItem data={item} />
                    )}
                </div>
            ))}
        </div>
    );
};
