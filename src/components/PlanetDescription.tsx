import "../styles/PlanetDescription.css"
import sourceIcon from "../assets/icon-source.svg"

const buttonList = ["Overview", "Internal Structure", "Surface Geology"]

const PlanetDescription = () => {
  return (
    <article className="planet-article">
      <div className="planet-article__text-container">
        <h1 className="planet-article__title header-1">Earth</h1>
        <p className="planet-article__description">
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </p>
        <div className="planet-article__source">
          Source: Wikipedia <img src={sourceIcon} alt="Link to wikipedia" />
        </div>
      </div>
      <div className="planet-article__button-container flex-column">
        {buttonList.map((button, index) => (
          <button
            key={button}
            type="button"
            className="planet-article__button-item header-3"
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
