import React from 'react'
import StyledCard from './CardStyle'

export default function Card() {
  return (
    <StyledCard>
      <div className="card__header">
        <div className="card__avatar">RC</div>
        <div className="card__items">
          <div className="card__author">Rúben Carvalho</div>
          <div className="card__date">March 1, 2019</div>
        </div>
        <div className="card__action">Thumbs Up</div>
      </div>
      <div className="card__message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        officiis nulla, molestiae tenetur.
      </div>
    </StyledCard>
  )
}
