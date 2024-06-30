import type InformationType from "./InformationType"
import type PlanetNameType from "./PlanetNameType"

type AppContextType = {
  currentPlanet: PlanetNameType
  setCurrentPlanet: (planet: PlanetNameType) => void
  currentInformation: InformationType
  setCurrentInformation: (info: InformationType) => void
}

export default AppContextType
