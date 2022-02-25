const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default)
console.log()

export default api;
