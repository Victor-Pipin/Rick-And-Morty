// useParams, хук из библиотеки react-router, используя который возможно осуществлять переход на страницу отдельного персонажа, из
// названия понятно, что работает с параметрами(квери-параметрами)
    // С помощью деструктуризации const { id } извлекаю значение параметра id из объекта, возвращаемого useParams(). 
    // В URL есть параметр :id (<Route path="/characters/:id" element={<CharacterPage />} />), и его значение будет доступно через id.
    // Если происходит переход по URL/characters/123, то: useParams() вернет объект { id: '123' }.
    // После выполнения const { id } = useParams();, переменная id будет содержать строку '123'.
// Итог: useParams — это хук из библиотеки React Router, который позволяет получать параметры(123) из URL(URL/characters/123) 
// в компонентах React. Если в маршруте (<Route path="/characters/:id" element={<CharacterPage />} />) указан динамический сегмент(:id),
// useParams вернёт объект с параметрами(123) из текущего URL/characters/123.

import { useParams } from "react-router"

export const CharacterPage = () => {
    const { id } = useParams()

    return (
        <div className={"pageContainer"}>
            <h1>Character id: {id}</h1>
        </div>
    )
}