import PizzaList from "../components/PizzaList/PizzaList"
import Header from "../components/Header/Header"
import Catalog from "../components/catalog/catalog"

function HomePage(){
    return(
        <>
        <Header/>
        <Catalog/>
        <PizzaList/>
        </>
    )
}
export default HomePage