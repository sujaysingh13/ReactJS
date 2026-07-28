function Card(props) {
    return (
        <div className="card">
            <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-9.jpg" height="200px" width="200px"/>
            <div className="cardDetails">
                <h2 className="cardText">{props.cloth}</h2>
                <h1 className="cardText">{props.offer}</h1>
                <h2 className="cardText">Price: {props.price}</h2>
                <h2 className="cardText">Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;