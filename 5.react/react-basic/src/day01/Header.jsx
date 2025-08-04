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
function Basic() {
    return (
        <div className="App">
            我是头
        </div>
    );
}

export default App;
