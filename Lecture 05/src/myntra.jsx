import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import cardDetails from "./utils/dummy";
import {greet as greet1, meet as meet1} from "./utils/dummy";

function App() {
    let [A, setA] = useState(cardDetails);

    function sortArray() {
        A.sort((a,b) => a.price-b.price);
        setA([...A]);
    }

    function priceAbove499() {
        const B = cardDetails.filter((value) => value.price > 499);
        setA(B);
    }

    return (
        <>
            <Header/>
            <button className="sortBtn" onClick={sortArray}>Sort by Price</button>
            <button className="sortBtn" onClick={priceAbove499}>Price above 499</button>
            <div className="cardsContainer">
                {
                    A.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
                }
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);