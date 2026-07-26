import React from "react";
import ReactDOM from "react-dom/client";

const newElement = <h1>Hello!</h1>

function Greet(props) {
    return (
        <>
            <h2>Name : {props.fullname}</h2>
            <h2>Age : {props.age}</h2>
        </>
    ) 
};

const newElement2 = <Greet fullname="Sujay Singh" age="19"/> // Function call in JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newElement2);