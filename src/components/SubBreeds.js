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
    <div className="col-4 p-2">
      <h3>Sub-Breeds</h3>
      {subBreedsList.length > 0 ? (
        <p className="text-muted">click sub-breed name to show dog's photos</p>
      ) : (
        <p className="text-danger">
          <strong>This breed doesn't have any sub-breed</strong>
        </p>
      )}
      {subBreedsList.length > 0 &&
        subBreedsList.map((subbreed, index) => {
          return (
            <button className="btn btn-primary m-1" key={index}>
              {subbreed}
            </button>
          );
        })}
    </div>
  );
};

export default SubBreeds;
