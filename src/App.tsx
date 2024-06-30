import "./App.css"
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import Information from "./components/Information.tsx"
import MobileButtonList from "./components/MobileButtonList"

function App() {
  return (
    <>
      <NavBar />
      <MobileButtonList />
      <MainContainer />
      <Information />
    </>
  )
}

export default App
