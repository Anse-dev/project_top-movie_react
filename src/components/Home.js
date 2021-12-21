import { React } from "react";
import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
} from "react-router-dom";
import { useHomeFetch } from "../hooks/HomeFetch";
import Button from "./Button";
import Grid from "./Grid";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Spinner from "./Spinner";
import Thumb from "./Thumb/index";
const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    isLoadingBtn,
    setIsLoadingBtn,
  } = useHomeFetch();
  return (
    <>
      <Header searchHandler={setSearchTerm} />
      {!searchTerm && state.results[0] ? (
        <HeroBanner movies={state.results} />
      ) : null}
      <Grid
        top={searchTerm ? 120 : 0}
        header={!searchTerm ? "Popular movies" : "Search results"}
      >
        {state.results.map((movie, index) => {
          return (
            <Thumb
              key={index}
              image={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              title={movie.original_title}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="load more" callback={() => setIsLoadingBtn(true)} />
      )}
    </>
  );
};

export default Home;
