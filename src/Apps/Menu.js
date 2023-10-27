import rice from "./images/rice.png"
import menu from "./images/menu.png"
import chicken from "./images/chicken.png"
import buger from "./images/buger.png"
function Menu(){
    return(
       <section id="menu">
         <div className=" h1menu">

<h1> OUR <span> MENU </span> </h1>

<div className="menu">
<div className="classimge">
    <img src={menu} alt=""/>
    <h3 className="meutext"> Chiken and chip</h3>
    <p className="meutext"> $20  </p>
  <button className="btn"> Add cart</button>
</div>
<div className="classimge">
    <img src={rice} alt=""/>
    <h3 className="meutext"> Main dish</h3>
    <p className="meutext"> $18  </p>
  <button className="btn"> Add cart</button>
</div>
<div className="classimge">
    <img src={chicken} alt=""/>
    <h3 className="meutext"> Chiken </h3>
    <p className="meutext"> $20  </p>
  <button className="btn"> Add cart</button>
</div>

<div className="classimge">
    <img src={buger} alt=""/>
    <h3 className="meutext"> Luger Buger</h3>
    <p className="meutext"> $15  </p>
  <button className="btn"> Add cart</button>
</div>

</div>
</div>
       </section>
    )
}
export default Menu;