import request from "lib/net/http/client"
import { ProjectAdd } from "src/api/project"

const BASEURL = "http://localhost:8000/config"

const add = (data: ProjectAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/project/add",
    method: "post",
    data: data
  })
}

describe("project", () => {
  test("add", async () => {
    // 请求数据
    const req = await add({
      path: "/jb",
      name: "鸡巴项目",
    })

    expect(req.data.code).toBe(0)
  })
})
