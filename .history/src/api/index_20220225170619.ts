const apiFiles = import.meta.globEager("./*/index.ts");

console.log()
export default Object.values(apiFiles).map(item => {
    return item.default
});
