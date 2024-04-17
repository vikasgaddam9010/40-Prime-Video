import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {eachMovie} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = eachMovie

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img alt="thumbnail" src={thumbnailUrl} />
          </button>
        }
      >
        {close => (
          <>
            <div className="pop-up">
              <button
                type="button"
                className="trigger-button icon"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <div data-testid="closeButton" className="video-container">
                <ReactPlayer controls={true} url={videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
