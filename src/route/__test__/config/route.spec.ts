import request from "lib/net/http/client"
import { RouteAdd, RouteFirst } from "src/api/route"
import mock from "./mock/route"

const BASEURL = "http://localhost:8000/config"

const add = (data: RouteAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/add",
    method: "post",
    data: data
  })
}

const select = (data: RouteFirst) => {
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
    const req = await add(mock.add)
    expect(req.data.code).toBe(0)
  })

  test("select", async () => {
    // 请求数据
    const req = await select(mock.select)
    expect(req.data.code).toBe(0)
  })
})
