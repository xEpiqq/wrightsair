import React from 'react'
import './ac_repair_one.scss'
import { ac_main_page, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Ac_repair() {
  
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
      <div className='ac_repair_one_title'><h1>AIR CONDITIONING REPAIR</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will fix your air conditioner!</h1>
          <p>The state of your air conditioner <span>is vital to our mission </span>
          as a company. An air conditioning unit that is working
          properly is essential to keeping you, your family, and your
          home a place of comfort. A broken AC can feel catastrophic!
          We’re here to fix that for you! Our team of trained technicians 
          will send their very best to keep you calm, cool, and collected. </p>
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
            <h2>If its time to repair,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Is it time to repair your air conditioner?</h1>
          <p>Air conditioning units come in all shapes and sizes, but their central purpose is to keep you and your house
          cool now and far into the future. There are different signs that your AC unit is breaking down or needs repairs.
          If you’re noticing these signs it is best to catch them early. These seemingly little issues right now can become
          much larger problems down the road... <span>here’s what to watch out for,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>AIR IS NOT COOL —</span> there are many reasons the air coming from your unit isn’t as cold as it should be, from the simplest level you may have low refrigerant levels—or perhaps the thermostat isn’t working right. It could also mean the compressor is failing! A warning sign no doubt.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>WATER SPILLAGE — </span>Water around your AC Unit is not a good sign, especially when there hasn’t been rainfall in days! It could be as simple as a blocked line, or something more serious like leaking coolant. Getting it checked is probably a good idea.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>WEIRD NOISES —</span> One of the more obvious signs. With screeching, clanking, banging, or just subtle clackin’—your air conditioner is most certainly off, we can inspect that for you and help before it becomes a much bigger problem.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>STRANGE ODOR —</span> Is it the oven? Your son’s pile of unwashed clothes? You better hope so, because smells of burning and must are not good! If you notice strange odors emanating  from your air conditioner, have it looked at as soon as possible.</p>
          </div>
        </div>
      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME TO REPAIR <span>YOUR AC? WE HAVE YOUR BACK</span></h1>
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

export default Ac_repair