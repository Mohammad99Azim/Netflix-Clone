import { Row } from 'react-bootstrap'
import Movie from '../Movie/Movie'

export default function MovieList(props){
    
    return(
        <>
        <Row>
            
        {
            props.allMovie.map((move)=>{
                return <Movie key={move.id} movieData={move} />
            })
        }
        
        </Row>
        </>
    )
}