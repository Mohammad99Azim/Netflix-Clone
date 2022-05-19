import { Button, Card, Col } from 'react-bootstrap';
import { useState } from 'react';
import ModelMovie from '../ModelMovie/ModelMovie'
import './Movie.css'

export default function Movie(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true)

    const handleClose = () => setShow(false);

    return (
        <>
            <Col>
                <Card style={{ width: '18rem', height: "670px" }}>
                    <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w500" + props.movieData.poster_path} />
                    <Card.Body>
                        <Card.Title>{props.movieData.title}</Card.Title>
                        <Card.Text className='overview-card'>
                            {props.movieData.overview}
                        </Card.Text>
                        <Button onClick={handleShow} variant="primary">add to favorite</Button>
                    </Card.Body>
                </Card>
                {
                    <ModelMovie
                        show={show}
                        handleClose={handleClose}
                        movieData={props.movieData}
                    />
                }
            </Col>

        </>
    )
}

// {`.${props.movieData.poster_path}`}