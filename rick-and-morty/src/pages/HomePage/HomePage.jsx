import { NavLink } from "react-router";
// Подключение модульного css, название любое, кейс этого подключения - s(первая буква style), далее применяю этот модуль к h1
import s from "./HomePage.module.css";

// Компонент домашней страницы HomePage()
    // Три ссылки <NavLink to={"/locations"}>Locations</NavLink> для переходов на соответствующие страницы, 
    // вместо тега <a> который перезагружает страницу, NavLink не презагружает страницу, эти ссылки будут стилизоваться под кнопки
export const HomePage = () => {
    return (
        <div>
            <h1 className={s.title}>The Rick and Morty</h1>
            <nav>
                <NavLink to={"/characters"}>Characters</NavLink>
                <NavLink to={"/locations"}>Locations</NavLink>
                <NavLink to={"/episodes"}>Episodes</NavLink>
            </nav>
        </div>
    )
}