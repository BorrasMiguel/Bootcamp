import { useState, useEffect } from "react";
import { UPCOMING_URL } from "../settings";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";

export default function UpcomingMovies() {

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState({ current: 1, total: undefined });

    useEffect(() => {
        // The URL should change if there is a search going on.
        fetch(UPCOMING_URL + "&page=" + pages.current)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                if (pages.current !== Number(data.page) || pages.total === undefined) {
                    setPages(prevPages => { return { ...prevPages, total: data.total_pages } });
                }
            });

    }, [pages]);


    return (
        <div className="pt-5 pb-5 flex-grow-1">
            <h1 className="text-center mb-5">Upcoming Movies</h1>
            <SearchInput setMovies={setMovies} setPages={setPages} />
            <Pagination pages={pages} setPages={setPages} />
            <div className="container d-flex flex-wrap">
                {movies.map(movie => <Card movie={movie} key={movie.id} />)}
            </div>
            <Pagination pages={pages} setPages={setPages} />
        </div>
    )
}
