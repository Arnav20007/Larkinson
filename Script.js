fetch("products.json")
  .then(response => response.json())
  .then(data => {
    let output = "";
    data.forEach(product => {
      output += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <span>$${product.price}</span>
          <a href="${product.link}" target="_blank">Buy Now</a>
        </div>
      `;
    });
    document.getElementById("products").innerHTML = output;
  });
