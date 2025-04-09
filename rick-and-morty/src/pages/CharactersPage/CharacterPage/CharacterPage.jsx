// useParams, хук из библиотеки react-router, используя который возможно осуществлять переход на страницу отдельного персонажа, из
// названия понятно, что работает с параметрами(квери-параметрами)
    // С помощью деструктуризации const { id } извлекаю значение параметра id из объекта, возвращаемого useParams(). 
    // В URL есть параметр :id (<Route path="/characters/:id" element={<CharacterPage />} />), и его значение будет доступно через id.
    // Если происходит переход по URL/characters/123, то: useParams() вернет объект { id: '123' }.
    // После выполнения const { id } = useParams();, переменная id будет содержать строку '123'.
// Итог: useParams — это хук из библиотеки React Router, который позволяет получать параметры(123) из URL(URL/characters/123) 
// в компонентах React. Если в маршруте (<Route path="/characters/:id" element={<CharacterPage />} />) указан динамический сегмент(:id),
// useParams вернёт объект с параметрами(123) из текущего URL/characters/123.
// В контексте компонента CharacterPage хранит id по которому осуществлялся переход из компонента CharactersPage на страницу персонажа
    // Завожу состояние character, используя хук useEffect делаю запрос за данными персонажа, в эндпоинте использую id персонажа которое
    // получил из хука useParams, полученные с сервера данные персонажа записываю в состояние character и в контексте этих данных, 
    // возвращаю jsx-разметку с заголовком-именем персонажа и карточку с изображением и текстовой информацией о персонаже.
// С помощью компонента <Link to={"/characters"}... , добавляю в jsx-разметку кнопку для возврата на страницу с персонажами
// адрес /characters описан в роутах <Route path="/characters" element={<CharactersPage />} /> и ведёт на страницу с персонажами
    // С помощью функции getStatusClassName добавляю кружочек соответствующего цвета в зависимости от статуса(character.status) персонажа
    // слева от текстовой информации о статусе персонажа

import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router"
import s from "./CharacterPage.module.css"

export const CharacterPage = () => {
    const { id } = useParams()

    const [character, setCharacter] = useState(null)

    const getStatusClassName = (status) => {
        let characterStatus

        switch (status) {
            case "Alive":
                characterStatus = s.aliveStatus
                break;

            case "Dead":
                characterStatus = s.deadStatus
                break;

            case "unknown":
                characterStatus = s.unknownStatus
                break;
        
            default:
                characterStatus = ""
                break;
        }

        return `${s.status} ${characterStatus}`
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
            setCharacter(res.data)
        })
    }, [])

    return (
        <div className={"pageContainer"}>
            {character !== null && (
                <div className={s.container}>
                    <h1 className={"pageTitle"}>{character.name}</h1>
                    <div className={s.content}>
                        <img className={s.img} src={character.image} alt={`Picture of ${character.name}`} />
                        <div className={s.description}>
                            <div className={s.statusContainer}>
                                <div className={getStatusClassName(character.status)}></div>
                                <div>{character.status} - {character.species}</div>
                            </div>
                            <div className={s.info}>
                                <p className={s.subTitle}>Last known location:</p>
                                <p className={s.subTitleResult}>{character.location.name}</p>
                            </div>
                            <div className={s.info}>
                                <p className={s.subTitle}>Episode count:</p>
                                <p className={s.subTitleResult}>{character.episode.length}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/characters"} className={"linkButton"}>
                        Go back
                    </Link>
                </div>
            )}
        </div>
    )
}