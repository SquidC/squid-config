import request from "lib/net/http/client"
import { RouteAdd, RouteDels, RouteEdit, RouteSelete } from "src/api/route"
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


const dels = (data: RouteDels) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/dels",
    method: "post",
    data: data
  })
}


const edit = (data: RouteEdit) => {
  // 发送请求
  return request({
    url: BASEURL+"/route/edit",
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

  const ids: string[] = [];

  beforeAll(async () => {
    const req = await select({
      version: "1.0.0"
    })
    ids.push(...req.data.data.list.map((el: any) => el._id))
  })

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

  test("edit", async () => {
    // 请求数据
    const req = await edit({
      id: ids[0],
      ...mockData.edit,
    })
    expect(req.data.code).toBe(0)
  })

  test("dels", async () => {
    // 请求数据
    const req = await dels(mockData.dels)
    expect(req.data.code).toBe(0)
  })
})
