# Zhuoxi Li — Personal Homepage / 李卓曦个人主页

A clean, bilingual (EN / 中文) academic personal homepage, built with plain HTML, CSS and JavaScript.
No build step required — just static files, hosted on **GitHub Pages**.

简洁的中英双语学术个人主页，纯 HTML / CSS / JavaScript 构建，无需编译，托管于 **GitHub Pages**。

## Upgrade To-Do / 升级任务清单

Tracking the planned upgrades. / 记录本轮计划中的升级项。

- [x] **1. Click-to-enlarge photos / 点击照片放大** — Add a lightbox so any photo (avatar, honor photos, scholarship & certificate images) opens enlarged on click. Needs JS overlay + CSS. / 增加灯箱效果，点击任意照片（头像、荣誉合影、奖学金及证书图片）可放大查看。需新增 JS 覆盖层与 CSS。
- [x] **2. Sort awards by date / 奖项按时间排序** — Reorder the Competitions timeline chronologically (currently mixed, e.g. 2025.01 → 2024.10 → 2025.12). Recommend newest-first. / 将竞赛时间线按时间重新排序（当前顺序混乱）。建议最新在前。
- [ ] **3. Scholarship photos / 奖学金放照片** — Add photo(s) to the Scholarships card. ⚠️ *Asset needed: scholarship photo(s).* / 在奖学金卡片中加入照片。⚠️ *需提供：奖学金相关照片。*
- [ ] **4. ISCSIC paper + DOI / 新增 ISCSIC 论文（含 DOI 跳转）** — Add a second publication (ISCSIC, **accepted / 已录用**) to the Publications block, with a clickable DOI link. ⚠️ *Info needed: paper title, author order, DOI URL.* / 在论文区新增第二篇（ISCSIC，**已录用**），并附可点击的 DOI 跳转链接。⚠️ *需提供：论文标题、作者排序、DOI 链接。*
- [ ] **5. Fix Personal Honors icon / 修复个人荣誉图标** — The star icon is broken (malformed `<i class="bi" bi-star-fill>` and bare `honor-card-full` attribute at index.html:689–691). Fix markup so the icon renders. / 个人荣誉的星标图标失效（标签写法错误），修正后正常显示。
- [ ] **6. Overall average score 93 / 综测平均分改为 93** — Update the Education stats to show an Overall (综测) average score of **93**. / 在教育背景的数据栏中将综测显示为平均分 **93**。
- [ ] **7. GPA trend line chart / 绩点变化折线图** — Add a line chart in the Education section showing GPA change across semesters. ⚠️ *Info needed: per-semester GPA values.* / 在教育背景中加入折线图，记录各学期绩点变化。⚠️ *需提供：各学期绩点数值。*
- [ ] **8. Competition certificates / 竞赛证书** — Show the corresponding certificate image to the right of each competition entry. ⚠️ *Assets needed: certificate images.* / 在每条竞赛经历右侧放上对应证书图片。⚠️ *需提供：各竞赛证书图片。*
- [ ] **9. MCM Euler Award highlight / 美赛欧拉奖标注** — Add a special badge on the MCM/ICM Outstanding Winner: **"全球唯一欧拉奖，杭电近 20 年首次" / "World's only Euler Award — HDU's first in ~20 years"**. / 在美赛（MCM/ICM）特等奖处特别标注上述说明。
- [ ] **10. ZJU hero background / 浙大封面背景** — Use a Zhejiang University photo as the hero (cover) background. ⚠️ *Asset needed: ZJU image.* / 将浙江大学照片作为首页封面背景。⚠️ *需提供：浙大相关图片。*

### Assets / info still needed / 仍需提供的素材与信息

- Scholarship photo(s) / 奖学金照片
- ISCSIC paper details: title, authors, **DOI URL** / ISCSIC 论文信息：标题、作者、**DOI 链接**
- Per-semester GPA values for the chart / 各学期绩点（用于折线图）
- Competition certificate images / 各竞赛证书图片
- A Zhejiang University (ZJU) cover image / 浙江大学封面图片

## Structure / 文件结构

```
.
├── index.html              # main page / 主页面
├── static/
│   ├── css/style.css       # styles / 样式
│   ├── js/main.js          # language toggle, menu, scroll / 语言切换、菜单、滚动
│   └── assets/img/
│       └── avatar.jpg      # profile photo / 头像
├── .nojekyll               # serve files as-is on GitHub Pages
└── README.md
```

## Deploy to GitHub Pages / 部署到 GitHub Pages

For a user site at `https://zhuoxili-jackie.github.io`, the repository **must** be named
`zhuoxili-jackie.github.io`. / 用户主页地址为 `https://zhuoxili-jackie.github.io`，仓库名 **必须** 为 `zhuoxili-jackie.github.io`。

```bash
git init
git add .
git commit -m "Add personal homepage"
git branch -M main
git remote add origin https://github.com/zhuoxili-jackie/zhuoxili-jackie.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
The site goes live at **https://zhuoxili-jackie.github.io** within a minute or two.

随后在仓库中：**Settings → Pages → Source 选择 `main` 分支、`(root)` 目录**，
约一两分钟后即可通过 **https://zhuoxili-jackie.github.io** 访问。

## Editing content / 修改内容

All content lives directly in `index.html`. Each translatable piece has two siblings:

页面所有内容都在 `index.html` 中。每段可翻译文字成对出现：

```html
<span class="en">English text</span><span class="zh">中文文本</span>
```

The language toggle in the navbar switches between them (preference is saved in the browser).

导航栏的语言按钮在两者间切换（偏好保存在浏览器本地）。
