import React from 'react'
import './indoor_air.scss'
import { air_duct_img, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two, wood } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Indoor_air() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <>
    <Nav/>
    <div className='indoor_air_one'>
      <div className='indoor_air_banner' />
      <img src='' className='duct_repair_one_ac'/>
      <div className='ac_repair_one_title'><h1>INDOOR AIR QUALITY</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We provide indoor air solutions!</h1>
          <p>The quality of your indoor air matters. The modern day man
          –blessing or curse–will spend the majority of their day inside.
          Unfortunately contaminants and pollutants concentrate inside your
          home, often to a greater extent than the outdoors. With that
          said, <span>maintaining top-notch indoor air quality is not impossible, </span>
          in fact, it is our speciality. There's a variety of methods–all 
          of which we are incredibly well versed in. Wright's has you covered.</p>
        </div>
        
        <div className='ac_repair_one_main_right'><img src={the_crew} /></div>
      </div>
      <div className='ac_repair_one_mid_div'>
          <div className='ac_repair_one_mid_pics'>
            <img src={air_duct_img} className='duct_repair_one_mid_pic1'/>
          </div>
          <div className='ac_repair_one_mid_right'>
            <h2>Indoor Air Matters,</h2>
            <h3>schedule below and we’ll take<br/> care of you and your home</h3>
            <div className='ac_repair_schedule_button'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
      </div>
      <div className='extra_white_space' />
      <div className='ac_repair_one_bottom'>
        <div className='ac_repair_one_bottom_top'>
          <h1>Improving your indoor air quality</h1>
          <p>There are a variety of methods for improving the quality of your indoor air. Reducing sources that release harmful gasses
          and pollutants, improving the ventilation of your home in as many places as possible, and using air cleaners are three main
          main methods that will drastically improve the quality of air in your home. We can help you with all three. Locating sources, improving
          ventilation, installing and servicing air cleaners. <span> Our indoor air products include,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>AIR FILTRATION —</span> Whole house air filtration systems are an invaluable way of improving the air quality within your home. The method involves trapping. Trapping various particles, contaminants, and pollutants before they reach you!</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span> AIR CLEANERS —</span> We take care of all air cleaner installations. Air cleaners are incredibly useful devices used in commercial and residential settings. They are incredibly effective, wiping out near 100% of airborne particles that are tainting your air quality. </p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>HUMIDIFIERS —</span> Humidifiers, and dehumidifiers actually. Although in our lovely state you’re likely to deal with the former. Whole house humidifier systems can entirely change the atmosphere of your home by adjusting universal moisture levels.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>ERV SYSTEMS —</span> Energy recovery ventilators are incredibly effective at changing the state of your indoor air. The concept is simple–remove stale air and replace it with fresh air from the outside.</p>
          </div>
        </div>
      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>WANT TO IMPROVE <span>YOUR INDOOR AIR? WE HAVE YOUR BACK</span></h1>
            <div className='is_it_time_btn'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>
          </div>
          <div className='guarantee_box'>
            <Guarantee t1='Create an environment that delivers clean indoor air' t2='Give you the highest grade installation' t3='Ensure the security of your unit well into the future' t4='Promise to be fair in honest in all negotiations' t5='Make sure you are happy and comfortable' t6='Send the most qualified technicians around' t7='Create an experience that you can depend on' t8='Do everything with accuracy and precision' extrastyles={{margin: '8% 0rem 1% -2.5%'}}/>
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

export default Indoor_air