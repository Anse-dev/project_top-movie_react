import React, { useEffect, useState } from "react";
import {
  Banner,
  BannerContent,
  HeroButton,
  HeroDescr,
  HeroTitle,
  HeroText,
} from "./Hero.styles";

const HeroBanner = ({ movies }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      let response = await movies;

      setMovie(response[10]);
      return response;
    };
    fetchData();
  }, [movies]); // Or [] if effect doesn't need props or state
  return (
    <Banner image={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}>
      <BannerContent>
        <HeroText>
          <HeroTitle>{movie.original_title}</HeroTitle>
          <HeroDescr>{movie.overview}</HeroDescr>
          <div>Popularity:{movie.popularity} </div>
          <HeroButton>Play</HeroButton>
        </HeroText>
      </BannerContent>
    </Banner>
  );
};

export default HeroBanner;
