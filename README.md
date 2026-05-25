# Zhuoxi Li — Personal Homepage / 李卓曦个人主页

A clean, bilingual (EN / 中文) academic personal homepage built with plain HTML, CSS and JavaScript — no build step, no framework, hosted on **GitHub Pages**.

简洁的中英双语学术个人主页，纯 HTML / CSS / JavaScript 构建，无需编译，直接托管于 **GitHub Pages**。

---

## Features / 功能亮点

| Feature                                                              | 功能                                |
| -------------------------------------------------------------------- | ----------------------------------- |
| Bilingual toggle (EN ↔ 中文), preference persisted in `localStorage` | 中英文一键切换，偏好持久化存储      |
| Responsive navbar with mobile hamburger menu                         | 响应式导航栏，移动端汉堡菜单        |
| Navbar scroll-shadow + back-to-top button                            | 滚动阴影导航栏 + 返回顶部按钮       |
| Image lightbox (click to enlarge, keyboard / tap to close)           | 图片灯箱（点击放大，键盘/点击关闭） |
| In-page PDF certificate modal (iframe viewer)                        | 证书 PDF 内嵌弹窗预览               |
| Scholarship photo carousel with swipe support                        | 奖学金照片轮播，支持触摸滑动        |
| Chart.js data-label charts                                           | Chart.js 数据标签图表               |
| Bootstrap Icons + Google Fonts (Newsreader, Mulish, Noto Sans SC)    | Bootstrap 图标 + Google 字体        |

---

## Structure / 文件结构

```
.
├── index.html                    # main page / 主页面
├── static/
│   ├── css/
│   │   └── style.css             # all styles / 全部样式
│   ├── js/
│   │   └── main.js               # language toggle, menu, scroll,
│   │                             #   lightbox, PDF modal, carousel
│   └── assets/
│       └── img/
│           ├── avatar.jpg                  # profile photo / 头像
│           ├── 封面图.jpg                   # cover image / 封面图
│           ├── gongyi-star.jpg             # award badge / 奖章
│           ├── qiuxin-star.jpg             # award badge / 奖章
│           ├── certificate/                # competition certificates (PDF)
│           │   ├── APMCM亚太地区大学生数学建模竞赛.pdf
│           │   ├── 全国一等奖——首届高校 ICT 产教融合创新大赛.pdf
│           │   ├── 全国二等奖——第二届高校 ICT 产教融合创新大赛.pdf
│           │   ├── 全国二等奖——第十九届"挑战杯"全国大学生课外学术科技作品竞赛"揭榜挂帅"专项赛.pdf
│           │   ├── 国际特等奖——2025年美国大学生数学建模竞赛和交叉学科建模竞赛（MCMICM）.pdf
│           │   ├── 省二等奖——2024年全国大学生数学建模竞赛.pdf
│           │   ├── 省银——第十九届"挑战杯"大学生课外学术科技作品竞赛.pdf
│           │   ├── 第一届浙江省大学生人工智能竞赛.pdf
│           │   └── 第十六届服创大赛东部区域赛.pdf
│           └── scholarships/               # scholarship photos / 奖学金照片
│               ├── scholarship-2023-first-class.jpg
│               ├── scholarship-2024-1-first-class.jpg
│               ├── scholarship-2024-2-first-class.jpg
│               ├── scholarship-2024-provincial.png
│               └── scholarship-2025-provincial.jpg
├── .gitignore
├── .nojekyll                     # tells GitHub Pages to serve files as-is
└── README.md
```

---

## Page Sections / 页面结构

| Section   | ID           | Content                                      |
| --------- | ------------ | -------------------------------------------- |
| Hero      | `#home`      | Name, affiliation, social links              |
| About     | `#about`     | Bio, research interests, contact card        |
| Education | `#education` | HDU degree, GPA stats, scholarships carousel |
| Research  | `#research`  | Projects and publications                    |
| Awards    | `#awards`    | Competition certificates and honors          |

---

## Deploy to GitHub Pages / 部署到 GitHub Pages

For a personal site at `https://zhuoxili-jackie.github.io`, the repository **must** be named `zhuoxili-jackie.github.io`.

用户主页地址为 `https://zhuoxili-jackie.github.io`，仓库名 **必须** 为 `zhuoxili-jackie.github.io`。

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

随后在仓库中：**Settings → Pages → Source 选择 `main` 分支、`(root)` 目录**，约一两分钟后即可通过 **https://zhuoxili-jackie.github.io** 访问。

---

## Editing Content / 修改内容

All content lives in `index.html`. Every translatable string has two sibling elements:

所有页面内容均位于 `index.html`，每段可翻译文本成对出现：

```html
<span class="en">English text</span><span class="zh">中文文本</span>
```

The language button in the navbar toggles between them; the user's choice is saved in `localStorage`.

导航栏语言按钮负责切换，用户偏好保存在浏览器 `localStorage` 中。

To add a new certificate, place the PDF in `static/assets/img/certificate/` and wire it up with a `data-cert-pdf` button in `index.html` — the PDF modal in `main.js` handles the rest automatically.

新增证书时，将 PDF 放入 `static/assets/img/certificate/`，然后在 `index.html` 中添加带 `data-cert-pdf` 属性的按钮，`main.js` 中的 PDF 弹窗会自动接管。
