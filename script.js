scroll = document.getElementById("scroll");
scroll.src = "s2.jpg";
var i = 1;
setInterval(function () {
  scroll.onload = function () {
    i++;
    scroll.style.opacity = 1; // Fade in or show image if needed
  };

  scroll.onerror = function () {
    i = 1;
    scroll.src = "SMT logo.jpg";
    scroll.style.opacity = 0; // Hide image or handle error
  };
  scroll.src = "scroll/s" + i + ".jpg";

  setTimeout(function () {
    scroll.opacity = 0.1;
  }, 500);
}, 1000);


//////products


products = document.getElementById("products");
var data;
// Simple fetch to load JSON data and display it
fetch("products.json")
  .then((response) => response.json()) // Parse the JSON data
  .then((data) => {
    // Display JSON in the HTML
    // products.textContent
    

    data = JSON.stringify(data);
    console.log(data)

  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
    document.getElementById("jsonOutput").textContent =
      "Error loading JSON data.";
  });
data2={
    "Connectors":{
        "Connectors 1":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Connectors 2":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"]
    },
    "Earthing Clamp":{
        "Earthing Clamp 1":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Earthing Clamp 2":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Earthing Clamp 3":["jpeg","hkjn,d ahello ankasj 23ton  50metter hjbkjkn,m jhb SMT"]
    },
    "Electrode Holders":{
        "Electrode Holders 1":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Electrode Holders 2":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Electrode Holders 3":["jpeg","hkjn,d ahello ankasj 23ton  50metter hjbkjkn,m jhb SMT"],
        "Electrode Holders 4":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"]
    },
    "MIG Torch":{
        "MIG Torch 1":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "MIG Torch 2":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "MIG Torch 3":["jpeg","hkjn,d ahello ankasj 23ton  50metter hjbkjkn,m jhb SMT"],
        "MIG Torch 4":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"] 
    },
    "Wire Feeder":{
        "Wire Feeder 1":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Wire Feeder 2":["jpeg","cjhbaksjld bamn sjba manx    das  ads  adaadddd   jansnmz, 1kg 2mm"],
        "Wire Feeder 3":["jpeg","hkjn,d ahello ankasj 23ton  50metter hjbkjkn,m jhb SMT"] 
    }
    
}
  console.log(data)
  for (const key in data) {
      product=`<h2 class="productName">${key}</h2><div style="display:none;" class="items">`
      for(const key2 in data[key]){console.log(key2)
          product+=`<h3>${key2}</h3><img src='${key}\\${key2}.${data[key][key2][0]}'>
          <br>${data[key][key2][1]}<br><br><br>`
      }
      products.innerHTML+=product+`</div>`;
  }

  // Select all product names
const productNames = document.querySelectorAll('.productName');

// Loop through each product name
productNames.forEach((productName) => {
    productName.addEventListener('click', function() {
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
