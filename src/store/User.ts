import axios from "axios"
import {makeAutoObservable} from "mobx"
import getCookie, { $api } from "../utils/api/api"


class User {
    email: string = ""
    count_desc: number = 0
    is_promocode_used: boolean = false
    isAuth: boolean = false
    errorMessage: string = ""


    constructor() {
        makeAutoObservable(this)
    }

    getMe() {
        (async () => {
            try {
                const resp = await $api.get('account/')
                const data =resp.data
                this.count_desc = data.count_desc
                this.is_promocode_used = data.is_promocode_used
                this.email = data.email
            }catch (err) {}
        })()
    }

    setAuth(flag: boolean ) {
        this.isAuth = flag
    }

    getAuth() {
        return this.isAuth
    }

    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}auth/users/`, {email, password})
            
            if (response.status === 201) {
                this.errorMessage = "Ваш аккаунт успешно зарегистрирован, проверьте почту для подверждения регистрации"
                return 
            }

           
        }catch(error: any){
            if (error.response?.data?.email) {
                if ("user with this Email already exists." === error.response?.data?.email[0]) {
                    await this._getJWT(email, password)
                }else {
                    // this.setEmailError(error.response?.data?.email[0])
                }
            }

            if (error.response?.data?.password) {
                // this.setPassError(error.response?.data?.password[0])
            }

            if (error.response?.data?.status === 400) {
                    await this._getJWT(email, password)
            }
        }

    }

    async _getJWT(email: string, password: string) {
        try{

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}auth/jwt/create/`,  {email, password}, {withCredentials: true})
            localStorage.setItem('mptok', response.data.access)
            let date = new Date()
            document.cookie = `mptok=${response.data.refresh}; path=/;expires=${date.setTime(date.getTime() + 60 * 60 * 24 )}`

            this.setAuth(true)
        }catch(error: any){ 
            this.errorMessage = error.response.data?.detail 
        }   
    }
    logout(){
        localStorage.clear()
        let date = new Date()
        document.cookie = `mptok=''; path=/;expires=${date.setTime(date.getTime() - 60 * 60 * 24 )}`
        // eslint-disable-next-line no-restricted-globals
        location.replace('/')
    }
    exit() {
        this.isAuth = false
        
    }

    async checkAuth() {
        

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}auth/jwt/verify/`, {"token": localStorage.getItem('mptok')})
            this.isAuth = true
        }catch (error) {
            if (getCookie("mptok")) {
                console.log(error)
                try {
                    await axios.post(`${process.env.REACT_APP_BASE_URL}auth/jwt/verify/`, {"token": getCookie("mptok")})
                    this.isAuth = true
                }catch (error) {
                    console.log(error)
                }
            }
        }
    }
    }



// eslint-disable-next-line import/no-anonymous-default-export
export default User