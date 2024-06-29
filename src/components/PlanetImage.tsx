import "../styles/PlanetImages.css"
import earth from "../assets/planet-earth.svg"

const PlanetImage = () => {
  return (
    <div className="planet-image">
      <img src={earth} alt="Earth" className="planet-image__image" />
    </div>
  )
}

export default PlanetImage
