/** @namespace */

const app = (function bizOnline () {

  "use strict";

  var tableau = [];
  var newProduct;
  var i = 1;
  var j, k;
  var deleteBtns;
  var modifyBtns;
  var deleteBtns;

/**
 * Une fonction constructeur pour créer des produits
 * @alias app.Product
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
   * Une fonction permettant de créer des instances du constructeur Product
   * @author richard.p
   * @alias app.createProduct
   * @return {object} une instance est crée avec ses propriétés en clé: valeur
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

  /**Une fonction ajoutant des lignes avec cellules au tableau HTML
   * @alias app.storeProduct
   * @author adami0
   * @return {undefined} [description]
   */

  function storeProduct() {
    document.querySelector("tbody").innerHTML += `<tr id="tr${tableau.length + 1}" class="table_rows"><td>${newProduct.reference}</td><td>${newProduct.name}</td><td>${document.getElementById('price').value}</td><td>${document.getElementById('description').value}</td><td><a href="#fiche_product"><img src="assets/img/icon_info.png"></a></td><td><img class="fa-trash" src="assets/img/icon_bin.png"></td></tr>`;
}

/**
 * Une fonction permettant d'associer l'icone supprimer à cette fonction,
 * cette même fonction fait appel à deleteRows() et
 * la row est ainsi supprimée du HTML ainsi que l'objet du tableau dans app.js
 * @author richard.p
 * @alias app.attachDeleteBtnsToRows
 * @return {undefined}
 */

  function attachDeleteBtnsToRows() {
    deleteBtns = document.querySelectorAll(".fa-trash");
    for (j=0; j<deleteBtns.length; j+=1) {
      deleteBtns[j].onclick = deleteRows;
    }
  }

/**
 * Une fonction pour lier les boutons générés à un clic qui redirige vers la fonction createProduct
 * @alias app.clickCreateProduct
 * @author adami0
 * @return {[type]} [description]
 */

  function clickCreateProduct() {
    document.getElementById("validate").onclick = createProduct;
  }

  /**
   * Cette fonction est appelée au sein de attachDeleteBtnsToRows,
   * le textContent du td ref de l'objet -1 sera lié à l'index de l'objet du tableau
   * et pourra être supprimé.
   * @author richard.p
   * @alias app.deleteRows
   * @return {}
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

  window.onload = function () {
    clickCreateProduct();
}

}());
