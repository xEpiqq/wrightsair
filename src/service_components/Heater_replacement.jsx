import React from 'react'
import './heater.scss'
import { ac_main_page, the_crew, furnace_1, furnace_2, furnace_3, green_check_two } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo, heater_banner_heater } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Heater_replacement() {
  
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
      <div className='ac_repair_one_title'><h1>FURNACE REPLACEMENT</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We install furnaces!</h1>
          <p>Heating your house is absolutely essential, especially
            in the brutal cold that Utah brings come winter-time! 
            <span> A reliable furnace is necessary</span> in bringing you this sort
            of comfort. Furnaces often last 2 decades, plus or minus
            a few good years, but when the time comes... the time 
            comes. Lucky for you we’re in the business of installing
            and replacing furnaces, and there is no one
            better for the job.</p>
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
            <h2>If it's time to replace/install, </h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Is It Time To Install or Replace Your Furnace?</h1>
          <p>Furnaces come in all shapes and sizes, but their central purpose is to keep you and your house
            warm now and far into the future. Unfortunately there comes a time when you’ve got to say goodbye to old’
            reliable and look for a better, modern option. If you think the time is near, but aren’t exactly sure...
            <span>here’s what to watch out for,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>GETTING OLD —</span>  This of course is the number one sign that it is time to replace your furnace. Generally speaking, 15-20 years is the range of replacement. If this is you, it is definitely something to consider.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>UPKEEP — </span> It is not fun repairing your unit the first time. It is even less fun repairing it the tenth time. If your furnace requires intense upkeep and repairs, and is still continually breaking down, you know.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>EFFICIENCY —</span> This is something very subtle because it happens so slowly. If you feel not only that your furnace isn’t warming you up like it used to, but is also costing you more to run--replacement could be a good option, assuming you have exhausted the others.</p>
          </div>
        </div>
      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME TO <span>REPLACE YOUR FURNACE? WE HAVE YOUR BACK</span></h1>
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

export default Heater_replacement