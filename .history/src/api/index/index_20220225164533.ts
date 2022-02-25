import axios from "./";
import { SYSTEM_TYPE } from "./index.type";

export default {
  systemInfo: (data: SYSTEM_TYPE) => {
    return axios.post("select/dataSummary", data);
  },
};
