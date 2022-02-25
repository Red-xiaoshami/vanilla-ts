const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default)
console.log(apiFiles, Object.values(apiFiles))
Object.entries(api)
export default api;
