import React from "react";

export default function TravelCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url("../img/${props.imageUrl}")`,
        }}
        className="image"
      ></div>
      <div className="content">
        <div className="location">
          <i className={props.locationIcon}></i>
          <p>{props.location}</p>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Map
          </a>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="date">
          <p>
            {props.startDate} - {props.endDate}
          </p>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
