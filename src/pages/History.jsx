import React, { useContext } from "react";
import { MyContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function History() {
  const { history, setHistory, selected, setSelected } = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log(item);
    setSelected(item);
    navigate('/viewhistory');
  };

  return (
    <div className="w-[98%] h-full p-5 bg-white rounded overflow-hidden overflow-y-scroll">
      <h2 className="text-xl text-[#303036] font-bold border-2 border-b-green-700 border-white">
        HISTORY
      </h2> 
      <div className="w-full h-fit p-4 mt-7 flex gap-4 flex-wrap">
        {history.map(
          (item, index) =>
            item.Heading && (
              <div
                typeof="button"
                onClick={(e) => handleClick(item)}
                className="flex justify-between px-6 items-center mb-2 p-2 rounded-sm cursor-pointer font-semibold text-xl h-[60px] w-full  text-white bg-[#3ec53e]"
              >
                <h2>{index+1}. {item.Heading}</h2>
                <h2>{item.Date}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default History;
