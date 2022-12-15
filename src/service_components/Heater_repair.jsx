import React from 'react'
import './heater.scss'
import { ac_main_page, the_crew, furnace_1, furnace_2, furnace_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo, heater_banner_heater } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Heater_repair() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <>
    <Nav/>
    <div className='ac_repair_one'>
      <div className='heater_repair_one_banner' />
      <img src={heater_banner_heater} className='heater_repair_one_ac'/>
      <div className='ac_repair_one_title'><h1>FURNACE REPAIR</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will fix your furnace!</h1>
          <p>You want a way of heating your home that is safe and 
            reliable. Often-times your furnace is the blazing 
            opposite of that. It hurts our heart to see, but <span>we are here
            for you.</span> When times are growing colder by the minute we
            know how hard it can be if your source of warmth 
            suddenly gives out. Wright’s Air Systems will send a 
            trained professional to fix it asap and warm your home!</p>
        </div>
        <div className='ac_repair_one_main_right'><img src={the_crew} /></div>
      </div>
      <div className='ac_repair_one_mid_div'>
          <div className='ac_repair_one_mid_pics'>
            <img src={furnace_1} className='ac_repair_one_mid_pic1h'/>
            <img src={furnace_2} className='ac_repair_one_mid_pic2h'/>
            <img src={furnace_3} className='ac_repair_one_mid_pic3h'/>
          </div>
          <div className='ac_repair_one_mid_right'>
            <h2>If it's time to repair,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Is It Time To Repair Your Furnace?</h1>
          <p>Furnaces come in all shapes and sizes, but their central purpose is to keep you and your house
            warm now and far into the future. There are different signs that your unit is breaking down or needs repairs.
            If you’re noticing these signs it is best to catch them early. These seemingly little issues right now can become
            much larger problems down the road...  <span>here’s what to watch out for,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>NOT WARM —</span> there are many reasons the air coming from your furnace isn’t as warm as it should be. Although there are many places this issue could be coming from, it is entirely possible that your furnace is the problem.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>PILOT LIGHT — </span>  Is the pilot light yellow? Blue is what you’re shooting for... if this is the case we are here to help. The gas combination is not sufficient!</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>NOISES —</span> Alarming noises emanating from your furnace is not a good sign! Whether a bang, clack, clank, or screech, it is best to get it checked out. The issue could be a simple fix and it is best to catch it before it progresses.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>OUTAGES —</span>  If your furnace continues to turn off without any outside intervention it is a very obvious sign that you need a repair! Something is going on underneath the hood--so to speak--and it is a great choice to get it checked out and repaired.</p>
          </div>
        </div>

      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME TO <span>REPAIR YOUR FURNACE? WE HAVE YOUR BACK</span></h1>
            <div className='is_it_time_btn'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>

          </div>
          <div className='guarantee_box'>
            <Guarantee t1='Provide the best possible furnaces' t2='Give you the highest grade installation' t3='Ensure the security of your unit well into the future' t4='Promise to be fair in honest in all negotiations' t5='Make sure you are happy and comfortable' t6='Send the most qualified technicians around' t7='Create an experience that you can depend on' t8='Do everything with accuracy and precision' extrastyles={{margin: '8% 0rem 1% -2.5%'}}/>
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

export default Heater_repair