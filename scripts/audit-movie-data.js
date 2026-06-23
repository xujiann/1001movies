const fs = require("node:fs");
const vm = require("node:vm");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("data/movies.js", "utf8"), context);

const movies = context.window.moviePosterData || [];
const duplicateCount = (values) => values.length - new Set(values).size;
const report = {
  movies: movies.length,
  categories: new Set(movies.map((movie) => movie.category)).size,
  uniqueNumbers: new Set(movies.map((movie) => movie.number)).size,
  missingPosters: movies.filter((movie) => !movie.poster).length,
  invalidPosterUrls: movies.filter((movie) => !/^https:\/\//.test(movie.poster || "")).length,
  missingImdbRatings: movies.filter((movie) => !movie.ratings?.imdb).length,
  missingDoubanRatings: movies.filter((movie) => !movie.ratings?.douban).length,
  missingDirectors: movies.filter((movie) => !movie.director?.length).length,
  missingCast: movies.filter((movie) => !movie.cast?.length).length,
  yearOnlyDates: movies.filter((movie) => /^01-Jan-\d{4}$/.test(movie.releaseDate || "")).length,
  duplicateTitleYears: duplicateCount(movies.map((movie) => `${movie.title}|${movie.year}`)),
  duplicatePosters: duplicateCount(movies.map((movie) => movie.poster)),
};

console.log(JSON.stringify(report, null, 2));

if (report.movies !== 1001 || report.categories !== 13 || report.uniqueNumbers !== 1001 || report.missingPosters || report.invalidPosterUrls || report.duplicateTitleYears) {
  process.exitCode = 1;
}
