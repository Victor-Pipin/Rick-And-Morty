
// Компонент страницы с персонажами мультсериала
    // В useEffect() использую библиотеку axios для запроса данных персонажей, для отрисовки на странице. В axios применяю метод get
    // для отправки запроса на адрес(endpoint) указанный в скобках, для получения(get) данных персонажей
    // Метод get возвращает объект Promise, объект Promise имеет три метода(then, catch, finally), для работы с результатами ответа
    // Метод then((res)...) используется если ответ сервера положительный(заRESOLVEвился), res(ponse) это то, что пришло с сервера
    // Помещаю в функцию setCharacters(res.data.results) данные полученные с сервера(20 первых персонажей)
        // В useState([]) при помощи метода setCharacters(res.data.results) устанавливаю значение для characters, данные полученные в res,
        // теперь  в characters лежат персонажи полученные с сервера
            // Конструкция {characters.length && (...)} используется для условного рендеринга компонента, при отрисовке персонажей,
            // работает так, что если первое выражение (в данном случае characters.length) истинно (или ненулевое), 
            // тогда выполняется второе выражение. Если первое выражение ложно (например, 0 или false), 
            // то второе выражение не выполняется, и результатом всего выражения будет значение первого, такая конструкция помогает 
            // избежать ошибки если данные ещё не пришли с сервера и массив персонажей(characters) пустой
                // previosPageHandler - функция-обработчик события на предыдущую страницу персонажей, для кнопки Назад
                // nextPageHandler - функция-обработчик события на следущую страницу персонажей, для кнопки Вперед
                    // Пагинация по страницам с персонажами: Завожу состояние для хранения информации о следующей странице с персонажами
                    // const [info, setInfo] = useState({...}), в useEffect() устанавливаю эту информацию setInfo(res.data.info)
                    // в хендлере nextPageHandler с помощью axios.get(info.next) отпарвляю запрос на адрес info.next, где находятся
                    // следующие персонажи, затем устанавливаю их в состояние setCharacters(res.data.results) для отрисовки,
                    // далее устанавливаю состояние где будет лежать следующая партия персонажей setInfo(res.data.info),
                    // аналагично, в обратном порядке для хендлера previosPageHandler используя поле prev вместо next
                        // Использую фрагмент <></> т.к. условный рендеринг возвращает больше одного элемента: блок с персонажами
                        // и блок с кнопками навигации Назад Вперед по страницам с персонажами, чтобы не создавать ещё один DOM-узел
                            // Проведён рефакторинг дублируещегося кода:
                            // запроса данных - axios.get("https://rickandmortyapi.com/api/character").then((res) в useEffect(),
                            //                    axios.get(info.next).then((res) в nextPageHandler,
                            //                    axios.get(info.prev).then((res) в previosPageHandler
                            // и установки полученных данных в стэйты - setCharacters(res.data.results), setInfo(res.data.info),
                            // в перчисленых функциях, путём создания функции fetchData, в которую и помещён дублирующийся код
                                // Отключаю кнопку Назад на первой странице персонажей и Вперед на последней странице персонажей,
                                // чтобы не было ошибки т.к. адрес для перехода в этих кейсах равен null, для этого для кнопок
                                // указываю атрибут disabled={info.prev === null} для кнопки Назад и disabled={next.prev === null}
                                // для кнопки Вперед, где проверяю равен ли адрес для перехода null, если true, кнопка отключается
                                    // Фильтрация, чтобы не получать всех персонажей, а только интересующих можно к адресу персонажей 
                                    // добавить квери параметры, после основного адреса ставлю /, затем ?, далее доступный квери параметр
                                    // например name, потом = и значение для квери параметра например rick, если квери параметр name, то
                                    // поиск будет по именам персонажей например rick и результатом будут все персонажи имеющие это имя,
                                    // адрес всех персонажей - https://rickandmortyapi.com/api/character, квери параметр - /?name=rick,
                                    // полный запрос по имени персонажа - https://rickandmortyapi.com/api/character/?name=rick

import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharacterPage.module.css";

export const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);

    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setCharacters(res.data.results)
            setInfo(res.data.info)
        })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character")
    }, []);

    const previosPageHandler = () => {
        fetchData(info.prev)
    }

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            <input type="search" className={s.search} />
            {characters.length && (
                <>
                {
                    <div className={s.characters}>
                        {characters.map((character) => {
                            return (
                                <div key={character.id} className={s.character}>
                                    <div className={s.characterLink}>{character.name}</div>
                                    <img src={character.image} alt={`${character.name} avatar`} />
                                </div>
                            )
                        })}
                    </div>
                }
                    <div className={s.buttonsContainer}>
                        <button className="linkButton" disabled={info.prev === null} onClick={previosPageHandler}>
                        Назад
                        </button>
                        <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                        Вперед
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
