import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiences from './pages/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/Projects" element={<Projects/>}       />
          <Route  path="/Experience" element={<Experiences/>}       />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route  path="/Footer" element={<Footer/>}       />
        </Routes>
        
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
