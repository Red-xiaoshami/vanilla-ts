const apiFiles = import.meta.globEager("./*/index.ts");

const api = ...api(Object.values(apiFiles).map(item => item.default)
console.log(...api)

export default api;
