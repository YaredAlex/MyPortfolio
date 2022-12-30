import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faFacebook,faTwitter,faLinkedin,faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Wrapper } from '../App'
import Skill from './Skill'
import Contact from './Contact'
import Service from './Service'
import About from './About'
import Projectes from './Projects'
const Home = ()=>{
  
   const mode = useContext(Wrapper);
    return(
      <>
      <div className='position-relative overflow-hidden mb-5' style={{marginTop:"60px"}} id="home">
         <div className='col row justify-content-start flex-column  gap-4 position-fixed links'
              style={{top:"250px",left:"50px"}} >
            <a href='https://' target="_blank" className='w-auto nav-link nav-link text-primary'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href='https://github.com/YaredAlex' target="_blank" className='w-auto nav-link nav-link text-primary'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
         {/* <a href='https://' className='w-auto nav-link text-primary'><FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon></a> */}
         <a href='https://linkedin.com/in/yaredalemayehukebede' target="_blank" className='w-auto nav-link text-primary'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
         {/* <a href='https://' className='w-auto nav-link text-primary'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a> */}
         </div>
        
         {/*Image of user  */}
         
            
            <div className={` img-div` }>
               <img src='./img2.png' 
            style={{width:"400px"}} className="rounded"/></div>
            
        
          {/*Description    */}
          <div className={` ${mode? "text-dark":"text-light"} position-absolute message`} style={{maxWidth:"320px",
                                                     top:"210px",
                                                     left:"100px"
                                                     }}>
               <h1>Hello I am <span className='text-warning'>YARED</span></h1>
               <h5>I am a <span className='text-warning'>developer</span> and
               <span className='text-warning'> designer</span></h5>
               <h5 className='text-muted'>I create a stunning website
                and design in creative way</h5>
         </div>
      </div>
      <Service/>
      <Projectes/>
      <Skill/>
      <About/>
      <Contact />
      </>

    );
}
export default Home;







