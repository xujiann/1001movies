const palette = [
  ["#d94f45", "#6e2b35"],
  ["#d8ad5c", "#684f28"],
  ["#5da579", "#244f45"],
  ["#5c91c9", "#243f62"],
  ["#b76f9f", "#57314f"],
  ["#d07d52", "#633424"],
  ["#8aa75a", "#3d4a26"],
  ["#67a8a3", "#254d52"],
];

const categories = globalThis.categoryPlanData || [
  {
    name: "World Classics",
    accent: "#d94f45",
    description: "Fallback category used when generated data is unavailable.",
    subs: ["Silent Era", "Black and White", "Golden Age", "Postwar", "Landmarks", "Auteurs", "Restorations", "Film School", "Epics", "Icons", "Centennial"],
  },
];

const seedTitles = [
  "Citizen Kane", "The Godfather", "Seven Samurai", "Tokyo Story", "Vertigo", "Casablanca", "8 1/2",
  "2001: A Space Odyssey", "Taxi Driver", "Apocalypse Now", "The Shawshank Redemption", "Pulp Fiction", "In the Mood for Love", "Cinema Paradiso",
  "Schindler's List", "Rashomon", "Metropolis", "Sunset Boulevard", "Singin' in the Rain", "Some Like It Hot", "Rear Window", "Psycho",
];

const descriptors = ["Restored edition", "Archive pick", "Feature film", "Festival selection", "Director focus", "Genre landmark", "Essential entry"];
const regions = ["United States", "France", "Japan", "Italy", "China", "South Korea", "United Kingdom", "Germany", "Spain", "India", "Iran", "Brazil", "Mexico"];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

const language = new URLSearchParams(location.search).get("lang") === "en" || location.pathname.endsWith("/en.html") ? "en" : "zh";
const ALL = "全部";
const FAVORITE_STATUS = "收藏";
const WATCHED_STATUS = "已看";
const UNWATCHED_STATUS = "未看";

const uiText = {
  zh: {
    featured: "推荐",
    categories: "分类",
    library: "片库",
    about: "关于",
    kicker: "精选电影索引",
    title: "1001 部电影",
    formulaCategories: "13 大类",
    formulaSubs: "11 小类",
    formulaMovies: "7 部电影",
    browse: "浏览片库",
    viewCategories: "查看分类",
    movieItems: "电影条目",
    categoryCount: "大类",
    subcategoryCount: "小类（每大类 11 个）",
    progress: "已看进度",
    today: "今日推荐",
    refresh: "换一部",
    categoryEntry: "13 个入口",
    libraryTitle: "电影片库",
    filter: "筛选",
    grid: "海报",
    list: "列表",
    searchPlaceholder: "搜索英文片名、导演、主演、分类或标签",
    all: "全部",
    allTypes: "全部类型",
    allDecades: "全部年代",
    unknownDecade: "年代未知",
    allStatus: "全部状态",
    favorite: "已收藏",
    watched: "已看",
    unwatched: "未看",
    order: "片单顺序",
    titleSort: "片名 A-Z",
    yearAsc: "年份从早到晚",
    yearDesc: "年份从晚到早",
    random: "随机一部",
    clear: "清空",
    noResults: "没有找到匹配的电影。可尝试英文片名、导演或主演。",
    top: "回到顶部",
    close: "关闭详情",
    prev: "上一部",
    next: "下一部",
    detail: "查看详情",
    showing: "当前显示",
    ofResults: "条匹配结果，共",
    moviesUnit: "部电影",
    watchedShort: "已看",
    favoritesShort: "收藏",
    subUnit: "小类",
    movieUnit: "部",
    progressWatched: "已看",
    search: "搜索",
    categoryLabel: "大类",
    subcategoryLabel: "小类",
    genreLabel: "类型",
    decadeLabel: "年代",
    statusLabel: "状态",
    sortLabel: "排序",
    viewLabel: "视图",
    director: "导演",
    cast: "主演",
    releaseDate: "上映日期",
    viewRating: "查看评分",
    pending: "待补充",
    dataSource: "数据来源",
    loadMore: "显示更多",
    exportState: "导出观影记录",
    importState: "导入观影记录",
    exportDone: "观影记录已导出。",
    importDone: "观影记录已导入。",
    importError: "无法导入：文件格式不正确。",
    platformHint: "以下按钮用于在外部平台搜索该影片，不代表当前可播放。",
    dataNote: "片单元数据来自 MovieLens 与 IMDb；视频平台按钮仅用于搜索，不代表当前可播放。评分与上映信息以外部平台页面为准。",
    votes: "人评分",
    skip: "跳到主要内容",
    languageLabel: "English",
  },
  en: {
    featured: "Featured",
    categories: "Categories",
    library: "Library",
    about: "About",
    kicker: "Curated Movie Index",
    title: "1001 Movies",
    formulaCategories: "13 categories",
    formulaSubs: "11 sections",
    formulaMovies: "7 movies",
    browse: "Browse Library",
    viewCategories: "View Categories",
    movieItems: "movie entries",
    categoryCount: "categories",
    subcategoryCount: "sections (11 each)",
    progress: "Watch progress",
    today: "Today",
    refresh: "Another Pick",
    categoryEntry: "13 Entry Points",
    libraryTitle: "Movie Library",
    filter: "Filters",
    grid: "Posters",
    list: "List",
    searchPlaceholder: "Search title, director, cast, category, or tag",
    all: "All",
    allTypes: "All genres",
    allDecades: "All decades",
    unknownDecade: "Unknown decade",
    allStatus: "All status",
    favorite: "Favorited",
    watched: "Watched",
    unwatched: "Unwatched",
    order: "List order",
    titleSort: "Title A-Z",
    yearAsc: "Year ascending",
    yearDesc: "Year descending",
    random: "Random",
    clear: "Clear",
    noResults: "No matching movies found.",
    top: "Back to top",
    close: "Close details",
    prev: "Previous",
    next: "Next",
    detail: "Details",
    showing: "Showing",
    ofResults: "matching results out of",
    moviesUnit: "movies",
    watchedShort: "watched",
    favoritesShort: "favorites",
    subUnit: "sections",
    movieUnit: "movies",
    progressWatched: "Watched",
    search: "Search",
    categoryLabel: "Category",
    subcategoryLabel: "Section",
    genreLabel: "Genre",
    decadeLabel: "Decade",
    statusLabel: "Status",
    sortLabel: "Sort",
    viewLabel: "View",
    director: "Director",
    cast: "Cast",
    releaseDate: "Release",
    viewRating: "View rating",
    pending: "To be added",
    dataSource: "Data source",
    loadMore: "Show more",
    exportState: "Export watch data",
    importState: "Import watch data",
    exportDone: "Watch data exported.",
    importDone: "Watch data imported.",
    importError: "Import failed: invalid file format.",
    platformHint: "These buttons search external platforms and do not indicate current availability.",
    dataNote: "Metadata comes from MovieLens and IMDb. Platform buttons only perform searches and do not indicate current availability. Verify ratings and release information on the linked service.",
    votes: "votes",
    skip: "Skip to main content",
    languageLabel: "中文",
  },
};

