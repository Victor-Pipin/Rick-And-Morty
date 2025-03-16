import { NavLink } from "react-router"

// Компонент домашней страницы HomePage()
    // Три ссылки <NavLink to={"/locations"}>Locations</NavLink> для переходов на соответствующие страницы, 
    // вместо тега <a> который перезагружает страницу, NavLink не презагружает страницу, эти ссылки будут стилизоваться под кнопки
export const HomePage = () => {
    return (
        <div>
            <h1>The Rick and Morty</h1>
            <nav>
                <NavLink to={"/characters"}>Characters</NavLink>
                <NavLink to={"/locations"}>Locations</NavLink>
                <NavLink to={"/episodes"}>Episodes</NavLink>
            </nav>
        </div>
    )
}