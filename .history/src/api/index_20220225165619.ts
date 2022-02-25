const apiFiles = import.meta.globEager("./*/index.ts");
let indexApi = apiFiles['./index/index.ts'].default

console.log(indexApi)
const api = {};
for (const key in apiFiles) {
  Object.assign(api, apiFiles[key].default);
    // console.log(apiFiles[key].default);
}
// console.log(apiFiles)
export default  apiFiles;
