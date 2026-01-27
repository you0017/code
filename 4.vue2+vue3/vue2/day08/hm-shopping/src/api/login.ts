import request from '@/utils/request'

export function getCaptcha () {
  return request.get('/captcha/image')
}

export function sendSmsCaptcha (data: any) {
  return request.post('/captcha/sendSmsCaptcha', data)
}

export function login (data: any) {
  return request.post('/passport/login', data)
}
