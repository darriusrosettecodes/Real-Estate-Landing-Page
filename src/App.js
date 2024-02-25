import './App.css';
import RegularNav from './components/navbar/RegularNav'
import Hero from './components/Hero/Hero';
import Sponsors from './components/Sponsors'
import Choices from './components/choices/Choices'
import Values from './components/value/Values'
import Contact from './components/contact/Contact'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <RegularNav />
      <Hero />
      <Sponsors />
      <Choices />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