const categoryEnglishNames = {
  "动画与家庭": "Animation & Family",
  "动作冒险": "Action Adventure",
  "科幻奇幻": "Science Fiction & Fantasy",
  "犯罪悬疑": "Crime & Mystery",
  "惊悚恐怖": "Thriller & Horror",
  "喜剧": "Comedy",
  "爱情": "Romance",
  "剧情人生": "Drama & Life",
  "战争历史与西部": "War, History & Western",
  "音乐歌舞与舞台": "Music, Musical & Stage",
  "纪录与现实": "Documentary & Reality",
  "年代经典": "Classics by Decade",
  "世界经典": "World Classics",
};

const genreNames = {
  Action: "动作",
  Adventure: "冒险",
  Animation: "动画",
  Children: "儿童",
  Comedy: "喜剧",
  Crime: "犯罪",
  Documentary: "纪录片",
  Drama: "剧情",
  Family: "家庭",
  Fantasy: "奇幻",
  "Film-Noir": "黑色电影",
  Horror: "恐怖",
  Musical: "歌舞",
  Mystery: "悬疑",
  Romance: "爱情",
  "Sci-Fi": "科幻",
  Thriller: "惊悚",
  War: "战争",
  Western: "西部",
};

function t(key) {
  return uiText[language][key] || uiText.zh[key] || key;
}

function displayCategory(value) {
  return language === "en" ? categoryEnglishNames[value] || value : value;
}

function displayGenre(value) {
  return language === "zh" ? genreNames[value] || value : value;
}

function displaySubcategory(movieOrValue) {
  if (language === "zh") return typeof movieOrValue === "string" ? movieOrValue : movieOrValue.subcategory;
  const movie = typeof movieOrValue === "string" ? null : movieOrValue;
  if (!movie) return movieOrValue;
  const category = categories.find((item) => item.name === movie.category);
  const index = category ? category.subs.indexOf(movie.subcategory) : -1;
  return index >= 0 ? `Section ${index + 1}` : movie.subcategory;
}

