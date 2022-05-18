 import { Button , Modal ,Form} from 'react-bootstrap';
 import { useRef } from "react";


export default function ModelMovie(props){

  let url_heroku = "https://movies-gate.herokuapp.com";

  let commentRef = useRef();
  
  // function handleComment(){
    
  //   let userComment = commentRef.current.value;
  //    console.log(userComment);
  //   // let newRecipe = { ...props.choosenCard, comment: userComment }
  //   let newRecipe = { ...props.choosenCard, userComment };
    

  //   props.updateRecipe(newRecipe, newRecipe.id);
  //   // console.log("result is ",props.choosenCard)

  //  }

//
    async function handleAddToFav() {

      let userComment = commentRef.current.value;
      console.log(userComment);

      let url = `${url_heroku}/addMovie`;
      let data = {
        title: props.movieData.title ,
        releasedate: props.movieData.release_date ,
        posterpath: props.movieData.poster_path,
        comment :  userComment,
      };
      
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
      })
    }




    
    return (
      <>
        <Modal key={props.movieData.id} show={props.show} onHide={props.handleClose}>
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
              <Form.Control ref={commentRef}
                            type="text"
                placeholder="Enter Comment" />
            </Form.Group>
          </Form>


          </Modal.Body>
           Release Date: {props.movieData.release_date}
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={() => {handleAddToFav(); props.handleClose();}} >
              Add to favorite
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  