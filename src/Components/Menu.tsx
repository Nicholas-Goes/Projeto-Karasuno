import './Menu.css'
import MenuIcon from '@mui/icons-material/Menu'

function Menu() {
    return (
        <nav className="menu">
            <ul className="list">
                <li>
                    KARASUNO<span>HIGH</span>
                </li>
                <li>
                    <MenuIcon />
                </li>
            </ul>
        </nav>
    )
}

export default Menu;