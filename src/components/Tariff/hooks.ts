import { $api } from "../../utils/api/api"

export const checkPromo = async (promocode: string) => {
    try {
        const resp = await $api.post('account/promocode/', {promocode})
        return resp.data.status
    }catch (err) {
        return false
    }
}


export const createPayment = async (amount: number, count: number) => {
    try {
        const resp = await $api.post('payment/create/', {amount, count}) 
        return resp.data.confirmation_url
    }catch (err) {
        return false
    }
}