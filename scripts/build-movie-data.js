const fs = require("fs");
const path = require("path");
const readline = require("readline");
const zlib = require("zlib");

const root = path.resolve(__dirname, "..");
const posterCsv = fs.readFileSync(path.join(root, "data", "movie_poster.csv"), "utf8");
const itemText = fs.readFileSync(path.join(root, "data", "u.item.txt"), "latin1");

const genreNames = [
  "Unknown", "Action", "Adventure", "Animation", "Children", "Comedy",
  "Crime", "Documentary", "Drama", "Fantasy", "Film-Noir", "Horror",
  "Musical", "Mystery", "Romance", "Sci-Fi", "Thriller", "War", "Western",
];

const categoryPlan = [
  { name: "动画与家庭", accent: "#d94f45", match: ["Animation", "Children", "Family"], subs: ["动画长片", "家庭冒险", "童年幻想", "温情喜剧", "动物伙伴", "玩具世界", "校园成长", "亲子共赏", "节日电影", "奇幻家庭", "动画经典"] },
  { name: "动作冒险", accent: "#d07d52", match: ["Action", "Adventure"], subs: ["间谍任务", "硬汉动作", "追逐逃亡", "英雄旅程", "灾难营救", "武侠格斗", "丛林探险", "超级任务", "夺宝奇遇", "动作喜剧", "冒险经典"] },
  { name: "科幻奇幻", accent: "#b76f9f", match: ["Sci-Fi", "Fantasy"], subs: ["太空旅行", "未来社会", "人工智能", "怪兽异形", "时间谜题", "魔法世界", "赛博想象", "超自然", "技术寓言", "末日之后", "幻想经典"] },
  { name: "犯罪悬疑", accent: "#5c91c9", match: ["Crime", "Mystery", "Film-Noir"], subs: ["侦探谜案", "黑色电影", "城市犯罪", "法庭攻防", "黑帮世界", "抢劫骗局", "道德困局", "心理迷局", "警匪对峙", "复仇故事", "犯罪经典"] },
  { name: "惊悚恐怖", accent: "#67a8a3", match: ["Thriller", "Horror"], subs: ["心理惊悚", "密室危机", "连环追凶", "怪物恐怖", "灵异传说", "生存惊悚", "身体恐怖", "邪典午夜", "惊悚悬念", "灾难恐惧", "恐怖经典"] },
  { name: "喜剧", accent: "#8aa75a", match: ["Comedy"], subs: ["浪漫喜剧", "讽刺喜剧", "家庭喜剧", "青春喜剧", "荒诞幽默", "黑色幽默", "职场笑谈", "公路喜剧", "身体喜剧", "群像喜剧", "喜剧经典"] },
  { name: "爱情", accent: "#d8ad5c", match: ["Romance"], subs: ["初恋故事", "都市爱情", "婚姻关系", "时代恋人", "爱情喜剧", "爱情悲剧", "重逢错过", "异国恋曲", "家庭与爱情", "成长爱情", "爱情经典"] },
  { name: "剧情人生", accent: "#5da579", match: ["Drama"], subs: ["成长叙事", "家庭关系", "社会现实", "城市人生", "乡土记忆", "女性处境", "父子母女", "中年危机", "命运寓言", "伦理选择", "剧情经典"] },
  { name: "战争历史与西部", accent: "#b88757", match: ["War", "Western", "Action", "Adventure", "Drama"], subs: ["战地人性", "反战经典", "历史创伤", "军旅行动", "前线营救", "边境小镇", "枪手传说", "荒原旅程", "家国命运", "战争爱情", "冲突经典"] },
  { name: "音乐歌舞与舞台", accent: "#c487b8", match: ["Musical", "Music", "Comedy", "Romance", "Drama", "Documentary"], subs: ["歌舞黄金", "舞台改编", "音乐人生", "乐队现场", "爵士蓝调", "青春歌舞", "浪漫歌舞", "家庭音乐", "音乐喜剧", "艺术追梦", "歌舞经典"] },
  { name: "纪录与现实", accent: "#6fa0a4", match: ["Documentary", "Biography", "History", "Drama", "Crime", "War"], subs: ["人物纪录", "社会观察", "真实事件", "历史档案", "音乐纪录", "政治现场", "司法现实", "家庭现实", "城市现实", "影像论文", "现实经典"] },
  { name: "年代经典", accent: "#c78b59", match: ["Drama", "Comedy", "Romance", "Action", "Thriller"], subs: ["九十年代", "八十年代", "七十年代", "六十年代", "黑白名作", "学院必看", "类型混合", "明星时代", "作者电影", "影史坐标", "经典回望"] },
  { name: "世界经典", accent: "#9a8bd0", match: ["Drama", "Comedy", "Action", "Romance", "Thriller", "Adventure"], subs: ["早期经典", "黑白名作", "影史坐标", "学院必看", "作者电影", "类型混合", "九十年代", "八十年代", "七十年代", "六十年代", "百年回望"] },
];

