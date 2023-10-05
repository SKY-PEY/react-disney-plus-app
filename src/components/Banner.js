import requests from "../api/request";
import { truncate } from "../utils/truncate";
import axiosInstance from "../api/axios";
import { React, useEffect, useState } from "react";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const response = await axiosInstance.get(requests.fetchNowPlaying);
    //console.log(response);

    //여러 영화 중 영화 하나의 ID 가져오기
    const movieID =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    //특정 영화의 더 상세한 정보(비디오정보 포함)를 가져오기
    const { data: movieDetail } = await axiosInstance.get(`movie/${movieID}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  if (!movie) {
    return <div>...loading</div>;
  }

  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https:www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            {movie.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className="banner__description">{truncate(movie.overview, 100)}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
};

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-item: center;
flex-direction: column;
width: 100%
height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Banner;
