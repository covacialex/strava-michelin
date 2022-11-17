import React from "react";
import { useState } from "react";
import Activity from "./Activity";
import { useStateContext } from "../context/StateContext";
import { signIn } from "next-auth/react";

const Activities = ({ data }) => {
  // const [activityList, setActivityList] = useState([]);
  // //   console.log(data);

  // const handleAdd = (item) => {
  //   const checkActivity = activityList.find((el) => el.id === item.id);

  //   if (checkActivity) {
  //     console.log("Already in list");
  //   } else {
  //     setActivityList((curr) => [...curr, item]);
  //   }
  //   console.log(activityList);
  // };

  const { activityList, setActivityList, handleAdd } = useStateContext();

  return (
    <div>
      <ul className="activity_list">
        {!data.errors
          ? data.map((activity) => (
              <>
                <Activity key={activity.id} activity={activity} />
                <button onClick={() => handleAdd(activity)}>Activity</button>
                <button onClick={() => console.log(activityList)}>List</button>
              </>
            ))
          : signIn()}
      </ul>
    </div>
  );
};

export default Activities;
