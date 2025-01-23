import Navbar from './components/Navbar'
import { CarouselTransition } from './components/Carousel'
import Hero from './components/Hero'
import Test from './components/Test'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gradient-to-b from-gray-100 to-white p-8'>
      <CarouselTransition></CarouselTransition>
      <Hero></Hero>
      </div>
      <Footer></Footer>
      
       
        
    </>
  )
}

export default App

