import React from "react";
import { useState } from "react";
import Activity from "./Activity";

const Activities = ({ data }) => {
  const [activities, setActivities] = useState(null);
  const [isLoading, setLoading] = useState(false);

  console.log(data);

  //   useEffect(() => {
  //     setLoading(true);
  //     {
  //       session.status === "authenticated" && getActivities();
  //     }
  //   }, [session.status]);

  const startMonth = "1609462861";
  const endMonth = "1672534861";

  const getActivities = async () => {
    const res = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?before=${endMonth}&after=${startMonth}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.data.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((asd) => {
        setActivities(asd);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* <ul className="activity_list">
        {activities.map((activity) => (
          <Activity
            id={activity.id}
            name={activity.name}
            moving_time={activity.moving_time}
            distance={activity.distance}
            start_date_local={activity.start_date_local}
          />
        ))}
      </ul> */}
    </div>
  );
};

export default Activities;
