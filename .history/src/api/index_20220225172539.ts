const apiFiles = import.meta.globEager("./*/index.ts");

const apiList = Object.values(apiFiles).map(item => item.default);
const apiObj = Object.assign({}, ...api)
console.log(apiObj)
export default apiObj;
