import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import SearchResults from "./SearchResults";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [breeds, setBreeds] = useState([]);
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    async function fetchBreeds() {
      setBreeds([]);
      setBreed("");

      const { breeds: breedObjects } = await pet.breeds(animal);
      const breedNames = breedObjects.map(({ name }) => name);
      setBreeds(breedNames);
    }

    fetchBreeds().catch(console.error);
  }, [animal, setBreeds, setBreed]);

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

        <AnimalDropdown />

        <BreedDropdown />

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="green">Green</option>
            <option value="peru">Peru</option>
            <option value="purple">Purple</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }} type="submit">
          Search
        </button>
      </form>

      <SearchResults pets={pets} />
    </div>
  );
};

export default SearchParams;
