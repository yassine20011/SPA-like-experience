export function productDetails() {
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = "CyberSafe | Product Details";

    let response = await fetch("./snippets/productDetails.html");
    let data = await response.text();
    let content = document.getElementById("content");
    content.innerHTML = data;

    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("id");
    console.log(productId);
    let api = `https://fakestoreapi.com/products/${productId}`;
    await fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let product = data;
        let productImage = document.getElementById("product-image");
        let productTitle = document.getElementById("product-title");
        let productRating = document.getElementById("product-rating");
        let productPrice = document.getElementById("product-price");
        let productDescription = document.getElementById("product-description");
        let productStars = document.getElementById("product-stars");
        let productReviews = document.getElementById("product-reviews");

        productStars.innerHTML = `${'<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'.repeat(product.rating.rate)}${'<svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'.repeat(5 - product.rating.rate)}`;

        
        productImage.src = product.image;
        productImage.alt = product.title;
        
        productTitle.textContent = product.title;
        productRating.textContent = product.rating.rate;
        productReviews.textContent = `${product.rating.count} reviews`;
        
        productPrice.textContent = `$${product.price}`;
        productDescription.textContent = product.description;
      });
  });
}
