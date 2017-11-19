(function bizOnline () {

  "use strict";

  var tableau = [];
  var newProduct;
  var i = 1;
  var j, k;
  var deleteBtns;
  var table_rows;
  var modifyBtns;
  var deleteBtns;
  var inputNameValue;
  var inputPriceValue;
  var inputDescriptionValue;
  var inputColorValue;
  var inputWeightValue;
  var beforeInputNameValue, beforeInputPriceValue, beforeInputDescriptionValue;
  var test;



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

/*  function selectNameValue(evt) {
    const source1 = evt.target;
    inputvalue = source.value;
    tableau.push(Product.name);
  }*/

  function createProduct() {
        newProduct = new Product({
        reference: i++,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        color: document.getElementById("color").value,
        weight: document.getElementById("weight").value,
      });
    console.log(this);
    storeProduct();
    tableau.push(newProduct);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("color").value = "";
    document.getElementById("weight").value= "";
    /*  for (j=1; j<tableau.length; j++) {
        document.getElementById(`fa${j}`).onclick = deleteProduct;
      }*/
    console.log(deleteBtns);
    console.log(newProduct);
    //document.getElementById("name").oninput = selectNameValue;
    console.log(tableau);
    console.log(this);
  //  console.log("--------elemparenteElement--------------");
    attachDeleteBtnsToRows();
    attachModifyBtnsToRows();
  }

  function storeProduct() {
    document.querySelector("tbody").innerHTML += `<tr id="tr${tableau.length + 1}" class="table_rows"><td>${newProduct.reference}</td><td>${newProduct.name}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><i class="fa fa-info-circle" aria-hidden="true"></i></td><td class="modify">cliquez ici pour modifier</td><td><i id="fa${tableau.length+1}" class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
}


  function attachDeleteBtnsToRows() {
    deleteBtns = document.querySelectorAll(".fa-trash");
    console.log("-------attach--------");
    console.log(this);
    console.log(deleteBtns);
    for (j=0; j<deleteBtns.length; j+=1) {
      deleteBtns[j].onclick = deleteRows;
    }
  }

  function clickCreateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }

  function deleteRows() {
    console.log("-----deleteRows------");
    var answer = confirm("Do you really want to delete this product? Ok to confirm");
    console.log(answer);
    if (answer) {
    this.parentElement.parentElement.remove();
    delete tableau[this.parentElement.parentElement.firstChild.textContent-1];
    alert("The selected product was successfully removed");
  }
  else {alert("The selected product wasn't removed.")};
  }

  function attachModifyBtnsToRows() {
    modifyBtns = document.querySelectorAll(".modify");
    for(var k=0; k<modifyBtns.length; k+=1) {
      modifyBtns[k].onclick = modifyRows;
    }
    console.log(this);
  }

  function modifyRows() {
    console.log("------modify-----");
    console.log(this); // THE THIS MAUX DE TÊTES!!!!!
    console.log(this.parentElement.childNodes[1]);
    console.log(this.parentElement.childNodes);
    this.parentElement.childNodes[1].innerHTML = `<input type=text placeholder=${this.parentElement.childNodes[1].textContent}>`;
    this.parentElement.childNodes[2].innerHTML = `<input type=text placeholder=${this.parentElement.childNodes[2].textContent}>`;
    this.parentElement.childNodes[3].innerHTML = `<input type=text placeholder=${this.parentElement.childNodes[3].textContent}>`;
    this.parentElement.childNodes[5].innerHTML = `<td>cliquer ici afin de valider les modifications</td>`;
    console.log(this);
    console.log(test);
    this.parentElement.childNodes[5].onclick = recuperateInputValues;
  }

  function recuperateInputValues() {
    console.log("----recuperate----");
    console.log(this.parentElement.childNodes);
    test = this.parentElement.childNodes[1].oninput;
    console.log(test);
    for (var m=1; m<this.parentElement.childNodes.length-3; m+=1) {
      if (this.parentElement.childNodes[m].textContent != this.parentElement.childNodes[m].firstChild.value) {
        this.parentElement.childNodes[m].textContent = this.parentElement.childNodes[m].firstChild.value;
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }

  function deleteProduct(evt) {
    /*for (var k=0; k<tableau.length; k++) {
      tableau.splice(tableau[k], 1);
      console.log(tableau[k]);
  }*/
  var source = evt.target;
  console.log("-----------------log de this dans delete-------------");
  console.log(this);
  console.log(source.id);
  console.log(newProduct);
  console.log(newProduct.reference);
/*    for (k=0; k<table_rows.length; k++) {
      if (Product.reference) {
        source.onclick = table_rows[k].classList.add("none-display");
      }
}*/
  console.log(table_rows);
  /*var k;
    if (deleteBtns[k] === source) {
      table_rows[k].classList.toggle("none-display");
      k++;
  }*/
  console.log(tableau);
  console.log(this.value);
  }

  window.onload = function () {
    clickCreateProduct();
    console.log(tableau);
    console.log(document.getElementById("tr1"));
    console.log(document.getElementById("fa1"));
    console.log(document.getElementById("name"));
    console.log(document.querySelector("table").rows);
  }

}());
