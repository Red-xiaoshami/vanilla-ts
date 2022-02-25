import userApi from "./user";
// 方法1. 使用import直接导入模块，ts会提示login方法的入参类型；
userApi.login().then(() => {

})

// 方法2 通过import.meta.globEager批量导入
const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)

// 问题: api.login方法没有提示入参数类型
api.login().then(() => {

})
export default api;
