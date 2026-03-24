import MovieItem from "./MovieItem";

const MovieList = ({movies}) => {
    return (
        <>
        {movies.map((movie) => (
            <MovieItem key={movie.id} title={movie.title} year={movie.year} genre={movie.genre} description={movie.description} />
        ))}
        </>
    );
};

export default MovieList;