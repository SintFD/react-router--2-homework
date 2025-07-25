import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Actor = {
  name: string;
};

function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState<Actor[]>([]);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTJjOWMyODFkOGQ5M2YyNGYzN2EwMDYxNzJiYjBhMyIsIm5iZiI6MTc1Mjk0MjQ1MC44OTY5OTk4LCJzdWIiOiI2ODdiYzc3MmEyMzE0NDFmYjUxNjk5MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XBdO08mwl0Hq_WS_PNMqZkM4fTAUTIc0ANPo0tKSzu0",
    },
  };
  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { cast },
      } = await axios.get(url, options);
      setMovieCast(cast);
    };

    getMovies();
  }, []);

  return (
    <ul>
      {(movieCast.length > 0 &&
        movieCast.map((actor, i) => (
          <li key={i}>
            {i + 1 + ")"}
            {actor.name}
          </li>
        ))) || <p>No cast info</p>}
    </ul>
  );
}

export default MovieCast;
