import React from 'react'
import "../../../Styles/Button.css";

const ButtonAddRemoveItem = ({quantity, handleAddItem, handleRemoveItem}) => {
  return (
    <div className='buttonAddRemove'>
     { quantity!==0 ? 
     (<div className='buttonAddRemove-positive'>
             <span className="side-btn" onClick={handleRemoveItem}>-</span>
             <span>{quantity}</span>
             <span className="side-btn" onClick={handleAddItem}>+</span>
         
      </div>): (
         <div className='buttonAddRemove-negative' onClick={handleAddItem}>
             Add to cart
         </div>
         )
     }
    </div>
  )
}

export default ButtonAddRemoveItem;