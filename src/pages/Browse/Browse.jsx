import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse