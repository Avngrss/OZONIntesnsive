const getData = () => {
	return fetch('https://ozon-aa8fc-default-rtdb.firebaseio.com/goods.json')
		.then((response) => response.json())
		.then((data) => console.log(data));
};

export default getData;
