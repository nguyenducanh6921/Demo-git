import React from "react";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homeScreen" >
      <Banner />
      <Row
        title="Popular"
        fetchUrl={requests.requestPopular}
        isLargeRow
        idSection="popular"
      />
      <Row title="Top Rated" fetchUrl={requests.requestTopRated}
       idSection="rated"  />
      <Row title="Trending" fetchUrl={requests.requestTrending} idSection="trend" />
      <Row title="Horror" fetchUrl={requests.requestHorror} idSection="horror" />
      <Row title="Up Coming" fetchUrl={requests.requestUpcoming} idSection="coming"/>

      

    </div>

  );
}

export default HomeScreen;
