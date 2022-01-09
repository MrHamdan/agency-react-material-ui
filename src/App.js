import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Choice from './Components/Choice';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choice />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
