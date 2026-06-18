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
    name: "世界经典",
    accent: "#d94f45",
    description: "电影史、默片、有声片转型、学院经典与影迷必修。",
    subs: ["默片时代", "黑白经典", "黄金年代", "战后新章", "影史坐标", "大师入门", "修复珍藏", "电影学院", "史诗长卷", "银幕神话", "百年回望"],
  },
  {
    name: "作者导演",
    accent: "#d8ad5c",
    description: "以导演风格和创作母题串起的私人电影地图。",
    subs: ["希区柯克式", "库布里克式", "费里尼式", "塔可夫斯基式", "伯格曼式", "小津式", "黑泽明式", "侯麦式", "阿莫多瓦式", "王家卫式", "当代作者"],
  },
  {
    name: "剧情与人生",
    accent: "#5da579",
    description: "成长、家庭、命运、爱情、伦理与人的复杂处境。",
    subs: ["成长叙事", "家庭关系", "爱情选择", "城市人生", "乡土记忆", "女性处境", "父子母女", "中年危机", "青春尾声", "疾病与告别", "命运寓言"],
  },
  {
    name: "犯罪悬疑",
    accent: "#5c91c9",
    description: "黑色电影、侦探、心理谜题、法庭与地下世界。",
    subs: ["黑色电影", "侦探迷局", "心理惊悚", "法庭攻防", "黑帮史诗", "警匪对峙", "连环谜案", "复仇叙事", "都市暗面", "道德困局", "骗局与反转"],
  },
  {
    name: "科幻奇幻",
    accent: "#b76f9f",
    description: "未来、宇宙、时间、技术、梦境与神话想象。",
    subs: ["太空旅行", "时间循环", "人工智能", "赛博城市", "末日之后", "怪兽传说", "魔法世界", "平行宇宙", "科技寓言", "梦境边界", "未来社会"],
  },
  {
    name: "战争历史",
    accent: "#d07d52",
    description: "战争创伤、历史拐点、传记人物与时代现场。",
    subs: ["一战二战", "冷战阴影", "反战经典", "历史宫廷", "革命年代", "人物传记", "殖民记忆", "民族史诗", "战地人性", "时代切片", "档案重构"],
  },
  {
    name: "喜剧音乐",
    accent: "#8aa75a",
    description: "从身体喜剧到歌舞片，从讽刺到浪漫轻喜。",
    subs: ["身体喜剧", "浪漫喜剧", "讽刺喜剧", "荒诞幽默", "歌舞黄金", "音乐现场", "摇滚电影", "舞台改编", "家庭喜剧", "公路笑谈", "黑色幽默"],
  },
  {
    name: "恐怖惊悚",
    accent: "#67a8a3",
    description: "幽灵、怪物、邪典、民俗与心理恐惧。",
    subs: ["哥特幽影", "民俗恐怖", "怪物电影", "邪典午夜", "心理恐惧", "密室危机", "身体恐怖", "灵异传说", "生存惊悚", "灾难恐惧", "恐怖新声"],
  },
  {
    name: "亚洲电影",
    accent: "#d94f45",
    description: "华语、日本、韩国、印度、东南亚与亚洲新浪潮。",
    subs: ["华语经典", "香港类型", "台湾新电影", "大陆记忆", "日本名作", "韩国浪潮", "印度影像", "伊朗电影", "东南亚现场", "亚洲动画", "亚洲新锐"],
  },
  {
    name: "欧洲电影",
    accent: "#d8ad5c",
    description: "法国、意大利、德国、北欧、东欧与欧洲艺术传统。",
    subs: ["法国新浪潮", "意大利经典", "德国影像", "英国叙事", "西班牙热情", "北欧冷光", "东欧寓言", "俄罗斯长镜", "欧洲喜剧", "欧洲犯罪", "当代欧洲"],
  },
  {
    name: "美洲电影",
    accent: "#5da579",
    description: "好莱坞体系、独立电影、拉美现实与北美类型演进。",
    subs: ["好莱坞经典", "新好莱坞", "美国独立", "西部片", "超级类型", "拉美现实", "墨西哥影像", "巴西电影", "加拿大作者", "纽约故事", "洛杉矶神话"],
  },
  {
    name: "动画纪录",
    accent: "#5c91c9",
    description: "动画长片、实验动画、纪录片与影像档案。",
    subs: ["手绘动画", "定格动画", "电脑动画", "成人动画", "实验动画", "自然纪录", "社会纪录", "音乐纪录", "人物纪录", "影像论文", "真实犯罪"],
  },
  {
    name: "当代佳作",
    accent: "#b76f9f",
    description: "2000 年后的全球佳片、类型更新与节展热门。",
    subs: ["千禧十年", "2010年代", "2020年代", "流媒体时代", "女性导演", "酷儿影像", "非洲新声", "中东新声", "类型复兴", "节展获奖", "未来经典"],
  },
];

