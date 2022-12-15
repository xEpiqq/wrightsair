import React from 'react'
import './sa.scss'
import { ac_main_page, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo, green_check, orem_pic } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Sa(props) {

  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <>
    <Nav/>
    <div className='ac_repair_one'>
      <div className='orem_banner' />
      <img src={ac_main_page} className='ac_repair_one_ac'/>
      <div className='ac_repair_one_title'><h1>SERVICE IN {props.cityUpper}, UTAH</h1></div>
      <div className='orem_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>Thank You {props.city} Utah,</h1>
          <p>We are happy to service your beautiful city, as utah 
            natives we understand the importance of having an 
            HVAC company thats close. One that is trustworthy. 
            One that delivers on their promises in a timely way.
            Our promise and guarantee to you is that we will send
            you <span>the most qualified technicians around</span> that will 
            care about you, your home, and the comfort of your 
            family. They will help you with what you need, </p>
        </div>
        <div className='ac_repair_one_main_right'><img src={the_crew} /></div>
      </div>
      <div className='orem_mid_div'>
          <div className='orem_pics_div'>
            <h1>WRIGHT’S AIR SYSTEMS, {props.cityUpper}</h1>
            <img src={ac_image_3} className='ac_repair_one_mid_pic3'/>
          </div>
          <div className='ac_repair_one_mid_right'>
            <h2>Schedule In {props.city} Today,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='orem_bottom'>
        <div className='orem_pic' />
        <div className='orem_bottom_top'>
            <div className='orem_bottom_top_1'>
            <h1>The Reliability of Wrights Air Systems</h1>
            <p>With a multitude of brands that we work with on a daily basis, we bring you the highest quality products known to the HVAC industry, we are partnered with industry leading suppliers such as Rheem, Modine, Bryant, Williams, Rinnai and many more--top notch air
            conditioners, heaters, furnaces--all up to the latest energy standards so you can save on energy and stay comfortable.</p>
            </div>
          <div className='orem_bottom_top_2'>
          <h1>Our commitment</h1>
          <p>Anything installed, repaired, or maintained by Wright’s Air Systems
            will last. That is one of our primary goals in this industry. Whatever we touch--we hope you see Reliability stamped all over it--we do things thoroughly and according to best practice.</p>
            </div>
            <div className='orem_bottom_top_3'>
          <h1>{props.cityUpper} UTAH, YOU HAVE OUR HEART</h1>
          <div className='orem_bottom_check'>
                <img src={green_check} />
                <h2>Staying cool in the blistering summer? We’ve got you covered</h2>
            </div>
            <div className='orem_bottom_check'>
                <img src={green_check} />
                <h2>Keeping warm in the frigid winter? We have your back</h2>
            </div>
            <div className='orem_bottom_check'>
                <img src={green_check} />
                <h2>Breathing fresh, unpolluted air? We wouldn’t have it any other way</h2>
            </div>
            </div> 
        </div>
      </div>
      <div className='orem_very_bottom'>
          <div className='is_it_time'>
            <h1>ARE YOU A RESIDENT <span>OF {props.cityUpper}, UT? SCHEDULE NOW</span></h1>
            <div className='is_it_time_btn'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>

          </div>
          <div className='guarantee_box'>
            <Guarantee t1='Provide the best products on the market' t2='Give you the highest grade installation' t3='Ensure the security of your unit well into the future' t4='Promise to be fair in honest in all negotiations' t5='Make sure you are happy and comfortable' t6='Send the most qualified technicians around' t7='Create an experience that you can depend on' t8='Do everything with accuracy and precision' extrastyles={{margin: '8% 0rem 1% -2.5%'}}/>
          </div>

            <div className='ac_services'>
              <h1 className='ac_services_title'>SERVICES</h1>
              <div className='ac_service_cards_box'>
                <div className='home_one_service_cards'>
                  <div className='service_flex'>
                  <Service link='/cooling' title='COOLING' description='At Wrights Air Systems we have you covered with all things cooling. Whether you need a new Air Conditioner, a repair, or maintenance we have you covered from start to finish, ' logo={cooling_logo} styles={{width: "35%"}} paginationNum={6} />

                  </div>
                  <div className='service_flex'>
                  <Service link='/heating' title='HEATING' description='Heating is a specialty of ours, we have access to the absolute highest-quality furnaces on the market. We maintain, repair, and install like you’ve never seen' logo={heating_logo} styles={{width: "37%"}} paginationNum={7}/>

                  </div>
                  <div className='service_flex'>
                  <Service link='/indoorair' title='INDOOR AIR' description='The quality of your indoor air is important to us. With over 20 years experience in the ventilation industry you can bet on top of the line products, and quick reliable servicing. Breathe clean!' logo={indoor_air_logo} styles={{width: "38%"}} paginationNum={8}/>

                  </div>
                  <div className='service_flex'>
                  <Service link='/ductwork' title='DUCT WORK' description='Seamless is our goal. Our professional technicians will create a pattern of duct work that integrates with your house perfectly. No rigidity or strange, harsh, unappealing angles is how we work.' logo={duct_work_logo} styles={{width: "44%"}} paginationNum={9}/>

                  </div>
                </div>
              </div>

          </div>
        </div>
        <Footer extrastyles={{margin: '0rem 0rem 0rem 0rem'}}/>
    </div>
    </>
  )
}

export default Sa