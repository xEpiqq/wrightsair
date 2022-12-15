import React, { useContext, useEffect } from 'react'
import './book.scss'
import { useState } from 'react'
import { next, logo } from '../images'
import { Context } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Book() {

    async function bookMainOne () {
        console.log("book main one")
    }

    const [nature, setNature] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [anythingelse, setAnythingelse] = useState('')
    const [pagination, setPagination ] = useContext(Context)





    async function paginationHandlerInc() {
        setPagination(pagination + 1)
    }

    async function paginationHandlerDec() {
        setPagination(pagination - 1)
    }

    async function bookExit() {
        setPagination(0)
    }
    
    async function submitHandler() {
        paginationHandlerInc()

        try {

            const posted = await axios.post('https://wrightsemailer-pu4jkb75p-xepiqq.vercel.app/api/sendemail', {
                problem: nature,
                address: street,
                city: city,
                zip: zip,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                additional_info: anythingelse
            })

              console.log(posted)

        } catch {
            console.log("Something went wrong with the request")
        }
        setNature('')
        setStreet('')
        setCity('')
        setZip('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPhone('')
        setAnythingelse('')
    }

    ////////////////////////////////////////////
    /////CONDITIONAL_RENDERING_MAIN_CONTENT/////
    ////////////////////////////////////////////

    function mainContent() {
        if (pagination === 1) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>SERVICE REQUEST</h1>
                <h2 className='book_main_layer_text'>We’ll need a little information before we can help you out!
                    What is the nature of your problem?</h2>
                <form className='book_main_one' onSubmit={bookMainOne}>
                    <textarea className='book_main_one_nature' type='text' placeholder='I cannot get comfortable!! The air is... ' value={nature} onChange={(e) => setNature(e.target.value)}></textarea>
                </form>
                <div className='book_main_layer_bottom'>
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <button className='book_next' onClick={() => { paginationHandlerInc()}}><img src={next} /></button>
                </div>
            </div>
        )
        }
        if (pagination === 3) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>SERVICE REQUEST</h1>
                <h2 className='book_main_layer_text'>This one is simple, help us find your general location
                by entering your address below</h2>
                <form className='book_main_one book_main_one_gap' onSubmit={bookMainOne}>
                    <div className='book_main_one_street'>
                        <label className='book_main_one_street_label street_special_padding'>Street Address</label>
                        <input className='book_main_one_street_input' type='text' value={street} onChange={(e) => setStreet(e.target.value)}></input>
                    </div>
                    <div className='city_and_zip'>
                        <div className='city_and_zip_content city_align'>
                            <label className='book_main_one_street_label'>City</label>
                            <input className='book_main_one_street_input' type='text' value={city} onChange={(e) => setCity(e.target.value)}></input>
                        </div>
                        <div className='city_and_zip_content zip_align'>
                            <label className='book_main_one_street_label'>Zip Code</label>
                            <input className='book_main_one_street_input' type='text' value={zip} onChange={(e) => setZip(e.target.value)}></input>
                        </div>
                    </div>
                </form>
                <div className='book_main_layer_bottom'>
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <button className='book_next' onClick={() => { paginationHandlerInc()}}><img src={next} /></button>
                    <button className='book_back' onClick={() => { paginationHandlerDec()}}><img src={next} /></button>
                </div>
            </div>
        )
        }
        if (pagination === 2) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>SERVICE REQUEST</h1>
                <h2 className='book_main_layer_text'>Next we’ll grab some contact information so we know
                how best to reach you!</h2>
                <form className='book_main_one book_main_one_gap' onSubmit={bookMainOne}>
                <div className='city_and_zip'>
                    <div className='city_and_zip_content city_align'>
                            <label className='book_main_one_street_label'>First Name</label>
                            <input className='book_main_one_street_input' type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                        </div>
                        <div className='city_and_zip_content zip_align'>
                            <label className='book_main_one_street_label'>Last Name</label>
                            <input className='book_main_one_street_input' type='text' value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='city_and_zip'>
                        <div className='city_and_zip_content city_align'>
                            <label className='book_main_one_street_label'>Email Address</label>
                            <input className='book_main_one_street_input' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className='city_and_zip_content zip_align'>
                            <label className='book_main_one_street_label'>Phone Number</label>
                            <input className='book_main_one_street_input' type='text' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                    </div>
                </form>
                <div className='book_main_layer_bottom'>
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle' />
                    <div className='book_circle' />
                    <button className='book_next' onClick={() => { paginationHandlerInc()}}><img src={next} /></button>
                    <button className='book_back' onClick={() => { paginationHandlerDec()}}><img src={next} /></button>
                </div>
            </div>
        )
        }
        if (pagination === 4) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>SERVICE REQUEST</h1>
                <h2 className='book_main_layer_text'>Is there anything else you’d like us to know?</h2>
                <form className='book_main_one' onSubmit={bookMainOne}>
                    <textarea className='book_main_one_nature' type='text' placeholder='' value={anythingelse} onChange={(e) => setAnythingelse(e.target.value)}></textarea>
                </form>
                <div className='book_main_layer_bottom'>
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle book_circle_dark' />
                    <div className='book_circle' />
                    <button className='book_submit' onClick={() => { submitHandler()}}>SUBMIT</button>
                    <button className='book_back' onClick={() => { paginationHandlerDec()}}><img src={next} /></button>
                </div>
            </div>
        )
        }
        if (pagination === 5) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>Thanks for your submission,</h1>
                <h2 className='book_main_layer_text'>We'll contact you soon!</h2>
            </div>
        )
        }
        if (pagination === 6) {
            return (       
                     
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>WRIGHT'S COOLING,</h1>
                <h2 className='book_main_layer_text'>
                    <div className='book_page_links'>
                        <Link to="/acrepair">AC REPAIR</Link>
                        <Link to="/acinstallation">AC INSTALLATION</Link>
                        <Link to="/acmaintenance">AC MAINTENANCE</Link>
                    </div>
                </h2>
            </div>
        )
        }
        if (pagination === 7) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>WRIGHT'S HEATING,</h1>
                <h2 className='book_main_layer_text'>
                    <div className='book_page_links'>
                        <Link to="/acrepair">FURNACE REPAIR</Link>
                        <Link to="/acinstallation">FURNACE INSTALLATION</Link>
                        <Link to="/acmaintenance">FURNACE MAINTENANCE</Link>
                    </div>
                </h2>
            </div>
        )
        }
        if (pagination === 8) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>WRIGHT'S INDOOR AIR QUALITY,</h1>
                <h2 className='book_main_layer_text'>
                    <div className='book_page_links'>
                        <a href="/indoorair">INDOOR AIR QUALITY</a>
                    </div>
                </h2>
            </div>
        )
        }

        if (pagination === 9) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>WRIGHT'S DUCT WORK,</h1>
                <h2 className='book_main_layer_text'>
                    <div className='book_page_links'>
                        {/* <a href="/ductrepair">DUCT REPAIR</a> */}
                        <a href="/ductcleaning">DUCT CLEANING</a>
                    </div>
                </h2>
            </div>
        )
        }
        if (pagination === 10) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>WRIGHT'S SERVICES,</h1>
                <h2 className='book_main_layer_text book_main_layer_text_special'>
                    <div className='book_page_links a_special ' >
                        <a href="http://wrightsairsystems.com/acrepair">AC REPAIR</a>
                        <a href="http://wrightsairsystems.com/acinstallation">AC INSTALLATION</a>
                        <a href="http://wrightsairsystems.com/acmaintenance">AC MAINTENANCE</a>
                        <a href="http://wrightsairsystems.com/acrepair">HEATER REPAIR</a>
                        <a href="http://wrightsairsystems.com/acinstallation">HEATER INSTALLATION</a>
                        <a href="http://wrightsairsystems.com/acmaintenance">HEATER MAINTENANCE</a>
                        {/* <a href="/ductrepair">DUCT REPAIR</a> */}
                        <a href="http://wrightsairsystems.com/ductcleaning">DUCT CLEANING</a>
                        <a href="http://wrightsairsystems.com/indoorair">INDOOR AIR QUALITY</a>
                    </div>
                </h2>
            </div>
        )
        }
        if (pagination === 11) {
            return (            
            <div className='book_main_layer'>
                <h1 className='book_main_layer_title'>SERVICE AREAS,</h1>
                <h2 className='book_main_layer_text book_main_layer_text_special'>
                    <div className="book_page_links a_special">
                        <a href="http://wrightsairsystems.com/draper">Draper</a>
                        <a href="http://wrightsairsystems.com/heber">Heber</a>
                        <a href="http://wrightsairsystems.com/orem">Orem</a>
                        <a href="http://wrightsairsystems.com/riverton">Riverton</a>
                        <a href="http://wrightsairsystems.com/mapleton">Mapleton</a>
                        <a href="http://wrightsairsystems.com/payson">Payson</a>
                        <a href="http://wrightsairsystems.com/salem">Salem</a>
                        <a href="http://wrightsairsystems.com/lehi">Lehi</a>
                        <a href="http://wrightsairsystems.com/provo">Provo</a>
                    </div>
                    <div className='book_page_links a_special' >
                        <a href="http://wrightsairsystems.com/parkcity">Park City</a>
                        <a href="http://wrightsairsystems.com/elkridge">Elk Ridge</a>
                        <a href="http://wrightsairsystems.com/saratogasprings">Saratoga Springs</a>
                        <a href="http://wrightsairsystems.com/pleasantgrove">Pleasant Grove</a>
                        <a href="http://wrightsairsystems.com/eaglemountain">Eagle Mountain</a>
                        <a href="http://wrightsairsystems.com/americanfork">American Fork</a>
                        <a href="http://wrightsairsystems.com/spanishfork">Spanish Fork</a>
                        <a href="http://wrightsairsystems.com/springville">Springville</a>
                    </div>

                </h2>
            </div>
        )
        }
    }


if (pagination != 0) {
  return (
    <div className='book'>
        <div className='book_opacity_layer' onClick={() => bookExit()}/>
        <div className='book_main'>
            <div className='book_decoration_layer' />
            {mainContent()}
            <img src={logo} className='book_logo'/>
            <div className='book_exit' onClick={() => bookExit()}><h1>✖</h1></div>
        </div>
    </div>
  )
}
}

export default Book