const seedTitles = [
  "公民凯恩", "教父", "七武士", "东京物语", "迷魂记", "卡萨布兰卡", "八部半",
  "2001太空漫游", "出租车司机", "现代启示录", "肖申克的救赎", "低俗小说", "花样年华", "天堂电影院",
  "辛德勒的名单", "罗生门", "大都会", "日落大道", "雨中曲", "热情似火", "后窗", "精神病患者",
  "飞越疯人院", "乱世佳人", "阿拉伯的劳伦斯", "偷自行车的人", "大路", "四百击", "筋疲力尽",
  "牯岭街少年杀人事件", "悲情城市", "重庆森林", "无间道", "霸王别姬", "一一", "饮食男女",
  "卧虎藏龙", "英雄本色", "胭脂扣", "活着", "阳光灿烂的日子", "春光乍泄", "红高粱", "小城之春",
  "切腹", "生之欲", "用心棒", "千与千寻", "龙猫", "萤火虫之墓", "攻壳机动队", "新世纪福音战士剧场版",
  "寄生虫", "老男孩", "杀人回忆", "薄荷糖", "诗", "燃烧", "辩护人", "小姐",
  "阿甘正传", "好家伙", "沉默的羔羊", "搏击俱乐部", "黑客帝国", "泰坦尼克号", "星球大战",
  "银翼杀手", "异形", "终结者2", "侏罗纪公园", "回到未来", "E.T.外星人", "大白鲨",
  "盗梦空间", "星际穿越", "社交网络", "血色将至", "老无所依", "布达佩斯大饭店", "爱乐之城",
  "月光男孩", "逃出绝命镇", "少年时代", "她", "荒野猎人", "鸟人", "聚焦",
  "城市之光", "淘金记", "将军号", "摩登时代", "公寓春光", "安妮霍尔", "土拨鼠之日", "楚门的世界",
  "音乐之声", "西区故事", "芝加哥", "红磨坊", "海上钢琴师", "爆裂鼓手", "几近成名",
  "闪灵", "驱魔人", "罗斯玛丽的婴儿", "活死人之夜", "月光光心慌慌", "德州电锯杀人狂", "沉默",
  "第七封印", "假面", "野草莓", "潜行者", "镜子", "安德烈卢布廖夫", "乡愁", "牺牲",
  "甜蜜的生活", "卡比利亚之夜", "豹", "罗马，不设防的城市", "单车少年", "两天一夜", "爱",
  "蓝白红三部曲之蓝", "天使爱美丽", "四月三周两天", "窃听风暴", "再见列宁", "帝国的毁灭",
  "潘神的迷宫", "对她说", "回归", "吾栖之肤", "狗镇", "破浪", "黑暗中的舞者",
  "巴里林登", "发条橙", "全金属外壳", "奇爱博士", "洛丽塔", "光荣之路", "杀手",
  "十二怒汉", "控方证人", "桃色血案", "杀死一只知更鸟", "纽伦堡的审判", "费城故事", "雨人",
  "美国往事", "疤面煞星", "教父2", "唐人街", "洛城机密", "七宗罪", "盗火线",
  "雌雄大盗", "猎鹿人", "午夜牛郎", "毕业生", "逍遥骑士", "愤怒的公牛", "蓝丝绒",
  "穆赫兰道", "橡皮头", "象人", "迷失东京", "处女之死", "绝美之城", "一次别离",
  "何以为家", "焦土之城", "中央车站", "上帝之城", "摩托日记", "酒神小姐", "伯德小姐",
  "小妇人", "犬之力", "瞬息全宇宙", "驾驶我的车", "坠落的审判", "过往人生", "奥本海默",
  "可怜的东西", "利益区域", "沙丘", "疯狂的麦克斯4", "蜘蛛侠：平行宇宙", "机器人总动员", "飞屋环游记",
  "玩具总动员", "海底总动员", "狮子王", "美女与野兽", "阿基拉", "红辣椒", "未麻的部屋",
  "纪录片：浩劫", "杀戮演绎", "寻找小糖人", "人生七年", "难以忽视的真相", "徒手攀岩", "蜂蜜之地",
];

