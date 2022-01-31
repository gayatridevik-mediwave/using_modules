const moment = require("moment");

const date = moment().format("DD/MM/YYYY h:ss");
const future = moment().add(3, "days");

console.log(future.format("DD/MM/YYYY"));

console.log("hi");
console.log(date);