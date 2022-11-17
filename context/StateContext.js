import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [activityList, setActivityList] = useState([]);

  const handleAdd = (item) => {
    const checkActivity = activityList.find((el) => el.id === item.id);

    if (checkActivity) {
      console.log("Already in list");
    } else {
      setActivityList((curr) => [...curr, item]);
    }
    console.log(activityList);
  };

  return (
    <Context.Provider
      value={{
        activityList,
        setActivityList,
        handleAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
