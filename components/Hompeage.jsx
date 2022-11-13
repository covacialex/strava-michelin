import React, { useState, useEffect } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const tokennn = "170dbc47e7ea6cdebb640f039193cef8bbfa81f0";

const Hompeage = () => {
  const [stData, setStData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { data } = useSession();
  // console.log(data);

  useEffect(() => {
    setLoading(true);
    getActivities();
  }, []);

  // const { data, error } = useSWR(
  //   "https://www.strava.com/api/v3/athlete",
  //   fetcher
  // );

  // console.log(data);

  const startMonth = "1609462861";
  const endMonth = "1672534861";

  const getActivities = async () => {
    const res = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?before=${endMonth}&after=${startMonth}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer 170dbc47e7ea6cdebb640f039193cef8bbfa81f0",
        },
      }
    )
      .then((res) => res.json())
      .then((asd) => {
        setStData(asd);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!stData) return <p>No data</p>;

  return (
    <div className="container">
      <h1>Welcome {data ? data.user.name : "Not working"}</h1>

      <ul className="activity_list">
        {stData.map((activity) => (
          <li class="activity_container">
            <h4 class="activity_name">{activity.name}</h4>
            <p class="activity_movingtime">
              Moving time: {activity.moving_time}
            </p>
            <p class="activity_distance">Distance: {activity.distance}</p>
            <p class="activity_speed">
              Average speed: {activity.average_speed}
            </p>
            <p class="activity_elapsedtime">
              Elapsed time: {activity.elapsed_time}
            </p>
            <a
              href={`https://www.strava.com/activities/${activity.id}`}
              target="_blank"
            >
              Click Link
            </a>
          </li>
        ))}
      </ul>

      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
      <button onClick={getActivities}>Get activities</button>
    </div>
  );
};

export default Hompeage;
