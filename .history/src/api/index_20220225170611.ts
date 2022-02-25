const apiFiles = import.meta.globEager("./*/index.ts");

console.log(Object.values(apiFiles).map(item => {
    return item.default
}))
export default  apiFiles;
