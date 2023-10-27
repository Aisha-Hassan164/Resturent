import { useState } from "react"
import redsauce from "./images/redsauce.png"
import loadedcheesefries from "./images/loadedcheesefries.jpg"
import creamyboursinpasta from "./images/creamyboursinpasta.jpg"
import whitesaucepasta from "./images/whitesaucepasta.jpg"
import chickengrilledburger from "./images/chickengrilledburger.jpg"
import doublecheeseburger from "./images/doublecheeseburger.jpg"
import beadpattyburger from "./images/beadpattyburger.jpg"
import cheesepizza from "./images/cheesepizza.png"
import margheritagrilledpizza from "./images/margheritagrilledpizza.jpg"
import classiccheese from "./images/classiccheese.jpg"
import CrispyFrenchFries from "./images/CrispyFrenchFries.png"
import silkentofupasta from "./images/silkentofupasta.jpg"
import{AiOutlineShoppingCart }  from "react-icons/ai";

function Product(){
    const [togglestate, Settogglestate]= useState(1);
  const toggletab=( index)=>{
    Settogglestate(index)
  }
    return (
      <section id="product">
         <div className="h1menu">
            <h1> OUR <span> Products </span> </h1>
            </div>

<div className=" productheader">
    <ul className="block-tab"> 
        <li className={togglestate === 1 ? "tabs active-tabs" : "tabs"}
        onClick={()=>toggletab(1)}
        > <a href="#All"> All</a></li>
        <li className={togglestate === 2 ? "tabs active-tabs" : "tabs"}
        onClick={()=>toggletab(2)}
         > <a href="#Pizze" > Pizze</a></li>
        <li className={togglestate === 3 ? "tabs active-tabs" : "tabs"}
             onClick={()=>toggletab(3)}
        > <a href="#Pasta" > Pasta</a></li>
        <li  className={togglestate === 4 ? "tabs active-tabs" : "tabs"}
           onClick={()=>toggletab(4)}
        > <a href="#Bugger"
        
        > Bugger</a></li>
    </ul>
</div>

<div className={togglestate === 1 ? "tabs active-tab" : "content"}
>

<div className="Main-container">
    <div className="container">
        <div className="small-container">
        <img src={CrispyFrenchFries} alt=""/>
        <h3> Chips </h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $10</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
            
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={cheesepizza} alt=""/>
            <h3> Delicious Pizza</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $15</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
            
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={silkentofupasta} alt=""/>
        <h3> Main dish</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
</div>
</div>

{/* 
///two// */}

<div  className={togglestate === 2 ? "tabs active-tab" : "content"}>

<div className="Main-container">
    <div className="container">
        <div className="small-container">
        <img src={cheesepizza} alt=""/>
        <h3> Bacco overflow</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $20</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={margheritagrilledpizza} alt=""/>
        <h3> pizza macaroni</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={classiccheese} alt=""/>
        <h3> Chips hot franch</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
</div>
</div>
{/* 
///three// */}

 <div  className={togglestate === 3 ? "tabs active-tab" : "content"}>

<div className="Main-container">
    <div className="container">
        <div className="small-container">
        <img src={creamyboursinpasta} alt=""/>
        <h3> Pasta macroni</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={redsauce} alt=""/>
        <h3> Pasta</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={whitesaucepasta} alt=""/>
        <h3> Pasta india</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
</div>
</div>

{/* 
///four// */}

<div  className={togglestate === 4 ? "tabs active-tab" : "content"}>

<div className="Main-container">
    <div className="container">
        <div className="small-container">
        <img src={chickengrilledburger} alt=""/>
        <h3> Luger Buger</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={doublecheeseburger} alt=""/>
       < h3> Buger beef special</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $8</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
    <div className="container">
        <div className="small-container">
        <img src={beadpattyburger} alt=""/>
       < h3> Buger vegetarian special</h3>
            <p>   Voluptas quas repellendus consectetur rerum eaque dolorem odit, magni porro vitae in. </p>
         <div className="icons">
         <h3> $12</h3>
         <button className="btn1"> <AiOutlineShoppingCart/></button>
         </div>
        </div>
    </div>
</div>
</div>
      </section>
    )
}
export default Product;