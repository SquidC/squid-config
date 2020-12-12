import request from "lib/net/http/client"
import { ProjectAdd, ProjectEdit, ProjectSelect } from "src/api/project"
import { Dels } from "src/api/base"
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

const dels = (data: Dels) => {
  // 发送请求
  return request({
    url: BASEURL+"/project/dels",
    method: "post",
    data: data
  })
}

const edit = (data: ProjectEdit) => {
  // 发送请求
  return request({
    url: BASEURL+"/project/edit",
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
  const ids: string[] = [];

  beforeAll(async () => {
    const req = await select({})
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
    const req = await dels({ids})
    expect(req.data.code).toBe(0)
  })
})
