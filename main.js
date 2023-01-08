const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector("#shoppingCart");
const productDetail = document.querySelector("#productDetail");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", toggleProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = shoppingCart.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCart.classList.toggle("inactive");
  }
  const isProductDetailClosed = productDetail.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetail.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }
  const isProductDetailClosed = productDetail.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  shoppingCart.classList.toggle("inactive");
}
function toggleProductDetailAside() {
  const isShoppingCart = shoppingCart.classList.contains("inactive");
  if (!isShoppingCart) {
    shoppingCart.classList.toggle("inactive");
  }
  productDetail.classList.toggle("inactive");
}

const cardsContainer = document.querySelector(".cards-container");
// product list
const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carpet",
  price: 220,
  image:
    "https://images.pexels.com/photos/276516/pexels-photo-276516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Dress",
  price: 520,
  image:
    "https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carpet",
  price: 220,
  image:
    "https://images.pexels.com/photos/276516/pexels-photo-276516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Dress",
  price: 520,
  image:
    "https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carpet",
  price: 220,
  image:
    "https://images.pexels.com/photos/276516/pexels-photo-276516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Dress",
  price: 520,
  image:
    "https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carpet",
  price: 220,
  image:
    "https://images.pexels.com/photos/276516/pexels-photo-276516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Dress",
  price: 520,
  image:
    "https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
function renderProductList(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", toggleProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = `${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const productCartIcon = document.createElement("img");
    productCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productCartIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProductList(productList);
console.log(123 + "456");
