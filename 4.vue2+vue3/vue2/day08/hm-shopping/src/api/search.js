import request from "@/utils/request";

export const getSearchData = (obj) => {
  const { categoryId, goodsName, page, sort, sortPrice} = obj
  return request.get('/goods/list',{
    params: {
      categoryId,
      goodsName,
      page,
      sort,
      sortPrice
    }
  })
}
