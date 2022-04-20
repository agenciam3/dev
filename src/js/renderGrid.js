import fetchProductJSON from "./fetchProductJSON";

async function renderGrid(data) {
  const contentCategory = document.getElementById("content-category");
  contentCategory.innerHTML = "";
  const product = await data;

  product.map((product) => {
    product.price = parseFloat(product.price).toFixed(2).replace(".", ",");
    product.parcelamento[1] = parseFloat(product.parcelamento[1])
      .toFixed(2)
      .replace(".", ",");

    let card = document.createElement("div");
    card.classList.add("card-product");

    let image = document.createElement("img");
    image.classList.add("img-product");
    image.setAttribute("src", product.image);

    let name = document.createElement("h3");
    name.classList.add("title-product");
    name.innerText = product.name;

    let price = document.createElement("span");
    price.classList.add("price-product");
    price.innerText = `R$ ${product.price}`;

    let parcelamento = document.createElement("span");
    parcelamento.classList.add("parcelamento-product");
    parcelamento.innerHTML = `até ${product.parcelamento[0]}x de R$ ${product.parcelamento[1]}`;

    let id = document.createElement("button");
    id.classList.add("btn-card-product");
    id.innerHTML = "comprar";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(parcelamento);
    card.appendChild(id);

    contentCategory.appendChild(card);
  });
}

export default renderGrid;

// const result = product.filter(filterPrice);

//     function filterPrice(value) {
//       if (value.price >= 150) return value;
//     }
