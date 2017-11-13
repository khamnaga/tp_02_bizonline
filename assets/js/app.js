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
    document.querySelector("tbody").innerHTML += `<tr><td>${tableau.length + 1}</td><td>${document.getElementById('name').value}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><i class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
    tableau.push(newProduct);
  }

  function clickProduct() {
    document.getElementById("validate").onclick = createProduct;
    document.querySelectorAll(".supprimer").onclick = deleteProduct;
  }



  function deleteProduct() {
    document.querySelectorAll("")
  }

  window.onload = function () {
    clickProduct();

  }

}());
