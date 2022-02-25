const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default)
console.log(api, Object.values(apiFiles))

export default api;
