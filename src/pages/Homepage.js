import React, { useState, useEffect } from 'react';
import MovieList from "../components/MovieList";
import NavBar from '../components/NavBar'; 
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying'; 


const Homepage = () => {
    // initial state, set state of movies array 
    const [movies, setMovies] = useState([]);
  
    // initial state, set state of search string 
    const [search, setSearch] = useState('');
  
    // calling API -- searchValue as a parameter 
    const searchMovie = async (searchTerm) => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
  
      const response = await fetch(url); 
      const responseJson = await response.json(); 
  
      // API JSON -- results
      if (responseJson.results) {
        setMovies(responseJson.results); 
      }
    };
  
    // passes new searchValue to our getMovieRequest
    useEffect(() => {
      searchMovie(search); 
    }, [search]); 
      
      return (
      <>
        
          <NavBar search={search} setSearch={setSearch} />
            <h1>{movies.length ? `Viewing ${movies.length} results for "${search}"` : null }</h1>
          
          <div className="container">
          
            <MovieList movies={movies} />
            <div  className="row">Now Playing</div>
            <NowPlaying/>
            <div className="row" >Top Rated</div>
            <TopRated/>
            <div className="row">Popular</div>
            <Popular/>
          

          
            
          
  
          
          </div>
          
      
      </>
      );
  };
  
export default Homepage;
  