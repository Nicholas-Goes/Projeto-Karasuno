import './Banner.css'

function Banner() {
    return (
        <header>
            <div className="gradient"></div>
            <div className="text-container">
                <h2>Volleyball Team</h2>
                <h1>Let's <span className="banner-title">Fly</span> With <span className="banner-title">Us</span> </h1>       
            </div>
        </header>
    )
}

export default Banner;