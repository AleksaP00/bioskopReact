import MovieCard from "../components/MovieCard";
import { useState } from "react";
import SearchIcon from '../search.svg';
function Home({ movies, searchMovies }) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="app">
            <h4>Best movies</h4>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (

                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Home;