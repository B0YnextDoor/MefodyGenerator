import { $api } from "../../../../utils/api/api";
import { IContent } from "../../../../utils/interfaces";

export const requestCreate = async (type: string, data: IContent) => {
        try {
            const response = await $api.post("market/create/", {...data, type})
            return response.data
        }catch (err) {
            return false;
        }
}

export const getResult = async (taskID: string) => {
    try {
            const response = await $api.get(`result/${taskID}/`);
            return response.data
        }catch (err) {
        }
}