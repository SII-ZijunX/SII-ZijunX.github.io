# Zijun Xu academic homepage

这是徐梓钧的个人学术主页，使用静态 HTML/CSS/JavaScript，无需安装依赖或构建。

## 本地预览

在此文件夹执行 `python3 -m http.server 8000`，打开 http://localhost:8000 。

## 修改内容

- `index.html`：简介、教育经历和论文列表，直接编辑即可。
- `personal.css`：个人样式覆盖；`main.css` 保留原模板样式。
- `site.js`：论文筛选、移动端菜单和返回顶部。
- `images/`：论文插图、机构图标与头像。`zijun-xu.png` 是从本人提供的简历中直接提取的原始 270 × 270 照片，以正方形比例显示。
- `publications.json`：本次整理的论文资料备份；修改它不会自动修改 HTML。

## 内容依据与待补资料

身份和中文姓名由本人提供。GitHub 账号 SII-ZijunX 由本人确认。
About 中的导师、合作经历、研究兴趣和联系邮箱由本人提供；未推断入学时间。
Research 栏目的论文主题归纳仍为初稿，可进一步润色。
头像于 2026-11-04 从本人提供的简历中提取并加入主页；完整教育经历、奖项与学术服务尚待进一步整理到页面。
Experience 于 2026-11-04 根据本人提供的简历整理，收录 SII–Noematrix 联合实验室（2026.03–2026.08）、上海人工智能实验室（2026.03–2026.07）、美的 AI 研究院（2025.06–2025.11）三段经历。上海人工智能实验室的开始时间按本人后续更正改为 2026.03。职务按简历中的项目负责人/项目成员译为 Project Lead/Project Contributor；日期根据简历及本人更正记录整理。原简历文件未加入仓库。
Experience 沿用参考模板的 timeline-logo、职位 @ 机构、简短方向描述及右侧日期样式。Research Contributor 表示科研项目参与者。
Google Scholar 资料读取日期：2026-11-03，https://scholar.google.com/citations?user=ja6JboUAAAAJ 。
Scholar 列表中的 HELP 与 Maximizing Human Efficiency 为同一 arXiv:2607.09776 的不同标题，本页合并为一条，以最新标题及作者为准。
仅收入该 Scholar 页面列出的 10 篇唯一论文；没有加入通过同名搜索发现的其他论文。
CAP/CMoE/Rhythm 的会议名称来自其 arXiv 页面当前的 Accepted at 说明。
Selected 显示 5 篇代表作：ForceWAM、CAP、PAM、CMoE 和 HGS-Planner；All 显示全部 10 篇。
ForceWAM 的共同一作标记与原模板及公开项目资料一致。
CMoE 为 ICRA 2026 论文，Shihao Ma、Hongjin Chen、Zijun Xu 的共同一作星号由本人于 2026-11-04 确认；不额外显示共同一作标签。
CAP 和 CMoE 的 Website/Code 地址于 2026-11-04 根据各自官方项目页核对，均使用 Hoshi-No-Ai 账号下的项目及仓库。CMoE 已包含实现代码；CAP 仓库仍注明代码待发布，因此显示 Code (coming soon)。

## 来源与署名

主页布局和 main.css 改编自 https://github.com/SummerWXK/SummerWXK.github.io ，参考提交 5653b2e66b9ceef6d4f46caafd3d41c6c2a14e50。
保留 Xinkai Wang 与其上游 Jun CEN 的页脚署名。未复制原作者的履历、头像、博客、站点验证文件和访客统计代码。
背景及本地字体延用参考模板；字体采用各自的 SIL OFL 1.1，许可证见 fonts/。
论文插图来自作者公开论文或项目页；原作品权利归各权利人。
每篇论文的标题、作者、年份、来源链接保存在 publications.json。
Experience 的 Noematrix 图标沿用参考模板的 images/noematrix-logo.png；上海人工智能实验室与美的标识来自各自官网，保存在本地，不通过第三方图标服务加载：
- https://www.shlab.org.cn/static/asset/img/share-logo.png
- https://cn-res.midea.com/content/dam/mideacn-aem/test/logo-1x.png

## GitHub Pages

目标仓库：SII-ZijunX/SII-ZijunX.github.io 。
仓库目前为 Private，Pages 配置已移除。本地编辑和推送源码不代表授权重新公开发布。
未来如需公开，原目标地址为 https://sii-zijunx.github.io/ 。
只有本人明确要求重新上线后，才重新启用 GitHub Pages。

- `images/cap.png`: https://arxiv.org/html/2609.11553v1/fig1_teaser.png
- `images/help.png`: https://arxiv.org/html/2607.09776v2/SystemArchitecture.png
- `images/cmoe.jpg`: https://arxiv.org/html/2603.03067v2/figure/teaser.jpg
- `images/rhythm.png`: https://arxiv.org/html/2603.02856v3/figure/pipeline_new.png
- `images/hgs-planner.png`: https://arxiv.org/html/2409.17624v1/teaser.png
- `images/drive-in-corridors.png`: https://arxiv.org/html/2504.07507v2/pipeline5.png
- `images/pam.png`: https://tinda24.github.io/pam/static/images/coarse.png
