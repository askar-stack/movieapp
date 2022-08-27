import React from "react";
import { useEffect } from "react";

//35a5cb42

const API_URL = "http://www.omdbapi.com?apikey=35a5cb42";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return <h1> lorem </h1>;
};

export default App;
