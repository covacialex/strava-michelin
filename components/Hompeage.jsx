import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Activity from "./Activity";
import useSWR, { fetchWithToken } from "swr";
import Activities from "./Activities";

const Hompeage = () => {
  const [activities, setActivities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const session = useSession();
  console.log(session);

  const fetcher = (url, token) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      setIsLoading(false);
      return r.json();
    });

  const startMonth = "1609462861";
  const endMonth = "1672534861";

  const { data, error } = useSWR(
    [
      `https://www.strava.com/api/v3/athlete/activities?before=${endMonth}&after=${startMonth}`,
      session.data.accessToken,
    ],
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Welcome {session.data ? session.data.user.name : "Not working"}</h1>

      {data && <Activities data={data} />}

      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Hompeage;
