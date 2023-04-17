import React from "react";
import useFetch from "../hooks/useFetch";

const ResidentsCard = ({ url }) => {
  const [resident] = useFetch(url);

  return (
    <article className="residents__card">
      <header>
        <img className="resident__img" src={resident?.image} />
        <div className="resident__status">
          <article className={`circle ${resident?.status}`}></article>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section className="resident__description">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr />
        <ul className="resident__list">
          <li>
            <span>Specie: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li>
            <span>Eppisodes where appear: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentsCard;
