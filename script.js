const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

const container = document.querySelector('.container');
const showListButton = document.querySelector('.show-btn');
const list = document.querySelector('.list');

// Generate the element using .map();
const listOfFood = () => {
	const lists = foods.map(food =>
		`<li class="food-restaurent">
				${food.title}
				<span>${food.price}</span>
				<button class="Add">Add</button>
			</li>`)
		.join('');
	list.innerHTML = lists;
};

	listOfFood();
// Filter the spicy and vegetarian element using .filter()
const spicyInput = document.querySelector('#spicy');
const vegInput = document.querySelector('#veg');
 
	const checkSpicy = () => {
		if (spicyInput.checked) {
			console.log("mmmmmmmmmmmmm");
		}
	}
// filter the food which are spicy
const filteredSpicy = (spicy) => {
	return spicy.filter(type => type.spicy);
}
spicyInput.addEventListener('change', () => {
	const checkSpicy = () => {
		if (spicyInput.checked) {
			console.log("mmmmmmmmmmmmm");
		};
	}
});

console.log(filteredSpicy(foods));
// const showSpicyFood = () => {
// 	if (spicyInput.checked) {
// 		const spicyFood = foods.filter(food => food.spicy === true);
// 		const filteredSpicy = spicyFood.map(spicy => `
// 			<li value="${spicy.id}">
// 			<input${spicy.title}/>
// 			<span>${spicy.price}</span>
// 			</li>`).join('');
// 			spicyInput.innerHTML = filteredSpicy;
// 	};	
// }

// get the food which are vegetarian with filter() method
const showVegFood = () => {
	if (vegInput.checked) {
		const vegFood = foods.filter(food => food.vegetarian === true);
		const filteredVeg = vegFood.map(veg => `
		<li value="${veg.id}">
		  <input${veg.title}/>
		  <span>${veg.price}</span>
		</li>`).join('');
		vegInput.innerHTML = filteredVeg;
	}; 
};
 
vegInput.addEventListener('change', showVegFood);
