// @ts-check
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  title: '三班网',
  tagline: '快速获取班级资讯',
  url: 'https://haoguorui.github.io',
  baseUrl: '/sanbanwang/',
  
  organizationName: 'haoguorui',
  projectName: 'sanbanwang',
  
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  
  themeConfig: {
    navbar: {
      title: '首页',
      items: [
        { to: 'docs/intro', label: '文档', position: 'left' },
        { to: 'blog', label: '博客', position: 'left' },
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
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypeKatex, {
              strict: false,
              throwOnError: false,
              macros: {
                "\\RR": "\\mathbb{R}"
              }
            }]
          ],
        },
        blog: {
          showReadingTime: true,
          blogTitle: '班级博客',
          blogDescription: '班级最新动态',
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypeKatex, {
              strict: false,
              throwOnError: false,
              macros: {
                "\\RR": "\\mathbb{R}"
              }
            }]
          ],
        },
        pages: {
          // 确保为页面添加正确的配置
          path: 'src/pages',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypeKatex, {
              strict: false,
              throwOnError: false,
              macros: {
                "\\RR": "\\mathbb{R}"
              }
            }]
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  customFields: {
    test: '配置加载测试'
  },
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
};

console.log("配置文件已加载！");