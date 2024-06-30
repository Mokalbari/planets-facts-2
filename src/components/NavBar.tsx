import "../styles/NavBar.css"
import planetList from "../data/planetList"
import menuBurger from "../assets/icon-hamburger.svg"
import chevron from "../assets/icon-chevron.svg"
import { useState } from "react"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const displayMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="header flex-row">
      <span className="header__logo">The planets</span>
      <img
        className="mobile-only header__icon-menu"
        src={menuBurger}
        alt="open menu"
        onClick={displayMenu}
      />
      <nav id="not-mobile" className="header__nav">
        <menu className="header__menu flex-row">
          {planetList.map(planet => (
            <li className="header__list-item header-3" key={planet.name}>
              {planet.name}
            </li>
          ))}
        </menu>
      </nav>
      {menuOpen && (
        <div className="overlay-menu">
          <div className="overlay-menu__header-container">
            <span className="overlay-menu__logo">The planets</span>
            <img
              className="mobile-only overlay-menu__icon"
              src={menuBurger}
              alt="Clone the menu"
              onClick={displayMenu}
            />
          </div>
          <nav className="overlay-menu__nav">
            <menu className="overlay-menu__menu">
              {planetList.map(planet => (
                <li
                  className="overlay-menu__list-item header-3 flex-row"
                  key={planet.name}
                >
                  <div className="overlay-menu__list-item-color" />
                  <div className="overlay-menu__list-item-container">
                    {planet.name}
                    <img src={chevron} alt="chevron icon" />
                  </div>
                </li>
              ))}
            </menu>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
