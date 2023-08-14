//Фильтрация по цене
import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, discountFilter } from "./filters";

const filter = () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const checkDiscaunt = document.getElementById("discount-checkbox");
  const checkMark = document.querySelector(".filter-check_checkmark");

  //Фильтрация в цене макс и мин
  minInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          discountFilter(data, checkDiscaunt.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  maxInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          discountFilter(data, checkDiscaunt.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  //Фильтрация checkbox
  checkDiscaunt.addEventListener("change", () => {
    if (checkDiscaunt.checked) {
      checkMark.classList.add("checkded");
    } else {
      checkMark.classList.remove("checkded");
    }
    getData().then((data) => {
      renderGoods(discountFilter(data, checkDiscaunt.checked));
    });
  });
};

export default filter;
