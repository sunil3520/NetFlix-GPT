import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import Footer from '../../components/common/Footer/Footer';

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
      <Footer/>
    </div>
  )
}

export default Browse