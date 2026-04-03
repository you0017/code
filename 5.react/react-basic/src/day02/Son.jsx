import {useEffect} from "react";

function Son () {
    // 1. 渲染时开启一个定时器
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('定时器执行中...')
        }, 1000)

        return () => {
            // 清除副作用(组件卸载时)
            clearInterval(timer)
        }
    }, [])
    return <div>this is son</div>
}

export default Son;