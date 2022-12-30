import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Wrapper } from "../App";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Service =()=>{
  const mode = useContext(Wrapper);
  const serviceStyle={
         maxWidth:"350px",
         minWidth:"300px",
         boxShadow: mode? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":
                        "0 4px 8px 0 rgba(255, 255, 255, 0.1), 0 6px 20px 0 rgba(255, 255, 255, 0.1)",
  }
  const spanStyle = {
    color:"green",
    marginRight:"8px"
  }

    return(
        <section 
         className={`container  
              d-flex  flex-column justify-content-center mt-4 mb-4
               align-items-center p-4 ${mode ? "text-dark":"text-light"} service`} id="service">
             <h4 className="text-center">Services</h4>
             <div className={`row  gap-4  justify-content-center `}
             style={{maxWidth:"800px"}}
             >{/*Service wrapper */}
                  
                   <div 
                   className="col col-md-6 border border-primary px-0 "
                   style={serviceStyle}
                   >{/*First Service */}
                    <h5 className="bg-primary py-2 text-light px-1">UI/UX designer</h5>
                    <ul>
                        <li>
                            <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Create an app concept from scratch
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            analyze the behavior of potential users
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            create layouts
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Take care of visual design</li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Work accordingly to the requirments provided by 
                            a client
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            select the most promisig ideas
                        </li>

                    </ul>
                   </div>
                 
                 <div
                 className="col border-primary border px-0"
                   style={serviceStyle}>{/*Second Servie */}
                     <h5  className="bg-primary py-2 text-light px-1" >Web Devlopment</h5>
                     <ul>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Design graphic and layout
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Implement specification onto websites that are inline with client needs
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                            Optimize web applications for maximum speed
                        </li>
                        <li>
                        <span style={spanStyle}><FontAwesomeIcon icon={faCheck} /></span>
                           Design mobile-based feature
                        </li>
                     </ul>
                 </div>
             </div>

        </section>
    )
}
export default Service;

