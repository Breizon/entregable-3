import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {

  return (
    <article className='card__info'>
        <h2 className='card__name-info'>{location?.name}</h2>
        <ul className='card__list-info'>
            <li className='card__label-info'>
              <span className='card__item-info'>Type: </span>
              {location?.type}
              </li>
            <li className='card__label-info'><span className='card__item-info'>Dimension: </span>{location?.dimension}</li>
            <li className='card__label-info'><span className='card__item-info'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo