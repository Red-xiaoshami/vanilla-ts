const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default)
// api.login().then(() => {})
console.log(api, apiFiles)
Object.ex
export default api;
