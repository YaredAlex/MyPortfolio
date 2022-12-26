import { useContext } from "react";
import { Wrapper } from "../App";



const Skill=()=>{
   const mode = useContext(Wrapper);
   const skillStyle = {
      width:"200px",
      boxShadow: mode? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":
                        "0 4px 8px 0 rgba(255, 255, 255, 0.1), 0 6px 20px 0 rgba(255, 255, 255, 0.1)",
   }
    
    return(


        <div style={{overflow:"hidden"}} className="container mb-5 mt-5" id="skill">
           {/* Skill Text  */}
           <h4 className={`text-center ${mode ? "text-dark":"text-light"}`}>Skill set</h4>
           <p className={` ${mode ? "text-dark":"text-light"} mx-auto`}  style={{maxWidth:"400px"}}>
            Through out my career i have delevloped those skill
            which allowed me to make robust and powerful projects </p>
            {/*Skill Bars*/}
            <div className="row flex-nowrap mx-auto  align-items-center justify-content-center gap-5 skill-set py-4"
             style={{maxWidth:"600px",overflowX:"auto"}}>
            <div style={skillStyle}
              className="col  border border-primary d-flex align-items-center justify-content-center flex-column gap-0 
              position-relative">
               
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="120px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="30" strokeLinecap="round" 
          style={{fill:"none",stroke:"url(#GradientColor)",strokeDasharray:"185",
                   strokeWidth:"10px", strokeDashoffset:"38"}}/>
           </svg> 
           <p className={`${mode ? "text-dark":"text-light"}`}>Java</p>
           <span className={`position-absolute  ms-2 ${mode ? "text-dark":"text-light"} `} >
            80%
           </span>
              </div>
             {/*Second skill  */} 
             <div style={skillStyle}
              className="col border border-primary d-flex align-items-center justify-content-center flex-column gap-0 
              position-relative">
                
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="120px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="30" strokeLinecap="round" 
          style={{fill:"none",stroke:"url(#GradientColor)",strokeDasharray:"185",
                   strokeWidth:"10px", strokeDashoffset:"30"}}/>
           </svg> 
           <p className={`${mode ? "text-dark":"text-light"}`}>HTML/CSS</p>
           <span className={`position-absolute  ms-2 ${mode ? "text-dark":"text-light"} `} >
            90%
           </span>
              </div>
              {/* */}
              <div style={skillStyle}
              className="col border border-primary d-flex align-items-center justify-content-center flex-column gap-0 
              position-relative">
                
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="120px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="30" strokeLinecap="round" 
          style={{fill:"none",stroke:"url(#GradientColor)",strokeDasharray:"185",
                   strokeWidth:"10px", strokeDashoffset:"35"}}/>
           </svg> 
           <p className={`${mode ? "text-dark":"text-light"}`}>JavaScript</p>
           <span className={`position-absolute  ms-2 ${mode ? "text-dark":"text-light"} `} >
            85%
           </span>
              </div>
              {/* */}
              <div style={skillStyle}
              className="col border border-primary d-flex align-items-center justify-content-center flex-column gap-0 
              position-relative">
                
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="120px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="30" strokeLinecap="round" 
          style={{fill:"none",stroke:"url(#GradientColor)",strokeDasharray:"185",
                   strokeWidth:"10px", strokeDashoffset:"35"}}/>
           </svg> 
           <p className={`${mode ? "text-dark":"text-light"}`}>JQuery</p>
           <span className={`position-absolute  ms-2 ${mode ? "text-dark":"text-light"} `} >
            85%
           </span>
              </div>
              

              </div>
        </div>
    )
}

export default Skill;