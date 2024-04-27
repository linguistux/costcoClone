import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import CartPage from './Pages/CartPage'
import PrivateRoutes from './Routes/PrivateRoutes'
import BabyPage from './Pages/MultiProductPages/BabyPage'
import BeautyPage from './Pages/MultiProductPages/BeautyPage'
import MensClothingPage from './Pages/MultiProductPages/MensClothingPage'
import MensClothingSinglePage from './Pages/SingleProductPages/MensClothingSinglePage'
import BeautySinglePage from './Pages/SingleProductPages/BeautySinglePage'
import BabySinglePage from './Pages/SingleProductPages/BabySinglePage'
import WomenClothingPage from './Pages/MultiProductPages/WomenClothingPage'
import WomenClothingSinglePage from './Pages/SingleProductPages/WomenClothingSinglePage'
import ComputerPage from './Pages/MultiProductPages/ComputerPage'
import ComputerSinglePage from './Pages/SingleProductPages/ComputerSinglePage'
import PatioCoversPage from './Pages/MultiProductPages/PatioCoversPage'
import PatioCoversSinglePage from './Pages/SingleProductPages/PatioCoversSinglePage'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/cart' element={ <PrivateRoutes> <CartPage/> </PrivateRoutes>}/>
      <Route path='/baby' element={<BabyPage/>} />
      <Route path='/baby/:id' element={<BabySinglePage/>} />
      <Route path='/beauty' element={<BeautyPage/>}/>
      <Route path='/beauty/:id' element={<BeautySinglePage/>}/>
      <Route path='/mens-clothing' element={<MensClothingPage/>} />
      <Route path='/mens-clothing/:id' element={<MensClothingSinglePage/>} />
      <Route path='/women-clothing' element={<WomenClothingPage/>} />
      <Route path='/women-clothing/:id' element={<WomenClothingSinglePage/>} />
      <Route path='/computer' element={<ComputerPage/>} />
      <Route path='/computer/:id' element={<ComputerSinglePage/>} />
    
    <Route path='/patio-covers' element={<PatioCoversPage/>} />
    <Route path='/patio-covers/:id' element={<PatioCoversSinglePage/>} />
     </Routes>
    </>
  )
}

export default App
