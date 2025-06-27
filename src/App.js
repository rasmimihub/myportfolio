import {
  BrowserRouter as Router,Routes,Route, } from "react-router-dom";
//Reusable components 
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/projects';
import Contact from './pages/contacts';

//style of Appjs
import './App.css';

function App() {
  return (
  <Router>
    <Header /> {/**because navbar or header appears on every page */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About /> } />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
<Footer /> {/**Footer is also visible in evry page */}
  </Router>
   
  );
}

export default App;
