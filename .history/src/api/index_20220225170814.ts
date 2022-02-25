const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => {
    return item.default
})
api.login().then()
console.log(api)
export default api;
