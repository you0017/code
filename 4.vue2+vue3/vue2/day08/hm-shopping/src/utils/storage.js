const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_history_list'

export const getInfo = () => {
  return JSON.parse(window.localStorage.getItem(INFO_KEY) ? window.localStorage.getItem(INFO_KEY) : `{"token":"","userId":""}`)
}

export const setInfo = (info) => {
  window.localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

export const removeInfo = () => {
  window.localStorage.removeItem(INFO_KEY)
}

export const getHistory = () => {
  return JSON.parse(window.localStorage.getItem(HISTORY_KEY) ? window.localStorage.getItem(HISTORY_KEY) : '[]')
}

export const setHistory = (list) => {
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(list))
}

export const removeHistory = () => {
  window.localStorage.removeItem(HISTORY_KEY)
}
