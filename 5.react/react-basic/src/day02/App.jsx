import {createContext, useRef, useState} from "react";
import Children1 from "./Children1";
import Children2 from "./Children2";
import A from "./A";
import Son from "./Son";

// 1. createContext方法创建一个上下文对象（必须在组件外部创建并导出，供子组件共享）
export const MsgContext = createContext()

function App() {
    const [value, setValue] = useState('')

    const inputRef = useRef(null)

    const onChange = (value)=>{
        // console.log(inputRef.current.value)
        console.log(value)
    }

    const [name, setName] = useState('')
    const modifyName = (value) => {
        setName(value)
        console.log(name)
    }
    const msg = 'this is app msg'

    // 通过条件渲染模拟组件卸载
    const [show, setShow] = useState(true)
    return (
        <div className="App">
            { value }
            <button onClick={(e) => setValue("hello")}>点击我</button>
            { /* 表单-受控绑定 */}
            <input
                type="text"
                value={ value }
                onChange={(e) => setValue(e.target.value)}
            />
            <br/>
            { /* 表单-非受控绑定 */ }
            <input
                type="text"
                ref={ inputRef }
                onChange={(e) => onChange(e.target.value)}
            />
            <br/>
            <br/>
            <br/>
            { /* 组件通信 */}
            Children1
            <Children1 name={ name } modifyName={ modifyName }/>
            Children2
            <Children2 name={ name } modifyName={ modifyName }/>

            <br/>
            <br/>
            <br/>
            { /* 跨层组件通信 */ }
            {/* 2. 在顶层组件 通过Provider组件提供数据 */}
            <MsgContext.Provider value={msg}>
                this is App
                <A />
            </MsgContext.Provider>

            <br/>
            <br/>
            <br/>
            { /* 有点像vue的钩子函数 */ }
            {show && <Son />}
            <button onClick={() => setShow(false)}>卸载Son组件</button>
        </div>
    );
}

export default App;
