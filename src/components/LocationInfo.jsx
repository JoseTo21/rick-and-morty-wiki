import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="local__info">
      <h2 className="local__name">{location?.name}</h2>
      <ul className="local__list">
        <li>
          <span>Type: </span>
          {location?.type}
        </li>
        <li>
          <span>Dimension: </span>
          {location?.dimension}
        </li>
        <li>
          <span>Population: </span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
