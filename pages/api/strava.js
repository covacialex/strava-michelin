export default async (req, res) => {
  const key = process.env.STRAVA_KEY;
  const response = await fetch(
    "https://www.strava.com/api/v3/activities/7479638242?include_all_efforts=" +
      key
  );
  const json = await response.json();
  const movingTime = json.all_run_totals;

  return res.status(200).json({
    json,
  });
};
