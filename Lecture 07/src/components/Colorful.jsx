import React, { useState, useEffect } from "react";

function Colorful({name}) {

    const [color, setColor] = useState("black");
    console.log("first");

    useEffect(()=>{
        console.log("useEffect Executed");
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div className="container">
            <h2>{name}</h2>
            <h1>BackGround Changer</h1>
            <div>
                <button className="red" onClick={()=>setColor("red")}>Red</button>
                <button className="blue" onClick={()=>setColor("blue")}>Blue</button>
                <button className="orange" onClick={()=>setColor("orange")}>Orange</button>
                <button className="green" onClick={()=>setColor("green")}>Green</button>
                <button className="pink" onClick={()=>setColor("pink")}>Pink</button>
            </div>
        </div>
    )

}

export default React.memo(Colorful);