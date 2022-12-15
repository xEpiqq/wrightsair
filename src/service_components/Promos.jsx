import React from 'react'
import './promos.scss'
import { Footer, Nav } from '../components'

function Promos() {
  return (
    <>
    <Nav/>
    <div className='promos'>
    <div className='promos_banner' />
        <div className='promos_main'  >
            <h1>THERE ARE CURRENTLY NO PROMOTIONAL OFFERS <br/>CHECK BACK SOON!</h1>
            <div className='promos_main_underline' />
        </div>
        <Footer extrastyles={{margin: '0rem 0rem 0rem 0rem'}}/>
    </div>
    </>
  )
}

export default Promos