import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import axios from "axios";

type Movie = {
  title: string;
  poster_path: string;
  id: number;
};

function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=true&language=en-US&page=1`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTJjOWMyODFkOGQ5M2YyNGYzN2EwMDYxNzJiYjBhMyIsIm5iZiI6MTc1Mjk0MjQ1MC44OTY5OTk4LCJzdWIiOiI2ODdiYzc3MmEyMzE0NDFmYjUxNjk5MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XBdO08mwl0Hq_WS_PNMqZkM4fTAUTIc0ANPo0tKSzu0",
    },
  };
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(url, options);

      setMovies(data.results);
    };

    getMovies();
  }, [input]);
  return (
    <div>
      <label htmlFor="">
        Search:
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
        />
      </label>
      <MovieList movies={movies} />
      <p>asd</p>
    </div>
  );
}

export default MoviesPage;
