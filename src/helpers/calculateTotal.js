const calculateTotal = (bagItems) => {
  let total = bagItems
    .map((item) =>
      item.sale
        ? (item.price - item.price * (item.sale / 100)) * item.quantity
        : item.price * item.quantity
    )
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return total;
};

export default calculateTotal;
