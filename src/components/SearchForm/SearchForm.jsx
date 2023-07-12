import { useSearchParams } from 'react-router-dom';
import * as API from '../../utils/api/apiMoviedb';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';
import NotFound  from '../../pages/NotFound';


export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = e => {
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle)
        .then(ret => {
          if (ret.length === 0) {
            setNotFound(true);
          } else {
            setMovies(ret);
            setNotFound(false);
          }
        })
        .catch(error => {
          console.error(error);
          setNotFound(true);
        });
    }
  }, [searchParams]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: '15px' }}>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};