import React, { useState } from "react";
import styles from "./productImages.module.scss";
const {
  activeImage,
  imagesList,
  imageItem,
  mainImage,
  productImagesContainer,
  productMainImageContainer,
  fullImages,
} = styles;

const getMainImg = (images) => {
  return images.findIndex((img) => img.isMainImg);
};

const ProductImages = ({ product: { productImages, name } }) => {
  const [mainImageUrlIndex, setMainImgUrlIndex] = useState(
    getMainImg(productImages)
  );

  const fullImagesCount = 5;

  return (
    <div className={productImagesContainer}>
      <div className={productMainImageContainer}>
        <img
          className={mainImage}
          src={productImages[mainImageUrlIndex].url}
          alt={name}
        />
      </div>
      <ul
        className={`${imagesList} ${
          productImages.length === fullImagesCount ? fullImages : ""
        } `}
      >
        {productImages.map((image, index) => {
          const activeImageClass =
            image === productImages[mainImageUrlIndex] ? activeImage : "";
          return (
            <li
              key={index}
              onClick={() => setMainImgUrlIndex(index)}
              className={`${imageItem} ${activeImageClass} `}
            >
              <img src={image.url} alt={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductImages;
