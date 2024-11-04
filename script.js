// Fetching images and setting interval
const scroll = document.getElementById("scroll");
scroll.src = "s2.jpg";
let i = 1;

setInterval(function () {
  scroll.onload = function () {
    scroll.style.opacity = 1; // Fade in or show image if needed
    i++;
    if (i > 3) i = 1; // Reset index if it exceeds the number of images
  };

  scroll.onerror = function () {
    i = 1;
    scroll.src = "SMT logo.jpg";
    scroll.style.opacity = 0; // Hide image or handle error
  };

  scroll.src = "scroll/s" + i + ".jpg";

  setTimeout(function () {
    scroll.style.opacity = 0.1; // Fade out the image
  }, 500);
}, 1000);

// Fetch JSON data and display products
const products = document.getElementById("products");

// Simple fetch to load JSON data
fetch("https://airanhindustan.github.io/SMT---client-Akash-Garg-/products.json")
  .then((response) => response.json()) // Parse the JSON data
  .then((data) => {
    console.log(data);
    // Now that we have the data, we can iterate over it
    for (const key in data) {
      let product = `<h2 class="productName">${key}</h2><div style="display:none;" class="items">`;
      for (const key2 in data[key]) {
        product += `<h3>${key2}</h3><img src='https://airanhindustan.github.io/SMT---client-Akash-Garg-/${key}/${key2}.${data[key][key2][0]}'><br>${data[key][key2][1]}<br><br><br>`;
      }
      products.innerHTML += product + `</div>`;
    }

    // Select all product names
    const productNames = document.querySelectorAll('.productName');

    // Loop through each product name
    productNames.forEach((productName) => {
      productName.addEventListener('click', function () {
        // Find the next sibling div with class 'items'
        const items = productName.nextElementSibling;

        // Toggle the visibility of the items div
        if (items.style.display === 'none' || items.style.display === '') {
          items.style.display = 'block'; // Show items
        } else {
          items.style.display = 'none'; // Hide items
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
    document.getElementById("jsonOutput").textContent =
      "Error loading JSON data.";
  });
