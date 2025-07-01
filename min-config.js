// min-config.js
module.exports = {
  title: '测试标题',
  url: 'http://localhost:3000',
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
      },
    ],
  ],
};