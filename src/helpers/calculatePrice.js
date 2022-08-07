const calculatePrice = (isOriginalPrice, sale, price) => {
  if (!sale || isOriginalPrice) {
    return price.toFixed(2);
  }

  return (price - (sale * price) / 100).toFixed(2);
};

export default calculatePrice;
