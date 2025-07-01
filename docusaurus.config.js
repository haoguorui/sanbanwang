// @ts-check
// 注意：整个配置文件应该只有一个导出对象

module.exports = {
  title: '三班网',  // 网站标题
  tagline: '快速获取班级资讯', // 副标题
  url: 'https://haoguorui.github.io', // GitHub Pages URL
  baseUrl: '/sanbanwang/', // 注意开头和结尾的斜杠
  
  // GitHub 仓库信息
  organizationName: 'haoguorui', // GitHub用户名
  projectName: 'sanbanwang', // GitHub仓库名
  
  // 部署设置
  deploymentBranch: 'gh-pages', // 部署分支
  trailingSlash: false, // URL结尾斜杠处理
  
  // 主题配置
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
  
  // 预设配置（必须包含）
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs', // 文档基础路径
        },
        blog: {
          showReadingTime: true,
          blogTitle: '班级博客',
          blogDescription: '班级最新动态',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  // 可选：自定义字段
  customFields: {
    test: '配置加载测试'
  },
  
  // 可选：插件配置
  plugins: [],
  
  // 可选：脚本和样式
  scripts: [],
  stylesheets: [],
};

console.log("配置文件已加载！");