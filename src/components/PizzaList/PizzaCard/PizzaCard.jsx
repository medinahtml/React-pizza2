import css from "./PizzaCard.module.css";
import plus from "../../../assets/plus.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../../store/action";
import { changePizza } from "../../../store/action";


const testo = ["тонкое", "традиционное"];
const size = ["26 см.", "30 см.", "40 см."];

const PizzaCard = ({ image, titlePizza, pricePizza }) => {

    const dispatch =useDispatch()
    const arrPizza=useSelector((state)=>state.pizzasForBasket)

  const [testoPizza, setTestoPizza] = useState("тонкое");
  const [sizePizza, setSizePizza] = useState("26 см.");
  const [counterPizza, setCounterPizza] = useState(0);

  const testos = testo.map((el, index) => {
    return (
      <span
        onClick={() => setTestoPizza(el)}
        className={testoPizza === el ? css.filterUp_active : css.filterUp}
        key={index}
      >
        {el}
      </span>
    );
  });

  const sizes = size.map((el, index) => (
    <span
      onClick={() => setSizePizza(el)}
      className={sizePizza === el ? css.filterDown_active : css.filterDown}
      key={index}
    >
      {el}
    </span>
  ));

  const handleBtnClick = () => {
    const item=arrPizza.findIndex((el)=>el.name===titlePizza)
    if(item !=-1){
      const newArr=arrPizza.map((el)=>{
        if(el.name===titlePizza){
          return{...el, counter:counterPizza}
        }
        return el;
      })
      dispatch(changePizza(newArr))
    }else{
    dispatch(
      addPizza({
     name:titlePizza,
     imagePizza:image,
     price:pricePizza,
     size:sizePizza,
     testo:testoPizza,
     counter:counterPizza,
    }))}

    
    setCounterPizza(counterPizza + 1);
  };

  return (
    <section className={css.pizzaCard}>
      <img src={image} alt="" />
      <p>{titlePizza}</p>
      <main>
        <p>{testos}</p>
        <p>{sizes}</p>
      </main>
      <div>
        <p>от {pricePizza} сом</p>
        <button onClick={handleBtnClick}>
          {" "}
          <img src={plus} alt="" /> Добавить{" "}
          <b style={{ opacity: counterPizza == 0 ? "0" : "1" }}>{counterPizza}</b>
        </button>
      </div>
    </section>
  );
};

export default PizzaCard;
