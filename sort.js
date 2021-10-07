//get array item by ascending or descending order

const studentName = ["Moushumi", "Surovi", "Shikha", "Tuni", "Bithy", "Zuel", "Timir"];
const descend = studentName.sort((a, b) => a > b ? -1:1);
console.log(descend)
const ascend = studentName.sort((a,b) => b > a ? -1:1);
console.log(ascend)