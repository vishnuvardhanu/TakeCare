import React, { useContext } from "react";
import { MyContext } from "../context/AppContext";

function HamBurgerMenu() {

  
  return (
    <button 
    className="text-xl cursor-pointer bg-white text-[#41d741] font-extrabold flex justify-center items-center px-2 rounded-sm"

    >
      <p>=</p>
    </button>
  );
}

export default HamBurgerMenu;