const descriptors = ["修复版", "资料馆版", "长片", "影展版", "导演线索", "类型样本", "必看条目"];
const regions = ["美国", "法国", "日本", "意大利", "中国", "韩国", "英国", "德国", "西班牙", "印度", "伊朗", "巴西", "墨西哥"];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

const videoPlatforms = [
  { label: "腾讯视频", buildUrl: (query) => `https://v.qq.com/x/search/?q=${query}` },
  { label: "爱奇艺", buildUrl: (query) => `https://so.iqiyi.com/so/q_${query}` },
  { label: "优酷", buildUrl: (query) => `https://search.youku.com/search_video?keyword=${query}` },
  { label: "哔哩哔哩", buildUrl: (query) => `https://search.bilibili.com/all?keyword=${query}` },
  { label: "豆瓣", buildUrl: (query) => `https://search.douban.com/movie/subject_search?search_text=${query}` },
];

function buildVideoLinks(movie) {
  const queryText = [movie.title, movie.year].filter(Boolean).join(" ");
  const query = encodeURIComponent(queryText);
  return videoPlatforms.map((platform) => ({
    label: platform.label,
    url: platform.buildUrl(query),
  }));
}

function renderVideoLinks(movie, className = "video-links") {
  const links = movie.videoLinks || buildVideoLinks(movie);
  return `
    <div class="${className}" aria-label="视频平台链接">
      ${links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
    </div>
  `;
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
        subtitle: Array.isArray(movie.genres) && movie.genres.length ? movie.genres.join(", ") : "IMDb/MovieLens 类型数据",
        year: movie.year,
        region: movie.imdbId ? "IMDb" : "MovieLens",
        category: movie.category,
        subcategory: movie.subcategory,
        accent: movie.accent || category.accent,
        genres: movie.genres || [],
        imdbUrl: movie.imdbUrl || "",
        posterA: color[0],
        posterB: color[1],
        posterUrl: movie.poster || movie.posterUrl || "",
        number: movie.number || String(index + 1).padStart(4, "0"),
      };
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
        if (usedTitles.has(title)) title = `${baseTitle} · ${sub}`;
        if (usedTitles.has(title)) title = `${baseTitle} · ${sub} ${slot + 1}`;
        usedTitles.add(title);
        const year = sourceMovie?.year || 1920 + ((index * 37 + categoryIndex * 11 + slot * 3) % 105);
        const color = palette[(categoryIndex + slot) % palette.length];
        const output = {
          id: sourceMovie?.id || index,
          title,
          subtitle: sourceMovie?.poster ? "MovieLens 海报数据" : descriptors[(index + slot) % descriptors.length],
          year,
          region: regions[(index + subIndex + slot) % regions.length],
          category: category.name,
          subcategory: sub,
          accent: category.accent,
          posterA: color[0],
          posterB: color[1],
          posterUrl: sourceMovie?.poster || "",
          number: String(index).padStart(4, "0"),
        };
        output.videoLinks = buildVideoLinks(output);
        movies.push(output);
        index += 1;
      }
    });
  });

  return movies.slice(0, 1001);
}

const movies = buildMovies();
const state = {
  category: "全部",
  subcategory: "全部",
  genre: "全部",
  decade: "全部",
  status: "全部",
  sort: "number",
  view: localStorage.getItem("movieViewMode") || "grid",
  query: "",
};

