import React from "react";
import Pet from "./Pet";

const SearchResults = ({ pets }) => {
  return (
    <div className="search">
      {pets && pets.length > 0 ? (
        pets.map(pet => {
          const id = pet.id;
          const location = `${pet.contact.address.city}, ${pet.contact.address.state}`;
          const animal = pet.type;
          const breed = pet.breeds.primary;
          const name = pet.name;
          const media = pet.photos;

          return (
            <Pet
              id={id}
              location={location}
              animal={animal}
              breed={breed}
              name={name}
              media={media}
              key={id}
            />
          );
        })
      ) : (
        <h1>No pets to show...</h1>
      )}
    </div>
  );
};

export default SearchResults;
