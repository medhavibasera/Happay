import React, {forwardRef} from "react";
import Card from "../components/common/Cards/Card.js";
import "../Styles/Listings.css";
import Star from "../images/star.png";

const Listings = forwardRef(({list} , ref) => (
    <div className="parentContainer" ref={ref}>
       <div className="headerContainer">
        <p>Most Popular</p>
         <div className="headerDesign">
             <hr style={{width:"80px",border:"1px solid rgba(30, 124, 191, 0.49) "}}/>
             <div className="starBackground"><img src={Star} alt="Card" /></div>
             <hr style={{width:"80px",border:"1px solid rgba(30, 124, 191, 0.49)"}}/>
         </div>
      </div>
      <main className="mainContainer" ref={ref}>
        {list.map((item) => (
           <Card 
            item={item}
            key={item.id}
          />
       ))}
      </main>
    </div>
  ));


export default Listings;
