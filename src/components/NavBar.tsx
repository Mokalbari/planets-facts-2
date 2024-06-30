import "../styles/NavBar.css"
import planetList from "../data/planetList"

const NavBar = () => {
  return (
    <header className="header flex-row">
      <span className="header__logo">The planets</span>
      <nav className="header__nav">
        <menu className="header__menu flex-row">
          {planetList.map(planet => (
            <li className="header__list-item header-3" key={planet.name}>
              {planet.name}
            </li>
          ))}
        </menu>
      </nav>
    </header>
  )
}

export default NavBar
