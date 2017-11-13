(function bizOnline () {

  "use strict";

  var tableau = [];
  var input;
  var newProduct;

  function Product (info) {
    this.reference = info.reference;
    this.name = info.name;
    this.price = info.price;
    this.description = info.description;
    this.image = info.image;
    this.color = info.color;
    this.weight = info.weight;
  }

  // var p1 = new Product ({
  //   name: "PS4",
  //   reference: "",
  //   description: "console sony 1 To",
  //   color: "white",
  //   image: "",
  //   price: "200",
  //   weight: ""
  // });
  //
  // console.log(p1);

  function createProduct() {
    var newProduct = new Product({
      name: document.getElementById('name').value,
      price: document.getElementById('price').value + "euros",
      description: document.getElementById('description').value
    });
    storeProduct();
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('description').value = "";
    console.log(newProduct);
    console.log(tableau);

  }

  function storeProduct() {
    document.getElementById("table").innerHTML = `<tr><td>${document.getElementById('name').value}</td></tr>`;
    tableau.push(newProduct);
  }

  function validateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }



  window.onload = function () {
    validateProduct();

  }

}());
