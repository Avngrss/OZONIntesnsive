const getData = (str) => {
  return fetch(
    `https://ozon-aa8fc-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => response.json());
};

export default getData;
