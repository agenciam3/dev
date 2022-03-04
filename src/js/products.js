import { filterProduct, setFilters } from "./filter";

export default function getProduct() {
  var products = fetch("http://localhost:5000/products");
  products
    .then((response) => {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        response.json().then((data) => {
          filterProduct(data);
          setFilters(data);
        });
      } else {
        console.log("não é um json");
      }
    })
    .catch((error) => {
      console.warn(error);
    });
}

export function showProductDesktop(productList) {
  console.log("");
  const cleanPage = document.querySelector(
    ".category--filter-content--product--product-load"
  );
  cleanPage.innerHTML = "";
  console.log(cleanPage);
  console.log("showProductDesktop");
  console.log("productList");
  console.log(productList);

  if (productList.length <= 6) {
    createProductHtml(0, productList.length, productList);
  } else {
    createProductHtml(0, 6, productList);

    const seeMore = document.querySelector(
      ".category--filter-content--product .product-load"
    );
    seeMore.classList.add("active");

    seeMore.addEventListener("click", () => {
      createProductHtml(6, productList.length, productList);

      seeMore.classList.remove("active");
    });
  }
}

export function showProductMobile(productList) {
  if (productList.length <= 4) {
    createProductHtml(0, productList.length, productList);
  } else {
    createProductHtml(0, 4, productList);

    const seeMore = document.querySelector(
      ".category--filter-content--product .product-load"
    );
    seeMore.classList.add("active");

    seeMore.addEventListener("click", () => {
      createProductHtml(4, productList.length, productList);

      seeMore.classList.remove("active");
    });
  }
}

function createProductHtml(index, limeter, productList) {
  const productsContainer = document.querySelector(
    ".category--filter-content--product--product-load"
  );
  for (let i = index; i < limeter; i++) {
    const element = productList[i];

    var div = document.createElement("div");
    div.classList.add("product-itens-wrapper");

    var image = document.createElement("img");
    image.setAttribute("src", element.image);
    image.setAttribute("alt", element.name);

    var name = document.createElement("span");
    name.classList.add("product-name");
    name.innerHTML = element.name;

    var price = document.createElement("span");
    price.classList.add("product-price");
    price.innerHTML = `R$ ${element.price.toFixed(2)}`;

    var parcel = document.createElement("span");
    parcel.classList.add("product-parcel");
    parcel.innerHTML = `até ${element.parcelamento[0].toFixed(
      2
    )}x de R$ ${String(element.parcelamento[1].toFixed(2)).replace(".", ",")}`;

    var buy = document.createElement("button");
    buy.classList.add("product-buy");
    buy.innerHTML = "COMPRAR";

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(parcel);
    div.appendChild(buy);

    productsContainer.appendChild(div);
  }
}
