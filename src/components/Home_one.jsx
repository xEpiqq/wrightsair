import React from 'react'
import './home_one.scss'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo, heater_main_page, ac_main_page } from '../images'
import { Service } from './'
import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import { Book } from '../service_components'
import { Context } from '../App'
import { useContext} from 'react'

function Home_one() {

  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='home_one'>
        <div className='home_one_main'>
            <img src={logo} className='home_one_main_img' data-aos="fade-right" data-aos-duration="700"/>
            <h1 className='home_one_main_text' data-aos="fade-right" data-aos-delay="400" data-aos-duration="700">QUALITY PRODUCTS AND EXPERT SERVICES<br/> FOR ALL YOUR HEATING, COOLING, AND<br/> VENTILATION NEEDS</h1>
            <div className='buttons' data-aos="fade-right" data-aos-delay="800" data-aos-duration="700">
                <button className='button_book_online' onClick={() => modalIncrement()}>BOOK ONLINE</button>
                <button className='button_phone_number'><a href="tel:801-377-4822">(801)377-4822</a></button>
            </div>
        </div>
        <img src={heater_main_page} className='heater_main_page'/>
        <img src={ac_main_page} className='ac_main_page'/>
        <div className='services'>
          <h1 className='services_title'>SERVICES</h1>
          <div className='home_one_service_cards'>
            <div className='service_container' data-aos="fade-right" data-aos-delay="0" data-aos-duration="700"><Service title='COOLING' description='At Wrights Air Systems we have you covered with all things cooling. Whether you need a new Air Conditioner, a repair, or maintenance we have you covered from start to finish, ' logo={cooling_logo} styles={{width: "35%"}} paginationNum={6}/></div>
            <div className='service_container' data-aos="fade-right" data-aos-delay="100" data-aos-duration="700"><Service link='/heating' title='HEATING' description='Heating is a specialty of ours, we have access to the absolute highest-quality furnaces available on the market. We maintain, repair, and install like you’ve never seen' logo={heating_logo} styles={{width: "37%"}} paginationNum={7}/></div>
            <div className='service_container' data-aos="fade-right" data-aos-delay="200" data-aos-duration="700"><Service link='/indoorair' title='INDOOR AIR' description='The quality of your indoor air is important to us. With over 20 years experience in the ventilation industry you can bet on top of the line products, and quick reliable servicing. Breathe clean!' logo={indoor_air_logo} styles={{width: "38%"}} paginationNum={8}/></div>
            <div className='service_container'data-aos="fade-right" data-aos-delay="300" data-aos-duration="700"><Service link='/ductwork' title='DUCT WORK' description='Seamless is our goal. Our professional technicians will create a pattern of duct work that integrates with your house perfectly. No rigidity or strange, harsh, unappealing angles is how we work.' logo={duct_work_logo} styles={{width: "44%"}} paginationNum={9}/></div>
          </div>
        </div>
    </div>
  )
}

export default Home_one