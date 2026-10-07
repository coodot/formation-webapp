export interface Site {
  name: string
  desc: string
  url: string
  icon: string
  tags: string[]
  cities: string[]  // 新增，空数组表示全国通用
}

export interface Category {
  id: string
  category: string
  icon: string
  sites: Site[]
}