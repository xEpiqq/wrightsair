import React from 'react'
import './brand_card.scss'

function Brand_card(props) {
  return (
    <a href={props.link} rel="noopener noreferrer" target="_blank" className='brand_card' >
        <div className='brand_card_main'><img src={props.image} /></div>
        <div className='brand_card_view' style={props.bgcolor}>VIEW</div>
    </a>
  )
}

export default Brand_card