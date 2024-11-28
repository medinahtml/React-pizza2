import pizza from"../../assets/pizza.svg"
import PizzaCartd from "./PizzaCard/PizzaCard"
import css from"./PizzaList.module.css"
import pizza3 from "../../assets/pizza2.png"
import pizza2 from"../../assets/pizza3.png"
import pizza4 from"../../assets/pizza4.png"
import { useState } from "react"
import { useSelector } from "react-redux"

const infoPizzas=[
    {
      image:pizza,
      titlePizza:"чизбургер-пицца"  ,
      pricePizza:395
    },
  
      {
        image:pizza2,
        titlePizza:"сырная"  ,
        pricePizza:450
      },
      
      {
        image:pizza3,
        titlePizza:"Креветки по-азиатки"  ,
        pricePizza:290
      },
      
      {
        image:pizza4,
        titlePizza:"сырный-цыпленок"  ,
        pricePizza:385
      }, 
      {
        image:pizza,
        titlePizza:"чизбургер-пицца"  ,
        pricePizza:395
      },
    
        {
          image:pizza2,
          titlePizza:"сырная"  ,
          pricePizza:450
        },
        
        {
          image:pizza3,
          titlePizza:"Креветки по-азиатки"  ,
          pricePizza:290
        },
        
        {
          image:pizza4,
          titlePizza:"сырный-цыпленок"  ,
          pricePizza:385
        }, 
        
      
      

]

const PizzaList=()=>{

  const pizzas=infoPizzas.map((el,index)=> <PizzaCartd key={index}{...el}/>)
    
    return(
        <section className={css.pizzaList}>
            <h1>Все пиццы</h1>
            <main>{pizzas}</main>
            
        </section>
    )
}
export default PizzaList;
