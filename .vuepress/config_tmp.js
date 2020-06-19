module.exports = {
  title: 'HEP-specification',
  description: 'HEP(Hyper Exchange Protocol) Specification for DApp development in Newton ecosystem',
  // repo: 'https://github.com/newtonproject/HEP-specification',
  base: "/HEP-specification/",
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'home', link: '/' },
      { text: 'hep-node', link: '/hep-node/' },
      { text: 'oracle', link: '/oracle/oracle.md' },
      { text: 'github', link: 'https://github.com/newtonproject/HEP-specification' }
    ],
    displayAllHeaders: true,
    sidebar: [
        {
            title: 'home',
            path: '/', 
            collapsable: false,
            sidebarDepth: 2,
            children: []
        },
        {
            title: 'oracle', 
            path: '/oracle/oracle', 
            collapsable: false,
            sidebarDepth: 2,
            children: []
        },
        {
            title: 'DWeb',
            path: '/DWeb',
            collapsable: false,
            sidebarDepth: 2,
            children: []
        },
        {
            title: 'Tutorial',
            path: '/tutorial/',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                // '/tutorial/tutorial-dweb-zh.md',
                // '/tutorial/tutorial-dweb-zh-php'
            ]
        },
        
    ]
  }
}