const productsData = [
  ["Urban Classic Hoodie","👕","PKR 2,499"],
  ["Premium Wireless Headphones","🎧","PKR 3,499"],
  ["Smart Fitness Watch","⌚","PKR 2,799"],
  ["Beauty Care Essentials","🧴","PKR 1,899"],
  ["Portable Air Fryer","🍳","PKR 5,499"],
  ["Home Decor Lamp","🏠","PKR 2,199"],
  ["Resistance Fitness Kit","🏋","PKR 1,699"],
  ["Gaming Controller","🎮","PKR 3,299"]
];

const grid = document.getElementById("products");
const toast = document.getElementById("toast");
const cartCount = document.getElementById("cartCount");
let cart = 0;

function renderProducts(list = productsData){
  grid.innerHTML = list.map((p,i)=>`
    <article class="product">
      <span class="badge">${i<5 ? "BEST SELLER" : "NEW"}</span>
      <div class="product-img">${p[1]}</div>
      <div class="product-info">
        <h3>${p[0]}</h3>
        <div class="stars">★★★★★</div>
        <div class="price">${p[2]}</div>
        <button class="add" data-name="${p[0]}">Add to Cart</button>
      </div>
    </article>`).join("");
  document.querySelectorAll(".add").forEach(btn => btn.addEventListener("click",()=>{
    cart++;
    cartCount.textContent = cart;
    toast.textContent = `${btn.dataset.name} added to cart`;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),1800);
  }));
}

renderProducts();

document.getElementById("searchInput").addEventListener("input", e=>{
  const q = e.target.value.toLowerCase().trim();
  renderProducts(productsData.filter(p => p[0].toLowerCase().includes(q)));
});

document.querySelectorAll(".category").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById("shop").scrollIntoView({behavior:"smooth"});
  });
});
