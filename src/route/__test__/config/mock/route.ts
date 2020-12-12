export default {
  add: [{
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
    version: "1.0.0",
    project: "5fd456a5bd5b0fa0d09a53f9",
  },{
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
    project: "5fd456a5bd5b0fa0d09a53f9",
  }],
  select: [{
    projectId: "5fd456a5bd5b0fa0d09a53f9",
    version: "1.0.1"
  }],
  dels: {
    version: "1.0.0"
  },
  edit: {
    path: "/menuTest_edit",
    meta: {
      icon: "build_edit",
      name: "menu test_edit",
      defaultName: "菜单测试页面_edit",
    },
  }
}
