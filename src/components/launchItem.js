import React from "react";

export default function LaunchItem(props) {
  const wrapper = {
    border: "3px solid black",
    margin: "12px"
  };

  return (
    <div style={wrapper}>
      <h3>Flight Number: {props.launch.flight_number} </h3>
      <h3>Mission: {props.launch.mission_name}</h3>
    </div>
  );
}
