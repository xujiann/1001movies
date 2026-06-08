const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const posterCsv = fs.readFileSync(path.join(root, "data", "movie_poster.csv"), "utf8");
const itemText = fs.readFileSync(path.join(root, "data", "u.item.txt"), "latin1");

const posters = new Map();
posterCsv.trim().split(/\r?\n/).forEach((line) => {
  const comma = line.indexOf(",");
  if (comma === -1) return;
  const id = Number(line.slice(0, comma));
  const poster = line.slice(comma + 1).trim();
  if (id && poster) posters.set(id, poster);
});

const movies = itemText.trim().split(/\r?\n/).map((line) => {
  const parts = line.split("|");
  const id = Number(parts[0]);
  const title = parts[1] || `Movie ${id}`;
  const yearMatch = title.match(/\((\d{4})\)\s*$/);
  return {
    id,
    title: title.replace(/\s*\(\d{4}\)\s*$/, ""),
    year: yearMatch ? Number(yearMatch[1]) : null,
    poster: posters.get(id) || "",
  };
}).filter((movie) => movie.poster).slice(0, 1001);

const output = `window.moviePosterData = ${JSON.stringify(movies, null, 2)};\n`;
fs.writeFileSync(path.join(root, "data", "movies.js"), output, "utf8");

console.log(JSON.stringify({
  sourceMovies: movies.length,
  output: "data/movies.js",
}, null, 2));
