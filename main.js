
printItemsToDom(Sandwich.getBread());
printItemsToDom(Sandwich.getCheese());
printItemsToDom(Sandwich.getMeat());
printItemsToDom(Sandwich.getVeggie());
printItemsToDom(Sandwich.getCondiment());

addEventListeners();


////////////////////
//  FUNCTIONS ()  //
////////////////////


function printItemsToDom(foodTypeObject) {
	const menuOnDom = document.getElementById("menu-items");
	const div_Node	= document.createElement('div');
	const ul_Node 	= document.createElement('ul');
	div_Node.setAttribute('class','food-group');

	for (let key in foodTypeObject) {
		let li_Node 	= document.createElement('li');
		let label_Node 	= document.createElement('label');
		let input_Node	= document.createElement('input');
		label_Node.innerHTML = `${key}`;
		input_Node.setAttribute('type', 'checkbox');
		input_Node.setAttribute('class','food-input');
		input_Node.setAttribute('value', foodTypeObject[key]);
		li_Node.setAttribute('class','food-item');
		li_Node.appendChild(input_Node);
		li_Node.appendChild(label_Node);
		ul_Node.appendChild(li_Node);
		div_Node.appendChild(ul_Node);
	}
	menuOnDom.appendChild(div_Node);
}

function addEventListeners() {
	let foodItemsArray = document.getElementsByClassName('food-input');
	for (let i = 0; i < foodItemsArray.length; i++) {
		foodItemsArray[i].addEventListener('change', (e) => {
			if (e.target.checked) {
				includeItem(e);
				calculatePrice();
			} else {
				removeItem(e);
				calculatePrice();
			}
		});
	}
}

function includeItem(e) {
	const sandwichItem =  document.getElementById("sandwich-holder");
	let price = Number(e.target.value);
		price = parseFloat(price);
	let item = e.target.nextSibling.innerHTML;
	let addSandwichItem = `<span id="sandwich-${item}" class="sandwich"><span class="sandwich-item-price">${price.toFixed(2)}</span><span class="sandwich-item-food">${item}</span></span>`;
	sandwichItem.innerHTML += addSandwichItem;
}

function removeItem(e) {
	const sandwichItem =  document.getElementById("sandwich-holder");
	let item = e.target.nextSibling.innerText;
	sandwichItem.removeChild(document.getElementById(`sandwich-${item}`));
	console.log("item removed", e.target.nextSibling.innerHTML);
}

function calculatePrice() {
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