import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <div>
            <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
