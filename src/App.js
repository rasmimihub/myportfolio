import {
  BrowserRouter as Router,Routes,Route, } from "react-router-dom";
//Reusable components 
import Layout from "./components/Layout";


//pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contacts';

//style of Appjs
import './App.css';

function App() {
  return (
    <Router >
    <Layout > 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About /> } />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
</Layout> 
  </Router>
   
  );
}

export default App;
