import React from "react";

const Pet = ({ id, location, animal, breed, name, media }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media && media.length) {
    hero = media[0].small;
  }

  return (
    <div className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </div>
  );
};

export default Pet;
