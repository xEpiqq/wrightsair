import React from 'react'
import './home_two.scss'
import { the_crew } from '../images'
import { Guarantee } from '../components'
import { Context } from '../App'
import { useContext} from 'react'

function Home_two() {
  
  const [pagination, setPagination ] = useContext(Context)
  async function modalIncrement() {
    setPagination( pagination + 1)
  }

  return (
    <div className='home_two'>
        <div className='home_two_top'>
            <div className='home_two_top_left'>
                <h1>We Can Help, Here's How</h1>
                <p>Our mission  is simple, the world is a harsh place, your
                home shouldn’t have to be. Everything we do is driven
                by this mission, we help homeowners maintain and fix
                their homes all throughout the Wasatch Front. Our services
                include all things heating, cooling, and ventilation.
                 Choose us—<span>"When it's worth doing Wright!"</span> 
                </p>
            </div>
            <div className='home_two_top_right'>
                <img src={the_crew} />
            </div>
        </div>
        <Guarantee t1='Respect your home, you, and your time' t2='Make sure your unique situation is understood' t3='Show you the best options to move forward' t4='Be completely transparent about our pricing' t5='Certified, bonded, licensed, and insured' t6='Drug tested and background-checked' t7='Proficient and competent in what they do' t8='Trustworthy in your home and around your family'/>
        <div className='home_two_schedule_button'>
          <button onClick={() => modalIncrement()}>SCHEDULE</button>
        </div>
    </div>
  )
}

export default Home_two