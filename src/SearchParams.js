import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");
  const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchBreeds() {
      setBreeds([]);
      setBreed("");

      const { breeds: breedObjects } = await pet.breeds(animal);
      const breedNames = breedObjects.map(({ name }) => name);
      setBreeds(breedNames);
    }

    fetchBreeds().catch(console.error);
  }, [animal]);

  async function searchPets() {
    const { animals } = await pet.animals({
      location,
      type: animal,
      breed
    });
    setPets(animals || []);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          searchPets().catch(console.error);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            placeholder="Location"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onBlur={e => setAnimal(e.target.value)}
            onChange={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
