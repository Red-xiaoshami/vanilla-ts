const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...apiList)
console.log(api)
api.login()..then((result) => {
    
}).catch((err) => {
    
});
export default api;
