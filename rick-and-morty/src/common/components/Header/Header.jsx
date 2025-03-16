// Импорт изображения для вставки в хедер, три раза(../) выхожу из вложености папок где лежит хедер, захожу(/assets), спускаюсь до картинки
    // В атрибуте src вместо кавычек использую красивые скобки, синтаксис jsx, т.к. кавычки это строка,
    // а скобки позволяют работать с import, сущностями нетипичными для HTML, причём адрес указан в импорте,
    // в атрибут src передаю только ссылку(logo) на адрес
        // В теге nav вместо элементов <a>, ссылки <NavLink> из либы react-router, не перезагружают страницу при переходе
import { NavLink } from "react-router"
import logo from "../../../assets/img/logo.png"

// Компонент общего Хедера для всего приложения, отображается на всех страницах
export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={"/"}>
                    <img src={logo} alt="logotype" />
                </NavLink>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/characters"}>Characters</NavLink>
                <NavLink to={"/locations"}>Locations</NavLink>
                <NavLink to={"/episodes"}>Episodes</NavLink>
            </nav>
        </header>
    )
}