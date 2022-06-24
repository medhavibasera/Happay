import React,{useRef} from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Listings from "./pages/Listings.js";
import { cardItemsData } from "./pages/data.js";

const App = () => {
  const cardRef = useRef();

  return (
    <div>
     <Navbar />
     <Listings list={cardItemsData} ref={cardRef} />
    </div>
  );
};

export default App;
