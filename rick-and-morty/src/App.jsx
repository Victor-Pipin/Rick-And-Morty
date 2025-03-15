import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { Header } from "./common/components/Header.jsx"
import { CharacterPage } from "./pages/CharacterPage/CharacterPage.jsx"
import { LocationPage } from "./pages/LocationPage/LocationPage.jsx"
import { EpisodesPage } from "./pages/EpisodePage/EpisodePage.jsx"

// Компонент приложения в который собираются все части приложения
function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <CharacterPage />
      <LocationPage />
      <EpisodesPage />
    </div>
  )
}

export default App
