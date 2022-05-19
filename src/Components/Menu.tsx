import './Menu.css'

function Menu() {
    return (
        <nav className="menu">
            <div className="logo">
                <img src="src/Assets/logo.png" alt="Volley ball" />
                Karasuno<span>High</span>
            </div>
            <ul className="list">
                <li>
                    Team
                </li>
                <li>
                    Players
                </li>
                <li>
                    About
                </li>

                <li>
                    <div className="button">Contact Us</div>                 
                </li>
            </ul>
        </nav>
    )
}

export default Menu;