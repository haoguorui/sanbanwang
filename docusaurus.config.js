// @ts-check
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '三班网',
  tagline: '快速获取班级资讯',
  favicon: 'img/favicon.ico',

  url: 'https://haoguorui.github.io',
  baseUrl: '/',
  organizationName: 'haoguorui',
  projectName: 'sanbanwang',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '三班网',
      items: [
        { to: '/', label: '首页', position: 'left' },
        { to: '/bkzl', label: '版块与内容', position: 'left' },
        {
          href: 'https://github.com/haoguorui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 三班网. Built with Docusaurus.`,
    },
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-5m8q7ZPmV6sPhG7qPO3+vQ1f6YhOkM5TQrkE6uAqICvAf4hP2uPjVpjqVt3KtvE/',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
