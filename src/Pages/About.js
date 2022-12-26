import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Wrapper } from "../App";
import { faDownload } from "@fortawesome/free-solid-svg-icons";




const About = ()=>{
    const mode = useContext(Wrapper)
    return(
             <section className={ `container  mb-5
               ${mode ? "text-dark":"text-light"}`}>
                <h5 id="about" 
                className="text-center mb-4">About Me</h5>
                <p className="text-center text-muted">Introduction about me</p>
                <div  className="
                 d-flex flex-column
                 justify-content-center align-items-center">
                 <div className="my-4 rounded overflow-hidden">
                      <img src="./img.jpg" 
                      width="200px" alt="you img"/>
                 </div>
                 <p style={{maxWidth:"300px"}}>enthusiastic Web developer and designer good communicator
                  and trustworthy</p>
                 
               {/*Experiance  */}
                    <div style={{maxWidth:"500px"}} className=" d-flex flex-wrap gap-4" >
                        <div className="me-4 text-center" >
                          <h4 className="mb-0">04+</h4>
                          <p className="mb-0">Year</p>
                          <p>Experience</p>
                        </div>
                        <div className="me-4 text-center">
                          <h4 className="mb-0">10+</h4>
                          <p className="mb-0">Complited</p>
                          <p>Projectes</p>
                        </div>
                        <div className="text-center">
                          <h4 className="mb-0">02+</h4>
                          <p className="mb-0">Companies</p>
                          <p>worked</p>
                        </div>

                    </div>
                    <div>
                        <a download href="./cv.docx" className="btn btn-success mt-4 mb-3">Download CV<span><FontAwesomeIcon icon={faDownload} /></span></a>
                    </div>
                    </div>
             </section>


    )



}

export default About;
