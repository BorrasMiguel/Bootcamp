import { useState, useEffect } from "react"
import { SEARCH_URL } from "../settings";

export default function SearchInput({ setMovies, setPages }) {

    const [input, setInput] = useState("");

    useEffect(() => {
        input !== "" && fetch(SEARCH_URL + input)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                // setPages({ current: 1, total: data.total_pages })
            });

    }, [input, setMovies]);

    const handleSearch = e => setInput(e.target.value);

    return (
        <form className="d-flex justify-content-center mb-3">
            <input
                className="form-control w-50"
                value={input}
                onChange={handleSearch}
                type="text"
                placeholder="Search a movie"
            />
        </form>
    )
}
