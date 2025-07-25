import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router";

type Movie = {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
};

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState<Movie>({
    title: "",
    release_date: "",
    overview: "",
    poster_path: "",
  });
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTJjOWMyODFkOGQ5M2YyNGYzN2EwMDYxNzJiYjBhMyIsIm5iZiI6MTc1Mjk0MjQ1MC44OTY5OTk4LCJzdWIiOiI2ODdiYzc3MmEyMzE0NDFmYjUxNjk5MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XBdO08mwl0Hq_WS_PNMqZkM4fTAUTIc0ANPo0tKSzu0",
    },
  };
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(url, options);
      setMovieInfo(data);
    };

    getMovies();
  }, []);

  return (
    <div>
      <p>Title: {movieInfo.title}</p>
      <p>Release Date: {movieInfo.release_date}</p>
      <p>Overview: {movieInfo.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} />

      <div>
        <NavLink to="cast">Cast </NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;