function formatReleaseDate(value, year) {
  if (!value) return year ? String(year) : t("pending");
  const legacyDate = String(value).match(/^(\d{2})-([A-Za-z]{3})-(\d{4})$/);
  if (legacyDate && legacyDate[1] === "01" && legacyDate[2].toLowerCase() === "jan") return legacyDate[3];
  const monthNames = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  const date = legacyDate
    ? new Date(Date.UTC(Number(legacyDate[3]), monthNames[legacyDate[2].toLowerCase()], Number(legacyDate[1])))
    : new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(language === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatPersonList(value) {
  if (Array.isArray(value) && value.length) return value.join(", ");
  if (typeof value === "string" && value.trim()) return value.trim();
  return t("pending");
}

function normalizePeople(value) {
  if (Array.isArray(value)) return value.filter((person) => typeof person === "string" && person.trim()).map((person) => person.trim());
  if (typeof value === "string" && value.trim()) return value.split(",").map((person) => person.trim()).filter(Boolean);
  return [];
}

function renderPersonLinks(value) {
  const people = normalizePeople(value);
  if (!people.length) return escapeHtml(t("pending"));
  return people.map((person) => {
    const href = `#library?q=${encodeURIComponent(person)}`;
    return `<a class="person-link" href="${escapeHtml(href)}" data-person="${escapeHtml(person)}">${escapeHtml(person)}</a>`;
  }).join('<span class="person-separator">, </span>');
}

function formatRating(value) {
  const score = Number(value);
  return Number.isFinite(score) && score > 0 ? `${score.toFixed(1)} / 10` : t("viewRating");
}

function formatVotes(value) {
  const votes = Number(value);
  if (!Number.isFinite(votes) || votes <= 0) return "";
  return `${new Intl.NumberFormat(language === "en" ? "en-US" : "zh-CN", { notation: "compact", maximumFractionDigits: 1 }).format(votes)} ${t("votes")}`;
}

const videoPlatforms = [
  { zh: "腾讯视频搜索", en: "Tencent Video search", host: "v.qq.com", buildUrl: (query) => `https://v.qq.com/x/search/?q=${query}` },
  { zh: "爱奇艺搜索", en: "iQIYI search", host: "www.iqiyi.com", buildUrl: (query) => `https://so.iqiyi.com/so/q_${query}` },
  { zh: "优酷搜索", en: "Youku search", host: "www.youku.com", buildUrl: (query) => `https://search.youku.com/search_video?keyword=${query}` },
  { zh: "哔哩哔哩搜索", en: "Bilibili search", host: "www.bilibili.com", buildUrl: (query) => `https://search.bilibili.com/all?keyword=${query}` },
];

const infoPlatforms = [
  { label: "IMDb", ratingKey: "imdb", host: "www.imdb.com", buildUrl: (query, movie) => movie.imdbUrl || `https://www.imdb.com/find/?q=${query}` },
  { label: "豆瓣", ratingKey: "douban", host: "movie.douban.com", buildUrl: (query, movie) => movie.doubanUrl || `https://search.douban.com/movie/subject_search?search_text=${query}` },
];

function buildVideoLinks(movie) {
  const queryText = [movie.title, movie.year].filter(Boolean).join(" ");
  const query = encodeURIComponent(queryText);
  return videoPlatforms.map((platform) => ({
    label: platform[language],
    icon: `https://www.google.com/s2/favicons?domain=${platform.host}&sz=32`,
    url: platform.buildUrl(query),
  }));
}

function buildInfoLinks(movie) {
  const queryText = [movie.title, movie.year].filter(Boolean).join(" ");
  const query = encodeURIComponent(queryText);
  return infoPlatforms.map((platform) => ({
    label: platform.label,
    rating: [formatRating(movie.ratings?.[platform.ratingKey]), platform.ratingKey === "imdb" ? formatVotes(movie.ratings?.imdbVotes) : ""].filter(Boolean).join(" · "),
    icon: `https://www.google.com/s2/favicons?domain=${platform.host}&sz=32`,
    url: platform.buildUrl(query, movie),
  }));
}

function renderLinkGroup(links, className) {
  return `
    <div class="${className}">
      ${links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(link.icon)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>${escapeHtml(link.label)}</span>${link.rating ? `<small>${escapeHtml(link.rating)}</small>` : ""}</a>`).join("")}
    </div>
  `;
}

function renderInfoLinks(movie, className = "site-links") {
  const links = movie.infoLinks || buildInfoLinks(movie);
  return renderLinkGroup(links, className);
}

function renderVideoLinks(movie, className = "video-links") {
  const links = movie.videoLinks || buildVideoLinks(movie);
  return renderLinkGroup(links, className);
}

function buildMovies() {
  const posterData = Array.isArray(globalThis.moviePosterData) ? globalThis.moviePosterData : [];
  if (posterData.length >= 1001 && posterData[0].category) {
    return posterData.slice(0, 1001).map((movie, index) => {
      const category = categories.find((item) => item.name === movie.category) || categories[index % categories.length];
      const color = palette[index % palette.length];
      const output = {
        id: movie.id || index + 1,
        title: movie.title,
        subtitle: Array.isArray(movie.genres) && movie.genres.length ? movie.genres.join(", ") : "IMDb/MovieLens genre data",
        year: movie.year,
        releaseDate: movie.releaseDate || "",
        region: movie.imdbId ? "IMDb" : "MovieLens",
        category: movie.category,
        subcategory: movie.subcategory,
        accent: movie.accent || category.accent,
        genres: movie.genres || [],
        director: movie.director || movie.directors || [],
        cast: movie.cast || movie.actors || [],
        ratings: movie.ratings || { imdb: null, douban: null },
        imdbUrl: /^https:\/\/www\.imdb\.com\/title\//.test(movie.imdbUrl || "") ? movie.imdbUrl : "",
        doubanUrl: movie.doubanUrl || "",
        posterA: color[0],
        posterB: color[1],
        posterUrl: movie.poster || movie.posterUrl || "",
        posterComplete: Boolean(movie.poster || movie.posterUrl),
        number: movie.number || String(index + 1).padStart(4, "0"),
      };
      output.infoLinks = buildInfoLinks(output);
      output.videoLinks = buildVideoLinks(output);
      return output;
    });
  }

  const movies = [];
  const usedTitles = new Set();
  let index = 1;

  categories.forEach((category, categoryIndex) => {
    category.subs.forEach((sub, subIndex) => {
      for (let slot = 0; slot < 7; slot += 1) {
        const sourceMovie = posterData[index - 1];
        const baseTitle = sourceMovie?.title || seedTitles[(index + categoryIndex * 11 + subIndex * 7 + slot) % seedTitles.length];
        let title = baseTitle;
        if (usedTitles.has(title)) title = `${baseTitle} - ${sub}`;
        if (usedTitles.has(title)) title = `${baseTitle} - ${sub} ${slot + 1}`;
        usedTitles.add(title);
        const year = sourceMovie?.year || 1920 + ((index * 37 + categoryIndex * 11 + slot * 3) % 105);
        const color = palette[(categoryIndex + slot) % palette.length];
        const output = {
          id: sourceMovie?.id || index,
          title,
          subtitle: sourceMovie?.poster ? "MovieLens poster data" : descriptors[(index + slot) % descriptors.length],
          year,
          releaseDate: sourceMovie?.releaseDate || "",
          region: regions[(index + subIndex + slot) % regions.length],
          category: category.name,
          subcategory: sub,
          accent: category.accent,
          director: sourceMovie?.director || sourceMovie?.directors || [],
          cast: sourceMovie?.cast || sourceMovie?.actors || [],
          ratings: sourceMovie?.ratings || { imdb: null, douban: null },
          doubanUrl: sourceMovie?.doubanUrl || "",
          posterA: color[0],
          posterB: color[1],
          posterUrl: sourceMovie?.poster || "",
          posterComplete: Boolean(sourceMovie?.poster),
          number: String(index).padStart(4, "0"),
        };
        output.infoLinks = buildInfoLinks(output);
        output.videoLinks = buildVideoLinks(output);
        movies.push(output);
        index += 1;
      }
    });
  });

  return movies.slice(0, 1001);
}

const movies = buildMovies();
const posterGroups = new Map();
movies.forEach((movie) => {
  if (!movie.posterUrl) return;
  const group = posterGroups.get(movie.posterUrl) || [];
  group.push(movie);
  posterGroups.set(movie.posterUrl, group);
});
posterGroups.forEach((group) => {
  if (new Set(group.map((movie) => `${movie.title}|${movie.year}`)).size <= 1) return;
  group.forEach((movie) => {
    movie.posterUrl = "";
    movie.posterComplete = false;
  });
});
const PAGE_SIZE = 42;

function readStorage(key, fallback = "") {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Browsing should keep working when storage is blocked or full.
  }
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore unavailable storage.
  }
}

function readStoredArray(key) {
  try {
    const value = JSON.parse(readStorage(key, "[]"));
    return Array.isArray(value) ? value : [];
  } catch {
    removeStorage(key);
    return [];
  }
}

const state = {
  category: ALL,
  subcategory: ALL,
  genre: ALL,
  decade: ALL,
  status: ALL,
  sort: "number",
  view: readStorage("movieViewMode") === "list" ? "list" : "grid",
  query: "",
  visibleCount: PAGE_SIZE,
};

const userState = {
  favorites: new Set(readStoredArray("movieFavorites")),
  watched: new Set(readStoredArray("movieWatched")),
};

const categoryGrid = document.querySelector("#category-grid");
const featuredCard = document.querySelector("#featured-card");
const featuredRefresh = document.querySelector("#featured-refresh");
const movieGrid = document.querySelector("#movie-grid");
const subnav = document.querySelector("#subnav");
const activeFilters = document.querySelector("#active-filters");
const searchInput = document.querySelector("#search-input");
const filterToggle = document.querySelector("#filter-toggle");
const toolbar = document.querySelector("#library-toolbar");
const gridViewButton = document.querySelector("#grid-view-button");
const listViewButton = document.querySelector("#list-view-button");
const categoryFilter = document.querySelector("#category-filter");
const genreFilter = document.querySelector("#genre-filter");
const decadeFilter = document.querySelector("#decade-filter");
const statusFilter = document.querySelector("#status-filter");
const sortFilter = document.querySelector("#sort-filter");
const randomButton = document.querySelector("#random-button");
const clearButton = document.querySelector("#clear-button");
const emptyClearButton = document.querySelector("#empty-clear-button");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const loadMoreButton = document.querySelector("#load-more-button");
const toTopButton = document.querySelector("#to-top");
const movieDialog = document.querySelector("#movie-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogPoster = document.querySelector("#dialog-poster");
const dialogNumber = document.querySelector("#dialog-number");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogNote = document.querySelector("#dialog-note");
const dialogPrev = document.querySelector("#dialog-prev");
const dialogNext = document.querySelector("#dialog-next");
const dialogFavorite = document.querySelector("#dialog-favorite");
const dialogWatched = document.querySelector("#dialog-watched");
const platformSearchHint = document.querySelector("#platform-search-hint");
const exportStateButton = document.querySelector("#export-state");
const importStateButton = document.querySelector("#import-state-button");
const importStateInput = document.querySelector("#import-state");
const stateMessage = document.querySelector("#state-message");

let activeDialogMovieNumber = null;
let activeDialogReturnHash = "#library";
let featuredOffset = Number(readStorage("featuredOffset", "0"));
if (!Number.isFinite(featuredOffset)) featuredOffset = 0;
let searchTimer = null;
let lastFilterSignature = "";
let isApplyingUrlState = false;
let hasInitialized = false;

function saveUserState() {
  writeStorage("movieFavorites", JSON.stringify([...userState.favorites]));
  writeStorage("movieWatched", JSON.stringify([...userState.watched]));
}

function fromSlug(value) {
  return value || "";
}

function getLibraryHash() {
  const params = new URLSearchParams();
  if (state.category !== ALL) params.set("category", state.category);
  if (state.subcategory !== ALL) params.set("subcategory", state.subcategory);
  if (state.genre !== ALL) params.set("genre", state.genre);
  if (state.decade !== ALL) params.set("decade", state.decade);
  if (state.status !== ALL) params.set("status", state.status);
  if (state.sort !== "number") params.set("sort", state.sort);
  if (state.view !== "grid") params.set("view", state.view);
  if (state.query.trim()) params.set("q", state.query.trim());
  const query = params.toString();
  return query ? `#library?${query}` : "#library";
}

