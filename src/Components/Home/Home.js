import { useState, useEffect } from "react";
import MovieList from '../MovieList/MovieList'
import Navbarr from "../Navbar/Navbar";
import { Container } from 'react-bootstrap';



export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMoviesData() {
    const url = process.env.REACT_APP_URL || "https://movies-gate.herokuapp.com" //just to prevent errors i added the url in string 

    let response = await fetch(`${url}/trending`);

    let moviesData = await response.json();

    setMovies(moviesData);
  }

  useEffect(() => {
    getMoviesData();
  }, []);



  return (
    <>
      <Navbarr />
      <br />
      <Container >
        {
          (movies.length > 0) && <MovieList allMovie={movies} />
        }
      </Container>
    </>
  )

}