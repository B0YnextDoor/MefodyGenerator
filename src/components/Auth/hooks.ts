import axios from "axios";

;

export const RecoveryPassHook = async (email: string)=> {
    try {
        await axios.post(
                `${process.env.REACT_APP_BASE_URL}auth/users/reset_password/`,
                { email }
            );
            return true;
    }catch (err) {  
        return false;
    }
}

