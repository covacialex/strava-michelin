import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("session", session);
  console.log("token", token);

  const activities = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page="
  )
    .then((res) => res.json)
    .then((data) => console.log("get", data));

  try {
    return res.status(200).json({
      status: "Ok",
      data: [],
    });
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    });
  }
};
