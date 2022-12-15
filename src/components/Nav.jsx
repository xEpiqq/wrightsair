import React from 'react'
import './nav.scss'
import { logo, hamburger } from '../images'
import { Link } from 'react-router-dom'
import { side_arrow } from '../images'
import { useState } from 'react'
import { Context } from '../App'
import { useContext} from 'react'

function Nav() {

  const [menu, setMenu] = useState(false)
  const [pagination, setPagination ] = useContext(Context)

  async function modalIncrement() {
    setPagination( pagination + 1)
  }
  
  async function menuSetter() {
    if (menu === false) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }

  return (
    <div className='nav'>
        <Link to='/' className='nav_link logo_link'><div><img src={logo} /></div></Link>
        <div className='hamburger' onClick={() => {menuSetter()}}>
          <span className='hamburger_top'/>
          <span className='hamburger_mid'/>
          <span className='hamburger_bottom'/>
        </div>
        <div className='links'>
            <Link to='/' className='nav_link'><div className='services_link'><h3>HOME </h3></div></Link>
            <Link to='' className='nav_link'><div className='services_link'><h3>SERVICES </h3></div>

            <div className='services_options'>
              <Link to='' className='nav_link'><div className='services_options_link cooling_link'><h3>COOLING</h3><h2> ⮊</h2></div>
                <div className='services_options_cooling'>
                  <Link to='/acrepair' className='nav_link'><div className='services_options_link_sub'><h3>AC REPAIR</h3></div></Link>
                  <Link to='/acinstallation' className='nav_link'><div className='services_options_link_sub'><h3>AC INSTALLATION</h3></div></Link>
                  <Link to='/acmaintenance' className='nav_link'><div className='services_options_link_sub'><h3>AC MAINTENANCE</h3></div></Link>
                </div>
              </Link>

              <Link to='' className='nav_link'><div className='services_options_link heating_link'><h3>HEATING</h3><h2>➲ </h2></div>
                <div className='services_options_heating'>
                  <Link to='/heaterrepair' className='nav_link'><div className='services_options_link_sub'><h3>FURNACE REPAIR</h3></div></Link>
                  <Link to='/heaterreplacement' className='nav_link'><div className='services_options_link_sub'><h3>FURNACE INSTALLATION</h3></div></Link>
                  <Link to='/heatermaintenance' className='nav_link'><div className='services_options_link_sub'><h3>FURNACE MAINTENANCE</h3></div></Link>
                </div>
              </Link>

              <Link to='' className='nav_link'><div className='services_options_link heating_link'><h3>DUCT WORK</h3><h2>➲ </h2></div>
              <div className='services_options_heating'>
                  {/* <Link to='/ductrepair' className='nav_link'><div className='services_options_link_sub'><h3>DUCT REPAIR</h3></div></Link> */}
                  <Link to='/ductcleaning' className='nav_link'><div className='services_options_link_sub'><h3>DUCT CLEANING</h3></div></Link>
                </div>
              </Link>
              <Link to='/indoorair' className='nav_link'><div className='services_options_link'><h3>INDOOR AIR</h3><h2>➲ </h2></div></Link>
            </div>

            </Link>
            <Link to='/promos' className='nav_link'><div className='promos'><h3>PROMOS </h3></div></Link>
            <Link to='' className='nav_link'><div className='services_link_two'><h3>SERVICE AREAS </h3></div>
            <div className='services_options_two'>
              <div className='column_one'>
              <Link to='/pleasantgrove' className='nav_link'><div className='services_options_link cooling_link'><h3>PLEASANT GROVE</h3><h2> ⮊</h2></div></Link>
              <Link to='/eaglemountain' className='nav_link'><div className='services_options_link cooling_link'><h3>EAGLE MOUNTAIN</h3><h2> ⮊</h2></div></Link>
              <Link to='/southjordan' className='nav_link'><div className='services_options_link cooling_link'><h3>SOUTH JORDAN</h3><h2> ⮊</h2></div></Link>
              <Link to='/elkridge' className='nav_link'><div className='services_options_link cooling_link'><h3>ELK RIDGE</h3><h2> ⮊</h2></div></Link>
              <Link to='/riverton' className='nav_link'><div className='services_options_link cooling_link'><h3>RIVERTON</h3><h2> ⮊</h2></div></Link>
              <Link to='/saratogasprings' className='nav_link'><div className='services_options_link cooling_link'><h3>SARATOGA SPRINGS</h3><h2> ⮊</h2></div></Link>

</div>
              <div className='column_two'>
              <Link to='/spanishfork' className='nav_link'><div className='services_options_link cooling_link'><h3>SPANISH FORK</h3><h2> ⮊</h2></div></Link>
              <Link to='/springville' className='nav_link'><div className='services_options_link cooling_link'><h3>SPRINGVILLE</h3><h2> ⮊</h2></div></Link>
              <Link to='/parkcity' className='nav_link'><div className='services_options_link cooling_link'><h3>PARK CITY</h3><h2> ⮊</h2></div></Link>
              <Link to='/draper' className='nav_link'><div className='services_options_link cooling_link'><h3>DRAPER</h3><h2> ⮊</h2></div></Link>
              <Link to='/heber' className='nav_link'><div className='services_options_link cooling_link'><h3>HEBER</h3><h2> ⮊</h2></div></Link>
              <Link to='/orem' className='nav_link'><div className='services_options_link cooling_link'><h3>OREM</h3><h2> ⮊</h2></div></Link>
              </div>
              <div className='column_three'>
              <Link to='/americanfork' className='nav_link'><div className='services_options_link cooling_link'><h3>AMERICAN FORK</h3><h2> ⮊</h2></div></Link>
              <Link to='/mapleton' className='nav_link'><div className='services_options_link cooling_link'><h3>MAPLETON</h3><h2> ⮊</h2></div></Link>
              <Link to='/payson' className='nav_link'><div className='services_options_link cooling_link'><h3>PAYSON</h3><h2> ⮊</h2></div></Link>
              <Link to='/salem' className='nav_link'><div className='services_options_link cooling_link'><h3>SALEM</h3><h2> ⮊</h2></div></Link>
              <Link to='/lehi' className='nav_link'><div className='services_options_link cooling_link'><h3>LEHI</h3><h2> ⮊</h2></div></Link>
              <Link to='/provo' className='nav_link'><div className='services_options_link cooling_link'><h3>PROVO</h3><h2> ⮊</h2></div></Link>
              </div>
            </div>
            </Link>
            <Link to='' className='nav_link'><div className='book_now' onClick={() => {modalIncrement()}}><h3>BOOK NOW</h3></div></Link>
            <a href="tel:801-377-4822" className='nav_link'><div className='phone'><h3>(801) 377 4822</h3></div></a>
        </div>
        
        {menu && (
          <div className='mobile_menu'>
            <div className='mobile_menu_x' onClick={() => {menuSetter()}}>✖</div>
            <div className='mobile_menu_nav'>
              <Link to='/' className='nav_link'><div ><h3>HOME </h3></div></Link>
              <div className='nav_link' onClick={() => setPagination(10)}><div ><h3>SERVICES </h3></div></div>
              <Link to='/promos' className='nav_link'><div ><h3>PROMOS </h3></div></Link>
              <div className='nav_link' onClick={() => setPagination(11)} ><div ><h3>SERVICE AREAS </h3></div></div>
              <div className='nav_link' onClick={() => setPagination(1)}><div ><h3>BOOK NOW</h3></div></div>
              <a href="tel:801-377-4822" className='nav_link nav_number'><div ><h3>(801) 377 4822</h3></div></a>
            </div>
          </div>
        )}
    </div>
  )
}

export default Nav