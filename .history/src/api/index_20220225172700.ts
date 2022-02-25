const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)
// api.login方法传入的参数应该是LOGIN_TYPE
api.login().then(() => {

})
export default api;
