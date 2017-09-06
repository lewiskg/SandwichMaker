var Sandwich = (function(oldSandwich){
	const cheeses = {"cheddar": 0.05,"american": 0.05,"swiss": 0.05,"monterey jack": 0.10,"mozzarella": 0.05,"parmigiano": 0.05};

	oldSandwich.getCheese = function(kindOfCheese) {
		if (kindOfCheese){
			return cheeses[kindOfCheese];
		} else {
			return cheeses;
		}

	};

	oldSandwich.addCheese = function(newCheese) {
		cheeses.push(newCheese);
	}

	return oldSandwich;
})(Sandwich || {});