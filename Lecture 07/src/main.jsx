import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./components/Colorful";

function Main() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="counterContainer">
                <h1>Count is: {count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </div>
            <Colorful name={count}/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);