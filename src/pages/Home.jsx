import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "../api/search";
import GenderDropdown from "../components/GenderDropdown";
import AgeInput from "../components/AgeInput";
import QueryInput from "../components/QueryInput";
import NameInput from "../components/NameInput";
import { MyContext } from "../context/AppContext";
import DnaLoader from "../components/DnaLoader";
import ResultSection from "../components/ResultSection";

function Home() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const padding = window.innerWidth >= 500 ? "p-5" : "p-3";
  const { history, setHistory, updateHistory, result, setResult } = useContext(MyContext);
  const [loading, setLoading] = useState();
  const width = window.innerWidth;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const apikey = process.env.REACT_APP_GEMINI_KEY || "Key not defined";
    const res = await Search(name, age, gender, query, apikey);

    if (!res || res.length == 0) {
      toast.error("Invalid Query", {
        position: "top-right",
      });
      toast.error("Search Related to Health Issue", {
        position: "top-right",
      });
      setQuery("");
      setLoading(false);
      return;
    } else {
      toast.success("History Updated", {
        position: "top-right",
      });
    }
    setResult(res);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    updateHistory({ ...res, Date: `${day}/${month}/${year}` });
    setLoading(false);
  };

  return (
    <div
      className={` ${
        width < 1000 ? "w-full" : "w-[98%]"
      } home-scrn h-full ${padding} bg-white rounded overflow-hidden overflow-y-scroll relative `}
    >
      <h2 className="text-xl text-[#303036] font-bold border-2 border-b-green-700 border-white">
        CHECK YOUR HEALTH
      </h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
        <NameInput name={name} setName={setName} />
        <AgeInput age={age} setAge={setAge} />
        <GenderDropdown selectedGender={gender} setSelectedGender={setGender} />
        <QueryInput query={query} setQuery={setQuery} />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-svh flex justify-center items-center backdrop-blur-[3px]">
          <DnaLoader />
        </div>
      )}

      <div className="p-4">
        {result && (
          <>
            <h1 className="text-2xl text-green-700 font-bold border-2 border-b-green-700 border-white">
              {result.Heading}
            </h1>
            <div className="p-2">
              <h2 className="font-bold text-lg text-green-700">Description</h2>
              <p>{result.description}</p>
              <ResultSection result={result} />
              <p>{result.seriousness}</p>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
