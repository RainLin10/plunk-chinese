# Plunk 中文汉化插件

将 [Plunk](https://app.useplunk.com/) 后台界面汉化为中文的用户脚本。

## 功能

- 覆盖 Plunk 后台的主要页面：控制台、联系人、分组、活动、数据分析、模板、工作流、营销活动、设置等
- 翻译按钮、提示、表单标签、占位符等界面文案
- 动态翻译数字相关文本（如 "123 opens" → "123 次打开"）
- 不修改你的任何数据，仅替换页面上可见的英文文案
- 不会翻译 API Key、域名、邮箱等真实的配置值

## 安装

1. 在浏览器中安装 **篡改猴（Tampermonkey）** 扩展：
   - [Chrome 网上应用店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox 附加组件](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. 点击篡改猴图标，选择 **"创建新脚本"**（或 **"添加新脚本"**）。

3. 将 [plunk-cn.js](plunk-cn.js) 中的全部内容复制粘贴到编辑器中，替换默认模板。

4. 按 `Ctrl+S`（Mac 上 `Cmd+S`）保存脚本。

5. 刷新 Plunk 页面，即可看到中文界面。

## 使用

安装完成并刷新 Plunk 页面后，界面会自动汉化。脚本会：

- 在页面首次加载时翻译所有可见文案
- 监听页面变化（弹窗、切换页面等），自动翻译新出现的内容
- 监听 URL 变化，在应用内导航时保持翻译生效

如果某些新页面没有被翻译，刷新页面即可触发重新翻译。

## 兼容性

- 适用于 `app.useplunk.com` 及所有 `*.useplunk.com` 子域名
- 如果你使用的是自定义域名部署的 Plunk，请在脚本的 `@match` 中添加你的域名

## 许可

MIT
