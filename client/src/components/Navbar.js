import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

 const Navbar =()=> {

  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <div className="navbar-container">
       <nav className="navbar">

        <Link to="/" className='logo-block'>
          <i class="fa-solid fa-face-grin-wide"> </i><h1>THERANDOMEME</h1>
        </Link>

        <div className="links">
          <Link to="/" className='navlink'>Home</Link>
          <Link to="/meme-battle" className='navlink'>Meme Battle</Link>
        </div>
       
      </nav>
    </div>
    
 
  );
}

export default Navbar;

// <nav className="navbar">
    //   <div className="navbar-container">
    //     <Link to="/"><i class="fa-solid fa-face-grin-wide">THERANDOMEME </i></Link>

    //     <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
    //       <li className='nav-item'>
    //         <Link to="/" className='nav-links'>Home</Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to="/meme-battle" className = 'nav-links' >Meme Battle</Link>
    //       </li>
    //     </ul>
    //     <div className="links" onClick={handleClick}>
    //       <i className={click ? "fa-solid fa-bars" : "fa-solid fa-xmark "}></i>
    //     </div>
    //   </div>
    // </nav>