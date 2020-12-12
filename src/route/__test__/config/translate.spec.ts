import request from "lib/net/http/client"
import { TranslateAdd, TranslateSelect } from "src/api/translate"
import mockData from "./mock/translate"

const BASEURL = "http://localhost:8000/config"

const add = (data: TranslateAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/translate/add",
    method: "post",
    data: data
  })
}

const select = (data: TranslateSelect) => {
  // 发送请求
  return request({
    url: BASEURL+"/translate/select",
    method: "get",
    params: data
  })
}

describe("translate", () => {
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
