import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

function AppContext({ children }) {
  const [result, setResult] = useState();
  const [selected, setSelected] = useState();
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("healthHistory")) || []
  );
  const [isSidebar,setIsSidebar] = useState("yes");

  const updateHistory = (res) => {
    if (!res) return;
    let historyLocal = JSON.parse(localStorage.getItem("healthHistory")) || [];
    const updatedHistory = [res, ...historyLocal];
    setHistory(updatedHistory);
    localStorage.setItem("healthHistory", JSON.stringify(updatedHistory));
  };

  return (
    <MyContext.Provider
      value={{
        history,
        setHistory,
        updateHistory,
        result,
        setResult,
        selected,
        setSelected,
        isSidebar,
        setIsSidebar
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default AppContext;
