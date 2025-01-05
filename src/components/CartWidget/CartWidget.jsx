import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css"

export const CartWidget = ()=>{
   return <div className="cart-widget ">
      
        <FiShoppingCart style={{fontSize:50, color: "red"}}/>
        (100)
    </div>
}