const categoryByName = new Map(categoryPlan.map((category) => [category.name, category]));

const posters = new Map();
posterCsv.trim().split(/\r?\n/).forEach((line) => {
  const comma = line.indexOf(",");
  if (comma === -1) return;
  const id = Number(line.slice(0, comma));
  const poster = line.slice(comma + 1).trim();
  if (id && poster) posters.set(id, poster);
});

function normalizeTitle(title) {
  return title
    .replace(/\s*\(\d{4}\)\s*$/, "")
    .replace(/,\s*The$/, "")
    .replace(/,\s*A$/, "")
    .replace(/,\s*An$/, "")
    .trim();
}

function titleKey(title, year) {
  return `${normalizeTitle(title).toLowerCase()}|${year || ""}`;
}

function parseMovieLensRows() {
  return itemText.trim().split(/\r?\n/).map((line) => {
    const parts = line.split("|");
    const id = Number(parts[0]);
    const title = parts[1] || `Movie ${id}`;
    const yearMatch = title.match(/\((\d{4})\)\s*$/);
    const genres = genreNames.filter((genre, index) => parts[index + 5] === "1");
    return {
      id,
      title: normalizeTitle(title),
      year: yearMatch ? Number(yearMatch[1]) : null,
      releaseDate: parts[2] || "",
      imdbUrl: parts[4] || "",
      genres: genres.filter((genre) => genre !== "Unknown"),
      poster: posters.get(id) || "",
    };
  }).filter((movie) => movie.poster);
}

async function loadImdbGenres(sourceMovies) {
  const imdbPath = path.join(root, "data", "imdb", "title.basics.tsv.gz");
  if (!fs.existsSync(imdbPath) || fs.statSync(imdbPath).size < 200_000_000) {
    return { matched: 0, available: false };
  }

  const targets = new Map();
  sourceMovies.forEach((movie) => {
    targets.set(titleKey(movie.title, movie.year), movie);
  });

  let matched = 0;
  const stream = fs.createReadStream(imdbPath).pipe(zlib.createGunzip());
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.startsWith("tconst\t")) continue;
    const [tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, genres] = line.split("\t");
    if (!["movie", "tvMovie", "video"].includes(titleType)) continue;
    const year = startYear === "\\N" ? "" : startYear;
    const keys = [titleKey(primaryTitle, year), titleKey(originalTitle, year)];

    keys.some((key) => {
      const movie = targets.get(key);
      if (!movie || movie.imdbId) return false;
      const imdbGenres = genres && genres !== "\\N" ? genres.split(",") : [];
      if (imdbGenres.length) movie.genres = imdbGenres;
      movie.imdbId = tconst;
      movie.imdbUrl = `https://www.imdb.com/title/${tconst}/`;
      matched += 1;
      return true;
    });

    if (matched >= targets.size) break;
  }

  return { matched, available: true };
}

async function readGzipLines(filePath, onLine) {
  if (!fs.existsSync(filePath)) return false;
  const stream = fs.createReadStream(filePath).pipe(zlib.createGunzip());
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  for await (const line of rl) {
    await onLine(line);
  }
  return true;
}

async function loadImdbRatings(sourceMovies) {
  const imdbPath = path.join(root, "data", "imdb", "title.ratings.tsv.gz");
  const targets = new Map(sourceMovies.filter((movie) => movie.imdbId).map((movie) => [movie.imdbId, movie]));
  let matched = 0;
  const available = await readGzipLines(imdbPath, (line) => {
    if (line.startsWith("tconst\t")) return;
    const [tconst, averageRating, numVotes] = line.split("\t");
    const movie = targets.get(tconst);
    if (!movie) return;
    movie.ratings = {
      ...(movie.ratings || {}),
      imdb: Number(averageRating) || null,
      imdbVotes: Number(numVotes) || null,
      douban: movie.ratings?.douban || null,
    };
    matched += 1;
  });
  return { matched, available };
}

