import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';
import { Link, Route } from 'react-router-dom';
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          return setMovieList(response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        },);
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
{/* <MovieList movies={movieList}/> */}
{/* <Movie /> */}
  return (
    <div>
      
      <SavedList list={[ ]} /> 
     
      <Route exact path="/">
      <MovieCard movies={movieList}/>
      </Route>
      <Route exact path={"/movies/:id"}>
        <MovieCard movies={movieList}/>
      </Route>
    </div>

    
  );
}
