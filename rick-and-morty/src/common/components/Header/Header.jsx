// Импорт изображения для вставки в хедер, три раза(../) выхожу из вложености папок где лежит хедер, захожу(/assets), спускаюсь до картинки
    // В атрибуте src вместо кавычек использую красивые скобки, синтаксис jsx, т.к. кавычки это строка,
    // а скобки позволяют работать с import, сущностями нетипичными для HTML, причём адрес указан в импорте,
    // в атрибут src передаю только ссылку(logo) на адрес
        // В теге nav вместо элементов <a>, ссылки <NavLink> из либы react-router, не перезагружают страницу при переходе
    // Добавляю стилизацию активного(active) состояния для ссылок NavLink, для этого использую API React Router, в компоненте NavLink
    // передаю в атрибут className анонимную функцию className={({ isActive }) => (isActive ? s.active : s.headerLink)}, в которую
    // передаю свойство(isActive) объекта из коробки API React Router, которое содержит информацию о состоянии компонента(ссылки) NavLink,
    // далее в этой анонмной функции с помощью тернаного опреатора проверяю состояние ссылки, если ссылка активная(произошёл переход)
    // применяются стили из модульного-css правила s.active, если не активна из того же модуля s.headerLink(базовые стили для ссылок)
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
                <NavLink to={"/"} className={({ isActive }) => (isActive ? s.active : s.headerLink)}>Home</NavLink>
                <NavLink to={"/characters"} NavLink={({ isActive }) => (isActive ? s.active : s.headerLink)}>Characters</NavLink>
                <NavLink to={"/locations"} className={({ isActive }) => (isActive ? s.active : s.headerLink)}>Locations</NavLink>
                <NavLink to={"/episodes"} className={({ isActive }) => (isActive ? s.active : s.headerLink)}>Episodes</NavLink>
            </nav>
        </header>
    )
}