import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(each => {
    return each.categoryId === 'ACTION'
  })
  const comedyMoviesList = moviesList.filter(each => {
    return each.categoryId === 'COMEDY'
  })
  return (
    <div className="bg-contaiiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <h1>Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1>Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}
export default PrimeVideo
