import React from 'react'
import './card.css'
const Card = ({data}) => {
  return (
    <div className="card">
        <img src={data.flags.png} alt={data.flags.alt} className="cardImg" />
        <h5>{data.name.common}</h5>
    </div>
  )
}

export default Card