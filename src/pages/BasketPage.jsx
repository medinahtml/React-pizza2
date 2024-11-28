import Header from "../components/Header/Header"
import like from "../assets/like.jpg"
import adam from"../assets/adam.svg"
import { Link } from "react-router-dom"
import BasketList from "../components/BasketList/BasketList"
import { useSelector } from "react-redux"
function BasketPage(){
  const pizzas=useSelector(state=>state.pizzasForBasket)
    return(
        <>
        <Header/>
        {pizzas.length>0?(
     <BasketList/>
        ):(
          
          <main className="main-basket"> 
          <h1>Корзина пустая <img  className="icon"src={like} alt="" /></h1>
          <p> Вероятней всего, вы не заказывали ещё пиццу.<br/>
          Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
          <img src={adam} alt="" />
          <Link to="/"className="basket-btn">Вернуться назад</Link>
        </main>
        )}
      
        </>
    )
}
export default BasketPage