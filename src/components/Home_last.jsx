import React from 'react'
import './home_last.scss'
import { utah_map } from '../images'
import { Context } from '../App'
import { useContext} from 'react'

function Home_last() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <div className='home_last'>
        <div className='home_last_banner'><h1>AREAS OF SERVICE</h1></div>
        <div className='home_last_main'>
          <div className='home_last_left'>
            <img src={utah_map} className='utah_map_image' />
            <div className='home_last_buttons'><button className='home_last_book' onClick={() => modalIncrement()}>BOOK ONLINE</button><button className='home_last_phone'><a href="tel:8013774822">(801) 377-4822</a></button> </div>
          </div>
          <div className='home_last_right'>
            <div className='home_last_header'><h1>WRIGHT'S<br/> AIR SYSTEMS INC</h1></div>
            <div className='home_last_paragraph'><p>Wrights air systems inc services the entirety
                                                  of the wasatch front, from park city to elk ridge
                                                  --and everywhere in between. Book or call now to
                                                  find out more. Current service areas include,
                                                  </p></div>
            <div className='home_last_areas'>
              <div className='home_last_areas_left'>
              PLEASANT GROVE<br/>
              ELK RIDGE<br/>
              SOUTH JORDAN<br/>
              SARATOGA SPRINGS<br/>
              RIVERTON<br/>
              EAGLE MOUNTAIN<br/>
              DRAPER <br/>
              PARK CITY <br/>
              HEBER
              </div>
              <div className='home_last_areas_right'>
              SPANISH FORK<br/>
              OREM<br/>
              SPRINGVILLE<br/>
              MAPLETON<br/>
              PAYSON<br/>
              SALEM<br/>
              LEHI<br/>
              AMERICAN FORK<br/>
              PROVO
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home_last