const userState = {
  favorites: new Set(JSON.parse(localStorage.getItem("movieFavorites") || "[]")),
  watched: new Set(JSON.parse(localStorage.getItem("movieWatched") || "[]")),
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
const dialogShare = document.querySelector("#dialog-share");
const dialogFavorite = document.querySelector("#dialog-favorite");
const dialogWatched = document.querySelector("#dialog-watched");

let activeDialogMovieNumber = null;
let featuredOffset = Number(localStorage.getItem("featuredOffset") || "0");
let isApplyingUrlState = false;
let hasInitialized = false;

function saveUserState() {
  localStorage.setItem("movieFavorites", JSON.stringify([...userState.favorites]));
  localStorage.setItem("movieWatched", JSON.stringify([...userState.watched]));
}

function fromSlug(value) {
  return value || "";
}

function getLibraryHash() {
  const params = new URLSearchParams();
  if (state.category !== "全部") params.set("category", state.category);
  if (state.subcategory !== "全部") params.set("subcategory", state.subcategory);
  if (state.genre !== "全部") params.set("genre", state.genre);
  if (state.decade !== "全部") params.set("decade", state.decade);
  if (state.status !== "全部") params.set("status", state.status);
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
  state.category = fromSlug(params.get("category")) || "全部";
  state.subcategory = fromSlug(params.get("subcategory")) || "全部";
  state.genre = fromSlug(params.get("genre")) || "全部";
  state.decade = fromSlug(params.get("decade")) || "全部";
  state.status = fromSlug(params.get("status")) || "全部";
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

function resetFilters() {
  state.category = "全部";
  state.subcategory = "全部";
  state.genre = "全部";
  state.decade = "全部";
  state.status = "全部";
  state.sort = "number";
  state.query = "";
  renderSubnav();
  renderMovies();
}

function getAllGenres() {
  return [...new Set(movies.flatMap((movie) => movie.genres || []))].sort((a, b) => a.localeCompare(b));
}

function getDecade(year) {
  if (!year) return "年代未知";
  return `${Math.floor(year / 10) * 10}s`;
}

function getAllDecades() {
  return [...new Set(movies.map((movie) => getDecade(movie.year)))]
    .sort((a, b) => Number(a.slice(0, 4)) - Number(b.slice(0, 4)));
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

function renderStats() {
  document.querySelector("#movie-count").textContent = movies.length;
  document.querySelector("#category-count").textContent = categories.length;
  document.querySelector("#subcategory-count").textContent = categories.reduce((sum, item) => sum + item.subs.length, 0);
  document.querySelector("#watched-count").textContent = `${userState.watched.size}/${movies.length}`;
  document.querySelector("#progress-label").innerHTML = `已看 ${Math.round((userState.watched.size / movies.length) * 100)}%<progress value="${userState.watched.size}" max="${movies.length}"></progress>`;
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
      ${movie.posterUrl ? `<img src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} 海报" loading="eager" onload="this.classList.add('is-loaded')" onerror="this.closest('.poster').classList.add('poster-fallback');this.remove()">` : ""}
      <span>${escapeHtml(movie.number)}</span>
    </div>
    <div class="featured-body">
      <h3>${escapeHtml(movie.title)}</h3>
      <div class="featured-meta">
        <span>${escapeHtml(movie.year)}</span>
        <span>${escapeHtml(movie.category)} / ${escapeHtml(movie.subcategory)}</span>
        <span>${escapeHtml((movie.genres || []).slice(0, 3).join(", ") || movie.region)}</span>
      </div>
      <button class="button primary" type="button" data-featured-open="${escapeHtml(movie.number)}">查看详情</button>
    </div>
  `;
  featuredCard.querySelector("[data-featured-open]").addEventListener("click", () => openMovieDialog(movie.number));
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const categoryMovies = movies.filter((movie) => movie.category === category.name);
    const count = categoryMovies.length;
    const watched = categoryMovies.filter(isWatched).length;
    const percent = Math.round((watched / count) * 100);
    return `
      <article class="category-card" style="--accent: ${category.accent}" data-category="${category.name}" tabindex="0">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <div class="category-meta">
          <span>${category.subs.length} 小类</span>
          <span>${count} 部</span>
          <span>已看 ${percent}%</span>
        </div>
        <div class="category-progress" aria-label="${category.name} 已看 ${watched} / ${count}">
          <span style="width: ${percent}%"></span>
        </div>
      </article>
    `;
  }).join("");

  categoryGrid.querySelectorAll(".category-card").forEach((card) => {
    const selectCategory = () => {
      state.category = card.dataset.category;
      state.subcategory = "全部";
      categoryFilter.value = state.category;
      renderSubnav();
      renderMovies();
      updateLibraryHash();
      document.querySelector("#library").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", selectCategory);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") selectCategory();
    });
  });
}

function renderFilters() {
  categoryFilter.innerHTML = ["全部", ...categories.map((category) => category.name)]
    .map((name) => `<option value="${name}">${name}</option>`)
    .join("");
  genreFilter.innerHTML = ["全部", ...getAllGenres()]
    .map((name) => `<option value="${name}">${name === "全部" ? "全部类型" : name}</option>`)
    .join("");
  decadeFilter.innerHTML = ["全部", ...getAllDecades()]
    .map((name) => `<option value="${name}">${name === "全部" ? "全部年代" : name}</option>`)
    .join("");
}

function renderSubnav() {
  const category = categories.find((item) => item.name === state.category);
  const subs = category ? category.subs : [...new Set(movies.map((movie) => movie.subcategory))].slice(0, 24);
  subnav.innerHTML = ["全部", ...subs].map((name) => (
    `<button class="chip ${state.subcategory === name ? "active" : ""}" type="button" data-subcategory="${name}">${name}</button>`
  )).join("");

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
  if (state.query.trim()) filters.push(["query", "搜索", state.query.trim()]);
  if (state.category !== "全部") filters.push(["category", "大类", state.category]);
  if (state.subcategory !== "全部") filters.push(["subcategory", "小类", state.subcategory]);
  if (state.genre !== "全部") filters.push(["genre", "类型", state.genre]);
  if (state.decade !== "全部") filters.push(["decade", "年代", state.decade]);
  if (state.status !== "全部") filters.push(["status", "状态", state.status]);
  if (state.sort !== "number") filters.push(["sort", "排序", sortFilter.selectedOptions[0]?.textContent || state.sort]);
  if (state.view !== "grid") filters.push(["view", "视图", "列表"]);

  activeFilters.innerHTML = filters.map(([key, label, value]) => (
    `<button class="filter-pill" type="button" data-filter-key="${key}"><span>${escapeHtml(label)}</span>${escapeHtml(value)} ×</button>`
  )).join("");

  activeFilters.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.filterKey;
      if (key === "query") state.query = "";
      if (key === "category") {
        state.category = "全部";
        state.subcategory = "全部";
        renderSubnav();
      }
      if (key === "subcategory") {
        state.subcategory = "全部";
        renderSubnav();
      }
      if (key === "genre") state.genre = "全部";
      if (key === "decade") state.decade = "全部";
      if (key === "status") state.status = "全部";
      if (key === "sort") state.sort = "number";
      if (key === "view") {
        state.view = "grid";
        localStorage.setItem("movieViewMode", state.view);
      }
      renderMovies();
    });
  });
}

function getFilteredMovies() {
  const query = state.query.trim().toLowerCase();
  const filtered = movies.filter((movie) => {
    const inCategory = state.category === "全部" || movie.category === state.category;
    const inSubcategory = state.subcategory === "全部" || movie.subcategory === state.subcategory;
    const inGenre = state.genre === "全部" || (movie.genres || []).includes(state.genre);
    const inDecade = state.decade === "全部" || getDecade(movie.year) === state.decade;
    const inStatus =
      state.status === "全部" ||
      (state.status === "收藏" && isFavorite(movie)) ||
      (state.status === "已看" && isWatched(movie)) ||
      (state.status === "未看" && !isWatched(movie));
    const text = `${movie.title} ${movie.subtitle} ${movie.category} ${movie.subcategory} ${movie.region} ${(movie.genres || []).join(" ")}`.toLowerCase();
    const inQuery = !query || text.includes(query);
    return inCategory && inSubcategory && inGenre && inDecade && inStatus && inQuery;
  });

  return sortMovies(filtered);
}

function sortMovies(list) {
  return [...list].sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    if (state.sort === "year-asc") return (a.year || 9999) - (b.year || 9999) || a.title.localeCompare(b.title);
    if (state.sort === "year-desc") return (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title);
    return Number(a.number) - Number(b.number);
  });
}

function renderMovies() {
  const filtered = getFilteredMovies();
  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `当前显示 ${filtered.length} / ${movies.length} 部电影 · 已看 ${userState.watched.size} · 收藏 ${userState.favorites.size}`;
  movieGrid.classList.toggle("list-view", state.view === "list");
  movieGrid.innerHTML = filtered.map((movie) => `
    <article class="movie-card ${isWatched(movie) ? "is-watched" : ""} ${isFavorite(movie) ? "is-favorite" : ""}" data-movie-number="${escapeHtml(movie.number)}" tabindex="0" role="button" aria-label="查看 ${escapeHtml(movie.title)} 详情">
      <div class="poster" style="--poster-a: ${movie.posterA}; --poster-b: ${movie.posterB}">
        ${movie.posterUrl ? `<img src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} 海报" loading="lazy" onload="this.classList.add('is-loaded')" onerror="this.closest('.poster').classList.add('poster-fallback');this.remove()">` : ""}
        <span>${escapeHtml(movie.number)}</span>
        <div class="card-badges" aria-label="观影状态">
          ${isFavorite(movie) ? `<b>收藏</b>` : ""}
          ${isWatched(movie) ? `<b>已看</b>` : ""}
        </div>
      </div>
      <div class="movie-body">
        <h3 class="movie-title">${escapeHtml(movie.title)}</h3>
        <div class="movie-info">
          <span>${escapeHtml(movie.year)} · ${escapeHtml((movie.genres || []).slice(0, 2).join(", ") || movie.region)}</span>
          <span>${escapeHtml(movie.category)} / ${escapeHtml(movie.subcategory)}</span>
          <span>${escapeHtml(movie.subtitle)}</span>
          ${movie.imdbUrl ? `<span><a href="${escapeHtml(movie.imdbUrl)}" target="_blank" rel="noreferrer">IMDb</a></span>` : ""}
        </div>
        ${renderVideoLinks(movie, "video-links compact")}
      </div>
    </article>
  `).join("");
  syncControls();
  renderActiveFilters();
  updateLibraryHash();

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

  movieGrid.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => event.stopPropagation());
  });
}

function openMovieDialog(number) {
  const movie = movies.find((item) => item.number === number);
  if (!movie) return;
  activeDialogMovieNumber = movie.number;
  if (location.hash !== `#movie-${movie.number}`) history.replaceState(null, "", `#movie-${movie.number}`);

  dialogPoster.style.setProperty("--poster-a", movie.posterA);
  dialogPoster.style.setProperty("--poster-b", movie.posterB);
  dialogPoster.innerHTML = movie.posterUrl
    ? `<img src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} 海报" onload="this.classList.add('is-loaded')" onerror="this.remove()">`
    : `<span>${escapeHtml(movie.number)}</span>`;
  dialogNumber.textContent = `No. ${movie.number}`;
  dialogTitle.textContent = movie.title;
  dialogMeta.innerHTML = `
    <span>${escapeHtml(movie.year)}</span>
    <span>${escapeHtml(movie.region)}</span>
    <span>${escapeHtml(movie.category)}</span>
    <span>${escapeHtml(movie.subcategory)}</span>
    ${(movie.genres || []).map((genre) => `<span>${escapeHtml(genre)}</span>`).join("")}
  `;
  dialogNote.innerHTML = `归入“${escapeHtml(movie.category)} / ${escapeHtml(movie.subcategory)}”，类型标记：${escapeHtml((movie.genres || []).join(", ") || movie.subtitle)}。${movie.imdbUrl ? ` <a href="${escapeHtml(movie.imdbUrl)}" target="_blank" rel="noreferrer">查看 IMDb 条目</a>` : ""}`;
  dialogNote.innerHTML += renderVideoLinks(movie, "video-links dialog-video-links");
  renderDialogActions(movie);
  renderDialogNavigation(movie);
  dialogShare.textContent = "复制链接";

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
  dialogFavorite.textContent = isFavorite(movie) ? "取消收藏" : "收藏";
  dialogWatched.textContent = isWatched(movie) ? "取消已看" : "标记已看";
  dialogFavorite.classList.toggle("active", isFavorite(movie));
  dialogWatched.classList.toggle("active", isWatched(movie));
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

async function copyActiveMovieLink() {
  if (!activeDialogMovieNumber) return;
  const url = new URL(location.href);
  url.hash = `movie-${activeDialogMovieNumber}`;
  const text = url.toString();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    dialogShare.textContent = "已复制";
  } catch {
    dialogShare.textContent = "复制失败";
  }
}

function closeMovieDialog() {
  if (location.hash.startsWith("#movie-")) history.replaceState(null, "", "#library");
  activeDialogMovieNumber = null;
  if (typeof movieDialog.close === "function") {
    movieDialog.close();
  } else {
    movieDialog.removeAttribute("open");
  }
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderMovies();
});

filterToggle.addEventListener("click", () => {
  const collapsed = toolbar.classList.toggle("is-collapsed");
  filterToggle.setAttribute("aria-expanded", String(!collapsed));
});

gridViewButton.addEventListener("click", () => {
  state.view = "grid";
  localStorage.setItem("movieViewMode", state.view);
  renderMovies();
});

listViewButton.addEventListener("click", () => {
  state.view = "list";
  localStorage.setItem("movieViewMode", state.view);
  renderMovies();
});

featuredRefresh.addEventListener("click", () => {
  featuredOffset = (featuredOffset + 37) % movies.length;
  localStorage.setItem("featuredOffset", String(featuredOffset));
  renderFeatured();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.subcategory = "全部";
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
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
});

dialogPrev.addEventListener("click", () => openAdjacentMovie(-1));

dialogNext.addEventListener("click", () => openAdjacentMovie(1));

dialogShare.addEventListener("click", copyActiveMovieLink);

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
