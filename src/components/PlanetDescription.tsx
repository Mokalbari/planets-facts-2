import "../styles/PlanetDescription.css"
import sourceIcon from "../assets/icon-source.svg"
import { AppContext } from "../App"
import { useContext } from "react"
import { buttonList } from "../lib/buttonList"
import { planetColors } from "../lib/planetColors"
import data from "../data/data"
import type InformationType from "../types/InformationType"

const PlanetDescription = () => {
  const { currentPlanet, currentInformation, setCurrentInformation } =
    useContext(AppContext)

  const handleClick = (index: InformationType) => () =>
    setCurrentInformation(index)

  return (
    <article className="planet-article">
      <div className="planet-article__text-container">
        <h1 className="planet-article__title header-1">
          {data[currentPlanet].name}
        </h1>
        <p className="planet-article__description">
          {data[currentPlanet].informations[currentInformation].content}
        </p>
        <div className="planet-article__source">
          Source: Wikipedia <img src={sourceIcon} alt="Link to wikipedia" />
        </div>
      </div>
      <div
        id="not-mobile"
        className="planet-article__button-container flex-column"
      >
        {buttonList.map((button, index) => (
          <button
            key={button}
            type="button"
            className="planet-article__button-item header-3"
            onClick={handleClick(index as InformationType)}
            style={{
              backgroundColor:
                currentInformation === index
                  ? `${planetColors[currentPlanet]}`
                  : "",
              color: currentInformation === index ? "white" : "",
            }}
          >
            <span className="planet-article__button-counter">0{index + 1}</span>{" "}
            {button}
          </button>
        ))}
      </div>
    </article>
  )
}

export default PlanetDescription
