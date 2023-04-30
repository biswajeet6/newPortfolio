import React,{useEffect,useState} from 'react'
import {Link, useLocation} from 'react-router-dom' 
import '../styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NZYG9J5QY3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NZYG9J5QY3');
</script>
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false); 

  const location = useLocation();
  useEffect(()=>{
    setExpandNavbar(false);
  },[location])
  return (
    <div className="navbar" id={expandNavbar? "open":"close"}>
        <div className="toggleButton">
            <button
            onClick={()=>{setExpandNavbar((prev)=>!prev);}}>
          <ReorderIcon/>
            </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects"> Projects
          </Link> 
          <Link to="/experience"> Experience
          </Link> 
          
        </div>
    </div>
  )
}

export default Navbar
