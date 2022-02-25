const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)
// api.login方法，并没有提示传入的
api.login().then(() => {

})
export default api;
