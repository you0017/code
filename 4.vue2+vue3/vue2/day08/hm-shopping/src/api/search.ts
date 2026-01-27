import request from '@/utils/request'

export function getList (goodsName: string) {
  return request.get('/goods/list', {
    params: {
      sortType: 'all',
      sortPrice: 0,
      categoryId: 0,
      goodsName: goodsName,
      page: 1
    }
  })
}
