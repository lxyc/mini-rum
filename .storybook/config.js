// 自动加载src目录下的 *.story.js文件

// storybook 为你的组件提供良好的生产环境下的展示, 你可以通过它写组件的各种用例, 结合它提供的各种插件, 你的组件使用文档可以实现实时交互, 组件点击监听, 查看源代码, 写 markdown 文档, 不同视窗下展示组件等功能.

// https://storybook.js.org/
import { configure } from "@storybook/vue";
import "../src/styles/index.scss";
import "../src/styles/storybook/index.scss";

function loadStories() {
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
