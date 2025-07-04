module.exports = {
  mainSidebar: [
    // 既是文档又是分类的混合项
    {
      type: 'category',
      label: '新闻资讯版',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'xwzxb/index'
      },
      items: [
        'xwzxb/at9',
        'xwzxb/at8',
        'xwzxb/at5',
        'xwzxb/at1',
      ]
    },
    {
      type: 'category',
      label: '公示板',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'gsb/index'
      },
      items: [
        'gsb/at4',
        'gsb/at2',
      ]
    },
    {
      type: 'category',
      label: '学术版',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'xsb/index'
      },
      items: [
        'xsb/at6',
      ]
    },
    {
      type: 'category',
      label: '闲话版',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'xhb/index'
      },
      items: [
        'xhb/at7',
      ]
    },
    {
      type: 'category',
      label: '活动区',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'hdq/index'
      },
      items: [
        'hdq/at3',
      ]
    },
  ]
};