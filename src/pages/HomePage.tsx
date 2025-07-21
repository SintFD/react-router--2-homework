import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.themoviedb.org/3/trending/movie/day";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTJjOWMyODFkOGQ5M2YyNGYzN2EwMDYxNzJiYjBhMyIsIm5iZiI6MTc1Mjk0MjQ1MC44OTY5OTk4LCJzdWIiOiI2ODdiYzc3MmEyMzE0NDFmYjUxNjk5MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XBdO08mwl0Hq_WS_PNMqZkM4fTAUTIc0ANPo0tKSzu0",
  },
};

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(url, options);
      setMovies(data.results);
    };

    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
