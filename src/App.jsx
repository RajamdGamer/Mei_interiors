import Navbar from './components/Navbar'
import { CarouselTransition } from './components/Carousel'
import Hero from './components/Hero'
import Test from './components/Test'
import Footer from './components/Footer'
import StatsSection8 from './components/StatsSection8'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gradient-to-b from-gray-100 to-white p-32'>
      <CarouselTransition></CarouselTransition>
      <Hero></Hero>
      <StatsSection8></StatsSection8>
      </div>
      <Footer></Footer>
      
       
        
    </>
  )
}

export default App

