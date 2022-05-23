import './Menu.css'

function Menu() {
    return (
        <nav className="menu">
            <div className="logo">
                <img src="src/Public/Static/Images/Logo.png" alt="Volley ball" />
                KARASUNO<span>HIGH</span>
            </div>
            <ul className="list">
                <li>
                    <a href="#Home">HOME</a>
                </li>
                <li>
                    <a href="#Team">TEAM</a>
                </li>
                <li>
                    <a href="">PLAYERS</a>
                </li>
                <li>
                    <a href="">ABOUT</a>
                </li>
                <li>
                    <a href="">
                        <div className="button">CONTACT US</div>
                    </a>                 
                </li>
            </ul>
        </nav>
    )
}

export default Menu;