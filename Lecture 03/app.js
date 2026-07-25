import React from "react";
import ReactDOM from "react-dom/client";

const fullname = "Sujay Singh";
const rollno = 97;

const obj = {
    age : 20,
    gender : "Male",
};

const obj2 = {
    backgroundColor : "black",
    color : "green" 
};

const newElement = (
    <>
        <h1 id="fullname" className="details" myattribute={11}>Name : {fullname}</h1>
        <h2 style={{backgroundColor : "black", color : "green"}}>Roll No : {rollno}</h2>
        <h2 style={obj2}>Age : {obj.age}</h2>
        <h2 id="gender" className="details">Gender : {obj.gender}</h2>
    </>
);

// React component
// function based component
function greet() {
    return <h1>Hello!</h1>
};

const meet = () => {
    return <h2>Hii everyone</h2>
};

const newElement2 = greet();
const newElement3 = meet();

const newElement4 = <>{greet()} {meet()}</>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newElement4);