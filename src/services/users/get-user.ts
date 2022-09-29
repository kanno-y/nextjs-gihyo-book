import { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type GetUserParams = {
  id: number
}

/**
 * ユーザーAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */

const getuser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   * ユーザAPI
   * サンプルレスポンス
   * 
   *   
   * {
    "id": "1",
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem ipsum is simply dummy text of the printing and typesetting industry"
  } */

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getuser
