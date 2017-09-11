
printItemsToDom("bread", Sandwich.getBread());
printItemsToDom("cheese",Sandwich.getCheese());
printItemsToDom("meat",Sandwich.getMeat());
printItemsToDom("veggie", Sandwich.getVeggie());
printItemsToDom("condiment", Sandwich.getCondiment());

addEventListeners();


////////////////////
//  FUNCTIONS ()  //
////////////////////


function printItemsToDom(foodCatagory, foodTypeObject) {
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
		input_Node.setAttribute('value', foodCatagory);
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
				Sandwich.includeItem(e);
				Sandwich.calculatePrice();
			} else {
				Sandwich.removeItem(e);
				Sandwich.calculatePrice();
			}
		});
	}
}

