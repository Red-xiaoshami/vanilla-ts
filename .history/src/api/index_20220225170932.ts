const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default)[0]
// api.login().then(() => {})
console.log(api, apiFiles)
export default api;
