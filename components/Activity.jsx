import React, { useState } from "react";

const Activity = ({ activity }, onAdd) => {
  //   const [activityList, setActivityList] = useState([]);

  const handleAdd = (item) => {
    // const checkActivityInList = activityList.find((el) => {
    //   return el.id === item.id;
    // });
    // if (checkActivityInList) {
    //   console.log(activityList);
    // } else {
    //   setActivityList((prev) => [...prev, item]);
    // }

    return setActivityList((curr) => [...curr, item]);
  };

  return (
    <li className="activity_item" key={activity.id}>
      <div className="activity_field">
        <h4 className="activity_name">{activity.name}</h4>
        <div className="activity_info">
          <p className="activity_movingtime">
            Moving time: {activity.moving_time}
          </p>
          <p className="activity_distance">Distance: {activity.distance}</p>
          <p>Date: {activity.start_date_local}</p>
        </div>
      </div>
      <a
        href={`https://www.strava.com/activities/${activity.id}`}
        target="_blank"
        rel="noreferrer"
      >
        Click Link
      </a>
    </li>
  );
};

export default Activity;
