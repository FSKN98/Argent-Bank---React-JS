import axios from "axios"
import { LOGIN_USER_URL } from "../api/api"

export const loginUser = (body) =>
{
    axios.post(LOGIN_USER_URL, body).then(res => console.log(res.data)).catch
    (err=>console.log(err))
} 