async function loadImdbCrew(sourceMovies) {
  const crewPath = path.join(root, "data", "imdb", "title.crew.tsv.gz");
  const namesPath = path.join(root, "data", "imdb", "name.basics.tsv.gz");
  const targets = new Map(sourceMovies.filter((movie) => movie.imdbId).map((movie) => [movie.imdbId, movie]));
  const neededNames = new Set();
  let crewMatched = 0;

  const crewAvailable = await readGzipLines(crewPath, (line) => {
    if (line.startsWith("tconst\t")) return;
    const [tconst, directors] = line.split("\t");
    const movie = targets.get(tconst);
    if (!movie || !directors || directors === "\\N") return;
    movie.directorIds = directors.split(",").slice(0, 3);
    movie.directorIds.forEach((nameId) => neededNames.add(nameId));
    crewMatched += 1;
  });

  const principalsPath = path.join(root, "data", "imdb", "title.principals.tsv.gz");
  let castMatched = 0;
  const principalsAvailable = await readGzipLines(principalsPath, (line) => {
    if (line.startsWith("tconst\t")) return;
    const [tconst, ordering, nconst, category] = line.split("\t");
    if (!["actor", "actress"].includes(category)) return;
    const movie = targets.get(tconst);
    if (!movie) return;
    movie.castIds = movie.castIds || [];
    if (movie.castIds.length >= 5 || movie.castIds.includes(nconst)) return;
    movie.castIds.push(nconst);
    neededNames.add(nconst);
    castMatched += 1;
  });

  const nameMap = new Map();
  const namesAvailable = neededNames.size > 0 && await readGzipLines(namesPath, (line) => {
    if (line.startsWith("nconst\t")) return;
    const [nconst, primaryName] = line.split("\t");
    if (!neededNames.has(nconst)) return;
    nameMap.set(nconst, primaryName);
  });

  sourceMovies.forEach((movie) => {
    if (movie.directorIds) {
      movie.director = movie.directorIds.map((nameId) => nameMap.get(nameId)).filter(Boolean);
      delete movie.directorIds;
    }
    if (movie.castIds) {
      movie.cast = movie.castIds.map((nameId) => nameMap.get(nameId)).filter(Boolean);
      delete movie.castIds;
    }
  });

  return {
    crewMatched,
    castMatched,
    crewAvailable,
    principalsAvailable,
    namesAvailable: Boolean(namesAvailable),
  };
}

function scoreForCategory(movie, category) {
  if (!category.match.length) return 1;
  const genreScore = category.match.reduce((score, genre) => score + (movie.genres.includes(genre) ? 100 : 0), 0);
  const secondary = movie.genres.includes("Drama") && category.name === "剧情人生" ? 18 : 0;
  return genreScore + secondary;
}

function pickMoviesForCategories(sourceMovies) {
  const remaining = new Map(sourceMovies.map((movie) => [movie.id, movie]));
  const output = [];

  categoryPlan.forEach((category) => {
    const candidates = [...remaining.values()]
      .map((movie) => ({ movie, score: scoreForCategory(movie, category) }))
      .sort((a, b) => b.score - a.score || (a.movie.year || 9999) - (b.movie.year || 9999) || a.movie.id - b.movie.id);

    candidates.slice(0, 77).forEach(({ movie }, index) => {
      remaining.delete(movie.id);
      output.push({
        ...movie,
        category: category.name,
        subcategory: category.subs[Math.floor(index / 7)],
        accent: category.accent,
      });
    });
  });

  if (output.length < 1001) {
    [...remaining.values()].slice(0, 1001 - output.length).forEach((movie, index) => {
      const category = categoryByName.get("世界经典");
      output.push({
        ...movie,
        category: category.name,
        subcategory: category.subs[Math.floor(index / 7) % category.subs.length],
        accent: category.accent,
      });
    });
  }

  return output.slice(0, 1001).map((movie, index) => ({
    ...movie,
    number: String(index + 1).padStart(4, "0"),
  }));
}

async function main() {
  const sourceMovies = parseMovieLensRows();
  const imdb = await loadImdbGenres(sourceMovies);
  const ratings = await loadImdbRatings(sourceMovies);
  const crew = await loadImdbCrew(sourceMovies);
  const movies = pickMoviesForCategories(sourceMovies);

  const byCategory = movies.reduce((counts, movie) => {
    counts[movie.category] = (counts[movie.category] || 0) + 1;
    return counts;
  }, {});

  const output = `window.categoryPlanData = ${JSON.stringify(categoryPlan.map(({ name, accent, subs }) => ({
    name,
    accent,
    description: `${name}相关影片，优先依据 IMDb genres 归组。`,
    subs,
  })), null, 2)};\nwindow.moviePosterData = ${JSON.stringify(movies, null, 2)};\n`;
  fs.writeFileSync(path.join(root, "data", "movies.js"), output, "utf8");

  console.log(JSON.stringify({
    sourceMovies: sourceMovies.length,
    imdbMatched: imdb.matched,
    imdbAvailable: imdb.available,
    imdbRatingsMatched: ratings.matched,
    imdbRatingsAvailable: ratings.available,
    imdbCrewMatched: crew.crewMatched,
    imdbCrewAvailable: crew.crewAvailable,
    imdbCastMatched: crew.castMatched,
    imdbPrincipalsAvailable: crew.principalsAvailable,
    imdbNamesAvailable: crew.namesAvailable,
    outputWithImdbRatings: movies.filter((movie) => movie.ratings?.imdb).length,
    outputWithDirectors: movies.filter((movie) => Array.isArray(movie.director) && movie.director.length).length,
    outputWithCast: movies.filter((movie) => Array.isArray(movie.cast) && movie.cast.length).length,
    outputMovies: movies.length,
    categoryCounts: byCategory,
    output: "data/movies.js",
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
