import React from 'react'
import './ac_repair_one.scss'
import { ac_main_page, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Ac_installation() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <>
    <Nav/>
    <div className='ac_repair_one'>
      <div className='ac_repair_one_banner' />
      <img src={ac_main_page} className='ac_repair_one_ac'/>
      <div className='ac_repair_one_title'><h1>AC INSTALLATION</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will install or replace your AC!</h1>
          <p>Chances are, the last thing you think about is your air 
          conditioner. You just expect to be <span>cool and comfortable</span>. 
          We have you covered with the finest air conditioners
          in the business—top-quality, innovative cooling solutions
          with the latest technology and dependable performance—
          and the best part? We’ll install, repair, and maintain them
          for you. Reach out, or schedule online to get your new ac!</p>
        </div>
        <div className='ac_repair_one_main_right'><img src={the_crew} /></div>
      </div>
      <div className='ac_repair_one_mid_div'>
          <div className='ac_repair_one_mid_pics'>
            <img src={ac_image_1} className='ac_repair_one_mid_pic1'/>
            <img src={ac_image_2} className='ac_repair_one_mid_pic2'/>
            <img src={ac_image_3} className='ac_repair_one_mid_pic3'/>
          </div>
          <div className='ac_repair_one_mid_right'>
            <h2>If it's time to replace,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Is It Time To Get A New Air Conditioner?</h1>
          <p>There comes a time when simply patching up old junk will no longer do. When repairs have extended 
          every last drop of life from your air conditioner. Of course it’s not ideal, but neither is getting scorched!
          If you think you’re hitting the end of the road with your once-beloved air conditioner, it may be time
          for a replacement. <span>Here are some signs to watch out for,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>OLG AGE —</span> OLD AGE — Age is perhaps the most reliable indicator that it’s time for a new air conditioner, the average air conditioning unit in our area generally lasts 10-15 years and was built with completely different energy efficiency quotas. If your ac fits this criteria the time is most likely now.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>UPKEEP — </span> Intense, or far-too-frequent upkeep is a sign that it’s time for a new air conditioner. When things are continually breaking down week after week, month after month, year after year, a new unit is a great idea.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>EFFICIENCY —</span> Your energy bill is important to us. With old ac comes old standards, as the unit begins to age you will often find the cost of running the old thing’ going up and up! You will likely save money in the long run by replacing as soon as you can.</p>
          </div>
        </div>
      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME FOR A <span>NEW AC? WE HAVE YOUR BACK</span></h1>
            <div className='is_it_time_btn'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>

          </div>
          <div className='guarantee_box'>
            <Guarantee t1='Provide the best possible ac on the market' t2='Give you the highest grade installation' t3='Ensure the security of your unit well into the future' t4='Promise to be fair in honest in all negotiations' t5='Make sure you are happy and comfortable' t6='Send the most qualified technicians around' t7='Create an experience that you can depend on' t8='Do everything with accuracy and precision' extrastyles={{margin: '8% 0rem 1% -2.5%'}}/>
          </div>

            <div className='ac_services'>
              <h1 className='ac_services_title'>SERVICES</h1>
              <div className='ac_service_cards_box'>
                <div className='home_one_service_cards'>
                <div className='service_flex'>
                  <Service link='/cooling' title='COOLING' description='At Wrights Air Systems we have you covered with all things cooling. Whether you need a new Air Conditioner, a repair, or maintenance we have your back start to finish, ' logo={cooling_logo} styles={{width: "35%"}} paginationNum={6}/>

                  </div>
                  <div className='service_flex'>
                  <Service link='/heating' title='HEATING' description='Heating is a specialty of ours, we have access to the absolute best furnace brands on the market. We maintain, repair, and install like you’ve never seen' logo={heating_logo} styles={{width: "37%"}} paginationNum={7}/>

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

export default Ac_installation