const apiFiles = import.meta.globEager("./*/index.ts");
apiFiles.
// const api = {};
// for (const key in apiFiles) {
//   Object.assign(api, apiFiles[key].default);
//     // console.log(apiFiles[key].default);
// }
// console.log(apiFiles)
export default  apiFiles;
