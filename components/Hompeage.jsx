import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import Activities from "./Activities";
import ActivityList from "./ActivityList";

const Hompeage = () => {
  const [activities, setActivities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const session = useSession();
  console.log(session);

  // Check if token expired
  useEffect(() => {
    if (!session.data.accessToken && !session.user) {
      signIn(); // Force sign in
    }
  }, [session]);

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

  //   console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Welcome {session.data ? session.data.name : "Not working"}</h1>

      <div className="container__data">
        {data && <Activities data={data} />}
        <ActivityList />
      </div>

      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Hompeage;
