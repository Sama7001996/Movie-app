import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const MovieList = (props) => {

	return (
		<>
            {props.movies && props.movies.map((movie => (
	
                <div className="movie" key={movie.id}>
                
                    
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`} alt="link-to-site">
                            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'className="poster"/>
                        </a>
                 

                    <div className="movie-details">
                <div className="box">
                <h4 className="title ">{movie.title}</h4>
                <p className="rating ">{movie.vote_average} <StarFill/></p>
                </div>

                <div className="overview">
                <h1>Overview</h1>
                {movie.release_date}
                {movie.overview}
                </div>
            </div>

                </div>
            )))}


  
        </>
    );
};

export default MovieList;
