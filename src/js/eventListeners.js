import clearAllSelected from "./utils/clearSelect";

export default function addEventListeners() {
  const selectTitle = document.querySelector(".select-title");
  const selectItemsContainer = document.querySelector(".select-items");
  const selectButtons = document.querySelectorAll(".select-button");
  const selectedSizes = new Set();
  const selectedPrices = new Set();

  selectTitle.addEventListener("click", (e) => {
    selectItemsContainer.classList.toggle("hidden");
  });

  selectButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.classList.contains("select-title")) return;
      clearAllSelected();
      selectItemsContainer.classList.toggle("hidden");
      selectTitle.textContent = e.target.textContent;
      e.target.classList.add("selected");
    });
  });

  const seeMoreColorsButton = document.querySelector("#see-more-colors");

  seeMoreColorsButton.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
    const hiddenColors = document.querySelectorAll(".initially-hidden-color");
    hiddenColors.forEach((color) => {
      color.classList.remove("initially-hidden-color");
    });
  });

  const sizes = document.querySelectorAll(".shirt-size");

  sizes.forEach((size) => {
    size.addEventListener("click", (e) => {
      if (selectedSizes.has(e.target.value)) {
        e.target.classList.remove("selected");
        selectedSizes.delete(e.target.value);
      } else {
        e.target.classList.add("selected");
        selectedSizes.add(e.target.value);
      }
    });
  });

  const prices = document.querySelectorAll(".shirt-price");

  prices.forEach((price) => {
    price.addEventListener("click", (e) => {
      if (selectedPrices.has(e.target.value)) {
        selectedPrices.delete(e.target.value);
      } else {
        selectedPrices.add(e.target.value);
      }
    });
  });
}
