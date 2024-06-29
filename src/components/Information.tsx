import "../styles/Information.css"

function Information() {
  return (
    <section className="container flex-row information">
      <div className="information__card">
        <h2 className="information__card-title header-4 ">Rotation time</h2>
        <span className="information__card-info header-2">0.99 Days</span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Revolution time</h2>
        <span className="information__card-info header-2">365.26 Days</span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Radius</h2>
        <span className="information__card-info header-2">6.371 KM</span>
      </div>
      <div className="information__card">
        <h2 className="information__card-title header-4">Average Temp.</h2>
        <span className="information__card-info header-2">16°C</span>
      </div>
    </section>
  )
}

export default Information
