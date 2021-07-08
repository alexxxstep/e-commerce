import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const viewRateStars = (value, color) => {
    const arrStars = []

    let left = 0
    for (let i = 0; i < 5; i++) {
      let cls = 'far fa-star'
      left = value - i
      if (i <= value && left >= 1) {
        cls = 'fas fa-star'
      } else if (left >= 0.5 && left < 1) {
        cls = 'fas fa-star-half-alt'
      } else if (left <= 0) {
        cls = 'far fa-star'
      }

      arrStars.push(
        <span key={i}>
          <i style={{ color }} className={cls}></i>
        </span>
      )
    }

    return arrStars
  }

  return (
    <>
      <div className="rating">
        {viewRateStars(value, color).map((item) => item)}
        <span> {text && `${value}  from  ${text}`}</span>
      </div>
    </>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
