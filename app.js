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

const categories = [
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

function buildMovies() {
  const movies = [];
  const usedTitles = new Set();
  const posterData = Array.isArray(globalThis.moviePosterData) ? globalThis.moviePosterData : [];
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
        movies.push({
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
        });
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
  query: "",
};

const categoryGrid = document.querySelector("#category-grid");
const movieGrid = document.querySelector("#movie-grid");
const subnav = document.querySelector("#subnav");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const movieDialog = document.querySelector("#movie-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogPoster = document.querySelector("#dialog-poster");
const dialogNumber = document.querySelector("#dialog-number");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogNote = document.querySelector("#dialog-note");

function renderStats() {
  document.querySelector("#movie-count").textContent = movies.length;
  document.querySelector("#category-count").textContent = categories.length;
  document.querySelector("#subcategory-count").textContent = categories.reduce((sum, item) => sum + item.subs.length, 0);
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const count = movies.filter((movie) => movie.category === category.name).length;
    return `
      <article class="category-card" style="--accent: ${category.accent}" data-category="${category.name}" tabindex="0">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <div class="category-meta">
          <span>${category.subs.length} 小类</span>
          <span>${count} 部</span>
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

function getFilteredMovies() {
  const query = state.query.trim().toLowerCase();
  return movies.filter((movie) => {
    const inCategory = state.category === "全部" || movie.category === state.category;
    const inSubcategory = state.subcategory === "全部" || movie.subcategory === state.subcategory;
    const text = `${movie.title} ${movie.subtitle} ${movie.category} ${movie.subcategory} ${movie.region}`.toLowerCase();
    const inQuery = !query || text.includes(query);
    return inCategory && inSubcategory && inQuery;
  });
}

function renderMovies() {
  const filtered = getFilteredMovies();
  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `当前显示 ${filtered.length} / ${movies.length} 部电影`;
  movieGrid.innerHTML = filtered.map((movie) => `
    <article class="movie-card" data-movie-number="${escapeHtml(movie.number)}" tabindex="0" role="button" aria-label="查看 ${escapeHtml(movie.title)} 详情">
      <div class="poster" style="--poster-a: ${movie.posterA}; --poster-b: ${movie.posterB}">
        ${movie.posterUrl ? `<img src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} 海报" loading="lazy" onerror="this.closest('.poster').classList.add('poster-fallback');this.remove()">` : ""}
        <span>${escapeHtml(movie.number)}</span>
      </div>
      <div class="movie-body">
        <h3 class="movie-title">${escapeHtml(movie.title)}</h3>
        <div class="movie-info">
          <span>${escapeHtml(movie.year)} · ${escapeHtml(movie.region)}</span>
          <span>${escapeHtml(movie.category)} / ${escapeHtml(movie.subcategory)}</span>
          <span>${escapeHtml(movie.subtitle)}</span>
        </div>
      </div>
    </article>
  `).join("");

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

  dialogPoster.style.setProperty("--poster-a", movie.posterA);
  dialogPoster.style.setProperty("--poster-b", movie.posterB);
  dialogPoster.innerHTML = movie.posterUrl
    ? `<img src="${escapeHtml(movie.posterUrl)}" alt="${escapeHtml(movie.title)} 海报" onerror="this.remove()">`
    : `<span>${escapeHtml(movie.number)}</span>`;
  dialogNumber.textContent = `No. ${movie.number}`;
  dialogTitle.textContent = movie.title;
  dialogMeta.innerHTML = `
    <span>${escapeHtml(movie.year)}</span>
    <span>${escapeHtml(movie.region)}</span>
    <span>${escapeHtml(movie.category)}</span>
    <span>${escapeHtml(movie.subcategory)}</span>
  `;
  dialogNote.textContent = `这部电影位于“${movie.category} / ${movie.subcategory}”。当前版本已接入真实海报，后续可以继续补充导演、评分、简介和观影状态。`;

  if (typeof movieDialog.showModal === "function") {
    movieDialog.showModal();
  } else {
    movieDialog.setAttribute("open", "");
  }
}

function closeMovieDialog() {
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

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.subcategory = "全部";
  renderSubnav();
  renderMovies();
});

dialogClose.addEventListener("click", closeMovieDialog);

movieDialog.addEventListener("click", (event) => {
  if (event.target === movieDialog) closeMovieDialog();
});

renderStats();
renderCategories();
renderFilters();
renderSubnav();
renderMovies();
