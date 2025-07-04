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
      title: '三班网 - 首页',
      items: [
        { to: '/bkzl', label: '版块及内容', position: 'left' },
        //{ to: 'blog', label: '博客', position: 'left' },
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
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
      attributes: {
        'media': 'screen and (min-width: 320px)',
        'onerror': "this.remove(); console.error('Katex CSS failed to load')"
      }
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypeKatex, {
              strict: false,
              throwOnError: false,
              macros: {
                "\\RR": "\\mathbb{R}"
              },
              fleqn: true, // 使用左对齐而非居中
              maxSize: 10, // 最大缩放限制
              maxExpand: 50, // 最大扩展限制
              globalGroup: true
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
              },
              fleqn: true, // 使用左对齐而非居中
              maxSize: 10, // 最大缩放限制
              maxExpand: 50, // 最大扩展限制
              globalGroup: true
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