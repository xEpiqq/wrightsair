import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Home } from './pages'
import { Promos, Ac_installation, Ac_maintenance, Ac_repair, Heater_repair, Heater_replacement, Heater_maintenance, Book, Duct_repair, Duct_cleaning, Indoor_air} from './service_components'
import { Sa } from './service_areas'

export const Context = React.createContext()

function App() {

  const [pagination, setPagination ] = useState(0)

  return (
    <Context.Provider value={[pagination, setPagination]}>
    <Book />
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acrepair' element={<Ac_repair />} />
        <Route path='/acinstallation' element={<Ac_installation />} />
        <Route path='/acmaintenance' element={<Ac_maintenance />} />
        <Route path='/heaterrepair' element={<Heater_repair />} />
        <Route path='/heaterreplacement' element={<Heater_replacement />} />
        <Route path='/heatermaintenance' element={<Heater_maintenance />} />
        <Route path='/ductrepair' element={<Duct_repair />} />
        <Route path='/ductcleaning' element={<Duct_cleaning />} />
        <Route path='/indoorair' element={<Indoor_air />} />
        <Route path='/promos' element={<Promos />} />
        <Route path='/pleasantgrove' element={<Sa city='Pleasant Grove' cityUpper='PLEASANT GROVE'/>} />
        <Route path='/elkridge' element={<Sa city='Elk Ridge' cityUpper='ELK RIDGE'/>} />
        <Route path='/southjordan' element={<Sa city='South Jordan' cityUpper='SOUTH JORDAN'/>} />
        <Route path='/saratogasprings' element={<Sa city='Saratoga Springs' cityUpper='SARATOGA SPRINGS'/>} />
        <Route path='/riverton' element={<Sa city='Riverton' cityUpper='RIVERTON'/>} />
        <Route path='/eaglemountain' element={<Sa city='Eagle Mountain' cityUpper='EAGLE MOUNTAIN'/>} />
        <Route path='/draper' element={<Sa city='Draper' cityUpper='DRAPER'/>} />
        <Route path='/parkcity' element={<Sa city='Park City' cityUpper='PARK CITY'/>} />
        <Route path='/heber' element={<Sa city='Heber' cityUpper='HEBER'/>} />
        <Route path='/spanishfork' element={<Sa city='Spanish Fork' cityUpper='SPANISH FORK'/>} />
        <Route path='/orem' element={<Sa city='Orem' cityUpper='OREM'/>} />
        <Route path='/springville' element={<Sa city='Springville' cityUpper='SPRINGVILLE'/>} />
        <Route path='/mapleton' element={<Sa city='Mapleton' cityUpper='MAPLETON'/>} />
        <Route path='/payson' element={<Sa city='Payson' cityUpper='PAYSON'/>} />
        <Route path='/salem' element={<Sa city='Salem' cityUpper='SALEM'/>} />
        <Route path='/lehi' element={<Sa city='Lehi' cityUpper='LEHI'/>} />
        <Route path='/americanfork' element={<Sa city='American Fork' cityUpper='AMERICAN FORK'/>} />
        <Route path='/provo' element={<Sa city='Provo' cityUpper='PROVO'/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </Context.Provider>
  )
}

export default App