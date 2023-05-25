// Function to handle form submission
function addItem(event) {
  event.preventDefault();

  // Get form values
  var itemName = document.getElementById("itemName").value;
  var price = document.getElementById("price").value;
  var sku = document.getElementById("sku").value;
  var quantity = document.getElementById("quantity").value;

  // Create a new row in the table
  var table = document.getElementById("inventoryTable");
  var newRow = table.insertRow(-1);

  // Insert cell values
  var nameCell = newRow.insertCell(0);
  nameCell.innerHTML = itemName;

  var priceCell = newRow.insertCell(1);
  priceCell.innerHTML = price;

  var skuCell = newRow.insertCell(2);
  skuCell.innerHTML = sku;

  var quantityCell = newRow.insertCell(3);
  quantityCell.innerHTML = quantity;

  // Clear the form
  document.getElementById("addItemForm").reset();
}

// Attach form submission handler
document.getElementById("addItemForm").addEventListener("submit", addItem);
