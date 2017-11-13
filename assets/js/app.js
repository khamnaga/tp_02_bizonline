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

    if (typeof name === "string" && typeof price === "number" && typeof description === "string") {
        newProduct = new Product({
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value
      });
    } else {
      alert("Please enter the informations again.");
    }
    storeProduct();
    document.getElementById("fa1").onclick = deleteProduct;
    console.log(newProduct);
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('description').value = "";
    console.log(tableau);

  }

  function storeProduct() {
    document.querySelector("tbody").innerHTML += `<tr id="tr${tableau.length + 1}"><td>${tableau.length + 1}</td><td>${document.getElementById('name').value}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><i class="fa fa-info-circle" aria-hidden="true"></i></td><td><i id="fa${tableau.length+1}" class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
    tableau.push(newProduct);
  }

  function clickCreateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }

  function deleteProduct() {
    document.getElementById("tr1").classList.toggle("none-display")
  }

  window.onload = function () {
    clickCreateProduct();
    console.log(tableau);
    console.log(document.getElementById("tr1"));
    console.log(document.getElementById("fa1"));
  }

}());
