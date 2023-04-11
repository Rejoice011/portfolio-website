import './App.css';
import Navbar from './Navbar';
import Masthead from './Masthead';
import Services from './Services';
import Portfoliogrid from './Portfoliogrid';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';



import "./css/styles.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Masthead/>
      <Services/>
      <Portfoliogrid/>
      <About/>
      <Team/> 
      <Clients/>
      <Contact/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;