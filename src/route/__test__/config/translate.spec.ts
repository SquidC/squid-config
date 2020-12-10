import request from "lib/net/http/client"
import { TranslateAdd } from "src/route/config/translate.type"

const BASEURL = "http://localhost:8000/config"

const add = (data: TranslateAdd) => {
  // 发送请求
  return request({
    url: BASEURL+"/translate/add",
    method: "post",
    data: data
  })
}

describe("translate", () => {
  test("add", async () => {
    // 请求数据
    const req = await add({
      path: "route.test",
      defaultValue: "test",
    })

    expect(req.data.code).toBe(0)
  })
})
