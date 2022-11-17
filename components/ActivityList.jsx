import React from "react";
import { useStateContext } from "../context/StateContext";

const ActivityList = () => {
  const { activityList } = useStateContext();
  return (
    <div>
      {activityList.map((el) => (
        <p>{el.name}</p>
      ))}
    </div>
  );
};

export default ActivityList;
