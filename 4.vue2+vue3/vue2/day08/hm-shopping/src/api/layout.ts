import request from '@/utils/request'

export function getIndex () {
  return request.get('/page/detail')
}
