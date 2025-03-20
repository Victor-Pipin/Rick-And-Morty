import { NavLink } from "react-router";
// Подключение модульного css, название любое, кейс этого подключения - s(первая буква style), далее применяю этот модуль к h1
import s from "./HomePage.module.css";

// Компонент домашней страницы HomePage()
    // Три ссылки <NavLink to={"/locations"}>Locations</NavLink> для переходов на соответствующие страницы, 
    // вместо тега <a> который перезагружает страницу, NavLink не презагружает страницу, эти ссылки будут стилизоваться под кнопки
        // Сначала к заголовку h1 применияютя общие(глобальные) стили pageTitle из файла index.css, для всех заголовков h1 в приложении, 
        // но т.к. шрифт h1 домашней страницы больше остальных шрифтов h1 на других страницах, к нему добавляются стили
        // из css-модуля для домашней страницы ${s.title}, в которых лежит нужный размер шрифта, этот паттерн не допускает бойлерплэйта
export const HomePage = () => {
    return (
        <div>
            <h1 className={`pageTitle ${s.title}`}>The Rick and Morty</h1>
            <nav className={s.linkWrapper}>
                <NavLink to={"/characters"} className={"linkButton"}>Characters</NavLink>
                <NavLink to={"/locations"} className={"linkButton"}>Locations</NavLink>
                <NavLink to={"/episodes"} className={"linkButton"}>Episodes</NavLink>
            </nav>
        </div>
    )
}