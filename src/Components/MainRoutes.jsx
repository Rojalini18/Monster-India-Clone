import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdvanceSearch from '../Pages/AdvanceSearch/AdvanceSearch'
import CareerTips from '../Pages/CareerTips/CareerTips'
import Cart from '../Pages/Cart/Cart'
import FilterJobs from '../Pages/FilterJobs/FilterJobs'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import Service from '../Pages/PremiumServices/Service'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import ServicePackage from '../Pages/ServicePackage/ServicePackage'
import Signup from '../Pages/Signup/Signup'
import Signup2 from '../Pages/Signup/Signup2'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/filterpage' element={<FilterJobs/>}/>
            <Route path='/advancesearch' element={<AdvanceSearch/>}/>
            <Route path='/signup' element={<Signup2/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/career' element={<CareerTips/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/servicepackage' element={<ServicePackage/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes