import React from 'react'
import './home_reviews.scss'
import { Review_card } from '../components'
import { cheri_face, jeff_face, lindsey_face} from '../images'
import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

function Home_reviews() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='home_reviews'>
        <div className='home_reviews_connector'>
            <div className='home_reviews_connector_left'>
                <h1>HERE'S WHAT OUR<br/>CUSTOMERS HAVE TO SAY</h1>
            </div>
            <div className='home_reviews_connector_right'>
                <div className='home_reviews_connector_box'>1000's</div>
                <div className='home_reviews_connector_text'>of jobs<br/> completed</div>
            </div>
        </div>
        <div className='home_review_cards' >
          <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="500"><Review_card image={cheri_face} head='CHERI HANSEN' body='They definitely get 5 stars.  My furnace went out and they came before the appointed time and Edward had it fixed in short order.  He was great to work with and really knew his stuff.   I highly recommend this company!'/></div>
          <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="500"><Review_card image={lindsey_face} head='LINDSEY HONE' body='Jake was honest about the issues with my furnace and a/c. Our circuit board went out and he at least got the A/C running so we can be comfortable in the heat. I was quoted a much higher price by a different contractor...'/></div>
          <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="500"><Review_card image={jeff_face} head='JEFF CHRISTENSEN' body='I just wanted to say how much we appreciated having Jacob come over and repair our furnace and water heater. He came out initially for a furnace that would not heat and found a gas leak in our water heater...'/></div>
        </div>
    </div>
  )
}

export default Home_reviews