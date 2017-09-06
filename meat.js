var Sandwich = (function(oldSandwich){
	// const meats = ["chicken","turkey","pancetta","roast beef","ham","pepperoni","salami","pastrami","bologna"];
	const meats = {"chicken": 1.50,"turkey": 1.50,"pancetta": 2.25,"roast beef": 2.00,"ham": 1.00,"pepperoni": 1.75,"salami": 1.50,"pastrami": 2.00,"bologna": 0.75};

	oldSandwich.getMeat = function(kindOfMeat) {
		if (kindOfMeat) {
			return meats[kindOfMeat];
		} else {
			return meats;
		}

	};

	oldSandwich.addMeat = function(newMeat) {
		meats.push(newMeat);
	}

	return oldSandwich;
})(Sandwich || {});