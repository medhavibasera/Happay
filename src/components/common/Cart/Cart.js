import React from 'react'
import cart from "../../../images/cart.png";
import "../../../Styles/Cart.css";
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import { connect } from 'react-redux';

const Cart = ({cartCount}) => {
  return (
      <>
       <div className='btnCartCount'>
          <img src={cart} alt="Cart" />
      </div>
    <div className='cartNotif'>
         {cartCount >=100 ?'99+':cartCount}
     </div>
     </>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});
export default connect(mapStateToProps)(Cart);