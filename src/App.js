import './App.css';
import About from './components/About/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Qualifications from './components/Qualifications/Qualifications';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

const App=(()=> {
  return (
    <>
      <Header />
      
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
})

export default App;
