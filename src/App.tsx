import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesPage from "./pages/MoviesPage";
import MovieCast from "./components/MovieCast";
import MovieReviews from "./components/MovieReviews";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
