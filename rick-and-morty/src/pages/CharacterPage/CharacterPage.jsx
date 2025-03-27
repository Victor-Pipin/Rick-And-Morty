import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharacterPage.module.css";

// Компонент страницы с персонажами мультсериала
    // В useEffect() использую библиотеку axios для запроса данных персонажей, для отрисовки на странице. В axios применяю метод get
    // для отправки запроса на адрес(endpoint) указанный в скобках, для получения(get) данных персонажей
    // Метод get возвращает объект Promise, объект Promise имеет три метода(then, catch, finally), для работы с результатами ответа
    // Метод then((res)...) используется если ответ сервера положительный(заRESOLVEвился), res(ponse) это то, что пришло с сервера
    // Помещаю в функцию setCharacters(res.data.results) данные полученные с сервера(20 первых персонажей)
        // В useState([]) при помощи метода setCharacters(res.data.results) устанавливаю значение для characters, данные полученные в res

export const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setCharacters(res.data.results)
        })
    }, []);

    return (
        <div>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            {characters.length && (
            <div className={s.characters}>
                {characters.map((character) => {
                    return (
                        <div className={s.character}>
                            <div className={s.characterLink}>{character.name}</div>
                            <img src={character.image} alt={`${character.name} avatar`} />
                        </div>
                    )
                })}
            </div>
            )}
        </div>
    );
}
