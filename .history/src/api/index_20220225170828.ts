const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => {
    return item.default
})[0]
api.login().then(() => {})
console.log(api)
export default api;
