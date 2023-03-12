import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoviesRental() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Movies for Rent</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesRental;

