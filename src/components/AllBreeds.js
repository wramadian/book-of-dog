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
  }, []);

  return (
    <div className="row mt-3">
      <div className="col">
        <h3>Breeds List</h3>
        <p className="text-muted">click breed name to show sub-breeds</p>
        {breeds.map((breedsList, index) => {
          let breedName = breeds[index];

          return (
            <a
              href="#subbreed"
              className="btn btn-primary m-1"
              key={index}
              onClick={() => setBreedNameFunction(breedName)}
            >
              {breedName}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AllBreeds;
