import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact =()=>{

    return(
        <footer>
            <div style={{}} className="bg-dark text-light border-top border-light border-3 p-3" id="contact">
            <p className="text-center mb-3"> You can contact me here</p>
            <div style={{maxWidth:"800px"}} 
              className="mx-auto row">
            {/*Making box here  for contact */}
              <div style={{marginLeft:"30px"}} className="col">
                <div>
                    <label htmlFor="emil">
                    <FontAwesomeIcon icon={faEnvelope} /></label>
                    <Link to="/" className="mb-2 d-block nav-link text-primary">eg@gmail.com</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <Link to="/" className="mb-2 d-block nav-link text-primary">MessageMe</Link>
                </div>
                </div>
                {/*box for contact  end here */}
             <div className="col">
                <form className="d-flex flex-column gap-3" style={{maxWidth:"300px"}}>
                    <input  type="text" placeholder="Your name" style={{maxWidth:"200px",
                                                                             
                                                                              }}className="rounded" />
                    <input   type="email" placeholder="Email" style={{maxWidth:"200px"}} required
                    className="rounded"/>
                    <div>
                        <textarea cols="30" rows="3" required>

                        </textarea>
                    </div>
                    <button className="btn btn-primary" style={{maxWidth:"200px"}}>Send</button>
                </form>
             </div>

                </div>{/*footer box  */}
                 
            </div>


        </footer>
    )
}

export default Contact;