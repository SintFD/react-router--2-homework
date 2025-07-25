import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Review = {
  author: string;
  author_details: { avatar_path: string };
  content: string;
};

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTJjOWMyODFkOGQ5M2YyNGYzN2EwMDYxNzJiYjBhMyIsIm5iZiI6MTc1Mjk0MjQ1MC44OTY5OTk4LCJzdWIiOiI2ODdiYzc3MmEyMzE0NDFmYjUxNjk5MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XBdO08mwl0Hq_WS_PNMqZkM4fTAUTIc0ANPo0tKSzu0",
    },
  };
  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await axios.get(url, options);

      setReviews(results);
    };

    getMovies();
  }, []);

  return (
    <ul>
      {(reviews.length > 0 &&
        reviews.map((review, i) => (
          <li key={i}>
            Author: {review.author}
            <img
              src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`}
            />
            <p>{review.content}</p>
          </li>
        ))) || <p>No reviews</p>}
    </ul>
  );
}

export default MovieReviews;
