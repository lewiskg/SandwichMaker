var Sandwich = (function(oldSandwich){
	// const condiments = ["mustard","katchup","mayonnaise","dill relish","sweat relish","hummius","guacamole","pesto"];
	const condiments = {"mustard": 0.02,"katchup": 0.02,"mayonnaise": 0.05,"dill relish": 0.10,"sweat relish": 0.10,"hummius": 0.80,"guacamole": 1.00,"pesto": 0.90};

	oldSandwich.getCondiment = function(kindOfCondiment) {
		if (kindOfCondiment) {
			return condiments[kindOfCondiment];
		} else {
			return condiments;
		}

	};

	oldSandwich.addCondiment = function(newCondiment) {
		condiments.push(newCondiment);
	}

	return oldSandwich;
})(Sandwich || {});