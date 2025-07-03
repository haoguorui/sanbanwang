// mdx-loader.js
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  loader: require.resolve('@docusaurus/mdx-loader'),
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // 确保包含其他必要的 MDX 选项
  },
};