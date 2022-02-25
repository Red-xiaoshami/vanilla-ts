const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default);
const api = 
console.log();

export default Object.assign({}, ...api);
