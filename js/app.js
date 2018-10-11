let statisticsController = (function() {

	let ingredientsData = {
		currentPrice: 10,
		saladAmount: 1,
		baconAmount: 1,
		cheeseAmount: 1,
		meatAmount: 1,
		saladPrice: 0.20,
		baconPrice: 2,
		cheesePrice: 1
	}

	const getIngredients = () => {
		return ingredientsData;
	}

	const addSalad = () => {
		let amountSalad = ingredientsData.saladAmount;

		if (amountSalad <= 9) {
				amountSalad++;
		} else {
			alert('You can order max 10 bonus ingredients of the same ingredient')
		}

		ingredientsData.saladAmount = amountSalad;
	}

	const minusSalad = () => {
		let amountSalad = ingredientsData.saladAmount;

		if (amountSalad > 1) {
			amountSalad--;
		}

		ingredientsData.saladAmount = amountSalad;
	}

	return {
		getIngredients: getIngredients,
		addSalad: addSalad,
		minusSalad: minusSalad
	}

})();

let controllerUI = (function() {

	let stringsDOM = {
		currentPrice: '.price__current-price',
		saladAmount: '.salad-amount',
		baconAmount: '.bacon-amount',
		cheeseAmount: '.cheese-amount',
		meatAmount: '.meat-amount',
		saladMore: '.salad-more',
		baconMore: '.bacon-more',
		cheeseMore: '.cheese-more',
		meatMore: '.meat-more',
		saladLess: '.salad-less',
		baconLess: '.bacon-less',
		cheeseLess: 'cheese-less',
		meatLess: '.meat-less'
	}

	const getStringsDOM = () => {
		return stringsDOM;
	}

	const showSaladAmount = () => {
		document.querySelector(stringsDOM.saladAmount).innerHTML = `${statisticsController.getIngredients().saladAmount}`;
	}

	return {
		showSaladAmount: showSaladAmount,
		getStringsDOM: getStringsDOM
	}

})();

let globalController = (function() {

	let stringsDOM = controllerUI.getStringsDOM();

	const increaseSalad = () => {
		statisticsController.addSalad();
		controllerUI.showSaladAmount();
	}

	const decreaseSalad = () => {
		statisticsController.minusSalad();
		controllerUI.showSaladAmount();
	}

	document.querySelector(stringsDOM.saladMore).addEventListener('click', increaseSalad);
	document.querySelector(stringsDOM.saladLess).addEventListener('click', decreaseSalad);

})();