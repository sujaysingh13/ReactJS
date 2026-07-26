import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
    return (
        <div className="card">
            <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-9.jpg" height="200px" width="200px"/>
            <div className="cardDetails">
                <h2 className="cardText">{props.cloth}</h2>
                <h1 className="cardText">{props.offer}</h1>
                <h2 className="cardText">Shop Now</h2>
            </div>
        </div>
    )
}

const cardDetails = [
    {cloth : "Ethnic Wear", offer : "50-80% OFF"},
    {cloth : "Casual Wear", offer : "40-80% OFF"},
    {cloth : "Men's Activewear", offer : "30-70% OFF"},
    {cloth : "Women's Activewear", offer : "30-70% OFF"},
    {cloth : "Western Wear", offer : "40-80% OFF"},
    {cloth : "Sportswear", offer : "30-80% OFF"},
    {cloth : "Innerwear", offer : "UP TO 70% OFF"},
    {cloth : "Watches", offer : "UP TO 80% OFF"},
    {cloth : "Grooming", offer : "UP TO 60% OFF"},
    {cloth : "Beauty and Makeup", offer : "UP TO 60% OFF"},
    {cloth : "Kids Wear", offer : "50-70%OFF"},
    {cloth : "Men's Footwear", offer : "50-70%OFF"},
]

function App() {
    return (
        // header
        // body
        <div className="cardsContainer">
            {
                cardDetails.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }
        </div>
        // footer
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);