import React, { useState } from "react";
import AllBreeds from "./AllBreeds";
import ImageGalery from "./ImageGalery";
import SubBreeds from "./SubBreeds";

const Main = () => {
  const [breedName, setBreedName] = useState(null);
  const [subBreedLength, setSubBreedLength] = useState(null);

  const setBreedNameFunction = (breed) => {
    setBreedName(breed);
  };

  const setSubBreedLengthFunction = (length) => {
    setSubBreedLength(length);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <AllBreeds setBreedNameFunction={setBreedNameFunction} />
        {breedName && subBreedLength < 1 && (
          <SubBreeds
            breedName={breedName}
            setSubBreedLengthFunction={setSubBreedLengthFunction}
          />
        )}
      </div>
      <div className="row my-5">
        {breedName && <ImageGalery breedName={breedName} />}
      </div>
    </div>
  );
};

export default Main;
