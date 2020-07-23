function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
    
  }

function  getId(element) {
  alert("You Deleted row " + element.parentNode.parentNode.rowIndex);
}

