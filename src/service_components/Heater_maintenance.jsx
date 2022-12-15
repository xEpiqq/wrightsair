import React from 'react'
import './heater.scss'
import { ac_main_page, the_crew, furnace_1, furnace_2, furnace_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo, heater_banner_heater } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Heater_maintenance() {
  
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
      <div className='ac_repair_one_title'><h1>FURNACE MAINTENANCE</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will maintain your furnace!</h1>
          <p>A furnace is supposed to provide you with warmth and 
          comfort. Often-times it is breaking down so frequently
          that you are neither warm nor comfortable. With carefully
          calibrated and timely maintenance, you can avoid this 
          common problem. In preparation for the coldest months
          of the year--<span>a tune-up on your furnace can be 
          invaluable.</span> Providing you efficiency, peak-warmth, energy-
          savings, longevity, and so much more.</p>
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
          <h1>Is It Time To For A Furnace Tune-up?</h1>
          <p>The best time for a tune-up is generally in the cool but not-too-cold fall-months when the crazy unpredictable
          Utah winter has yet to make its mark. It is better to prepare than to regret not doing so. If your goal is to keep 
          warm, save on energy bills, increase the life-span of your unit, and reduce future repairs this is always a solid
          route to take. <span>Here’s a little more detail on the benefits,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>REDUCE REPAIRS —</span> Frequent repairs are no fun. There is no debating that. If you want to stay warm they will surely get in the way. A regular tune-up will without-a-doubt reduce the number of repairs you would otherwise have to do, saving you time and money.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>PERFORMANCE — </span>  You bought your furnace for one reason and one reason alone--to keep you, your family, and your house warm. A tune-up will keep you on the right track. Over time the performance can steadily decline. Our service will bring it right back up.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>SAVINGS —</span>  As the age goes up, efficiency goes down. That is generally how the song goes--without regular maintenance at least--but WITH maintenance, we bring that efficiency right back up to where it should be. This will help you save on energy costs.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>LIFE-SPAN —</span>  Replacing your furnace is expensive! If you can get a few extra years from your unit, then that is what you want to do. Regular maintenance is the way to do just that.</p>
          </div>
        </div>

      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME FOR <span>A FURNACE TUNE-UP? WE HAVE YOUR BACK </span></h1>
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

export default Heater_maintenance