import { useState } from "react"
import css from "./Catalog.module.css"
import arrowDown from"../../assets/arrowDown.jpg"
import arrowUp from"../../assets/arrowUp.svg"


const infoBtns = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
const infoP = ["популярности" , "по цене" ,"по алфавиту"]

const Catalog = () => {

    const [value,setValue] = useState("Все")
    const[index,setIndex] = useState(false)
    const[filter,setFilter] = useState("популярности")

    const btns = infoBtns.map((el,index) => {
        return(
            <button onClick={() => setValue(el)} className={ value == el ? css.btn_active  :  css.btn}  key={index} >{el}</button>
        )
    })

    const ps = infoP.map((el,index) => {
        return(
            <p  onClick={()=>handleCliuck(el)}className={css.filter} key={index} >{el}</p>
        )
    })
  const handleCliuck=(el)=>{
    setFilter(el)
    setIndex(false)
  }

    return(
        <section className={css.catalog}>
            <main>
               {btns}
            </main>
            <p onClick={()=> setIndex(!index)}> <img className={css.arrow}src={!index ? arrowDown :arrowUp } alt="" />Сортировка по :{filter}</p>
            <div className={`${! index ?css.hide:""} ${css.filters}`}>
                {ps}
            </div>
        </section>
    )
}

export default Catalog