function updateLibraryHash() {
  if (isApplyingUrlState || location.hash.startsWith("#movie-")) return;
  if (!hasInitialized && !location.hash.startsWith("#library")) return;
  const next = getLibraryHash();
  if (location.hash !== next) history.replaceState(null, "", next);
}

function applyLibraryParams(hash = location.hash) {
  if (!hash.startsWith("#library?")) return false;
  const params = new URLSearchParams(hash.slice(hash.indexOf("?") + 1));
  state.category = fromSlug(params.get("category")) || ALL;
  state.subcategory = fromSlug(params.get("subcategory")) || ALL;
  state.genre = fromSlug(params.get("genre")) || ALL;
  state.decade = fromSlug(params.get("decade")) || ALL;
  state.status = fromSlug(params.get("status")) || ALL;
  state.sort = params.get("sort") || "number";
  state.view = params.get("view") === "list" ? "list" : "grid";
  state.query = fromSlug(params.get("q")) || "";
  return true;
}

function syncControls() {
  searchInput.value = state.query;
  categoryFilter.value = state.category;
  genreFilter.value = state.genre;
  decadeFilter.value = state.decade;
  statusFilter.value = state.status;
  sortFilter.value = state.sort;
  gridViewButton.classList.toggle("active", state.view === "grid");
  listViewButton.classList.toggle("active", state.view === "list");
}

function resetVisibleMovies() {
  state.visibleCount = PAGE_SIZE;
}

function resetFilters() {
  state.category = ALL;
  state.subcategory = ALL;
  state.genre = ALL;
  state.decade = ALL;
  state.status = ALL;
  state.sort = "number";
  state.query = "";
  resetVisibleMovies();
  renderSubnav();
  renderMovies();
}

function getAllGenres() {
  return [...new Set(movies.flatMap((movie) => movie.genres || []))].sort((a, b) => a.localeCompare(b));
}

function getDecade(year) {
  if (!year) return t("unknownDecade");
  return `${Math.floor(year / 10) * 10}s`;
}

function getAllDecades() {
  return [...new Set(movies.map((movie) => getDecade(movie.year)))]
    .sort((a, b) => {
      if (a === t("unknownDecade")) return 1;
      if (b === t("unknownDecade")) return -1;
      return Number(a.slice(0, 4)) - Number(b.slice(0, 4));
    });
}

function isFavorite(movie) {
  return userState.favorites.has(movie.number);
}

function isWatched(movie) {
  return userState.watched.has(movie.number);
}

function toggleSet(set, value) {
  if (set.has(value)) set.delete(value);
  else set.add(value);
}

function bindPosterImages(root) {
  root.querySelectorAll("img[data-poster-image]").forEach((image) => {
    const markLoaded = () => image.classList.add("is-loaded");
    const markFailed = () => {
      if (!image.dataset.retried && image.src.includes("images-na.ssl-images-amazon.com")) {
        image.dataset.retried = "true";
        image.src = image.src.replace("images-na.ssl-images-amazon.com", "m.media-amazon.com");
        return;
      }
      image.closest(".poster, .dialog-poster")?.classList.add("poster-fallback");
      image.remove();
    };
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markFailed);
    if (image.complete) {
      if (image.naturalWidth) markLoaded();
      else markFailed();
    }
  });
}

function renderStats() {
  document.querySelector("#movie-count").textContent = movies.length;
  document.querySelector("#category-count").textContent = categories.length;
  document.querySelector("#subcategory-count").textContent = categories.reduce((sum, item) => sum + item.subs.length, 0);
  document.querySelector("#watched-count").textContent = `${userState.watched.size}/${movies.length}`;
  document.querySelector("#progress-label").innerHTML = `${t("progressWatched")} ${Math.round((userState.watched.size / movies.length) * 100)}%<progress value="${userState.watched.size}" max="${movies.length}"></progress>`;
}

