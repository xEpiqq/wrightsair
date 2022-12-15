import React from 'react'
import './duct_repair.scss'
import { air_duct_img, the_crew, ac_image_1, ac_image_2, ac_image_3, green_check_two, wood } from '../images'
import { logo, cooling_logo, heating_logo, indoor_air_logo, duct_work_logo } from '../images'
import { Guarantee, Service, Footer, Nav } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Duct_repair() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <>
    <Nav/>
    <div className='ac_repair_one'>
      <div className='duct_repair_one_banner' />
      <img src={air_duct_img} className='duct_repair_one_ac'/>
      <div className='ac_repair_one_title'><h1>AIR DUCT REPAIR</h1></div>
      <div className='ac_repair_one_main'>
        <div className='ac_repair_one_main_left'>
          <h1>We will fix your air ducts!</h1>
          <p>Air ducts are essential in any well functioning hvac system
          –ducts serve to bring air from your home’s HVAC system to
          everywhere else in your home. Even if the rest of your HVAC
          system is functioning flawlessly, without the proper functioning
          of this much needed system it can feel like  nothing is working
          at all. That’s why we at Wright’s Air Systems <span>are here to inspect
          and repair your air ducts!</span></p>
        </div>
        <div className='ac_repair_one_main_right'><img src={the_crew} /></div>
      </div>
      <div className='ac_repair_one_mid_div'>
          <div className='ac_repair_one_mid_pics'>
            <img src={air_duct_img} className='duct_repair_one_mid_pic1'/>
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
          <h1>Is It Time To Repair Your Air Ducts?</h1>
          <p>There are many signs that your air ducts need to be repaired. If you find strange smells creeping into your
            home, energy bills flying a little higher than usual, little consistency in the heating and cooling of your home,
            or the pests finding their way into unbelievable places… it might be time to repair your air ducts.<span> Read below for some more information,</span></p>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>NO HVAC CONSISTENCY —</span> when the heating and cooling of your suddenly becomes quite sporatic, with areas being heating and cooled unevenly, this could be a good indication that it’s time to repair your air ducts</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>INFESTATION  —</span> Pests are far from desirable! When they find their way into your air ducts that needs to be taken care of. Strange smells, increased infestations... the potential problem grows fast. We have your back.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>STRANGE ODOR —</span> The smell of mildew is incredibly unpleasant... this combined with the smell of mold is not a pain you have to live with. It is likely eminating from your air ducts.</p>
          </div>
        </div>
        <div className='ac_repair_one_list'>
          <img src={green_check_two} />
          <div className='ac_repair_one_text'>
            <p><span>OBSTRUCTED DUCTS —</span> If you find your air ducts are jammed with all sorts of debris and dirt it will certainly affect the efficiency of your system. Luckily we have you covered.</p>
          </div>
        </div>
      </div>
      <div className='ac_repair_one_very_bottom'>
          <div className='is_it_time'>
            <h1>IS IT TIME TO REPAIR <span>YOUR AIR DUCTS? WE HAVE YOUR BACK</span></h1>
            <div className='is_it_time_btn'>
              <button onClick={() => modalIncrement()}>SCHEDULE</button>
            </div>

          </div>
          <div className='guarantee_box'>
            <Guarantee t1='Provide the best possible work on your air ducts' t2='Give you the highest grade installation' t3='Ensure the security of your unit well into the future' t4='Promise to be fair in honest in all negotiations' t5='Make sure you are happy and comfortable' t6='Send the most qualified technicians around' t7='Create an experience that you can depend on' t8='Do everything with accuracy and precision' extrastyles={{margin: '8% 0rem 1% -2.5%'}}/>
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

export default Duct_repair