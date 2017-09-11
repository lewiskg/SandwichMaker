var Sandwich = (function(oldSandwich){
	const breads = {"white": 0.50,"wheat": 0.75,"rye": 0.80,"french": 1.00,"sourdough": 1.50,"multi-grain": 2.00};

	oldSandwich.getBread = function(kindOfBread) {
		if (kindOfBread) {
			return breads[kindOfBread];
		} else {
			return breads;
		}

	};

	oldSandwich.addBread = function(newBread, price) {
		breads.push(newBread);
	}

	return oldSandwich;
})(Sandwich || {});
