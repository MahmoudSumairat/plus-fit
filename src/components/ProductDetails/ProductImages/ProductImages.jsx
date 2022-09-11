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
  return images.findIndex((img) => img.is_main_img);
};

const ProductImages = ({ product: { images, name } }) => {
  const [mainImageUrlIndex, setMainImgUrlIndex] = useState(getMainImg(images));

  const fullImagesCount = 5;

  return (
    <div className={productImagesContainer}>
      <div className={productMainImageContainer}>
        <img
          className={mainImage}
          src={images[mainImageUrlIndex].url}
          alt={name}
        />
      </div>
      <ul
        className={`${imagesList} ${
          images.length === fullImagesCount ? fullImages : ""
        } `}
      >
        {images.map((image, index) => {
          const activeImageClass =
            image.url === images[mainImageUrlIndex].url ? activeImage : "";
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
