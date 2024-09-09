import { $api } from "../../utils/api/api"

export const CreateMass = async (form: FormData) => {
    try {
        await $api.post('result/create/', form, {headers: {'Content-Type': 'multpart/form-data'}})
    }catch (error) {
    }
} 