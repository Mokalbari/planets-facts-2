import "../styles/MobileButtonList.css"
import { AppContext } from "../App"
import { useContext } from "react"
import { planetColors } from "../lib/planetColors"
import { mobileButtonList } from "../lib/mobileButtonList"
import type InformationType from "../types/InformationType"

function MobileButtonList() {
  const { currentInformation, currentPlanet, setCurrentInformation } =
    useContext(AppContext)

  const handleClick = (index: InformationType) => () =>
    setCurrentInformation(index)

  return (
    <nav className="mobile-navigation-information">
      {mobileButtonList.map((button, index) => (
        <button
          className="mobile-navigation-information__button header-3"
          type="button"
          key={button}
          onClick={handleClick(index as InformationType)}
          style={{
            borderBottom:
              currentInformation === index
                ? `4px solid ${planetColors[currentPlanet]}`
                : "4px solid transparent",
            color: currentInformation === index ? "white" : "",
          }}
        >
          {button}
        </button>
      ))}
    </nav>
  )
}

export default MobileButtonList
