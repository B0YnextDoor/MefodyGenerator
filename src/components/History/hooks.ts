import { $api } from "../../utils/api/api"

export const ResultList = async () => {
    try {
        const resp = await $api.get('result/list/')
        console.log(resp)
        return [resp.data.next, resp.data.results]
    }catch(e) {
        return [false, false]
    }
}