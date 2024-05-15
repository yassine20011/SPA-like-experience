function createProductCard(product, index) {
  let card = document.createElement("div");
  card.className = "rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6";

  card.innerHTML = `
  <div
    class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
  >
    <a href=${product.image} class="md:order-1 md:w-48">
      <img class="h-20 w-20 dark" src=${product.image} alt=${product.title} />
    </a>

    <label for="counter-input" class="sr-only">Verify your shopping quantity</label>
    <div class="flex items-center justify-between md:order-3 md:justify-end">
      <div class="text-end md:order-4 md:w-32">
        <p class="text-base font-bold text-gray-900">
          $${product.price}
        </p>
      </div>
    </div>

    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
      <a
        href="#"
        class="text-base font-medium text-gray-900 hover:underline"
      >
        ${product.title}
      </a>

      <div class="flex items-center gap-4">
        <button
          id="remove-item-from-cart-${index}"
          type="button"
          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
        >
          <svg
            class="me-1.5 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  </div>
  `;

  return card;
}

export function shoppingCart() {
  document.addEventListener("DOMContentLoaded", async () => {
    
    document.title = "CyberSafe | Cart";
    
    let response = await fetch("./snippets/shoppingCart.html");
    let data = await response.text();
    let content = document.getElementById("content");
    content.innerHTML = data;

    let cartList = document.getElementById("cart-list");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart.forEach((product, index) => {
      let card = createProductCard(product, index);
      cartList.appendChild(card);
    });

    let cartCount = document.getElementById("cartCount");
    cartCount.textContent = cart.length;

    cart.forEach((product, index) => {
      let removeItem = document.getElementById(`remove-item-from-cart-${index}`);
      removeItem.addEventListener("click", () => {
        let updatedCart = cart.filter((item, i) => i !== index);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        location.reload(); 
      });
    });

    let totalItems = document.getElementById("total-items");
    totalItems.textContent = cart.length;

    let totalPrice = document.getElementById("total-price");
    let shipping = 39.00;
    let total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    totalPrice.textContent = `$${total.toFixed(2)}`;
    let totalWithShipping = total + shipping;
    totalPrice.textContent = `$${totalWithShipping.toFixed(2)}`;
  });
}
