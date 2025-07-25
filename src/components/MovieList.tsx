import { Link } from "react-router";

type Movie = {
  title: string;
  poster_path: string;
  id: number;
};

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <ul>
      {movies.map((movie, i) => (
        <li key={i}>
          <Link className="li" to={`/movies/${movie.id}`}>
            {movie.title}
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
