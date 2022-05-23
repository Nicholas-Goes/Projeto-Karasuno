import './Banner.css'

function Banner() {
    return (
        <header>
            <div className="gradient"></div>
            <div className="text-container">
                <h2>Volleyball Team</h2>
                <h1>LET'S <span className="banner-title">FLY</span> WITH <span className="banner-title">US</span> </h1>       
            </div>
        </header>
    )
}

export default Banner;