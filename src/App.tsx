import "./App.css"
import { useState, createContext } from "react"
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import Information from "./components/Information.tsx"
import MobileButtonList from "./components/MobileButtonList"

import type PlanetNameType from "./types/PlanetNameType.ts"
import type AppContextType from "./types/AppContextType.ts"
import type InformationType from "./types/InformationType.ts"

const initialState: AppContextType = {
  currentPlanet: "Earth",
  setCurrentPlanet: () => {},
  currentInformation: 0,
  setCurrentInformation: () => {},
}

export const AppContext = createContext<AppContextType>(initialState)

function App() {
  const [currentPlanet, setCurrentPlanet] = useState<PlanetNameType>("Earth")
  const [currentInformation, setCurrentInformation] =
    useState<InformationType>(0)

  return (
    <AppContext.Provider
      value={{
        currentPlanet,
        currentInformation,
        setCurrentPlanet,
        setCurrentInformation,
      }}
    >
      <NavBar />
      <MobileButtonList />
      <MainContainer />
      <Information />
    </AppContext.Provider>
  )
}

export default App
