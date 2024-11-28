import { useEffect, useState } from "react"
import minus from"../../../assets/minus.png"
import plus from"../../../assets/plus.png"
import Vector from"../../../assets/Vector.png"
import css from"../BasketList.module.css"
import { useSelector,useDispatch } from "react-redux"
import {changePizza} from"../../../store/action"

function BasketCard({imagePizza,name,counter,price,size,testo}){
    const[counterPizza,setCounterPizza]=useState(counter+1)
    const pizzas= useSelector(state=>state.pizzasForBasket)
    const dispatch=useDispatch()

    useEffect(()=>{
      const newArr=pizzas.map(el=>{
        if(el.name===name){
            return{...el ,counter:counterPizza-1}
        }
        return el
      })
      dispatch(changePizza(newArr))
    },[counterPizza])
    
    const arrFilter=(name)=>
        dispatch(changePizza(pizzas.filter((el)=>el.name!=name)))

    return(
        <section className={css.basketCard}>
            <div>
            <img src={imagePizza}alt="" />
            <main>
                <h1>{testo}</h1>
                <p><span>{name} тесто</span>{size}</p>
            </main>
            </div>
            <div className={css.basketCardCounter}>
                <p onClick={()=>setCounterPizza(counterPizza - 1)}>
                    <img src={minus} alt="" /></p>
                <span>{counterPizza}</span>
                <p onClick={()=>setCounterPizza(counterPizza+ 1)}>
                    <img src={plus} alt="" /></p>
            </div>
            <p>{price}</p>
            <p  onClick={()=>arrFilter(name)}className={css.basketCardX}>
                <img src={Vector}alt="" />
                </p>
        </section>
    )
}
export default BasketCard