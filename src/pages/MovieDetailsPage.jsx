import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLinkHref}>
        {' '}
        <button type="button" style={{ margin: '15px' }}>
          Go back
        </button>
      </Link>
      <div
        style={{
          marginBottom: '30px',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
          alt="{movieDetails.original_title}"
          style={{ float: 'left' }}
        />

        <div style={{ flex: 1, marginLeft: '10px' }}>
          <h2>
            {movieDetails.title} (
            {movieDetails.release_date
              ? movieDetails.release_date.substring(0, 4)
              : ''}
            )
          </h2>

          <p>
            User Score:{' '}
            {movieDetails.vote_average
              ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h4>Genres</h4>
          <p>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>
        </div>
      </div>

      <div
        style={{
          marginBottom: '30px',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
          padding: '20px',
        }}
      >
        <p>Additional information</p>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
