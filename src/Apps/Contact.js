import {BsInstagram} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {BiLogoFacebook} from "react-icons/bi"
function Contact(){
    return(
       <section id="contact">
         <div className="contact">
        <h1> Contact Us</h1>
        <div className="form">
           <div className="kulan">
            <h2> Kulan</h2>
            <p> The best place to work <br/>and be more Productive.</p>
           </div>

           <div className="adres">
            <h2> Address</h2>
            <p> nagele Karaan <br/> Mogdishu somali</p>
           </div>

    

           <div className="cotact">
           <h2> Contect</h2>
           <p> +252 615248465 <br/>
           kulan@gmail.com</p>
           </div>

           <div className="ofice">
            <h2>Office</h2>
            <p> Saturday, Wensday <br/>
         24/hours</p>
           </div>

           <div className="subsc">
           <p> Subscribe to our Newsletter</p>
           <input type="text" placeholder="Your email address"/>
           <button className="btn2"> Send</button>
           </div>
          
        </div>
        <hr/>
        <div className="foter">
      <div className="foticon">
      <p>   <BiLogoFacebook/> </p>
       <p>   <FaLinkedinIn/> </p>
       <p>   <BsInstagram/> </p>
      </div>
        <div className="copy">
        <p> Copyright © Aisha Hassan 2023 | All rights reserved </p>
        </div>
        </div>
        </div>
       </section>
    )
}
export default Contact;