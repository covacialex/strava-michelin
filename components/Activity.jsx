import React, { useState } from "react";

const Activity = ({ id, name, moving_time, distance, start_date_local }) => {
  const [activityList, setActivityList] = useState([]);

  const handleAdd = (id) => {
    setActivityList((prevState) => [...(prevState + id)]);

    console.log(activityList);
  };

  return (
    <li className="activity_item" key={id}>
      <div className="activity_field" onClick={() => handleAdd(name)}>
        <h4 className="activity_name">{name}</h4>
        <div className="activity_info">
          <p className="activity_movingtime">Moving time: {moving_time}</p>
          <p className="activity_distance">Distance: {distance}</p>
          <p>Date: {start_date_local}</p>
        </div>
      </div>
      <a href={`https://www.strava.com/activities/${id}`} target="_blank">
        Click Link
      </a>
    </li>
  );
};

export default Activity;
