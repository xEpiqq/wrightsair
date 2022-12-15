import React from 'react'
import './review_card.scss'
import { cheri_face, five_stars } from '../images'

function Review_card(props) {
  return (
    <div className='review_card'>
        <img src={props.image} className='cheri_face'/>
        <h1 className='review_card_name'>{props.head}</h1>
        <p>{props.body}</p>
        <img src={five_stars} className='five_stars'/>
    </div>
  )
}

export default Review_card