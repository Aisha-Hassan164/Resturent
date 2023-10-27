import cheesebeefburger from "./images/cheesebeefburger.webp"

function Aboutus(){
    return (
       <section id="about">
         <div className="usss">
              <h1> About Us</h1>
         <div className="aboutpage">
          <div className="Textabout">
            <h2> What makes Our Food special</h2>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsum amet facere ea eligendi odit odio mollitia eum.
                    Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in
                    Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in.
                    </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsum amet facere ea eligendi odit odio mollitia eum.
                    Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in.
                   
                    </p>
                    <button className="btn3"> learn more</button>
           </div>
           <div className="about">
               <img src={cheesebeefburger} alt=""/>
           </div>
          
       </div>
        </div>
       </section>
       
    )
}
export default Aboutus;