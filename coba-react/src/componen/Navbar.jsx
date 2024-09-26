import {links} from '../data/navLink'

const Navbar = () => {
    function list() {
        const navLink = links.map(link => 
            <a key={link.id}>{link.item}</a>
        )
        return navLink
    }

    return (
        <header className="header">
            <a href="#">logo</a>
            <nav>
             {list()}
            </nav>
        </header>
    )
}

export default Navbar