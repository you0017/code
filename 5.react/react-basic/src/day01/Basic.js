import Header from "./Header";

const count = 10;

const getName = function () {
    return 'jack'
}

const list = [
    {
        id: 1,
        name: 'iphone'
    },
    {
        id: 2,
        name: 'ipad'
    }
]

const isLogin = true;

const articleType = 3; //0,1,3
//定义核心函数，根据文章类型返回不同的jsx模板
const getArticleTem = function () {
    if (articleType === 0) {
        return (
            <div>
                <div>this is article0</div>
            </div>
        )
    }else if(articleType === 1) {
        return (
            <div>
                <div>this is article1</div>
            </div>
        )
    } else if (articleType === 3) {
        return (
            <div>
                <div>this is article3</div>
            </div>
        )
    }
}

const handleClick = function (e,name) {
    console.log('click')
    console.log(e)
    console.log(name)
}

const Button = function () {
    return (
        <button>按钮组件</button>
    )
}
function Basic() {
    return (
        <div className="App" style={{color: "red"}}>
            <Header/>
            this is Basic
            <br/>
            {/*使用引号传递字符串*/}
            {"this is a string"}
            <br/>
            {count}
            <br/>
            {/*函数调用*/}
            {getName()}
            {/*列表渲染*/}
            <ul>
                {
                    list.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
            {/*条件渲染*/}
            {isLogin && <span>this is span</span>}
            <br/>
            {!isLogin ? <span>need login{list.length}</span> : <span>{list.length}</span>}
            <br/>
            {/*图片数量*/}
            {
                getArticleTem()
            }
            {/*绑定事件*/}
            <button onClick={(e) => handleClick(e,getName())}>按钮</button>
            {/*组件*/}
            <Button/>
        </div>
    );
}

export default Basic;
