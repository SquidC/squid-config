export default {
  add: {
    route:[
      {
        path: "/menuTest",
        meta: {
          icon: "build",
          name: "menu test",
          defaultName: "菜单测试页面",
        },
      },
      {
        path: "/pageA",
        meta: {
          icon: "pipe",
          name: "测试页面A",
          defaultName: "测试页面A",
        },
        children: [
          {
            path: "/pageB",
            meta: {
              icon: "pipe",
              name: "测试页面B",
              defaultName: "测试页面B",
            },
          },
          {
            path: "/pageC",
            meta: {
              icon: "pipe",
              name: "测试页面C",
              defaultName: "测试页面c",
            },
          }
        ]
      },
    ],
    version: "1.0.1",
    project: "5fd3277d8e928aa1604c282c",
  },
  select: {
    projectId: "5fd3277d8e928aa1604c282c",
    version: "1.0.0"
  }
}
