const apiFiles = import.meta.globEager("./*/index.ts");
// apiFiles.map(file => {
//     console.log(file)
// })
Object.keys(apiFiles)
// const api = {};
// for (const key in apiFiles) {
//   Object.assign(api, apiFiles[key].default);
//     // console.log(apiFiles[key].default);
// }
console.log(Object.values(apiFiles).filter(item => {
    return item.default
}))
export default  apiFiles;
