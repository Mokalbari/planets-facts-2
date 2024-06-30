import type InformationType from "./InformationType"
import type PlanetNameType from "./PlanetNameType"

type AppContextType = {
  currentPlanet: PlanetNameType
  setCurrentPlanet: React.Dispatch<React.SetStateAction<PlanetNameType>>
  currentInformation: InformationType
  setCurrentInformation: React.Dispatch<React.SetStateAction<InformationType>>
}

export default AppContextType
