
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


const NavBar =({modeToggle,mode})=>{
  const [active , setActive] = useState(1);
  
    return(
       <nav className={`navbar navbar-expand-sm ${ mode ? "navbar-light bg-light":"navbar-dark bg-dark" } border-bottom border-3 fixed-top `}>
        <div className="container-fluid">
         <a className="navbar-brand" >MyPortfolio</a>
         <button className="navbar-toggler " style={{marginRight:"80px"}} type="button" data-bs-toggle="collapse" 
         data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" 
         aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarText">
    <ul className="navbar-nav me-5" >
        <li className="nav-item">
          <a className={`nav-link ${active===1? "active":""}`}aria-current="page" href="#home"
           onClick={()=>setActive(1)}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active===2? "active":""}`} href="#about"
          onClick={()=>setActive(2)}>About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active===3? "active":""}`} href="#skill"
          onClick={()=>setActive(3)}>Skill</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active===4? "active":""}`} href="#service"
          onClick={()=>setActive(4)}>Service</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active===5? "active":""}`} href="#contact"
          onClick={()=>setActive(5)}>Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" download href="./yared_resume.docx">downloadResume</a></li>
            
          </ul>
        </li>
      </ul>
        </div>
        <div className='position-absolute end-[20px] d-flex align-items-center ' style={{right:"15px",top:"16px"}}>
        
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={modeToggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
    <span className={`${mode ? "text-dark":"text-light"} d-block`} style={{marginBottom:"5px"}} ><FontAwesomeIcon icon={faMoon}/></span>
    </label>
</div>
        </div>
        </div>


       </nav>
    )
}
export default NavBar;


