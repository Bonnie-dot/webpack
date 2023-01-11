import * as React from "react";
import symbol from "./images/symbol.png"
import './index.scss'

const App = () => {
    const s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
    console.log(s);
    return <h1>
        <p>Hello World213123</p>
        <img src={symbol}/>
     </h1>
}

export default App
