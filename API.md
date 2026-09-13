# @crhcss/my-layout API 文档

> 版本 v1.1.0 · 生成自 src/mylayout/composables/apiDocs.js（npm run build:docs）

**组件索引**：[MyBorderLayout](#myborderlayout) · [MyMainFrame](#mymainframe) · [MyPanel](#mypanel) · [MyPanelContent](#mypanelcontent) · [MyTabs](#mytabs) · [MySplitter](#mysplitter) · [MyFloatPanel](#myfloatpanel) · [MyGridLayout](#mygridlayout) · [Composables（组合式函数）](#composables-组合式函数-)

## MyBorderLayout

核心 Border 布局容器。五区（north / west / center / east / south）CSS Grid 实现，支持嵌套布局、区域优先级、最大化（center / layout / page）、面板导航、区域悬浮（item.float）与区域面板多标签（item.tab）。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `layoutId` | String | `'BorderLayout'` | 布局唯一标识；嵌套布局通过 layoutId 体系定位。 |
| `parentLayoutId` | String | `''` | 父布局 id（子布局自动带出，用于向上追溯）。 |
| `regionLevel` | String \| Number | `'ns'` | 区域优先级：ns(上下左右) / ew(左右上下) / nws(上左下右) / nwe(上左右下)，也接受 1/2/3/4 与全称。 |
| `maxType` | String | `'center'` | 全局默认最大化类型：center(覆盖自身+中间) / layout(整个布局) / page(整个页面+全屏)。优先级：item.maxType > regions[region].maxType > 全局 maxType > "center"。 |
| `animate` | Boolean | `true` | 是否启用尺寸 / 最大化过渡动画。 |
| `animationDuration` | Number | `260` | 动画时长（毫秒）。 |
| `regions` | Object | `{}` | 区域配置：{ north:{active,panels,show}, west:{...}, center:{...}, east:{...}, south:{...} }。每个 panel item 参数集 ≈ MyPanel，另加布局参数 float（区域悬浮在中间区域之上）/ tab（{ items, active, position, closable, hasTool, contextmenu, menu, titleVertical } 多标签）。 |
| `autoPanel` | Boolean | `false` | true 时区域自动包一层 MyPanel，插槽内容作为面板 body。 |
| `theme` | String | `''` | 主题：空值继承父级；light / light-blue / dark。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `update:regions` | Object | regions 变化（v-model:regions）。 |
| `update:sizes` | Object | 区域尺寸变化（拖拽时）。 |
| `show` | { region, name, layoutId, tab? } | 面板 / 区域显示 —— 打开 / 激活面板、展开区域都走这里；tab 相关动作附 tab（标签 name）。 |
| `hide` | { region, name, layoutId } | 面板 / 区域隐藏 —— 面板最小化按钮也走这里，区域随之收起。 |
| `max` | { region, name, layoutId, mode } | 区域最大化。 |
| `restore` | { region, name, layoutId } | 区域还原。 |
| `close` | { region, name, layoutId, tab? } | 面板关闭并移除；带 tab 时表示关闭的是该标签（面板保留）。 |
| `split` | { region, name, layoutId, size } | 分割条拖拽移动。 |
| `refresh` | { region, name, layoutId, tab? } | 面板 / 标签刷新（面板刷新按钮或标签右键菜单）；带 tab 时表示刷新的是该标签（重建内容）。 |
| `menu-select` | { region, name, layoutId, tab, action } | 标签右键菜单里的自定义项被点击（内置的关闭 / 关闭其它 / 关闭全部 / 刷新走 close / refresh 事件）。 |
| `ready` | api | 组件挂载完成，回传完整 API 实例。 |

### Methods（defineExpose 暴露方法，通过 ref 调用）

| 签名 | 返回 | 说明 |
| --- | --- | --- |
| `getCurName(region, layoutId?)` | String \| null | 获取区域当前激活面板 name。 |
| `getItem(region, name?, layoutId?)` | Object | 读取面板 item 配置；name 空取当前激活。 |
| `exist(region, name?, layoutId?)` | Boolean | 面板是否存在。 |
| `isActive(region, name?, layoutId?)` | Boolean | name 是否为当前激活且区域未收缩。 |
| `getPanels(region, layoutId?)` | Array | 返回区域面板数组（副本）。 |
| `open(region, item, layoutId?)` | Object \| null | 打开面板（同名则显示并激活）—— 显示 / 激活面板统一走 show。item: { name, title, ...MyPanel 参数, 内容来源 url(+params) / html / component(+props，支持对象·全局名·相对项目根目录路径) }。 |
| `openTab(item, region?, name?, layoutId?)` | Object \| null | 在区域面板里打开 tab（面板没有 tab 配置则就地建一个承载面板）。item: { name, title, iconCls?, url(+params) / html / component(+props) }；新建承载面板时 item 上的 position / closable / hasTool / contextmenu / menu / titleVertical 一并作为 tab 配置（默认可关闭）；name 缺省取该区域当前激活面板，tab 同名则更新并激活。 |
| `closeTab(tabName, region?, name?, layoutId?)` | Boolean | 关闭 tab（移除标签）；关的是当前标签则激活相邻标签，面板保留。 |
| `closeOtherTabs(tabName, region?, name?, layoutId?)` | Boolean | 关闭其它标签（保留 tabName），每个被移除的标签发一次 close 事件。 |
| `closeAllTabs(region?, name?, layoutId?)` | Boolean | 关闭全部标签，每个被移除的标签发一次 close 事件。 |
| `setActiveTab(tabName, region?, name?, layoutId?)` | Boolean | 激活已存在的 tab。 |
| `refreshTab(tabName?, region?, name?, layoutId?)` | Boolean | 刷新标签（重建内容），tabName 缺省取当前标签；发 refresh 事件（附 tab）。 |
| `refresh(region?, name?, layoutId?)` | Boolean | 刷新面板：带 tab 的面板刷新其当前标签，否则只发 refresh 事件（面板刷新按钮也走这里）。 |
| `getTabs(region?, name?, layoutId?) / getActiveTab(region?, name?, layoutId?)` | Array \| String | 读取区域面板的标签列表 / 当前标签 name。 |
| `notifyTab(action, region, name?, tabName?, extra?)` | Boolean | MyTabs 委托入口（action: change / close / closeOthers / closeAll / refresh / menu）。 |
| `remove(region, name?, layoutId?)` | Boolean | 关闭并移除面板；有上级（parentName）则回到上级面板，否则切到区域内其它可见面板。 |
| `removeActive(region, layoutId?)` | Boolean | 移除当前激活面板。 |
| `removeAll(region, layoutId?)` | void | 清空区域所有面板。 |
| `show(region, name?, layoutId?)` | Boolean | 【显隐唯一入口】显示面板并激活（同时解开隐藏），区域随之出现。name 缺省取该区域当前激活面板；没有托管面板的区域（内容全走插槽）改为启用区域。 |
| `hide(region, name?, layoutId?)` | Boolean | 【显隐唯一入口】隐藏某面板（不删除）。有上级（parentName）则回到上级面板，区域回到上级内容；无上级则激活仍指向它，区域随之收起，再 show(region) 即原样展开。没有托管面板的区域改为停用区域。 |
| `isVisible(region, layoutId?)` | Boolean | 区域是否可见 —— 由「当前激活面板是否可见」派生；center 永远占位。 |
| `prev(region, name?, layoutId?)` | Boolean | 激活上一个可见面板（同级线性切换）。 |
| `next(region, name?, layoutId?)` | Boolean | 激活下一个可见面板（同级线性切换）。 |
| `getPrevName(region, name?, layoutId?)` | String \| null | 上一个面板 name（不切换）。 |
| `getNextName(region, name?, layoutId?)` | String \| null | 下一个面板 name（不切换）。 |
| `up(region, name?, layoutId?) / getUpName(region, name?, layoutId?)` | Boolean \| String \| null | 上下级导航：激活 / 读取上级面板（parentName 指向的同区域面板，不存在则为 null）。 |
| `down(region, name?, layoutId?) / getDownName(region, name?, layoutId?)` | Boolean \| String \| null | 进入 / 读取下级面板：优先上级记录的最后一次进入（lastName），其次第一个可见下级。 |
| `max(region, name?, layoutId?)` | void | 区域最大化（按 item / 区域 / 全局 maxType）。 |
| `restore(region, name?, layoutId?)` | void | 区域还原。 |
| `maxed(region)` | Boolean | 区域是否处于最大化态。 |
| `setSize(region, size, layoutId?)` | void | 编程式设置区域尺寸（px）。 |
| `resize(layoutId?)` | void | 刷新布局（尺寸由 CSS 决定）。 |
| `notifyPanel(action, region, name?)` | Boolean | MyPanel 委托入口（action: min / max / restore / close / refresh；min 即 hide）。 |
| `getLayoutId() / getParentLayoutId() / getChildLayoutId(region, name?)` | String | 布局 id 体系（用于嵌套布局转发）。 |
| `getSizes()` | Object | 当前区域尺寸快照 { north, south, west, east }。 |
| `getRegionItem(region)` | Object | 当前激活面板的完整 item。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `north / west / east / south` | { item, panelProps } | 区域默认插槽，渲染当前激活面板。 |
| `default` | { item, panelProps } | center 区域默认插槽。 |
| `north:{name} / west:{name} / center:{name} / east:{name} / south:{name}` | — | 按面板 name 命名的区域插槽，同名激活时优先渲染。 |
| `tab:{name}` | { item } | 标签内容插槽：面板配了 tab 时区域渲染 MyTabs，标签内容优先取该插槽（其次 item 的 component / url / html）。 |
| `tab-tool` | { region, item, tabs } | 标签栏尾部工具栏：区域内标签栏右上角的自定义按钮（区域转发给 MyTabs 的 tool 插槽）。 |
| `面板内容来源（item 字段）` | — | 未写具名插槽时，区域用 MyPanelContent 渲染：item.component（对象·全局名·相对路径，+props）→ item.url（iframe，+params 拼接 query）→ item.html（v-html）。 |

## MyMainFrame

主框架组件 = MyBorderLayout 的便捷封装，只保留一套显隐：区域内面板的 show / hide（区域可见性由面板派生，隐藏当前面板即收起该区域），外加区域可见性查询 isVisible 与切换 toggleRegion；中间内容页用 openBody 打开（layout 支持「左中右 lcr / 左中右下 lcrs」情景）。区域名支持 north|top · west|left · east|right · south|bottom · center。frameType=1 一张图（顶部+中间+底部），frameType=2 运维（含左侧栏）。区域面板的多标签用 openTab / closeTab / closeOtherTabs / closeAllTabs / setActiveTab / refreshTab 维护。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `frameType` | Number | `2` | 框架类型：1=一张图（无左右区域，强制 west/east 隐藏）；2=运维（含左侧栏）。 |
| `layoutId` | String | `'BorderLayout'` | 透传 MyBorderLayout.layoutId。 |
| `parentLayoutId` | String | `''` | 透传 MyBorderLayout.parentLayoutId。 |
| `regionLevel` | String \| Number | `'ns'` | 透传 MyBorderLayout.regionLevel。 |
| `maxType` | String | `'center'` | 透传 MyBorderLayout.maxType（全局最大化类型默认值）。 |
| `animate` | Boolean | `true` | 透传 MyBorderLayout.animate。 |
| `animationDuration` | Number | `260` | 透传 MyBorderLayout.animationDuration。 |
| `regions` | Object | `{}` | 透传 MyBorderLayout.regions。 |
| `theme` | String | `''` | 透传 MyBorderLayout.theme。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `update:regions` | Object | 透传 MyBorderLayout.update:regions。 |
| `update:sizes` | Object | 透传 MyBorderLayout.update:sizes。 |
| `show` | { region, name, layoutId, tab? } | 透传区域 / 面板显示事件；tab 相关动作附 tab。 |
| `hide` | { region, name, layoutId } | 透传区域 / 面板隐藏事件。 |
| `max` | { region, name, layoutId, mode } | 透传区域最大化事件。 |
| `restore` | { region, name, layoutId } | 透传区域还原事件。 |
| `close` | { region, name, layoutId, tab? } | 透传面板关闭事件；带 tab 时表示关闭的是标签。 |
| `split` | { region, name, layoutId, size } | 透传分割条拖拽事件。 |
| `refresh` | { region, name, layoutId, tab? } | 透传面板 / 标签刷新事件；带 tab 时表示刷新的是标签。 |
| `menu-select` | { region, name, layoutId, tab, action } | 透传标签右键菜单自定义项点击事件。 |
| `ready` | api | 透传 MyBorderLayout.ready。 |

### Methods（defineExpose 暴露方法，通过 ref 调用）

| 签名 | 返回 | 说明 |
| --- | --- | --- |
| `open(region, item)` | Object \| null | 在指定区域打开面板。region 支持 north\|top · west\|left · east\|right · south\|bottom · center。 |
| `openTab(item, region, name?) / closeTab(tabName, region, name?)` | Object \| Boolean | 在区域面板里打开 / 关闭 tab（面板没有 tab 配置则自动创建承载面板）；name 缺省取该区域当前激活面板。 |
| `closeOtherTabs(tabName, region, name?) / closeAllTabs(region, name?)` | Boolean | 关闭其它 / 全部标签。 |
| `setActiveTab(tabName, region, name?) / refreshTab(tabName, region, name?)` | Boolean | 激活 / 刷新标签（刷新即重建内容）。 |
| `getTabs(region, name?) / getActiveTab(region, name?)` | Array \| String | 读取区域面板的标签列表 / 当前标签 name。 |
| `openBody(name, options?)` | Object \| null | 中间打开内容页。options.layout 支持 "lcr"（左中右，west+east）与 "lcrs"（左中右下，west+east+south）；不传则仅中间。 |
| `openDefault()` | Object \| null | 打开中间默认页（regions.center 激活面板，无则新建 mainBody 默认页）。 |
| `show(region, name?) / hide(region, name?)` | Boolean | 【显隐唯一入口】显示 / 隐藏区域内面板，name 缺省取该区域当前激活面板。区域可见性由面板派生：隐藏当前面板即收起整个区域，再 show(region) 即原样展开。面板配了 parentName 时，隐藏 / 关闭后回到上级。region 支持 north\|top · west\|left · east\|right · south\|bottom；center 永远占位，不做区域显隐。 |
| `isVisible(region) / toggleRegion(region, name?)` | Boolean | 查询区域是否可见 / 按当前可见状态在 show 与 hide 之间切换。 |
| `getLayout()` | MyBorderLayout API | 返回内部 MyBorderLayout 实例，可调用其全部方法（up / down / max / restore 等）。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `north / west / east / south / default` | { item, panelProps } | 透传给 MyBorderLayout 的同名区域插槽。 |

## MyPanel

通用面板控件（不依赖任何布局）。标题栏 + 内容区 + 底部，支持最小化 / 最大化 / 关闭 / 刷新按钮。不含布局专用参数（region / maxed 等由所属布局管理）：面板通过 data-layout-id + data-region 两个 DOM 属性反查所属布局与区域，独立使用与放入 MyBorderLayout / MyGridLayout 区域时按钮行为自动切换（委托给布局 vs 仅 emit）。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `name` | String | `''` | 面板唯一标识（区域内唯一）。 |
| `title` | String | `''` | 面板标题。 |
| `iconCls / icon` | String | `''` | 图标文本（icon 是 iconCls 的简写别名）。 |
| `hasTitle` | Boolean | `true` | 是否显示标题区。 |
| `hasSubTitle` | Boolean | `false` | 是否显示副标题。 |
| `subTitle` | String | `''` | 副标题文本。 |
| `hasTool` | Boolean | `true` | 是否显示工具栏插槽区。 |
| `hasFooter` | Boolean | `false` | 是否显示底部区。 |
| `footer` | String | `''` | 底部文本（默认插槽内容）。 |
| `border` | Boolean | `true` | 是否显示边框。 |
| `scroll` | Boolean | `true` | 内容区是否可滚动。 |
| `noscroll` | Boolean | `false` | 强制隐藏滚动（优先级高于 scroll）。 |
| `opacity` | Number \| String | `''` | 透明度（0-1）。 |
| `float` | Boolean | `false` | 是否浮动样式（带阴影）。 |
| `headerHeight` | Number | `34` | 标题栏高度（px）。 |
| `bodyPadding` | String | `'10px 12px'` | 内容区内边距。 |
| `panelClass / headerClass / bodyClass` | String | `''` | 自定义类名。 |
| `panelStyle / headerStyle / bodyStyle` | Object \| String | `null` | 自定义样式。 |
| `theme` | String | `''` | 主题。 |
| `min` | Boolean | `true` | 是否显示最小化按钮（布局区域内 center 区域强制为 false）。 |
| `max` | Boolean | `true` | 是否显示最大化按钮（布局区域内为区域最大化，已最大化时切换为还原按钮）。 |
| `close` | Boolean | `false` | 是否显示关闭按钮。 |
| `refresh` | Boolean | `false` | 是否显示刷新按钮。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `min` | { region, name } | 点击最小化按钮（独立使用时触发；布局区域内改为 hide，区域随之收起）。 |
| `max` | { region, name } | 点击最大化按钮（独立使用时触发；布局区域内由布局处理区域最大化）。 |
| `restore` | { region, name } | 还原 —— 最大化还原 / 从最小化展开（即 min / max 的反向动作）。 |
| `close` | { region, name } | 点击关闭按钮。 |
| `refresh` | { region, name } | 点击刷新按钮。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `leftTool` | — | 标题左侧工具区（在标题之前）。 |
| `title` | — | 自定义标题区（替换默认 icon + title + subtitle）。 |
| `actions` | — | 标题栏工具区（标题与按钮之间，flex:1）。 |
| `default` | — | 内容区。 |
| `footer` | — | 底部区（覆盖 footer prop 文本）。 |

## MyPanelContent

面板内容渲染器。按优先级 component > url > html > 默认插槽 渲染面板内容，支持参数传递（组件 props / URL query 参数）与组件路径懒加载。可独立使用，也是 MyBorderLayout 区域插槽的默认 fallback。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `item` | Object | `{}` | 面板 item，承载内容来源与参数（见下方「内容来源字段」）。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `default` | — | item.component / url / html 均未定义时的回退内容。 |
| `内容来源字段（item 内）` | — | component: 组件对象 / 全局名字符串 / 相对项目根目录路径字符串（如 /src/views/Foo.vue，按 import.meta.glob 懒加载）｜props: 组件 props｜url: iframe 地址｜params: URL query 参数对象（→ ?k=v&...）｜html: HTML 字符串（v-html）。 |

## MyTabs

多标签容器。标签栏（top / bottom / left / right）+ 内容区，内容按 MyPanelContent 的优先级渲染（component > url(+params) > html > tab:{name} 具名插槽）。标签默认首次激活才挂载、之后保留状态（lazy:false 立即挂载，reload:true 每次激活重建，refreshAt 变化即重建）；右键菜单内置关闭 / 关闭其它 / 关闭全部 / 刷新（点击别处 / Esc / 滚动 / 鼠标移出范围时关闭）。左右布局下 titleVertical 可让标签文字竖排。受控 / 非受控皆可；位于 MyBorderLayout 区域内时，切换 / 关闭 / 刷新经布局注册表上报（notifyTab），标签数据由所在面板的 tab 配置统一维护。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `items` | Array | `[]` | 标签项数组：[{ name, title, iconCls?, closable?, disabled?, lazy?, reload?, menu?, url(+params) / html / component(+props) }]。 |
| `active` | String | `''` | 当前标签 name；传了即以它为准（受控），空值由组件内部维护。 |
| `position` | String | `'top'` | 标签栏位置：top / bottom / left / right。 |
| `closable` | Boolean | `false` | 是否允许关闭（标签项 closable 可单独覆盖）。 |
| `hasTool` | Boolean | `false` | 显示标签栏尾部工具栏（tool 插槽）。 |
| `contextmenu` | Boolean | `false` | 启用标签右键菜单（打开前先激活该标签）。 |
| `menu` | Array | `null` | 右键菜单项：[{ name, title, iconCls?, disabled?, divided?, handler? }]；缺省用内置项（关闭 / 关闭其它 / 关闭全部 / 刷新），标签项的 menu 可单独覆盖。 |
| `titleVertical` | Boolean | `false` | 标签文字竖直排列（仅 position 为 left / right 生效）。 |
| `tabsClass` | String | `''` | 附加类名（自定义标签栏样式）。 |
| `panelName` | String | `''` | 所属面板 name（位于布局区域内时用于上报切换 / 关闭）。 |
| `theme` | String | `''` | 主题：空值继承父级。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `update:active` | String | 当前标签变化（v-model:active）。 |
| `change` | { name, item } | 切换标签。 |
| `close` | { name, item } | 标签被关闭（关闭按钮 / 右键菜单，关闭其它 · 全部时每个被移除的标签发一次）。 |
| `refresh` | { name, item } | 标签被刷新（重建内容）。 |
| `contextmenu` | { name, item, event } | 标签上右键（contextmenu 关闭时也发，仅作通知）。 |
| `menu-select` | { action, name, item } | 右键菜单里的自定义项被点击（内置项不触发）。 |

### Methods（defineExpose 暴露方法，通过 ref 调用）

| 签名 | 返回 | 说明 |
| --- | --- | --- |
| `setActive(name)` | Boolean | 激活标签。 |
| `close(name)` | Boolean | 关闭标签。 |
| `closeOthers(name) / closeAll()` | Boolean | 关闭其它 / 全部标签。 |
| `refresh(name?)` | Boolean | 刷新标签（重建内容），name 缺省取当前标签。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `tab:{name}` | { item } | 按标签 name 命名的内容插槽，优先于 item 的 component / url / html。 |
| `tool` | — | 标签栏尾部工具栏内容。 |
| `menu` | { items, item, run, close } | 自定义右键菜单（替换内置菜单渲染）。 |
| `empty` | — | 没有标签（或当前标签不存在）时的兜底内容。 |

## MySplitter

分割条。默认只显示居中握把，悬浮展开成按钮组（[收缩][最大化] 或 [最大化][收缩]，east/south 顺序相反）。已最大化时不显示最大化按钮（也不切换为还原图标）。区域完全隐藏后退化为贴边浮动伸缩按钮。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `direction` | String | `'v-left'` | 方向：v-left/v-right/h-top/h-bottom。决定拖拽轴向、按钮排布、图标方向。 |
| `min` | Number | `60` | 拖拽最小尺寸（px）。 |
| `max` | Number | `800` | 拖拽最大尺寸（px）。 |
| `step` | Number | `1` | 拖拽步进（>1 时按步取整）。 |
| `split` | Boolean | `true` | 是否可拖拽。 |
| `collapsible` | Boolean | `false` | 是否显示收缩 / 展开按钮。 |
| `maxBtn` | Boolean | `false` | 是否显示最大化按钮。 |
| `maxed` | Boolean | `false` | 当前区域是否处于最大化态（true 时隐藏最大化按钮）。 |
| `collapsed` | Boolean | `false` | 当前区域是否处于收缩态（影响图标方向）。 |
| `hidden` | Boolean | `false` | 区域完全隐藏，分割条退化为贴边浮动伸缩按钮。 |
| `dual` | Boolean | `false` | 双向收缩模式（栅格布局用）：分割条两侧各控制一个收缩目标。 |
| `nextCollapsed` | Boolean | `false` | dual 模式下另一侧是否已收缩。 |
| `nextCollapsible` | Boolean | `false` | dual 模式下另一侧是否显示收缩按钮。 |
| `hoverReveal` | Boolean | `true` | 是否启用「悬浮才展开按钮组」（false 时按钮常显）。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `dragStart` | { clientPos, setStartSize } | 拖拽开始；setStartSize 用于父组件回填起始尺寸。 |
| `dragMove` | size (px) | 拖拽移动（已限制在 min/max 内）。 |
| `dragEnd` | MouseEvent | 拖拽结束。 |
| `toggle` | — | 点击收缩 / 展开按钮。 |
| `toggleNext` | — | dual 模式下点击另一侧的收缩按钮。 |
| `max` | — | 点击最大化按钮。 |

## MyFloatPanel

悬浮面板。位置参数采用 offset 语义：字符串对齐（auto=居中 / t / r / b / l / lt / lb / rt / rb）、4 边偏移对象、数字顶部偏移。支持标题栏拖拽移动（move）、左下 / 右下角 resize、最大化 / 还原 / 关闭、模态遮罩（shade）。默认挂载到 body，container 可指定容器（拖动范围约束在容器内）。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `title` | String | `''` | 标题。 |
| `hasTitle` | Boolean | `true` | 是否显示标题栏。 |
| `close` | Boolean | `true` | 是否显示关闭按钮。 |
| `max` | Boolean | `true` | 是否显示最大化按钮。 |
| `min` | Boolean | `true` | 最小化按钮（当前未渲染）。 |
| `maxed` | Boolean | `false` | 初始即最大化。 |
| `width / height` | Number \| String | `360 / 280` | 面板宽高（px）。 |
| `offset` | String \| Object \| Number | `'auto'` | 位置：字符串对齐 auto/t/r/b/l/lt/rt/lb/rb（auto=居中）｜对象 { top, left, right, bottom }（4 边偏移，px 或 "NN%"）｜数字（顶部偏移）。 |
| `fixed` | Boolean | `true` | 是否固定定位：true=fixed 跟随视口；false=absolute 含 scroll 偏移。 |
| `resize` | Boolean | `true` | 是否可拖拽 resize。 |
| `minWidth / minHeight` | Number | `200 / 140` | resize 最小尺寸。 |
| `maxWidth / maxHeight` | Number | `2000` | resize 最大尺寸。 |
| `shade` | Boolean \| Number | `false` | 模态遮罩：true=默认遮罩；数字=透明度；false=无遮罩（带遮罩时自动居中）。 |
| `shadeClose` | Boolean | `false` | shade 时点击遮罩是否关闭。 |
| `zIndex` | Number | `999` | 层级。 |
| `visible` | Boolean | `true` | 是否显示。 |
| `container` | String | `'body'` | 挂载容器：body 或 CSS 选择器。 |
| `move` | Boolean | `true` | 是否允许拖拽标题栏移动。 |
| `theme` | String | `''` | 主题。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `update:visible` | Boolean | 可见性变化（v-model:visible）。 |
| `close` | — | 关闭。 |
| `max` | — | 最大化。 |
| `restore` | — | 还原。 |
| `move` | { left, top } | 拖拽移动（相对容器的 left/top）。 |
| `resize` | { width, height, left, top } | 拖拽 resize。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `title` | — | 自定义标题区。 |
| `default` | — | 内容区。 |

## MyGridLayout

栅格布局容器。基于 12 分栏比例系统，支持四分屏、左右布局等场景。每个单元格通过 layoutNum（1..12 占比，>12 固定像素）声明尺寸，layoutType=h（先水平后竖直）或 v（先竖直后水平）。行/单元格之间插入 MySplitter 可拖拽、双向收缩。面板最大化默认填满整个布局或页面。

### Props（属性）

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `layoutId` | String | `''` | 布局标识（缺省自动生成）。 |
| `layoutType` | String | `'h'` | 排列方向：h（先水平后竖直，换行成行）/ v（先竖直后水平，换列成列）。 |
| `theme` | String | `''` | 主题。 |
| `maxType` | String | `'center'` | 最大化类型：center / layout（整个布局） / page（整个页面）。 |
| `items` | Array | `[]` | 单元格集合：[{ name, title, layoutNum, split, collapsible, max, border, ...MyPanel 参数 }]。 |
| `split` | Boolean | `false` | 分割条是否可拖拽（全局默认，单元格 item 可覆盖）。 |
| `collapsible` | Boolean | `false` | 分割条是否显示收缩按钮（全局默认）。 |
| `border` | Boolean | `true` | 单元格边框（全局默认）。 |
| `min` | Boolean | `false` | 面板最小化按钮（全局默认）。 |
| `max` | Boolean | `true` | 面板最大化按钮（全局默认）。 |
| `close` | Boolean | `false` | 面板关闭按钮（全局默认）。 |
| `animate` | Boolean | `true` | 是否启用过渡动画。 |

### Emits（事件）

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| `max` | { key, name } | 单元格最大化。 |
| `restore` | { key } | 还原。 |
| `split` | { axis, index\|key, size } | 分割条拖拽（axis: line/cell）。 |
| `close` | { key } | 单元格关闭 / 最小化触发隐藏。 |

### Methods（defineExpose 暴露方法，通过 ref 调用）

| 签名 | 返回 | 说明 |
| --- | --- | --- |
| `max(key)` | void | 最大化指定单元格（简写）。 |
| `restore()` | void | 还原。 |
| `maxed(key)` | Boolean | 判断指定单元格是否处于最大化态（简写）。 |
| `hide(key) / show(key)` | void | 隐藏 / 显示单元格。 |
| `toggleLine(lineIdx) / toggleCell(cell)` | void | 切换整行 / 整列 / 单元格隐藏。 |
| `notifyPanel(action, region)` | Boolean | 面板事件委托入口（action: min / max / restore / close；min 即 hide）。 |

### Slots（插槽）

| 名称 | 作用域 | 说明 |
| --- | --- | --- |
| `{cell._key}` | { cell } | 按单元格 key（默认 name）命名的具名插槽。 |

## Composables（组合式函数）

主题、布局注册表、面板参数归一化等工具。

### Methods（defineExpose 暴露方法，通过 ref 调用）

| 签名 | 返回 | 说明 |
| --- | --- | --- |
| `import { normalizeTheme, themeClass, useThemeContext, THEMES, DEFAULT_THEME } from '.../composables/theme.js'` | — | 主题工具：normalizeTheme(str) 归一化；themeClass(theme) 返回类名；useThemeContext(props) 解析自身与父级主题。 |
| `import { ROOT_LAYOUT_ID, genLayoutId, makeChildLayoutId, registerLayout, unregisterLayout, getLayout, hasLayout, listLayoutIds } from '.../composables/layoutRegistry.js'` | — | 布局注册表：用于嵌套布局 / 面板反查所属布局。makeChildLayoutId(parent, region, name) 生成子布局 id。 |
| `import { normalizePanelItem, toPanelProps, normalizeMaxType, REGION_DEFAULTS, PANEL_DEFAULTS, REGION_SHOW_DEFAULTS, REGION_SIZE_DEFAULTS } from '.../composables/panelItem.js'` | — | 面板 / 区域 item 参数工具：归一化与挑选可 v-bind 的面板参数。 |
