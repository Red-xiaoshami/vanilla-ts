const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default);
const apiObj = Object.assign({}, ...api)
console.lo
export default apiObj;
