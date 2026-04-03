import {useState} from "react";

const App = () => {

    const [name, setName] = useState('jack')

    const [list, setList] = useState(['a', 'b', 'c'])

    const click = (e) => {
        alert(e.target.innerText)
    }

    return (
        <div>
            <button onClick={() => setName('tom')}>click</button>
            <div>{name}</div>
            <ul>
                {list.map(item => item === 'b' ? <li key={item} style={{color: 'red'}}>{item}</li> : '')}
                {list.map(item => <li key={item} style={{color: 'red'}}>{item}</li>)}
            </ul>
            <button onClick={(e) => click(e)}>alert</button>
        </div>
    )
}

export default App;