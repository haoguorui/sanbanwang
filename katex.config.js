const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    [
      rehypeKatex,
      {
        strict: false,
        throwOnError: false,
        macros: {
          "\\RR": "\\mathbb{R}",
        },
        fleqn: true,
        maxSize: 10,
        maxExpand: 50,
        globalGroup: true,
      },
    ],
  ],
};
