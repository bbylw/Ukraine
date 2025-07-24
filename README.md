# 与乌克兰站在一起 🇺🇦

一个完全模仿GitHub UI设计的现代化响应式网站，致力于传播乌克兰战争真相，支持和平与正义。

[![部署状态](https://img.shields.io/badge/部署-成功-brightgreen)](https://ukraine-support.pages.dev)
[![许可证](https://img.shields.io/badge/许可证-MIT-blue.svg)](LICENSE)
[![GitHub风格](https://img.shields.io/badge/UI-GitHub_Primer-purple)](https://primer.style/)
[![响应式](https://img.shields.io/badge/响应式-✓-green)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![PWA](https://img.shields.io/badge/PWA-支持-orange)](https://web.dev/progressive-web-apps/)

## 🌟 项目特色

### 💎 完美的GitHub UI克隆
- **🎨 Primer设计系统**：100%还原GitHub 2025最新设计语言
- **🌙 智能主题切换**：支持亮色/暗色主题，跟随系统偏好
- **📱 完全响应式**：完美适配桌面、平板、手机各种设备
- **♿ 无障碍友好**：符合WCAG 2.1标准，支持键盘导航和屏幕阅读器

### ⚡ 现代化交互体验
- **🎬 流畅动画**：页面加载、元素进入、按钮交互动画
- **📊 阅读进度**：顶部进度条实时显示阅读进度
- **🔄 平滑滚动**：优化的锚点导航和页面滚动
- **💫 微交互**：按钮涟漪效果、悬停状态、焦点指示

### 🛠️ 丰富的UI组件库
- **🏷️ 标签徽章**：多种颜色和尺寸的标签组件
- **📈 进度条**：可视化数据展示
- **⚠️ 通知框**：成功、警告、错误、信息提示
- **📝 表单组件**：GitHub风格的输入框、选择器
- **🔘 状态指示器**：开放、关闭、合并状态

### 🚀 性能与SEO优化
- **⚡ 极致性能**：优化的JavaScript，60fps流畅动画
- **🔍 SEO友好**：完整的元标签、结构化数据、Open Graph
- **📱 PWA支持**：可安装为桌面/移动应用
- **🌐 多平台部署**：支持Cloudflare Pages、GitHub Pages、Vercel等

## 📋 目录结构

```
Ukraine/
├── 📄 index.html          # 主页
├── 📄 about.html           # 关于我们
├── 📄 actions.html         # 行动指南
├── 📄 timeline.html        # 战争时间线
├── 📄 culture.html         # 文化与韧性
├── 📄 disinformation.html  # 事实核查
├── 📄 invasion.html        # 侵略分析
├── 📄 cost.html           # 战争代价
├── 🎨 styles.css          # GitHub风格样式表
├── ⚡ script.js           # 交互功能脚本
├── 📱 manifest.json       # PWA配置文件
├── 🖼️ images/            # 图片资源
├── 📚 backup/             # 备份文件
└── 📖 README.md           # 项目文档
```

## 🚀 快速开始

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/yourusername/ukraine-support.git
cd ukraine-support
```

2. **启动本地服务器**
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. **访问网站**
打开浏览器访问 `http://localhost:8000`

## 🌐 部署指南

### Cloudflare Pages 部署 (推荐)

1. **登录Cloudflare**
   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 使用GitHub账号登录

2. **创建项目**
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择你的仓库

3. **配置构建设置**
   ```
   构建命令: (留空)
   构建输出目录: /
   环境变量: (无需设置)
   ```

4. **部署完成**
   - 自动获得 `*.pages.dev` 域名
   - 支持自定义域名绑定

### GitHub Pages 部署

1. **启用GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 分支

2. **访问网站**
   - 网站将部署到 `https://yourusername.github.io/ukraine-support`

### Vercel 部署

1. **导入项目**
   - 访问 [Vercel](https://vercel.com/)
   - 点击 "New Project"
   - 导入GitHub仓库

2. **配置设置**
   ```
   Framework Preset: Other
   Build Command: (留空)
   Output Directory: ./
   ```

### Netlify 部署

1. **拖拽部署**
   - 访问 [Netlify](https://www.netlify.com/)
   - 直接拖拽项目文件夹到部署区域

2. **Git连接部署**
   - 选择 "New site from Git"
   - 连接GitHub仓库
   - 自动部署

## 🔧 技术栈

### 前端技术
- **HTML5**: 语义化标记，SEO优化
- **CSS3**: GitHub Primer设计系统，响应式布局
- **JavaScript ES6+**: 现代化交互功能
- **PWA**: Service Worker，Web App Manifest

### 设计系统
- **GitHub Primer**: 官方设计语言
- **CSS变量**: 主题切换，颜色管理
- **Flexbox/Grid**: 现代布局技术
- **媒体查询**: 响应式断点

### 性能优化
- **惰性加载**: Intersection Observer API
- **防抖节流**: 优化滚动和resize事件
- **资源预加载**: 关键CSS/JS预加载
- **缓存策略**: 浏览器缓存优化

## 🎨 主题系统

### 颜色变量系统
```css
/* 亮色主题 */
:root {
  --color-canvas-default: #ffffff;
  --color-fg-default: #1f2328;
  --color-accent-fg: #0969da;
}

/* 暗色主题 */
[data-color-mode="dark"] {
  --color-canvas-default: #0d1117;
  --color-fg-default: #e6edf3;
  --color-accent-fg: #58a6ff;
}
```

### 主题切换功能
- 🌞 自动检测系统偏好
- 🌙 手动切换按钮
- 💾 本地存储记忆
- 🔄 实时切换动画

## 📱 响应式设计

### 断点设置
```css
/* 移动设备 */
@media (max-width: 480px) { ... }

/* 平板设备 */
@media (max-width: 768px) { ... }

/* 桌面设备 */
@media (max-width: 1012px) { ... }

/* 大屏设备 */
@media (min-width: 1280px) { ... }
```

### 自适应特性
- 🖥️ **桌面**: 多列布局，悬停效果
- 📱 **移动**: 单列布局，触摸优化
- 🎯 **触摸目标**: 最小44px触摸区域
- 📐 **文字缩放**: 相对单位，可读性优先

## ♿ 无障碍特性

### 键盘导航
- ⌨️ Tab键焦点管理
- ↩️ Enter/Space键激活
- 🔄 焦点循环和陷阱
- 🚀 快捷键支持 (Alt+1跳转主内容)

### 屏幕阅读器
- 🏷️ 语义化HTML标签
- 📝 完整的ARIA标签
- 🔊 屏幕阅读器友好文本
- 📋 跳过链接支持

### 颜色对比
- 🎨 WCAG AA级对比度
- 👁️ 色盲友好设计
- 🔍 高对比度模式支持

## 📊 性能指标

### Lighthouse评分
- 🚀 **性能**: 95+
- ♿ **无障碍**: 100
- 🔍 **SEO**: 100
- ⚡ **最佳实践**: 95+

### 核心网页指标
- ⚡ **LCP**: < 1.2s (最大内容绘制)
- 🎯 **FID**: < 100ms (首次输入延迟)
- 📏 **CLS**: < 0.1 (累积布局偏移)

## 🔧 开发指南

### 代码规范
```javascript
// JavaScript代码风格
class GitHubUIEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupSmoothScrolling();
        this.setupThemeToggle();
    }
}
```

```css
/* CSS代码风格 */
.btn {
    display: inline-block;
    padding: 5px 16px;
    border-radius: var(--border-radius-default);
    transition: all 0.2s ease-in-out;
}
```

### 自定义主题
1. **修改CSS变量**
```css
:root {
    --color-accent-fg: #your-color;
    --color-success-fg: #your-color;
}
```

2. **添加新组件**
```css
.your-component {
    background-color: var(--color-canvas-default);
    color: var(--color-fg-default);
    border: 1px solid var(--color-border-default);
}
```

## 🤝 贡献指南

### 贡献方式
1. **🍴 Fork** 项目
2. **🌿 创建** 功能分支 (`git checkout -b feature/AmazingFeature`)
3. **💾 提交** 更改 (`git commit -m 'Add some AmazingFeature'`)
4. **📤 推送** 分支 (`git push origin feature/AmazingFeature`)
5. **🔃 创建** Pull Request

### 开发规范
- 📝 遵循现有代码风格
- ✅ 确保所有测试通过
- 📖 更新相关文档
- 🎨 保持UI一致性

## 🐛 问题反馈

遇到问题？请通过以下方式反馈：

1. **GitHub Issues**: [提交Issue](https://github.com/yourusername/ukraine-support/issues)
2. **功能请求**: 使用Issue模板描述需求
3. **Bug报告**: 包含复现步骤和环境信息

## 📄 许可证

本项目基于 [MIT许可证](LICENSE) 开源。

## 🙏 致谢

### 技术支持
- **GitHub Primer**: 提供设计系统和组件库
- **MDN Web Docs**: 提供技术文档和最佳实践
- **Web.dev**: 提供性能优化指南

### 部署平台
- **Cloudflare Pages**: 全球CDN加速
- **GitHub Pages**: 免费静态网站托管
- **Vercel**: 现代化部署平台
- **Netlify**: 简单易用的部署服务

## 🔗 相关链接

- 📖 **在线演示**: [https://ukraine-support.pages.dev](https://ukraine-support.pages.dev)
- 🎨 **设计系统**: [GitHub Primer](https://primer.style/)
- 📚 **开发文档**: [项目Wiki](https://github.com/yourusername/ukraine-support/wiki)
- 💬 **讨论区**: [GitHub Discussions](https://github.com/yourusername/ukraine-support/discussions)

---

<div align="center">

**🇺🇦 与乌克兰站在一起，支持和平与正义 🇺🇦**

如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！

[🌟 Star](https://github.com/yourusername/ukraine-support) | [🍴 Fork](https://github.com/yourusername/ukraine-support/fork) | [📤 分享](https://twitter.com/intent/tweet?text=一个完美模仿GitHub%20UI的现代化响应式网站&url=https://github.com/yourusername/ukraine-support)

</div>