function getDailyMovie() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const day = Math.floor((new Date() - start) / 86400000);
  return movies[(day + featuredOffset) % movies.length];
}

function renderFeatured() {
  const movie = getDailyMovie();
  featuredCard.innerHTML = `
    <div class="poster" style="--poster-a: ${movie.posterA}; --poster-b: ${movie.posterB}">
      ${movie.posterUrl ? `<img data-poster-image src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} poster" loading="eager" referrerpolicy="no-referrer">` : ""}
      <span>${escapeHtml(movie.number)}</span>
    </div>
      <div class="featured-body">
        <h3>${escapeHtml(movie.title)}</h3>
        <div class="featured-meta">
          <span>${escapeHtml(formatReleaseDate(movie.releaseDate, movie.year))}</span>
          <span>${escapeHtml(displayCategory(movie.category))} / ${escapeHtml(displaySubcategory(movie))}</span>
          <span>${escapeHtml((movie.genres || []).slice(0, 3).map(displayGenre).join(", ") || movie.region)}</span>
        </div>
      <button class="button primary" type="button" data-featured-open="${escapeHtml(movie.number)}">${escapeHtml(t("detail"))}</button>
    </div>
  `;
  bindPosterImages(featuredCard);
  featuredCard.querySelector("[data-featured-open]").addEventListener("click", () => openMovieDialog(movie.number));
}

function sortMovies(list) {
  return [...list].sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    if (state.sort === "year-asc") return (a.year || 9999) - (b.year || 9999) || a.title.localeCompare(b.title);
    if (state.sort === "year-desc") return (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title);
    return Number(a.number) - Number(b.number);
  });
}

function renderDialogNavigation(movie) {
  const filtered = getFilteredMovies();
  const index = filtered.findIndex((item) => item.number === movie.number);
  dialogPrev.disabled = index <= 0;
  dialogNext.disabled = index === -1 || index >= filtered.length - 1;
}

function openAdjacentMovie(direction) {
  if (!activeDialogMovieNumber) return;
  const filtered = getFilteredMovies();
  const index = filtered.findIndex((movie) => movie.number === activeDialogMovieNumber);
  const next = filtered[index + direction];
  if (next) openMovieDialog(next.number);
}

function closeMovieDialog() {
  if (location.hash.startsWith("#movie-")) history.replaceState(null, "", activeDialogReturnHash || "#library");
  activeDialogMovieNumber = null;
  activeDialogReturnHash = "#library";
  if (typeof movieDialog.close === "function") {
    movieDialog.close();
  } else {
    movieDialog.removeAttribute("open");
  }
  document.title = language === "en" ? "1001 Movies | Curated Movie Index" : "1001 Movies｜精选电影索引";
}

function applyLanguageText() {
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.title = language === "en" ? "1001 Movies | Curated Movie Index" : "1001 Movies｜精选电影索引";
  document.querySelector('meta[name="description"]')?.setAttribute("content", language === "en"
    ? "Browse 1,001 films across 13 themes and 143 sections, track your progress, and explore by director, cast, and genre."
    : "按 13 个主题与 143 个小类浏览 1001 部电影，追踪观影进度，并从导演、演员与类型继续探索。");
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", language === "en" ? "en_US" : "zh_CN");
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", language === "en" ? "1001 Movies" : "1001 部电影");
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", language === "en"
    ? "Explore 1,001 films from classics to contemporary cinema."
    : "从经典到当代，探索 1001 部值得观看的电影。");
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", language === "en"
    ? "https://xujiann.github.io/1001movies/index.html?lang=en"
    : "https://xujiann.github.io/1001movies/");
  document.querySelector(".brand")?.setAttribute("aria-label", language === "en" ? "1001 Movies home" : "1001 Movies 首页");
  document.querySelector('.nav a[href="#featured"]').textContent = t("featured");
  document.querySelector('.nav a[href="#categories"]').textContent = t("categories");
  document.querySelector('.nav a[href="#library"]').textContent = t("library");
  document.querySelector('.nav a[href="#about"]').textContent = t("about");
  document.querySelector(".hero .kicker").textContent = t("kicker");
  document.querySelector("#hero-title").textContent = t("title");
  const formulaItems = document.querySelectorAll(".formula span");
  if (formulaItems.length >= 6) {
    formulaItems[1].textContent = t("formulaCategories");
    formulaItems[3].textContent = t("formulaSubs");
    formulaItems[5].textContent = t("formulaMovies");
  }
  document.querySelector(".hero-actions .primary").textContent = t("browse");
  document.querySelector(".hero-actions .secondary").textContent = t("viewCategories");
  const statLabels = document.querySelectorAll(".stats-band span");
  if (statLabels.length >= 4) {
    statLabels[0].textContent = t("movieItems");
    statLabels[1].textContent = t("categoryCount");
    statLabels[2].textContent = t("subcategoryCount");
  }
  document.querySelector(".featured-section h2").textContent = t("today");
  featuredRefresh.textContent = t("refresh");
  document.querySelector("#categories h2").textContent = t("categoryEntry");
  document.querySelector(".library-heading h2").textContent = t("libraryTitle");
  filterToggle.textContent = t("filter");
  gridViewButton.textContent = t("grid");
  listViewButton.textContent = t("list");
  searchInput.placeholder = t("searchPlaceholder");
  randomButton.textContent = t("random");
  clearButton.textContent = t("clear");
  emptyState.querySelector("p").textContent = t("noResults");
  emptyClearButton.textContent = t("clear");
  loadMoreButton.textContent = t("loadMore");
  toTopButton.setAttribute("aria-label", t("top"));
  dialogClose.setAttribute("aria-label", t("close"));
  dialogPrev.textContent = t("prev");
  dialogNext.textContent = t("next");
  platformSearchHint.textContent = t("platformHint");
  exportStateButton.textContent = t("exportState");
  importStateButton.textContent = t("importState");
  document.querySelector("#data-note").textContent = t("dataNote");
  document.querySelector(".skip-link").textContent = t("skip");
  document.querySelector("#about-kicker").textContent = language === "en" ? "About" : "关于";
  document.querySelector("#about-title").textContent = language === "en" ? "About 1001 Movies" : "关于 1001 Movies";
  document.querySelector("#about-description").textContent = language === "en"
    ? "From classics to contemporary cinema, 1,001 films are organized into 13 themes and 143 sections. Browse by category, or follow a director or actor to discover more of their work."
    : "从经典到当代，以 13 个主题、143 个小类整理 1001 部值得观看的电影。你可以按分类浏览，也可以从导演或演员出发继续探索。";
  const aboutLabels = document.querySelectorAll("#about-numbers i");
  [language === "en" ? "movies" : "部电影", language === "en" ? "themes" : "个主题", language === "en" ? "sections" : "个小类"]
    .forEach((label, index) => { if (aboutLabels[index]) aboutLabels[index].textContent = label; });
  document.querySelector("#about-numbers").setAttribute("aria-label", language === "en" ? "Collection structure" : "片单结构");
  const switcher = document.querySelector("#language-switch");
  if (switcher) {
    const target = language === "en" ? "zh" : "en";
    switcher.innerHTML = `<a href="index.html?lang=${target}${escapeHtml(location.hash)}" aria-label="${escapeHtml(t("languageLabel"))}">${escapeHtml(t("languageLabel"))}</a>`;
  }
}

function getSearchText(movie) {
  if (!movie.searchText) {
    movie.searchText = `${movie.title} ${movie.subtitle} ${movie.category} ${displayCategory(movie.category)} ${movie.subcategory} ${displaySubcategory(movie)} ${movie.region} ${formatPersonList(movie.director)} ${formatPersonList(movie.cast)} ${(movie.genres || []).join(" ")} ${(movie.genres || []).map(displayGenre).join(" ")}`.toLowerCase();
  }
  return movie.searchText;
}

function renderFilters() {
  categoryFilter.innerHTML = [ALL, ...categories.map((category) => category.name)]
    .map((name) => `<option value="${escapeHtml(name)}">${name === ALL ? escapeHtml(t("all")) : escapeHtml(displayCategory(name))}</option>`)
    .join("");
  genreFilter.innerHTML = [ALL, ...getAllGenres()]
    .map((name) => `<option value="${escapeHtml(name)}">${name === ALL ? escapeHtml(t("allTypes")) : escapeHtml(displayGenre(name))}</option>`)
    .join("");
  decadeFilter.innerHTML = [ALL, ...getAllDecades()]
    .map((name) => `<option value="${escapeHtml(name)}">${name === ALL ? escapeHtml(t("allDecades")) : escapeHtml(name)}</option>`)
    .join("");
  statusFilter.innerHTML = [
    [ALL, t("allStatus")],
    [FAVORITE_STATUS, t("favorite")],
    [WATCHED_STATUS, t("watched")],
    [UNWATCHED_STATUS, t("unwatched")],
  ].map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
  sortFilter.innerHTML = [
    ["number", t("order")],
    ["title", t("titleSort")],
    ["year-asc", t("yearAsc")],
    ["year-desc", t("yearDesc")],
  ].map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
}

function renderSubnav() {
  const category = categories.find((item) => item.name === state.category);
  const subs = category ? category.subs : [...new Set(movies.map((movie) => movie.subcategory))].slice(0, 24);
  subnav.innerHTML = [ALL, ...subs].map((name) => {
    const label = name === ALL ? t("all") : (language === "en" ? displaySubcategory({ category: state.category, subcategory: name }) : name);
    return `<button class="chip ${state.subcategory === name ? "active" : ""}" type="button" data-subcategory="${escapeHtml(name)}">${escapeHtml(label)}</button>`;
  }).join("");

  subnav.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.subcategory = chip.dataset.subcategory;
      renderSubnav();
      renderMovies();
    });
  });
}

function renderActiveFilters() {
  const filters = [];
  if (state.query.trim()) filters.push(["query", t("search"), state.query.trim()]);
  if (state.category !== ALL) filters.push(["category", t("categoryLabel"), displayCategory(state.category)]);
  if (state.subcategory !== ALL) filters.push(["subcategory", t("subcategoryLabel"), language === "en" ? displaySubcategory({ category: state.category, subcategory: state.subcategory }) : state.subcategory]);
  if (state.genre !== ALL) filters.push(["genre", t("genreLabel"), displayGenre(state.genre)]);
  if (state.decade !== ALL) filters.push(["decade", t("decadeLabel"), state.decade]);
  if (state.status !== ALL) filters.push(["status", t("statusLabel"), statusFilter.selectedOptions[0]?.textContent || state.status]);
  if (state.sort !== "number") filters.push(["sort", t("sortLabel"), sortFilter.selectedOptions[0]?.textContent || state.sort]);
  if (state.view !== "grid") filters.push(["view", t("viewLabel"), t("list")]);

  activeFilters.innerHTML = filters.map(([key, label, value]) => (
    `<button class="filter-pill" type="button" data-filter-key="${key}" aria-label="${escapeHtml(`${t("clear")} ${label}: ${value}`)}"><span>${escapeHtml(label)}</span>${escapeHtml(value)} ×</button>`
  )).join("");

  activeFilters.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.filterKey;
      if (key === "query") state.query = "";
      if (key === "category") {
        state.category = ALL;
        state.subcategory = ALL;
        renderSubnav();
      }
      if (key === "subcategory") {
        state.subcategory = ALL;
        renderSubnav();
      }
      if (key === "genre") state.genre = ALL;
      if (key === "decade") state.decade = ALL;
      if (key === "status") state.status = ALL;
      if (key === "sort") state.sort = "number";
      if (key === "view") {
        state.view = "grid";
        writeStorage("movieViewMode", state.view);
      }
      renderMovies();
    });
  });
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const categoryMovies = movies.filter((movie) => movie.category === category.name);
    const count = categoryMovies.length;
    const watched = categoryMovies.filter(isWatched).length;
    const percent = Math.round((watched / count) * 100);
    return `
      <article class="category-card" style="--accent: ${category.accent}" data-category="${escapeHtml(category.name)}" tabindex="0" role="button" aria-label="${escapeHtml(displayCategory(category.name))}">
        <h3>${escapeHtml(displayCategory(category.name))}</h3>
        <p>${escapeHtml(language === "en" ? `${count} curated movies in this theme.` : category.description)}</p>
        <div class="category-meta">
          <span>${category.subs.length} ${escapeHtml(t("subUnit"))}</span>
          <span>${count} ${escapeHtml(t("movieUnit"))}</span>
          <span>${escapeHtml(t("watchedShort"))} ${percent}%</span>
        </div>
        <div class="category-progress" aria-label="${escapeHtml(displayCategory(category.name))} ${escapeHtml(t("watchedShort"))} ${watched} / ${count}">
          <span style="width: ${percent}%"></span>
        </div>
      </article>
    `;
  }).join("");

  categoryGrid.querySelectorAll(".category-card").forEach((card) => {
    const selectCategory = () => {
      state.category = card.dataset.category;
      state.subcategory = ALL;
      categoryFilter.value = state.category;
      renderSubnav();
      renderMovies();
      updateLibraryHash();
      document.querySelector("#library").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", selectCategory);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCategory();
      }
    });
  });
}

function getFilteredMovies() {
  const query = state.query.trim().toLowerCase();
  const filtered = movies.filter((movie) => {
    const inCategory = state.category === ALL || movie.category === state.category;
    const inSubcategory = state.subcategory === ALL || movie.subcategory === state.subcategory;
    const inGenre = state.genre === ALL || (movie.genres || []).includes(state.genre);
    const inDecade = state.decade === ALL || getDecade(movie.year) === state.decade;
    const inStatus =
      state.status === ALL ||
      (state.status === FAVORITE_STATUS && isFavorite(movie)) ||
      (state.status === WATCHED_STATUS && isWatched(movie)) ||
      (state.status === UNWATCHED_STATUS && !isWatched(movie));
    const inQuery = !query || getSearchText(movie).includes(query);
    return inCategory && inSubcategory && inGenre && inDecade && inStatus && inQuery;
  });

  return sortMovies(filtered);
}

function renderMovies() {
  const filtered = getFilteredMovies();
  const filterSignature = [state.category, state.subcategory, state.genre, state.decade, state.status, state.sort, state.query].join("|");
  if (filterSignature !== lastFilterSignature) {
    resetVisibleMovies();
    lastFilterSignature = filterSignature;
  }
  const visible = filtered.slice(0, state.visibleCount);
  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `${t("showing")} ${visible.length} / ${filtered.length} ${t("ofResults")} ${movies.length} ${t("moviesUnit")} · ${t("watchedShort")} ${userState.watched.size} · ${t("favoritesShort")} ${userState.favorites.size}`;
  loadMoreButton.parentElement.hidden = visible.length >= filtered.length;
  movieGrid.classList.toggle("list-view", state.view === "list");
  movieGrid.innerHTML = visible.map((movie) => `
    <article class="movie-card ${isWatched(movie) ? "is-watched" : ""} ${isFavorite(movie) ? "is-favorite" : ""}" data-movie-number="${escapeHtml(movie.number)}" tabindex="0" role="button" aria-label="${escapeHtml(t("detail"))}: ${escapeHtml(movie.title)}">
      <div class="poster" style="--poster-a: ${movie.posterA}; --poster-b: ${movie.posterB}">
        ${movie.posterUrl ? `<img data-poster-image src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} poster" loading="lazy" referrerpolicy="no-referrer">` : ""}
        <span>${escapeHtml(movie.number)}</span>
        <div class="card-badges" aria-label="${escapeHtml(t("statusLabel"))}">
          ${isFavorite(movie) ? `<b>${escapeHtml(t("favoritesShort"))}</b>` : ""}
          ${isWatched(movie) ? `<b>${escapeHtml(t("watchedShort"))}</b>` : ""}
        </div>
      </div>
      <div class="movie-body">
        <h3 class="movie-title">${escapeHtml(movie.title)}</h3>
        <div class="movie-info">
          <span>${escapeHtml(formatReleaseDate(movie.releaseDate, movie.year))} · ${escapeHtml((movie.genres || []).slice(0, 2).map(displayGenre).join(", ") || movie.region)}</span>
          <span>${escapeHtml(displayCategory(movie.category))} / ${escapeHtml(displaySubcategory(movie))}</span>
          <span>${escapeHtml(movie.subtitle)}</span>
        </div>
        <div class="movie-quick-details">
          <span>${escapeHtml(t("director"))}: ${escapeHtml(formatPersonList(movie.director))}</span>
          <span>${escapeHtml(t("cast"))}: ${escapeHtml(formatPersonList(movie.cast))}</span>
        </div>
      </div>
    </article>
  `).join("");
  syncControls();
  renderActiveFilters();
  updateLibraryHash();
  bindPosterImages(movieGrid);

  movieGrid.querySelectorAll(".movie-card").forEach((card) => {
    const open = () => openMovieDialog(card.dataset.movieNumber);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

}

function openMovieDialog(number) {
  const movie = movies.find((item) => item.number === number);
  if (!movie) return;
  if (!location.hash.startsWith("#movie-")) {
    activeDialogReturnHash = location.hash.startsWith("#library") ? location.hash : getLibraryHash();
  }
  activeDialogMovieNumber = movie.number;
  if (location.hash !== `#movie-${movie.number}`) history.replaceState(null, "", `#movie-${movie.number}`);

  dialogPoster.style.setProperty("--poster-a", movie.posterA);
  dialogPoster.style.setProperty("--poster-b", movie.posterB);
  dialogPoster.classList.remove("poster-fallback");
  dialogPoster.innerHTML = movie.posterUrl
    ? `<img data-poster-image src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} poster" referrerpolicy="no-referrer">`
    : `<span>${escapeHtml(movie.number)}</span>`;
  dialogNumber.textContent = `No. ${movie.number}`;
  dialogTitle.textContent = movie.title;
  dialogMeta.innerHTML = `
    <span>${escapeHtml(displayCategory(movie.category))}</span>
    <span>${escapeHtml(displaySubcategory(movie))}</span>
    ${(movie.genres || []).map((genre) => `<span>${escapeHtml(displayGenre(genre))}</span>`).join("")}
  `;
  dialogNote.innerHTML = `
    <div class="detail-grid">
      <div><span>${escapeHtml(t("director"))}</span><strong>${renderPersonLinks(movie.director)}</strong></div>
      <div><span>${escapeHtml(t("cast"))}</span><strong>${renderPersonLinks(movie.cast)}</strong></div>
      <div><span>${escapeHtml(t("releaseDate"))}</span><strong>${escapeHtml(formatReleaseDate(movie.releaseDate, movie.year))}</strong></div>
      <div><span>${escapeHtml(t("dataSource"))}</span><strong>${escapeHtml(movie.region || "MovieLens")}</strong></div>
    </div>
    ${renderInfoLinks(movie, "site-links dialog-site-links")}
    ${renderVideoLinks(movie, "video-links dialog-video-links")}
  `;
  renderDialogActions(movie);
  renderDialogNavigation(movie);
  bindPosterImages(dialogPoster);
  document.title = `${movie.title} | 1001 Movies`;
  dialogNote.querySelectorAll("[data-person]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      state.category = ALL;
      state.subcategory = ALL;
      state.genre = ALL;
      state.decade = ALL;
      state.status = ALL;
      state.query = link.dataset.person;
      closeMovieDialog();
      renderSubnav();
      renderMovies();
      document.querySelector("#library").scrollIntoView({ behavior: "smooth" });
    });
  });

  if (movieDialog.open) {
    return;
  }
  if (typeof movieDialog.showModal === "function") {
    movieDialog.showModal();
  } else {
    movieDialog.setAttribute("open", "");
  }
}

