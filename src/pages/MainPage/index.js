import React from "react";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import Category from "../../components/Category";
import Row from "../../components/Row";
import styled from "styled-components";
import requests from "../../api/request";

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

    &:after {
      background: url("/images/home-background.png") center center / cover no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0;
      opacity 1;
      z-index: -1;
    }

`;

export default MainPage;
