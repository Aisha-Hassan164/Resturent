import doublecheeseburger from "./images/doublecheeseburger.jpg"
import abt_burger from "./images/abt_burger.png"
function Home(){
    return (
        <section id="Home">
            <div className="homepage">
             <div className="text">
        <h1> Start Your Day <br/> With Favorite Food</h1>
        <button className="btn4"><a href="menu"> See Menus</a></button>
        </div>
        <dv className="imaedisp">
        <img src={abt_burger} alt=""/>
        </dv>
       
        </div>
        </section>
    )
}
export default Home