function renderDialogActions(movie) {
  dialogFavorite.textContent = isFavorite(movie) ? `${t("clear")} ${t("favoritesShort")}` : t("favoritesShort");
  dialogWatched.textContent = isWatched(movie) ? `${t("clear")} ${t("watchedShort")}` : t("watched");
  dialogFavorite.classList.toggle("active", isFavorite(movie));
  dialogWatched.classList.toggle("active", isWatched(movie));
}

function exportUserState() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    favorites: [...userState.favorites],
    watched: [...userState.watched],
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `1001-movies-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  stateMessage.textContent = t("exportDone");
}

async function importUserState(file) {
  try {
    const payload = JSON.parse(await file.text());
    if (!Array.isArray(payload.favorites) || !Array.isArray(payload.watched)) throw new Error("Invalid state");
    const validNumbers = new Set(movies.map((movie) => movie.number));
    userState.favorites = new Set(payload.favorites.filter((number) => validNumbers.has(number)));
    userState.watched = new Set(payload.watched.filter((number) => validNumbers.has(number)));
    saveUserState();
    renderStats();
    renderCategories();
    renderMovies();
    stateMessage.textContent = t("importDone");
  } catch {
    stateMessage.textContent = t("importError");
  } finally {
    importStateInput.value = "";
  }
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderMovies, 200);
});

loadMoreButton.addEventListener("click", () => {
  state.visibleCount += PAGE_SIZE;
  renderMovies();
});

exportStateButton.addEventListener("click", exportUserState);

importStateButton.addEventListener("click", () => importStateInput.click());

importStateInput.addEventListener("change", () => {
  const [file] = importStateInput.files;
  if (file) importUserState(file);
});

filterToggle.addEventListener("click", () => {
  const collapsed = toolbar.classList.toggle("is-collapsed");
  filterToggle.setAttribute("aria-expanded", String(!collapsed));
});

gridViewButton.addEventListener("click", () => {
  state.view = "grid";
  writeStorage("movieViewMode", state.view);
  renderMovies();
});

listViewButton.addEventListener("click", () => {
  state.view = "list";
  writeStorage("movieViewMode", state.view);
  renderMovies();
});

featuredRefresh.addEventListener("click", () => {
  featuredOffset = (featuredOffset + 37) % movies.length;
  writeStorage("featuredOffset", String(featuredOffset));
  renderFeatured();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.subcategory = ALL;
  renderSubnav();
  renderMovies();
});

genreFilter.addEventListener("change", (event) => {
  state.genre = event.target.value;
  renderMovies();
});

decadeFilter.addEventListener("change", (event) => {
  state.decade = event.target.value;
  renderMovies();
});

statusFilter.addEventListener("change", (event) => {
  state.status = event.target.value;
  renderMovies();
});

sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderMovies();
});

randomButton.addEventListener("click", () => {
  const filtered = getFilteredMovies();
  if (!filtered.length) return;
  const movie = filtered[Math.floor(Math.random() * filtered.length)];
  openMovieDialog(movie.number);
});

clearButton.addEventListener("click", () => {
  resetFilters();
});

emptyClearButton.addEventListener("click", resetFilters);

toTopButton.addEventListener("click", () => {
  document.querySelector("#main-content").scrollIntoView({ behavior: "smooth" });
});

dialogPrev.addEventListener("click", () => openAdjacentMovie(-1));

dialogNext.addEventListener("click", () => openAdjacentMovie(1));

dialogFavorite.addEventListener("click", () => {
  if (!activeDialogMovieNumber) return;
  toggleSet(userState.favorites, activeDialogMovieNumber);
  saveUserState();
  const movie = movies.find((item) => item.number === activeDialogMovieNumber);
  renderDialogActions(movie);
  renderStats();
  renderCategories();
  renderMovies();
});

dialogWatched.addEventListener("click", () => {
  if (!activeDialogMovieNumber) return;
  toggleSet(userState.watched, activeDialogMovieNumber);
  saveUserState();
  const movie = movies.find((item) => item.number === activeDialogMovieNumber);
  renderDialogActions(movie);
  renderStats();
  renderCategories();
  renderMovies();
});

dialogClose.addEventListener("click", closeMovieDialog);

movieDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMovieDialog();
});

movieDialog.addEventListener("click", (event) => {
  if (event.target === movieDialog) closeMovieDialog();
});

window.addEventListener("keydown", (event) => {
  if (!movieDialog.open) return;
  if (event.key === "ArrowLeft") openAdjacentMovie(-1);
  if (event.key === "ArrowRight") openAdjacentMovie(1);
});

window.addEventListener("scroll", () => {
  toTopButton.classList.toggle("is-visible", scrollY > 640);
}, { passive: true });

window.addEventListener("hashchange", () => {
  const match = location.hash.match(/^#movie-(\d{4})$/);
  if (match) openMovieDialog(match[1]);
  else if (applyLibraryParams()) {
    isApplyingUrlState = true;
    syncControls();
    renderSubnav();
    renderMovies();
    isApplyingUrlState = false;
  }
  else if (movieDialog.open) closeMovieDialog();
});

applyLanguageText();
applyLibraryParams();
renderStats();
renderFeatured();
renderCategories();
renderFilters();
syncControls();
if (matchMedia("(max-width: 820px)").matches) {
  toolbar.classList.add("is-collapsed");
  filterToggle.setAttribute("aria-expanded", "false");
}
renderSubnav();
renderMovies();
hasInitialized = true;

const initialMovieMatch = location.hash.match(/^#movie-(\d{4})$/);
if (initialMovieMatch) openMovieDialog(initialMovieMatch[1]);
