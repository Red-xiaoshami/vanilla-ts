const apiFiles = import.meta.globEager("./*/index.ts");

const list = Object.values(apiFiles).map(item => item.default);
const apiObj = Object.assign({}, ...api)
console.log(apiObj)
export default apiObj;
