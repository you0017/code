import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const handlerClick = (number) => {
        setCount(count + number);
    }

    const [form, setForm] = useState({
        username: '',
        password: '',
        a: 1
    });
    const handlerChange = (e,op) => {
        if (op === 1) {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
                username: e.target.value,
                password: form.password
            })
        } else if (op === 2) {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
                username: form.username,
                password: e.target.value
            })
        }
    }
    return (
        <div className="App">
            {count}
            <button onClick={() => handlerClick(100)}>按钮</button>
            <br/>
            <input type="text" name="username" value={form.username} onChange={(e) => handlerChange(e, 1)}/>
            <br/>
            {form.username}
            <br/>
            <input type="text" name="password" value={form.password} onChange={(e) => handlerChange(e, 2)}/>
            <br/>
            {form.password}
            <br/>
            {form.a}
        </div>
    );
}

export default App;