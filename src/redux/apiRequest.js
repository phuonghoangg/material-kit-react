import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./userSlice";


const host = 'http://localhost:9000'

export const loginUser = async(user,dispatch) =>{
    dispatch(loginStart())
    try {
        const res = await axios.post(`${host}/v1/user/login`,user)
        if(res.data.isAdmin){
            dispatch(loginSuccess(res.data))
        }else{
            dispatch(loginFail())
        }
    } catch (error) {
        dispatch(loginFail())
    }
}