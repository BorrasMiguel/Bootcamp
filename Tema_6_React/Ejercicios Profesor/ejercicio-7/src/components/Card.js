import { useHistory } from "react-router";
import { DUMMY_IMAGE_URL, IMAGE_URL } from "../settings";

export default function Card({ movie }) {

    const history = useHistory();

    const handleRedirect = movieId => history.push("/details/" + movieId);

    const src = movie.backdrop_path ? IMAGE_URL + movie.backdrop_path : DUMMY_IMAGE_URL;

    return (
        <div className="card flex-grow-1 m-3 shadow-sm">
            <img className="card-img-top" src={src} alt="Movie Card" />
            <div className="card-body">
                <h3>{movie.title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">{movie.release_date}</h6>
                <p className="card-text">{movie.overview}</p>
                <button onClick={() => handleRedirect(movie.id)} className="btn btn-outline-success">Más información</button>
            </div>
        </div>
    )
}
