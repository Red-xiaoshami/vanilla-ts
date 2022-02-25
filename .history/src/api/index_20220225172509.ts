const apiFiles = import.meta.globEager("./*/index.ts");

const api = Object.values(apiFiles).map(item => item.default);
const apiObj = api.reduce((prev, curr) => {
export default Object.assign({}, ...api);
