import { createSlice } from "@reduxjs/toolkit"

const o = createSlice({
    name: 'o',
    initialState: {
        a: {
            a1: 1,
            a2: 2
        },
        b: 3
    },
    reducers: {
        setA(state, action) {
            state.a = action.payload
        },
        setB(state, action) {
            state.b = action.payload
        }
    }
})

const { setA, setB } = o.actions
const reducer = o.reducer

export { setA, setB }
export default reducer