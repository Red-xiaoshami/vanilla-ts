const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)
/**
 * @description: 导出api
 */
api.login().then(() => {

})
export default api;
