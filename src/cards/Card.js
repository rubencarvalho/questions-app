import React from 'react'
import StyledCard from './CardStyle'

export default function Card() {
  return (
    <StyledCard>
      <div className="card__header">
        <div className="card__avatar" />
        <div className="card__items">
          <div className="card__author">Anonymous</div>
          <div className="card__date">Mar 1, 2019</div>
        </div>
        <button className="card__action">1 u</button>
      </div>
      <div className="card__message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        officiis nulla, molestiae tenetur. officiis nulla, molestiae tenetur.
        officiis nulla, molestiae tenetur.
      </div>
    </StyledCard>
  )
}
