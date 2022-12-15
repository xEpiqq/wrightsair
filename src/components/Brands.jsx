import React from 'react'
import './brands.scss'
import { brands_bg_vector, google_reviews, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, aprilaire } from '../images'
import { Brand_card } from '../components'

function Brands() {
  return (
    <div className='brands'>
        <a href='https://www.google.com/search?q=wrights+air+systems&oq=wrights+air+systems&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPDIGCAMQRRg90gEINjE4MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x874d97159762844d:0xfd41666d9aa54408,1,,,' target="_blank" rel="noopener noreferrer"><img src={google_reviews} className='brands_google_reviews' /></a>
        <a href='https://www.homeadvisor.com/rated.WrightsAirSystems.46013102.html' rel="noopener noreferrer" target="_blank" ><button className='brands_read_more'>READ MORE</button></a>        
        <div className='brands_text'>
            <h1 className='brands_h1'>WE PARTNER WITH <span>INDUSTRY LEADING</span><br/>BRANDS TO GIVE YOU THE BEST</h1>
        </div>
        <img src={brands_bg_vector} className='brands_bg_vector'/>
        <div className='brands_page'>
            <div className='brands_page_shadow' id="brands_top"/>
            <div className='brands_grid'>
                <div className='grid_1'><Brand_card image={l6} bgcolor={{background: "#E4002B"}} link='https://www.rheem.com/'/></div>
                <div className='grid_1'><Brand_card image={aprilaire} bgcolor={{background: "#003da5"}} link='https://www.aprilaire.com/'/></div>
                <div className='grid_1' ><Brand_card image={l1} bgcolor={{background: "#ED1B2E"}} link='https://www.bryant.com/en/us/'/></div>
                <div className='grid_1'><Brand_card image={l7} bgcolor={{background: "#152C73"}} link='https://www.carrier.com/'/></div>
                <div className='grid_1'><Brand_card image={l5} bgcolor={{background: "#0065B1"}} link='https://www.modine.com/'/></div>
                <div className='grid_1'><Brand_card image={l4} bgcolor={{background: "#EE1F32"}} link='https://www.honeywell.com/'/></div>
                <div className='grid_1'><Brand_card image={l2} bgcolor={{background: "#00853E"}} link='https://www.dayandnightcomfort.com/'/></div>
                <div className='grid_1'><Brand_card image={l3} bgcolor={{background: "#7E1046"}} link='http://www.empirecomfort.com/'/></div>
                <div className='grid_1'><Brand_card image={l9} bgcolor={{background: "#E03A3E"}} link='https://www.goodmanmfg.com/'/></div>
                <div className='grid_1'><Brand_card image={l10} bgcolor={{background: "#FFD457"}} link='https://www.infrasave.com/'/></div>
                <div className='grid_1'><Brand_card image={l11} bgcolor={{background: "#CF000F"}} link='https://www.rinnai.us/'/></div>
                <div className='grid_1'><Brand_card image={l12} bgcolor={{background: "#007AC1"}} link='https://www.tempstar.com/en/us/'/></div>

            </div>
        </div>
    </div>
  )
}

export default Brands