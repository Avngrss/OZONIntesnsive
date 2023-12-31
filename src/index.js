import cart from "./modules/cart";
import load from "./modules/load";
import search from "./modules/search";
import catalog from "./modules/catalog";
import filter from "./modules/filter";

window.addEventListener("DOMContentLoaded", () => {
  cart();
  load();
  search();
  catalog();
  filter();
});
