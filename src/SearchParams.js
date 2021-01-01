import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            placeholder="Location"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
