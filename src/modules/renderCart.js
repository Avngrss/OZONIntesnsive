//Получение карточек товара и рендер на странице
const renderCart = (goods) => {
  const cartWrapper = document.querySelector(".cart-wrapper");

  cartWrapper.innerHTML = "";
  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div id="cart-empty">Ваша корзина пока пуста</div>
    `
    );
  } else {
    goods.forEach((goodItem) => {
      cartWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <div class="card" data-key="${goodItem.id}">
          ${goodItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
              <div class="card-img-wrapper">
                  <span class="card-img-top" style="background-image: url('${
                    goodItem.img
                  }');"></span>
              </div>
              <div class="card-body justify-content-between">
                  <div class="card-price">${goodItem.price} ₽</div>
                  <h5 class="card-title">${goodItem.title}</h5>
                  <button class="btn btn-primary">Удалить</button>
              </div>
          </div>
      `
      );
    });
  }
};

export default renderCart;
