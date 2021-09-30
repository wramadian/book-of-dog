import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ImageGalery = ({ breedName }) => {
  const [breedImages, setBreedImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);

  useEffect(() => {
    async function getBreedImages() {
      const result = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/images`
      );
      const data = result.data.message;
      setBreedImages(data);
    }
    getBreedImages();
  }, [breedName]);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = breedImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div id="galery">
      <h3>Image Galery</h3>
      <p className="text-muted">Image galery for {breedName}</p>
      {currentImages.map((image, index) => {
        return (
          <img
            className="image"
            src={currentImages[index]}
            alt="dog"
            key={index}
          />
        );
      })}
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={breedImages.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ImageGalery;
