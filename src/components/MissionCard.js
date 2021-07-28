import React from "react";

const MissionCard = (props) => {
  const { mission } = props;
  console.log(mission);
  return (
    <div>
      <h3> {mission.title}</h3>
      <div>{mission.flight_number}</div>
      <div> {mission.event_date_utc}</div>
      <div> {mission.details}</div>
    </div>
  );
};

export default MissionCard;
