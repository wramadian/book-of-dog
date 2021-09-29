import axios from "axios";
import React, { useEffect, useState } from "react";

const AllBreeds = ({ setBreedNameFunction }) => {
  const [breeds, setBreeds] = useState([]);

  const BreedsURL = "https://dog.ceo/api/breeds/list/all";

  useEffect(() => {
    async function getBreedsData() {
      const result = await axios.get(BreedsURL);
      const breedsData = Object.keys(result.data.message);
      setBreeds(breedsData);
    }
    getBreedsData();
  }, [breeds]);

  return (
    <div className="col-8 p-2">
      <h3>Breeds List</h3>
      <p className="text-muted">click breed name to show sub-breeds</p>
      {breeds.map((breedsList, index) => {
        let breedName = breeds[index];

        return (
          <button
            className="btn btn-primary m-1"
            key={index}
            onClick={() => setBreedNameFunction(breedName)}
          >
            {breedName}
          </button>
        );
      })}
    </div>
  );
};

export default AllBreeds;
