import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import teleshka from "../../assets/teleshka.svg";
import css from "./Header.module.css"
import {useSelector} from"react-redux"
import { useEffect, useState } from "react";

const Header = () => {

  const {pathname}=useLocation()

  const [counterPrice,setCounterPrice]=useState(0)

  const pizzas=useSelector(state=>state.pizzasForBasket)||[] 
  

  useEffect(()=>{
    setCounterPrice(
     pizzas.reduce((prev,el)=>(prev+=el.price*(el.counter+1)),0 )
    )

  },[pizzas])



  return (
    <section className={css.header}>
      <div>
        <img src={logo} alt="" />
        <main>
          <h1>REACT PIZZA</h1>
          <span>{pathname==="/"?"самая вкусная пицца во вселенной":"Самая реактивная пицца"}</span>
        </main>
      </div>
      {pathname==="/"&&(
        <Link to={"/basket"} className={css.header__btn}>
        <b>{counterPrice} com</b>
        <b className={css.btnCounter}>
          <img src={teleshka} alt="" />{pizzas.length}
        </b>
    
      </Link>
    )
}
    </section>
  );
};

export default Header;
