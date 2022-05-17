import Movie from '../Movie/Movie'

export default function MovieList(props){
    
    return(
        <>
        {
            props.allMovie.map((move)=>{
                return <Movie movieData={move} />
            })
        }
        
        </>
    )
}