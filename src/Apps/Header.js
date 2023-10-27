
import { useState } from "react";
import{BiRestaurant ,AiOutlineShoppingCart }  from "react-icons/bi";
import{AiOutlineMenu ,AiOutlineClose }  from "react-icons/ai";
function Header(){
    const[ open ,Setopen]= useState(false);

    const getopen =()=>{
        Setopen(!open)
    }
    return(
        <div className="head">
            <h1><BiRestaurant/> Kulan</h1>
            <div className="list">
                <ul style={{display: `${ open == true? "block" :""}`}}>
                <p className="menclose"
            style={{ display: `${open == true ? "block" : "none"}`}}  onClick={getopen}>
            <AiOutlineClose/></p>
                    <li className=" btn-active"> <a href="#Home"> Home</a></li>
                    <li> <a href="#about"> About</a></li>
                    <li> <a href="#menu"> Menu</a></li>
                    <li> <a href="#product"> Product</a></li>
                    <li> <a href="#contact"> Contact</a></li>
                    
                </ul>
               
            </div>
            {/* <div className="cart">
            <   AiOutlineCaretDown/>
            <AiOutlineShoppingCart/>
           

            </div> */}

            
              
            <div className="menuicon"
            style={{ display: `${open == false ? "block" : "none"}`}}   onClick={getopen}>
           
              <AiOutlineMenu/>
              </div>
        </div>
    )
  
}
export default Header;