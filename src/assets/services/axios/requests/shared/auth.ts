import sendApiReq from "../../configs/apiReq"
import { UserType } from "@/assets/types/share/user.type"

const login = async (userData: {
  identifier: string
  password: string
}) => {
  const response = await sendApiReq().post("/auth/login", userData).catch(() => {})
  const token = response?.data?.accessToken
  return token || null
}

const getMe= async () => {
  const getReq = await sendApiReq(true).get("/user")
  const user: UserType | null = getReq.status < 300 ? getReq.data : null;

  return{
    user: user,
    isLogin: user ? true : false
  }
}

const register = async (userData: {
  username: string
  email: string
  password: string
}) => sendApiReq().post("/auth/register", {
  ...userData,
  confirmPassword: userData.password,
  name: userData.username
})
  


export {
  login,
  register,
  getMe
}