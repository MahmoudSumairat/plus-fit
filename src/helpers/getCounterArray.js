const getCounterArr = (count) => {
  const counterArr = [];

  for (let i = 0; i < Math.ceil(count); i++) {
    counterArr.push(i);
  }

  return counterArr;
};

export default getCounterArr;
