import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import cardDetails from "./utils/dummy";
import {greet as greet1, meet as meet1} from "./utils/dummy";

function App() {
    return (
        <>
            <Header/>
            <div className="cardsContainer">
                {
                    cardDetails.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.   offer}/>)
                }
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);