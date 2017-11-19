(function bizOnline () {

  "use strict";

  var tableau = [];
  var newProduct;
  var i = 1;
  var j, k;
  var deleteBtns;
  var modifyBtns;
  var deleteBtns;

/**
 * [Product description]
 * @param       {[type]} info [description]
 * @constructor
 */

  function Product (info) {
    this.reference = info.reference;
    this.name = info.name;
    this.price = info.price;
    this.description = info.description;
    this.image = info.image;
    this.color = info.color;
    this.weight = info.weight;
  }

/**
 * [createProduct description]
 * @return {[type]} [description]
 */

  function createProduct() {
        newProduct = new Product({
        reference: i++,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        color: document.getElementById("color").value,
        weight: document.getElementById("weight").value,
      });
    storeProduct();
    tableau.push(newProduct);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("color").value = "";
    document.getElementById("weight").value= "";
    attachDeleteBtnsToRows();
  }

  /**
   * [storeProduct description]
   * @return {[type]} [description]
   */

  function storeProduct() {
    document.querySelector("tbody").innerHTML += `<tr id="tr${tableau.length + 1}" class="table_rows"><td>${newProduct.reference}</td><td>${newProduct.name}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><i class="fa fa-info-circle" aria-hidden="true"></i></td><td><i id="fa${tableau.length+1}" class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
}

/**
 * [attachDeleteBtnsToRows description]
 * @return {[type]} [description]
 */

  function attachDeleteBtnsToRows() {
    deleteBtns = document.querySelectorAll(".fa-trash");
    for (j=0; j<deleteBtns.length; j+=1) {
      deleteBtns[j].onclick = deleteRows;
    }
  }

/**
 * [clickCreateProduct description]
 * @return {[type]} [description]
 */

  function clickCreateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }

/**
 * [deleteRows description]
 * @return {[type]} [description]
 */

  function deleteRows() {
    var answer = confirm("Do you really want to delete this product? Ok to confirm");
    if (answer) {
    this.parentElement.parentElement.remove();
    delete tableau[this.parentElement.parentElement.firstChild.textContent-1];
    alert("The selected product was successfully removed");
  }
  else {alert("The selected product wasn't removed.")};
  }

/*  function attachModifyBtnsToRows() {
    modifyBtns = document.querySelectorAll(".modify");
    for(var k=0; k<modifyBtns.length; k+=1) {
      modifyBtns[k].onclick = modifyRows;
    }
    console.log(this);
    console.log(tableau[this.parentElement.parentElement.firstChild.textContent-1]);
  }

/**
 * [modifyRows description]
 * @return {[type]} [description]
 */

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

/**
 * [recuperateInputValues description]
 * @return {[type]} [description]
 */

  function recuperateInputValues() {
    console.log(this.parentElement.childNodes);
    test = this.parentElement.childNodes[1].oninput;
    for (var m=1; m<this.parentElement.childNodes.length-3; m+=1) {
      if (this.parentElement.childNodes[m].textContent != this.parentElement.childNodes[m].firstChild.value) {
        this.parentElement.childNodes[m].textContent = this.parentElement.childNodes[m].firstChild.value;
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
*/

/**
 * [description]
 * @return {[type]} [description]
 */

  window.onload = function () {
    clickCreateProduct();
}

}());
