import request from "lib/net/http/client"
import { ProjectAdd } from "src/api/project"
import mockData from "./mock/project"

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
    const req = await add(mockData)
    expect(req.data.code).toBe(0)
  })
})
