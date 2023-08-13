import cart from "./modules/cart";
import load from "./modules/load";
import search from "./modules/search";
import catalog from "./modules/catalog";

window.addEventListener("DOMContentLoaded", () => {
  cart();
  load();
  search();
  catalog();
});
