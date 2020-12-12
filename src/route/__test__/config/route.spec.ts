import request from "lib/net/http/client"
import { RouteAdd, RouteSelete } from "src/api/route"
import mockData from "./mock/route"

const BASEURL = "http://localhost:8000/config"

const add = (data: RouteAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/add",
    method: "post",
    data: data
  })
}

const select = (data: RouteSelete) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/select",
    method: "get",
    params: data
  })
}

describe("route", () => {

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
