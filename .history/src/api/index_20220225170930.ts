const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => {
    return 
})[0]
// api.login().then(() => {})
console.log(api, apiFiles)
export default api;
