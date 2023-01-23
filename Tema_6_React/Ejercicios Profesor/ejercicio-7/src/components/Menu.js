import { useHistory } from "react-router-dom";

export default function Menu() {

    const history = useHistory();

    return (
        <aside className="flex-shrink-0 bg-dark px-4">
            <div className="menu position-fixed">
                <h3 className="text-light text-center mt-3">Ejercicio 7</h3>
                <button onClick={() => history.push("/")} className="btn btn-light w-100 mt-3 mb-3" >
                    Upcomings
                </button>
                <a className="btn btn-outline-light w-100 mb-3" href="https://imdb.com">
                    Imdb
                </a>
                <a className="btn btn-outline-light w-100 mb-3" href="https://www.themoviedb.org/">
                    The Movie Database
                </a>
            </div>
        </aside >
    )
}
