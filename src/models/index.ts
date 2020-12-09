import project = require("./project")
import route = require("./route")
import translate = require("./translate")

// mysql表单
export const mysql = [
]

// mongodb 表单
export const mongo = [
  ...Object.values(project),
  ...Object.values(route),
  ...Object.values(translate),
]
