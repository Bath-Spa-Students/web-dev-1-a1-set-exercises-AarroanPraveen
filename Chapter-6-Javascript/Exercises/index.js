document.getElementById("calculate-button").addEventListener("click", function() {
	var costPerLiter = parseFloat(document.getElementById("cost-per-liter").value);
	var litersPurchased = parseFloat(document.getElementById("liters-purchased").value);
	var totalCost = costPerLiter * litersPurchased;
	document.getElementById("total-cost").innerHTML = "Total cost: $" + totalCost.toFixed(2);
});