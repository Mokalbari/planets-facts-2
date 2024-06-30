import "../styles/Information.css"
import { useContext } from "react"
import { AppContext } from "../App"
import data from "../data/data"

function Information() {
  const { currentPlanet } = useContext(AppContext)

  return (
    <div className="container flex-row information">
      <div className="information__card">
        <h2 className="information__card-title header-4 ">Rotation time</h2>
        <span className="information__card-info header-2">
          {data[currentPlanet].rotation}
        </span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Revolution time</h2>
        <span className="information__card-info header-2">
          {data[currentPlanet].revolution}
        </span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Radius</h2>
        <span className="information__card-info header-2">
          {data[currentPlanet].radius}
        </span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Average Temp.</h2>
        <span className="information__card-info header-2">
          {data[currentPlanet].temperature}
        </span>
      </div>
    </div>
  )
}

export default Information
