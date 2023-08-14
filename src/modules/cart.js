import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById("cart"),
    cartModal = document.querySelector(".cart"),
    cartCloseBtn = document.querySelector(".cart-close"),
    goodsContainer = document.querySelector(".goods"),
    cartTotal = document.querySelector(".cart-total > span"),
    cartWrapper = document.querySelector(".cart-wrapper"),
    cartSendBtn = document.querySelector(".cart-confirm");

  const openCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cartModal.style.display = "flex";

    renderCart(cart);

    cartTotal.textContent = cart.reduce((acc, goodItem) => {
      return acc + goodItem.price;
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = "none";
  };

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);

  //Делигирование на карточке и
  goodsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const card = e.target.closest(".card");
      const key = card.dataset.key;
      const goodsArr = JSON.parse(localStorage.getItem("goods"));
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const goodItem = goodsArr.find((item) => {
        return item.id === +key;
      });
      cart.push(goodItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });

  //Удаление из корзины
  cartWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const card = e.target.closest(".card");
      const key = card.dataset.key;

      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(cart);

      cartTotal.textContent = cart.reduce((acc, goodItem) => {
        return acc + goodItem.price;
      }, 0);
    }
  });

  //Отправка заказа из корзины
  cartSendBtn.addEventListener("click", () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    postData(cart)?.then(() => {
      localStorage.removeItem("cart");
      renderCart([]);
      cartTotal.textContent = 0;
    });
  });
};

export default cart;
