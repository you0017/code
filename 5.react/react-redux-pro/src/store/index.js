import { configureStore } from "@reduxjs/toolkit"
// 导入子模块reducer
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'
import o from './modules/object'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    o: o
  }
})

export default store