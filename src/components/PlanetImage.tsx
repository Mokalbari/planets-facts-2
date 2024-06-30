import "../styles/PlanetImages.css"
import { useContext } from "react"
import { AppContext } from "../App"
import data from "../data/data"

const PlanetImage = () => {
  const { currentPlanet, currentInformation } = useContext(AppContext)
  return (
    <div className="planet-image">
      <img
        src={data[currentPlanet].informations[currentInformation].source}
        alt="Earth"
        className="planet-image__image"
      />
    </div>
  )
}

export default PlanetImage
