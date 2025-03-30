
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

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setCharacters(res.data.results)
        })
    }, []);

    const previosPageHandler = () => {
        alert('previosPageHandler')
    }

    const nextPageHandler = () => {
        alert('nextPageHandler')
    }

    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            {characters.length && (
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
            )}
            <div className={s.buttonsContainer}>
                <button className="linkButton" onClick={previosPageHandler}>
                Назад
                </button>
                <button className="linkButton" onClick={nextPageHandler}>
                Вперед
                </button>
            </div>
        </div>
    );
}
