import React from 'react'
import './footer.scss'
import { logo, facebook_logo, instagram_logo, twitter_logo } from '../images'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../App'
import { useContext} from 'react'

function Footer(props) {
  const [pagination, setPagination ] = useContext(Context)

  return (

    <div className='footer' style={props.extrastyles}>
        <div className='footer_text'>
          <div className='footer_col_one'><img src={logo} /></div>
          <div className='footer_col_two'><h2>explore</h2>
            <div className='footer_col_two_center'>
              <Link className='footer_link' to='/'>home</Link>
              <div className='footer_link' onClick={() => setPagination(10)}>services</div>
              <Link className='footer_link' to='/promos'>promos</Link>
              <div className='footer_link' onClick={() => setPagination(1)}>book now</div>
              <div className='footer_link'  onClick={() => setPagination(11)}>service areas</div>
            </div>
          </div>
          <div className='footer_col_three'><h2>contact</h2><br/>1111 S. State<br/>Provo, Utah 84606<br/>(801) 377-4822<br/>Kelly@WrightsAirSystems.com</div>
          <div className='footer_col_four'><a href='https://www.facebook.com/kelly.wright61' target="_blank"><img src={facebook_logo} /></a></div>
        </div>
    </div>

  )
}

export default Footer