interface treeModel<T> {
  // 孩子
  children?: T[]
}

interface tableModel<T> {
  _id: string;
  parentId: string;
  // 孩子
  children: tableModel<T>[]
}

// 表 => 🌳
export function Table2Tree<T extends tableModel<T>>(tableKV: Record<string, tableModel<T>>) {
  // 是否成功
  const isOk = [];
  for(const k in tableKV) {
    const v = tableKV[k]
    if(v.parentId !== "0") {
      isOk.push(false)
      tableKV[v.parentId].children.push(v)
      delete tableKV[k]
    } else {
      isOk.push(true)
    }
  }

  if(!isOk.every(el => el)) {
    Table2Tree(tableKV)
  }
}

// 🌳 => 表
export function Tree2Table<T extends treeModel<T>>(data: T[], parentId: string, handleNode: (data: T, parentId: string) => string) {

  for(let idx = 0; idx < data.length; idx++) {
    const el = data[idx]
    const children = el.children
    // 处理节点
    const _id = handleNode(el, parentId)
    if(children && children.length > 0) {
      Tree2Table(children, _id, handleNode)
    }
  }

}
