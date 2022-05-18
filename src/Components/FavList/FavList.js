import { Button , Card } from 'react-bootstrap';
import Navbarr from "../Navbar/Navbar";

import { useState, useEffect } from "react";

    


export default function FavList(){

    const [favMovie , setMovie]= useState();

    async function getfavMovie() {
         let url = `https://movies-gate.herokuapp.com/getMovies`;
        let response = await fetch(url, {
            method: "GET",
        });
        let favMovie = await response.json();
        setMovie(favMovie);
        
     }
     

     useEffect(() => {
        getfavMovie();
    }, []);


    async function handleDelete(id) {
        
         let url = `https://movies-gate.herokuapp.com/DELETE/${id}`;
         
        let response = await fetch(url, {
            method: "DELETE",
        });
        console.log(response.status);
        if(response.status===204){
            getfavMovie();
        }
        
    }

    return(
        <>
                <Navbarr />
                <br/>

                {favMovie && favMovie.map((movie) => {
                return (
            <Card key={movie.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w500"+movie.posterpath}/>
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                Your Comment:<br/>
                {movie.comment}
                </Card.Text>
                <Button onClick={ () =>{handleDelete(movie.id);} } style={{ margin: '10px' }} variant="danger">Delete</Button>
                <Button variant="warning">Update</Button>
                </Card.Body>
            </Card>
               );
            })
            }
        </>
    )
}