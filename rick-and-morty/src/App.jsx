import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { Header } from "./common/components/Header/Header.jsx"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage.jsx"
import { CharacterPage } from "./pages/CharactersPage/CharacterPage/CharacterPage.jsx"
import { LocationPage } from "./pages/LocationPage/LocationPage.jsx"
import { EpisodePage } from "./pages/EpisodePage/EpisodePage.jsx"
import { Routes, Route } from "react-router"

// Компонент приложения App(), в который собираются все части приложения
  // Настройка роутинга, Routes - обёртка для элементов-участников маршрутизации, Header не участвует, он отображается на всех страницах
  // Если адрес пустой слэш path="/", отрисовывается компонент домашней(стартовой) страницы element=HomePage
  // Если адрес страница с персонажами path="/characters", отрисовывается компонент страницы с персонажами element=CharacterPage
// Если нужно перейти на страницу одного персонажа, то путь к нему указывается по id, после адреса пути ко всем персонажам - "/characters"
// ставиться слэш - "/characters/", затем двоеточие - "/characters/:" и id (параметр), по которому будет осуществлятся переход на страницу 
// персонажа - "/characters/:id"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
      </Routes>
    </div>
  )
}

export default App
