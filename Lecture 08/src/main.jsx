import React, {useState, useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [addNumber, setAddNumber] = useState(false);
    const [addCharacters, setAddCharacters] = useState(false);

    const generatepassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(addNumber)
            str += "0123456789";
        if(addCharacters)
            str += "+-)(*&^%$#@!{}`_";
        let pass = "";
        for(let i = 0; i < length; i++) {
            pass += str[Math.floor(Math.random()*str.length)];
        }
        setPassword(pass);
    }, [length, addNumber, addCharacters]);

    useEffect(()=> {
        generatepassword();
    }, [generatepassword]);

    return(
        <div className="container">
            <h1>{password}</h1>
            <div className="inputs">
                <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length({length})</label>
                <input type="checkbox" defaultChecked={addNumber} onChange={()=>setAddNumber(!addNumber)}></input>
                <label>Number</label>
                <input type="checkbox" defaultChecked={addCharacters} onChange={()=>setAddCharacters(!addCharacters)}></input>
                <label>Character</label>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator/>);