 import { Button , Modal ,Form} from 'react-bootstrap';


export default function ModelMovie(props){
    
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.movieData.title}</Modal.Title>
          </Modal.Header>
          <img src={"http://image.tmdb.org/t/p/w500"+props.movieData.poster_path} alt="Movie" />
          <Modal.Body>{props.movieData.overview}
          <Form>
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </Modal.Body>
           Release Date: {props.movieData.release_date}
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Add to favorite
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  