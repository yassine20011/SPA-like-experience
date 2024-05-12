function createProductCard(product) {
  const card = document.createElement("div");
  card.className  = "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow";

  card.innerHTML = `
      <a href="/product-details?id=${product.id}" class="flex justify-center items-center">
        <img class="p-8 rounded-t-lg w-64 h-80" src="${
          product.image
        }" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="${product.image}" class="h-16 overflow-hidden block">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">${
            product.title
          }</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1">
            ${'<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'.repeat(
              Math.ceil(product.rating.rate)
            )}
            ${'<svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'.repeat(
              5 - Math.ceil(product.rating.rate)
            )}
          </div>
          <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">${
            product.rating.rate
          }</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">$${
            product.price
          }</span>
          <a href="/product-details?id=${product.id}" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Buy</a>
        </div>
      </div>
    `;
  return card;
}

export function store() {
  addEventListener("DOMContentLoaded", async () => {
    document.title = "CyberSafe | Store";
    await fetch("./snippets/store.html")
      .then((response) => response.text())
      .then((data) => {
        let content = document.getElementById("content");
        content.innerHTML = data;
      });


    let productList = document.getElementById("product-list");
    let api = "https://fakestoreapi.com/products";
    await fetch(api)
      .then((response) => response.json())
      .then((data) => {
        data = data;
        data.forEach((product) => {
          let card = createProductCard(product);
          productList.appendChild(card);
        });
    });

  });
}
