const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default);
const api = Object.assign({}, ...api)
console.log();

export default api;
