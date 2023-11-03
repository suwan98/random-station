const getRandomIndex = (item) => {
  const randomIndex = Math.floor(Math.random() * item.length);
  return randomIndex;
};

export default getRandomIndex;
