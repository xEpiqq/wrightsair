import React from 'react'
import './ac_repair_one.scss'
import { ac_main_page, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'
function Ac_maintenance() {
  
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
      <div className='ac_repair_one_title'><h1>AC MAINTENANCE</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will maintain your ac!</h1>
          <p>If you’re in the game of longevity, regular air conditioning
          maintenance is a must. When you need it the most we
          are here to service your ac. Checking, maintaining, and
          tuning your ac will provide you with <span>many immediate
          and long term benefits</span>--keeping you comfortable now
          and long into the future. We want to keep you cool! Is it
          time for your yearly service? </p>
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
            <h2>If it's time for a tune-up,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Is It Time For A Tune-up?</h1>
          <p>A tune up for your air conditioner is like a tune-up for your car and has the same base benefits. It will keep 
          your unit running at peak efficiency and for a significantly longer period of time. If issues arise they can be
          fixed before they become anything major.  Every year is a good goal to shoot for, but tuning-up is never
          a bad idea. <span>More benefits include,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>LONGEVITY —</span> The life-span of your air conditioner can save you some serious money 
in the long-run. To replace an air conditioner is expensive! You want to keep yours alive
as long as you can. This is one of the main purposes of regular tune-ups. </p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>COOLING POWER — </span>The capacity to cool you and your family is essential in being categorized as “good air conditioning,” a tune-up will help you achieve that goal. After countless hours of running day in and day out your ac can get bogged down! We’ll keep it performing</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>REPAIR COST —</span>  Repair costs not only cost you precious cooling time but impact your wallet as well. To take preventative measures is far better than waiting for the thing to break
down! It will save you time and money.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>ENERGY COST —</span> Cost of energy should not continue to rise! A good HVAC system may be a substantial portion of your monthly energy bill--so keeping your air conditioner running at maximum efficiency is one of your top priorities if you want to save those precious dollars</p>
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

export default Ac_maintenance