import React, { useState, useEffect } from 'react';

import { StarFill } from 'react-bootstrap-icons';

const TopRated = () => {

    const [movies, setMovies] = useState([]);


    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1`;

        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovies(responseJson.results);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 



	return (
		<>
        {movies && movies.map((movie => ( 
            <div className="movie" key={movie.id}>
            
            
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} alt="link-to-site">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie' className="poster"/>
                </a>
            <div className="movie-details">
                <div className="box">
                <h4 className="title ">{movie.title}</h4>
                <p className="rating ">{movie.vote_average} <StarFill/></p>
                </div>

                <div className="overview">
                <h1>Overview</h1>
                {movie.release_date}<br/>
                {movie.overview}
                </div>
            </div>

        </div> 
        )))}
		</>
	);
};

export default TopRated;