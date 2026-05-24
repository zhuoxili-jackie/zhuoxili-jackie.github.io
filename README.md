# Zhuoxi Li — Personal Homepage / 李卓曦个人主页

A clean, bilingual (EN / 中文) academic personal homepage, built with plain HTML, CSS and JavaScript.
No build step required — just static files, hosted on **GitHub Pages**.

简洁的中英双语学术个人主页，纯 HTML / CSS / JavaScript 构建，无需编译，托管于 **GitHub Pages**。

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
