"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");

  for (columns = 0; columns < 16; columns++) {
    var columnElement = document.createElement("div");
    columnElement.classList.add("row");
    container.appendChild(columnElement);

    for (rows = 0; rows < 16; rows++) {
      var rowElement = document.createElement("div");
      rowElement.classList.add("column");
      columnElement.appendChild(rowElement);
    }
  }
});