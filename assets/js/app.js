(function bizOnline () {

  "use strict";

  var tableau = [];
  var inputNameValue, inputPriceValue, inputDescriptionValue;
  var newProduct;
  var i = 1;
  var j, k;
  var deleteBtns;
  var table_rows;

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

  function selectNameValue(evt) {
    const source1 = evt.target;
    inputvalue = source.value;
    tableau.push(Product.name);
  }

  function selectPriceValue(){}

  function createProduct() {
        newProduct = new Product({
        reference: i++,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
      });
    console.log(this);
    storeProduct();
    tableau.push(newProduct);
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('description').value = "";
    /*  for (j=1; j<tableau.length; j++) {
        document.getElementById(`fa${j}`).onclick = deleteProduct;
      }*/
    deleteBtns = document.querySelectorAll(".fa-trash");
    table_rows = document.querySelectorAll(".table_rows");
    console.log(deleteBtns);
    for (j=0; j<deleteBtns.length; j+=1) {
      deleteBtns[j].onclick = deleteProduct;
    }
    console.log(newProduct);
    //document.getElementById("name").oninput = selectNameValue;
    console.log(tableau);
    console.log(this);
  }

  function storeProduct() {
    document.querySelector("tbody").innerHTML += `<tr id="tr${tableau.length + 1}" class="table_rows"><td>${i-1}</td><td>${document.getElementById('name').value}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><i class="fa fa-info-circle" aria-hidden="true"></i></td><td><i id="fa${tableau.length+1}" class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
  }

  function clickCreateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }

  function attachDeleteBtnsToRows() {

  }

  function deleteProduct(evt) {
    /*for (var k=0; k<tableau.length; k++) {
      tableau.splice(tableau[k], 1);
      console.log(tableau[k]);
  }*/
  var source = evt.target;
  console.log(source.id);
    for (k=0; k<table_rows.length; k++) {
      if () {
        source.onclick = table_rows[k].classList.add("none-display");
      }
}
  console.log(table_rows);
  /*var k;
    if (deleteBtns[k] === source) {
      table_rows[k].classList.toggle("none-display");
      k++;
  }*/
  console.log(j);
  console.log(tableau);
  console.log(this);
  }

  window.onload = function () {
    clickCreateProduct();
    console.log(tableau);
    console.log(document.getElementById("tr1"));
    console.log(document.getElementById("fa1"));
    console.log(document.getElementById("name"));
  }

}());
