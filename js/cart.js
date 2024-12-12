const CartItems = document.querySelector(".cart-items");

let cartTotal = 0;

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  CartItems.innerHTML = ""; // Clear previous items
  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <span class="cart_delete" data-index="${index}" style="color: red; cursor: pointer;">Delete</span>
    `;
    CartItems.appendChild(cartItem);
  });

  // Attach event listeners to delete links
  document.querySelectorAll(".cart_delete").forEach((link) => {
    link.addEventListener("click", handleDelete);
  });
}

function handleDelete(event) {
  const index = event.target.dataset.index; // Get the index of the item
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  items.splice(index, 1); // Remove the item from the array
  localStorage.setItem("cart", JSON.stringify(items)); // Update localStorage
  displayCartItems(); // Re-render the cart
}

displayCartItems();
