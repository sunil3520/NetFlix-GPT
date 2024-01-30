import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from '../../components/common/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse