import React from "react";
import { useState } from "react";
import Activity from "./Activity";

const Activities = ({ data }) => {
  const [activityList, setActivityList] = useState([]);
  //   console.log(data);

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
    <div>
      <ul className="activity_list">
        {!data.errors ? (
          data.map((activity) => (
            <>
              <Activity
                key={activity.id}
                activity={activity}
                onAdd={handleAdd}
                // key={activity.id}
                // id={activity.id}
                // name={activity.name}
                // moving_time={activity.moving_time}
                // distance={activity.distance}
                // start_date_local={activity.start_date_local}
              />
              <button onClick={() => handleAdd(activity)}>CLick</button>
            </>
          ))
        ) : (
          <p>Oh no</p>
        )}
      </ul>
    </div>
  );
};

export default Activities;
