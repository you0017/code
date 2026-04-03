import {useContext} from "react";
import {MsgContext} from "./App";

const B = () => {
    // 3. 在底层组件 通过useContext钩子函数使用数据
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component, { msg }
        </div>
    )
}

export default B;
