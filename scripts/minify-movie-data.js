const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const input = process.argv[2] || "data/movies.js";
const output = process.argv[3] || "_site/data/movies.js";

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(input, "utf8"), context);

const content = `window.categoryPlanData=${JSON.stringify(context.window.categoryPlanData)};window.moviePosterData=${JSON.stringify(context.window.moviePosterData)};\n`;
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, content, "utf8");
