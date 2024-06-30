import "../styles/MobileButtonList.css"
import { AppContext } from "../App"
import { useContext } from "react"
import type InformationType from "../types/InformationType"

function MobileButtonList() {
  const buttonList = ["Overview", "Structure", "Surface"]
  const { setCurrentInformation } = useContext(AppContext)

  const handleClick = (index: InformationType) => () =>
    setCurrentInformation(index)

  return (
    <nav className="mobile-navigation-information">
      {buttonList.map((button, index) => (
        <button
          className="mobile-navigation-information__button header-3"
          type="button"
          key={button}
          onClick={handleClick(index as InformationType)}
        >
          {button}
        </button>
      ))}
    </nav>
  )
}

export default MobileButtonList
