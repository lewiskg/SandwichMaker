var Sandwich = (function(oldSandwich){
	// const veggies = ["tomato","cucumber","lettuce","onion","red bell pepper","green bell pepper","spinach","olives","jalapenos"];
	const veggies = {"tomato": 0.25,"cucumber": 0.15,"lettuce": 0.10 ,"onion": 0.15,"red bell pepper": 0.35,"green bell pepper": 0.30,"spinach": 0.45,"olives": 0.25,"jalapenos": 0.30};

	oldSandwich.getVeggie = function(kindOfVeggie) {
		if (kindOfVeggie) {
			return veggies[kindOfVeggie];
		} else {
			return veggies;
		}

	};

	oldSandwich.addVeggie = function(newVeggie) {
		veggies.push(newVeggie);
	}

	return oldSandwich;
})(Sandwich || {});