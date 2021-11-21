import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);

    const deleteMovie = (movie) =>
        fetch(`https://peaceful-wildwood-34209.herokuapp.com/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(movies => setMovies(movies));
    const [id, setId] = useState(1000);
    const [movie, setMovie] = useState({title: '', rating: 2.5, id: ''});
    // const [id, setId] = useState(1000);
    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});
    const createMovieClickHandler = () =>
        fetch('https://peaceful-wildwood-34209.herokuapp.com/api/movies', {
            method: 'POST',
            body: JSON.stringify({...movie, _id: (new Date()).getTime() + ''}),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(movies => setMovies(movies));

    const saveMovie = () =>
        fetch(`https://peaceful-wildwood-34209.herokuapp.com/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(movies => setMovies(movies));

    useEffect(() =>
            fetch('https://peaceful-wildwood-34209.herokuapp.com/api/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies))
        , []);
    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-end">
                        Create
                    </button>
                    <input className="form-control"
                           value={movie.title}
                           onChange={onMovieTitleChange}
                           style={{width: "70%"}}/>
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary ms-2 float-end">
                        Save
                    </button>

                </li>

                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
