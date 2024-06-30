import "../styles/MobileButtonList.css"

function MobileButtonList() {
  const buttonList = ["Overview", "Structure", "Surface"]

  return (
    <nav className="mobile-navigation-information flex-row">
      {buttonList.map(button => (
        <button
          className="mobile-navigation-information__button header-3"
          type="button"
          key={button}
        >
          {button}
        </button>
      ))}
    </nav>
  )
}

export default MobileButtonList
