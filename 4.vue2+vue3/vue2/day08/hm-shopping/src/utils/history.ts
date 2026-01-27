const INFO_KEY = 'hm_shopping_search_history'

export function getSearchHistory () {
  return localStorage.getItem(INFO_KEY) ? JSON.parse(localStorage.getItem(INFO_KEY)!) : []
}

export function setSearchHistory (searchHistory: any) {
  localStorage.setItem(INFO_KEY, JSON.stringify(searchHistory))
}

export function removeSearchHistory () {
  localStorage.removeItem(INFO_KEY)
}
