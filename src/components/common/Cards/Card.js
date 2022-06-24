import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from "../Buttons/ButtonAddRemoveItem.js";
import "../../../Styles/Cards.css";



const Cart = ({item,cartCount,cartList,cartAddItem,cartRemoveItem}) => {

  const isOriginalAmount=item.original_price;
  const id=item.id;
  const handleQuantity=()=>
  {
    let quantity=0;
    if(cartCount!==0) 
    {
      const foundItemInCart=cartList.find((item)=>item.id===id);
      if(foundItemInCart)
        {
          quantity=foundItemInCart.quantity;
        }
    }
    return quantity;
  }
  return (
  <div className="Item">
      
        <img src={`${item.img_url}`} alt="Card" className="cardImg"/>
        <div className="cardContainer">
           <div className="descContainer"> 
                <p className="Name">{item.name}</p>
                <p className="descText">{item.description}</p>
             </div>
             <div className="Prices">
               {isOriginalAmount!== undefined ? 
                 <p className="originalPrice">${item.original_price}.00</p>
                :""}
              <p className="finalPrice">${item.final_price}.00</p>
            </div>
         </div>
         <ButtonAddRemoveItem 
         quantity={handleQuantity()} 
         handleAddItem={()=>cartAddItem(item)}
         handleRemoveItem={()=>cartRemoveItem(item)}
         />
  </div>)
};
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
 
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
