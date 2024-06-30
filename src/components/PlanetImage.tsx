import "../styles/PlanetImages.css"
import { useContext } from "react"
import { AppContext } from "../App"
import data from "../data/data"

const PlanetImage = () => {
  const { currentPlanet, currentInformation } = useContext(AppContext)
  return (
    <div className="planet-image">
      {currentInformation !== 2 ? (
        <img
          src={data[currentPlanet].informations[currentInformation].source}
          alt={data[currentPlanet].name}
          className="planet-image__image"
        />
      ) : (
        <>
          <img
            src={data[currentPlanet].informations[0].source}
            alt="Earth"
            className="planet-image__image"
          />
          <img
            src={data[currentPlanet].informations[currentInformation].source}
            alt={data[currentPlanet].name}
            className="planet-image__image-overlay"
          />
        </>
      )}
    </div>
  )
}

export default PlanetImage
