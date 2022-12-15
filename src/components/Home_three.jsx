import React from 'react'
import './home_three.scss'
import { areas_of_service_bg } from '../images'
import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import ReactTooltip from 'react-tooltip';

function Home_three() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='home_three'>
      <div className='home_three_container'>
        <div className='home_three_text' data-aos="fade-right" data-aos-duration="700" >Our partnerships are the lifeblood of our<br/>business and an independent guarantee<br/>of our high quality service</div>
        <ReactTooltip />
        <button className='home_three_button' data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" data-tip="Click any of our partners above to see more!"><a href='#brands_top'>LEARN MORE</a></button>
      </div>
    </div>
  )
}

export default Home_three