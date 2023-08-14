//Фильтрация по поиску в inpute
export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};
//Фильтрация по поиску в категориях в каталоге
export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

//Функция фильтрации цены
export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === "" && max === "") {
      return goodsItem;
    } else if (min !== "" && max !== "") {
      return goodsItem.price > +min && goodsItem.price < +max;
    } else if (min !== "" && max === "") {
      return goodsItem.price > +min;
    } else if (min === "" && max !== "") {
      return goodsItem.price < +max;
    }
  });
};

//Фильтрация по акциям с чекбоксом
export const discountFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
};
