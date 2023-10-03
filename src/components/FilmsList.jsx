import Film from "./Film"

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film key={film.id} url={film.url}>{film.name} </Film>
    })

    return (
        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    )
}

export default FilmList