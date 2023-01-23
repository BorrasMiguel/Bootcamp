import { Route, Switch } from "react-router-dom";
import UpcomingMovies from "../pages/UpcomingMovies";
import MovieDetails from "../pages/MovieDetails";
import Error from "../pages/Error";
import Footer from "../components/Footer";

export default function Pages() {
    return (
        <div className="flex-grow-1 bg-light min-vh-100 d-flex flex-column">
            <Switch>
                <Route exact path="/" component={UpcomingMovies} />
                <Route path="/details/:movieId" component={MovieDetails} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </div>
    )
}
