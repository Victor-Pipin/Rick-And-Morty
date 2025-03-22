// Импорт изображения для вставки в хедер, три раза(../) выхожу из вложености папок где лежит хедер, захожу(/assets), спускаюсь до картинки
    // В атрибуте src вместо кавычек использую красивые скобки, синтаксис jsx, т.к. кавычки это строка,
    // а скобки позволяют работать с import, сущностями нетипичными для HTML, причём адрес указан в импорте,
    // в атрибут src передаю только ссылку(logo) на адрес
        // В теге nav вместо элементов <a>, ссылки <NavLink> из либы react-router, не перезагружают страницу при переходе
import { NavLink } from "react-router"
import logo from "../../../assets/img/logo.png"
import s from "./Header.module.css"

// Компонент общего Хедера для всего приложения, отображается на всех страницах
export const Header = () => {
    return (
        <header>
            <nav className={s.container}>
                <NavLink to={"/"} className={s.headerLink}>
                    <img className={s.logo} src={logo} alt="logotype" />
                </NavLink>
                <NavLink to={"/"} className={s.headerLink}>Home</NavLink>
                <NavLink to={"/characters"} className={s.headerLink}>Characters</NavLink>
                <NavLink to={"/locations"} className={s.headerLink}>Locations</NavLink>
                <NavLink to={"/episodes"} className={s.headerLink}>Episodes</NavLink>
            </nav>
        </header>
    )
}