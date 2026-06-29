import Hero from './Sections/Hero'
import Navbar from './components/Navbar'
import Machines from './Sections/Machines'
import Technology from './Sections/Technology'
import Deployment from './Sections/Deployment'
import Solutions from './Sections/Solutions'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <Machines/>
      <Technology/>
      <Solutions/>
      <Deployment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App