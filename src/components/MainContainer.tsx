import "../styles/MainContainer.css"
import PlanetImage from "./PlanetImage"
import PlanetDescription from "./PlanetDescription"

function MainContainer() {
  return (
    <section className="container flex-row main-container">
      <PlanetImage />
      <PlanetDescription />
    </section>
  )
}

export default MainContainer
