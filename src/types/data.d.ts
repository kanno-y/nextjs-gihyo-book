// 商品のカテゴリ
export type Category = 'shoes' | 'slothes' | 'book'
// 商品の状態
export type Condition = 'new' | 'used'

// ユーザー
export type User = {
  id: number
  username: string
  displayname: string
  email: string
  profileImageUrl: string
  description: string
}

// 商品
export type Product = {
  id: number
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

// API Context
export type ApiContext = {
  apiRootUrl: string
}
