import axios from "axios";
import React, { useEffect, useState } from "react";

const SubBreeds = ({ breedName }) => {
  const [subBreedsList, setSubBreedsList] = useState([]);

  const SubbreedsURL = `https://dog.ceo/api/breed/${breedName}/list`;

  useEffect(() => {
    async function getSubbreedsData() {
      const result = await axios.get(SubbreedsURL);
      const data = result.data.message;
      setSubBreedsList(data);
    }
    getSubbreedsData();
  }, [subBreedsList, SubbreedsURL]);

  return (
    <div className="row mt-5" id="subbreed">
      <div className="col">
        <h3>Sub-Breeds</h3>
        {subBreedsList.length > 0 ? (
          <p className="text-muted">sub-breed for {breedName}</p>
        ) : (
          <p className="text-danger">
            <strong>{breedName} doesn't have any sub-breed</strong>
          </p>
        )}
        {subBreedsList.length > 0 &&
          subBreedsList.map((subbreed, index) => {
            return (
              <button
                className="btn btn-outline-primary m-1"
                key={index}
                disabled
              >
                <strong style={{ color: "black" }}>{subbreed}</strong>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default SubBreeds;
