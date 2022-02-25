import axios from "@/axios";
import { LOGIN_TYPE } from "./index.type";

export default {
  login: (data: LOGIN_TYPE) => {
    return axios.post("user/login", data);
  }
};
