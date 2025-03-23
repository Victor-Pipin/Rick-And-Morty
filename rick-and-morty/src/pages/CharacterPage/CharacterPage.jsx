import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharacterPage.module.css";

// Компонент страницы с персонажами мультсериала
    // В useEffect() использую библиотеку axios для запроса данных персонажей, для отрисовки на странице. В axios применяю метод get
    // для отправки запроса на адрес(endpoint) указанный в скобках, для получения(get) данных персонажей
    // Метод get возвращает объект Promise, объект Promise имеет три метода(then, catch, finally), для работы с результатами ответа
    // Метод then((res)...) используется если ответ сервера положительный(заRESOLVEвился), res(ponse) это то, что пришло с сервера
export const CharacterPage = () => { 

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {})
    }, []);

    return (
        <div>
            <h1 className={"pageTitle"}>CharacterPage</h1>
        </div>
    )
}