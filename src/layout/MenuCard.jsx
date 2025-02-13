import React from "react";
import {FaShoppingcart} from 'react-icons/fa';

const MenuCard = (props) => {
  return(
     
  <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
    <div>
        <img src={props.img} alt="img1"/>

    </div>
    <div>
        <div>
            <h3> {props.title} </h3>
            <h3> {props.value}</h3>
        </div>
        <div>
            <div>
                <button>Hot</button>
                <button>Cold</button>
            </div>
            <span>
                <FaShoppingcart size={20}/>
            </span>
        </div>
    </div>
  </div>
  );
};

export default MenuCard;
