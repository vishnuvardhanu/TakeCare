import React, { useContext } from "react";
import { MyContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import ResultSection from "../components/ResultSection";

function ViewHistory() {
  const { history, setHistory, selected, setSelected } = useContext(MyContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/history");
  };
  return (
    <div className="w-[98%] h-full p-5 px-2 md:px-5 bg-white rounded overflow-hidden overflow-y-scroll">
      <div className="w-full p-2 flex items-center border-2 border-white border-b-green-600">
        <button
          className="w-fit bg-green-400 px-3 rounded-sm text-white flex justify-center items-center"
          onClick={handleClick}
        >
          <p>{"<"}</p>
        </button>
        <h2 className="w-[99%] flex justify-center font-semibold text-xl lg:text-2xl text-green-700">
          {selected.Heading}
        </h2>
      </div>
      <div className="p-2">
        <h2 className="font-bold text-lg text-green-700">Description</h2>
        <p>{selected.description}</p>
        <ResultSection result={selected} />
        <p>{selected.seriousness}</p>
      </div>
    </div>
  );
}

export default ViewHistory;
