import React from 'react'
import './guarantee.scss'
import { green_check, black_check } from '../images'

function Guarantee(props) {
  return (
    <div className='guarantee' style={props.extrastyles}>
      <div className='guarantee_title'><h1>Our Guarantee To You</h1><img src={green_check} /></div>
      <div className='guarantee_lists'>
        <div className='guarantee_left'>
          <h2>We Will <span>Always</span></h2>
          <div className='guarantee_item'><img src={black_check}/>{props.t1}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t2}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t3}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t4}</div>
        </div>
        <div className='guarantee_right'>
          <h2>Our <span>Technicians</span> Are</h2>
          <div className='guarantee_item'><img src={black_check}/>{props.t5}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t6}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t7}</div>
          <div className='guarantee_item'><img src={black_check}/>{props.t8}</div>
        </div>
      </div>
    </div>
  )
}

export default Guarantee