import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// 导入actionCreater
import {inscrement, decrement, addToNum} from './store/modules/counterStore'
import {setA, setB} from './store/modules/object'
import {fetchChannlList} from './store/modules/channelStore'

function App() {
    const {count} = useSelector(state => state.counter)
    const {channelList} = useSelector(state => state.channel)
    const {a, b} = useSelector(state => state.o)
    const dispatch = useDispatch()
    // 使用useEffect触发异步请求执行
    useEffect(() => {
        dispatch(fetchChannlList())
    }, [dispatch])
    return (
        <div className="App">
            { a.a1 }
            { a.a2 }
            { b }
            <button onClick={(e) => dispatch(setA({a1: 3, a2: 4}))}>a</button>
            <button onClick={(e) => dispatch(setB(2131321312312))}>b</button>
            <br/>
            <br/>
            <br/>
            <button onClick={() => dispatch(decrement())}>-</button>
            {count}
            <button onClick={() => dispatch(inscrement())}>+</button>
            <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
            <button onClick={() => dispatch(addToNum(20))}>add To 20</button>
            <ul>
                {channelList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default App
