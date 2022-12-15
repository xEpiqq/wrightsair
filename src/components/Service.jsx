import React from 'react'
import './service.scss'
import { cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../App'
import { useContext} from 'react'

function Service(props) {

  const [pagination, setPagination ] = useContext(Context)
  
  async function openOptions() {
    setPagination(props.paginationNum)
    console.log(pagination)
  }

  return (
    <div className='service_card' onClick={() => openOptions()}>
        <img src={props.logo} className='service_card_image' style={props.styles}/>
        <div className='service_card_main'>
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
        </div>
        <div className='service_card_bottom'>
          <h3>EXPLORE OPTIONS</h3>
        </div>
    </div>
  )
}

export default Service