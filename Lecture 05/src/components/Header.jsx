export default function Header() {
    return (
        <div className="navbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZAiYJGV1WYuZq5mSaauiHTsnzV480FAQEQ6UNh5Synv2t09Sme1kVwk&s=10" height="50px" width="50px"/>
            <div className="options">
                <button className="btn">MEN</button>
                <button className="btn">WOMEN</button>
                <button className="btn">KIDS</button>
                <button className="btn">HOME</button>
                <button className="btn">BEAUTY</button>
                <button className="btn">STUDIO</button>
            </div>
            <input className="searchbar" placeholder="Search for products, brands and more"></input>
            <div className="profileAndCart">
                <button className="btn">Profile</button>
                <button className="btn">Wishlist</button>
                <button className="btn">Bag</button>
            </div>
        </div>
    )
}