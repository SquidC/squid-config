import request from "lib/net/http/client"
import { RouteAdd } from "src/api/route"
import mockRoutes from "./mock/route"

const BASEURL = "http://localhost:8000/config"

const add = (data: RouteAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/add",
    method: "post",
    data: data
  })
}

describe("route", () => {
  test("add", async () => {
    // 请求数据
    const req = await add(mockRoutes)
    expect(req.data.code).toBe(0)
  })
})
