import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from '../../components/common/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainContainer>
        <SecondaryContainer/>
      </MainContainer>
      <Header/>
    </div>
  )
}

export default Browse