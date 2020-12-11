/**
 * @id Page
 */
export interface Page {
  page?: number;
  size?: number;
}

/**
 * 格式化返回page
 * @param p page
 */
export function formatPage(p: Page) {
  p.page ? p.page = Number(p.page) : 0
  p.size ? p.size = Number(p.size) : 10
}
