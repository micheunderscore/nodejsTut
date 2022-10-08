const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt", // File path
  `Here is the result : ${first}, ${second}`, // Message
  { flag: "a" } // Append to end (override by default)
);

console.log("done with this task");
console.log("starting the next one");
