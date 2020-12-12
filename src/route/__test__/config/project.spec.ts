import request from "lib/net/http/client"
import { ProjectAdd, ProjectSelect } from "src/api/project"
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

const select = (data: ProjectSelect) => {
  // 发送请求
  return request({
    url: BASEURL+"/project/select",
    method: "get",
    params: data
  })
}

describe("project", () => {
  test("add", async () => {
    // 请求数据
    mockData.add.forEach(async el => {
      const req = await add(el)
      expect(req.data.code).toBe(0)
    })
  })

  test("select", async () => {
    // 请求数据
    mockData.select.forEach(async el => {
      const req = await select(el)
      expect(req.data.data.list.length).toBeGreaterThanOrEqual(1)
    })
  })
})
