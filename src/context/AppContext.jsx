import React, { createContext, useState } from 'react';

export const MyContext = createContext();

function AppContext({children}) {

    const [history, setHistory] = useState(["history"]);
  return (
    <MyContext.Provider value={{history,setHistory}}>
        {children}
    </MyContext.Provider>
  )
}

export default AppContext