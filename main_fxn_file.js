var Sandwich = (function(oldSandwich){


oldSandwich.includeItem = (e) => {
	const sandwichItem =  document.getElementById("sandwich-holder");
	let foodKind = e.target.value;
	let item = e.target.nextSibling.innerHTML;
	let itemPrice = Sandwich.getPrice(foodKind, item);
	let addSandwichItem = `<span id="sandwich-${item}" class="sandwich"><span class="sandwich-item-price">${itemPrice.toFixed(2)}</span><span class="sandwich-item-food">${item}</span></span>`;
	sandwichItem.innerHTML += addSandwichItem;
}

oldSandwich.removeItem = (e) => {
	const sandwichItem =  document.getElementById("sandwich-holder");
	let item = e.target.nextSibling.innerText;
	sandwichItem.removeChild(document.getElementById(`sandwich-${item}`));
	console.log("item removed", e.target.nextSibling.innerHTML);
}

oldSandwich.calculatePrice = () => {
	const sandwichItem =  document.getElementById("sandwich-holder");
	if (sandwichItem.firstChild) { 
		let itemPrices = document.getElementsByClassName("sandwich-item-price");
		let total = 0;
		for (let i =0; i < itemPrices.length; i++) {
			total += parseFloat(itemPrices[i].innerText);
		}
		document.getElementById("sandwich-price").innerHTML = `<p id="total-price">$${total.toFixed(2)}</p>`;
	} else if (!sandwichItem.firstChild) {
		document.getElementById("sandwich-price").removeChild(document.getElementById("total-price"));
	}
}

oldSandwich.getPrice = (foodGroup, food) => {
	let tempObject = {};
	let price = 0;
	switch(foodGroup) {

		case "bread":
			tempObject = Sandwich.getBread();
			price = tempObject[food];
		break;
		case "cheese":
			tempObject = Sandwich.getCheese();
			price = tempObject[food];
		break;
		case "meat":
			tempObject = Sandwich.getMeat();
			price = tempObject[food];
		break;
		case "veggie":
			tempObject = Sandwich.getVeggie();
			price = tempObject[food];
		break;
		case "condiment":
			tempObject = Sandwich.getCondiment();
			price = tempObject[food];
		break;
		default:
	}
	return price;
}

	return oldSandwich;
})(Sandwich || {});
