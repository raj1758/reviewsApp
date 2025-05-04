import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  onClickBefore = () => {
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex > 0
          ? prevState.currentIndex - 1
          : prevState.currentIndex,
    }))
  }

  onClickNext = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex < reviewsList.length - 1
          ? prevState.currentIndex + 1
          : prevState.currentIndex,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickBefore}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="profile-container">
            <img src={imgUrl} alt={username} className="image" />
            <p className="heading">{username}</p>
            <p>{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickNext}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
