# Zijun Xu academic homepage

这是徐梓钧的个人学术主页，使用静态 HTML/CSS/JavaScript，无需安装依赖或构建。

## 本地预览

在此文件夹执行 `python3 -m http.server 8000`，打开 http://localhost:8000 。

## 修改内容

- `index.html`：简介、教育经历和论文列表，直接编辑即可。
- `personal.css`：个人样式覆盖；`main.css` 保留原模板样式。
- `site.js`：论文筛选、移动端菜单和返回顶部。
- `images/`：论文插图。头像目前用姓名首字母占位；可以将 identity-panel 替换为带 alt 的 img。
- `publications.json`：本次整理的论文资料备份；修改它不会自动修改 HTML。

## 内容依据与待补资料

身份和中文姓名由本人提供。GitHub 账号 SII-ZijunX 由本人确认。
简介和研究方向是根据论文主题撰写的初稿，需本人进一步润色；没有推断导师或入学时间。
未提供的照片、邮箱、本硕经历、奖项、审稿服务未填写。
Google Scholar 资料读取日期：2026-11-03，https://scholar.google.com/citations?user=ja6JboUAAAAJ 。
Scholar 列表中的 HELP 与 Maximizing Human Efficiency 为同一 arXiv:2607.09776 的不同标题，本页合并为一条，以最新标题及作者为准。
仅收入该 Scholar 页面列出的 10 篇唯一论文；没有加入通过同名搜索发现的其他论文。
CAP/CMoE/Rhythm 的会议名称来自其 arXiv 页面当前的 Accepted at 说明。
Selected 是初稿的代表作选择，不意味着只有这几篇已发表；All 显示全部 10 篇。
ForceWAM 的共同一作标记与原模板及公开项目资料一致。

## 来源与署名

主页布局和 main.css 改编自 https://github.com/SummerWXK/SummerWXK.github.io ，参考提交 5653b2e66b9ceef6d4f46caafd3d41c6c2a14e50。
保留 Xinkai Wang 与其上游 Jun CEN 的页脚署名。未复制原作者的履历、头像、博客、站点验证文件和访客统计代码。
背景及本地字体延用参考模板；字体采用各自的 SIL OFL 1.1，许可证见 fonts/。
论文插图来自作者公开论文或项目页；原作品权利归各权利人。
每篇论文的标题、作者、年份、来源链接保存在 publications.json。

## GitHub Pages

目标仓库：SII-ZijunX/SII-ZijunX.github.io 。
目标地址：https://sii-zijunx.github.io/ 。
GitHub 仓库 Settings → Pages → Deploy from a branch → main / (root)。
部署后提交到 main 的更新会自动发布。

- `images/cap.png`: https://arxiv.org/html/2609.11553v1/fig1_teaser.png
- `images/help.png`: https://arxiv.org/html/2607.09776v2/SystemArchitecture.png
- `images/cmoe.jpg`: https://arxiv.org/html/2603.03067v2/figure/teaser.jpg
- `images/rhythm.png`: https://arxiv.org/html/2603.02856v3/figure/pipeline_new.png
- `images/hgs-planner.png`: https://arxiv.org/html/2409.17624v1/teaser.png
- `images/drive-in-corridors.png`: https://arxiv.org/html/2504.07507v2/pipeline5.png
- `images/pam.png`: https://tinda24.github.io/pam/static/images/coarse.png
