import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {faEnvelope, faSortAlphaDownAlt} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_seommxf', 
      'template_lqovncq', form.current, 'UKLCL1deLaBbKNTje')
        .then((result) => {
          Swal.fire("Message","sent","success");
        }, (error) => {
            Swal.fire("Sorry!","some thing went wrong","error");
        });
        e.target.reset();
    };

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
                    <a href="mailto:yareda25@gmail.com" className="mb-2 d-block nav-link text-primary">yareda25@gmail.com</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="http://wa.me/+917508024953" target="_blank" className="mb-2 d-block nav-link text-primary">MessageMe</a>
                </div>
                </div>
                {/*box for contact  end here */}
             <div className="col">
                <form className="d-flex flex-column gap-3" style={{maxWidth:"300px"}}
                ref={form} onSubmit={sendEmail}>
                   
                    <input  type="text" placeholder="Your name" style={{maxWidth:"200px",
                                                                             
                                                                              }}className="rounded" name="user_name" required/>
                       
                    <input   type="email" placeholder="Your Email" style={{maxWidth:"200px"}} required
                    className="rounded" name="user_email"/>
                    <div>
                        Message
                        <textarea cols="30" rows="3" required name="message">

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