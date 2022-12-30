import { useContext } from "react";
import { Wrapper } from "../App";


const Projectes = ()=>{
        const mode = useContext(Wrapper)
        
    return(
        <section className={`projects container border border-dark d-flex align-items-center flex-column
        ${mode ? "text-dark":"text-light"}`}>
            <h4>Project section</h4>
            <div className={`row align-items-center justify-content-center`} style={{
                maxWidth:"800px",
            }}>
                <div className="border border-dark">
                    <p>First project</p>
                    <ul>
                        <li>
                            Project Name: Quiz app
                        </li>
                        <li>
                            role: Font end design
                        </li>
                    </ul>
                </div>


            </div>

        </section>
    )
}
export default Projectes;