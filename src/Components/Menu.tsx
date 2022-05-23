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
                    TEAM
                </li>
                <li>
                    PLAYERS
                </li>
                <li>
                    ABOUT
                </li>

                <li>
                    <div className="button">CONTACT US</div>                 
                </li>
            </ul>
        </nav>
    )
}

export default Menu;