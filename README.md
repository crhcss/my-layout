# @crhcss/my-layout

Vue3 布局组件库：Border 布局、主框架、面板、多标签、浮动面板、栅格、分割条。

依赖 `vue ^3.3.0`（外部化，不打包进产物），无其它运行时依赖。

## 安装

### 方式一：CDN 直引（UMD，无需构建）

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/crhcss/my-layout@v1.0.0/dist/style.css">
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/gh/crhcss/my-layout@v1.0.0/dist/my-layout.umd.js"></script>
<script>
  Vue.createApp({}).use(window.MyLayout).mount('#app')
</script>
```

### 方式二：下载产物

从 Releases 下载 `my-layout-dist.zip`，解压后引入：

```js
import MyLayout from './my-layout/my-layout.js'
import './my-layout/style.css'
```

### 方式三：源码集成

`src/mylayout/` 是自包含目录（components / composables / styles），无业务依赖，可整体拷入项目直接使用：

```js
import MyLayout from '@/mylayout/index.js'
```

> 发布仓库 `crhcss/my-layout`（GitHub 公共仓库）**只含打包文件**（`package.json` + `dist/`），不含源码；源码真相源在 gitee（`https://gitee.com/crhcss/my-webvue`）。双击 `publish.bat` 会构建并把「仅打包文件」推送到 GitHub，第三方即可通过上述 CDN / git 安装使用。
>
> 安装：`npm i github:crhcss/my-layout`（默认分支）/ `npm i github:crhcss/my-layout#v1.0.0`（锁定版本）。

## 使用

全局注册：

```js
import { createApp } from 'vue'
import MyLayout from '@crhcss/my-layout'
import '@crhcss/my-layout/style.css'

createApp(App).use(MyLayout).mount('#app')
```

按需引入：

```js
import { MyBorderLayout, MyMainFrame, MyPanel } from '@crhcss/my-layout'
```

**样式必须单独引入**（`style.css`），组件不带内联样式。

## 组件

`MyBorderLayout` · `MyMainFrame` · `MyGridLayout` · `MyPanel` · `MyPanelContent` · `MyTabs` · `MyFloatPanel` · `MySplitter` · `MyApiDoc`

主题（`light` / `light-blue` / `dark`）与工具类：`normalizeTheme` · `themeClass` · `useThemeContext` · `THEMES` · `DEFAULT_THEME`

## API 文档

- **在线网页版**：<https://crhcss.github.io/my-layout/api-docs.html>（各组件 props / 事件 / 方法 / 插槽速查）
- **Markdown 版**：包内 `docs/API.md`（`node_modules/@crhcss/my-layout/docs/API.md` 或仓库根 `docs/API.md`）
- **组件内置**：应用里放一个 `<MyApiDoc :visible="visible" @close="visible = false" />`，运行时弹层查看全部 API
- 重新生成：`npm run build:docs`（数据源 `src/mylayout/composables/apiDocs.js`，改接口后同步维护）

## 本地开发

```bash
npm install
npm run dev        # demo 站点
npm run build:lib  # 构建库产物到 dist/
```

## License

MIT
