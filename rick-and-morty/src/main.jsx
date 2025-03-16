import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import "./index.css"
import App from "./App.jsx"

// Для управления маршрутизацией оборачиваю всё приложение <App /> в <BrowserRouter>, создаёт контекст для всех сыновьих элементов
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
