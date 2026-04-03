const App = (props) => {
    // 类似vue的provide/inject和props/emit

    //获取父组件的元素
    const name = props.name; // 获取父组件传递的name属性值
    const modifyName = props.modifyName
    return (
        <div>
            子组件头
            <br/>
            <input type="text" value={name} onChange={(e)=>modifyName(e.target.value)}/>
            { name }
            {/*<button onClick={()=>modifyName('new name')}>Change Name</button>*/}
            <br/>
            子组件尾
        </div>
    )
}

export default App;