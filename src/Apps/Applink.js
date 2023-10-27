import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Product from "./Product";



function Applink(){
    return(
        <div>
           <Header/>
         <Home/>
         <Aboutus/>
         <Menu/>
         <Product/>
         <Contact/>
      
        </div>
    )
}
export  default Applink;