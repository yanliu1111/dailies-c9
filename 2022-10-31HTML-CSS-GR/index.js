import { doSomething } from "./my-library.js";

document.addEventListener("DOMContentLoaded", async () => {
  //   console.log("DOM loaded");
  //   const myInput = document.querySelector("#my-input");

  const barcodeInput = document.getElementById("barcode-input");
  const searchButton = document.querySelector("#search-button");
  const productNameLabel = document.querySelector("#product-name");
  const productImage = document.querySelector("#product-image");

  searchButton.addEventListener("click", async () => {
    const barcode = barcodeInput.value;

    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const result = await response.json();

    if (result.status !== 1) {
      console.log("Product not found");
      return;
    }
    productNameLabel.textContent = result.product.product_name;
    productImage.src = result.product.image_url;
    console.log(result);
  });
  console.log(barcodeInput, searchButton);
});
