import './App.css'
import PortfolioNavbar from './components/navbar'
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import About from "./components/About";
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <PortfolioNavbar />
      <Hero />
      <Summary />
      <About />
      <Resume />
      <Footer />
    </div>
  )
}

export default App