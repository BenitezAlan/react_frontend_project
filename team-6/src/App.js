import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./constants/requests";

function App() {
  return (
    <div className="App">
      <Row
        title="ORGINIALES DE NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Tendencias" fetchUrl={requests.fetchTrending} />
      <Row title="Películas populares" fetchUrl={requests.fetchTrendingAR} />
      <Row title="Series documentales" fetchUrl={requests.fetchDocumantaries} />
      <Row title="Películas de comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Series de EE. UU." fetchUrl={requests.fetchTVUS} />
      <Row title="Películas familiares" fetchUrl={requests.fetchFamilyMovies} />
      <Row
        title="Películas de suspenso"
        fetchUrl={requests.fetchThrillerMovies}
      />
      <Row
        title="Películas mejor valoradas"
        fetchUrl={requests.fetchTopRated}
      />

      <Row title="Películas de acción" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
