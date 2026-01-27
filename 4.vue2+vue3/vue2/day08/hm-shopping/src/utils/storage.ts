const INFO_KEY = 'hm_shopping_info'

export function getInfo () {
  return localStorage.getItem(INFO_KEY) ? JSON.parse(localStorage.getItem(INFO_KEY)!) : { userId: '', token: '' }
}

export function setInfo (userInfo: any) {
  localStorage.setItem(INFO_KEY, JSON.stringify(userInfo))
}

export function removeInfo () {
  localStorage.removeItem(INFO_KEY)
}
