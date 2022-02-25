/**
 * @description 动态引入定义的接口
 */

import userApi from "./user";

userApi.login().then(() => {

})

// 方法2. 通过import.meta.globEager批量导入
const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)

// 问题: login方法没有提示入参数类型
api.login().then(() => {

})

export default api;
