$(document).ready(function () {
	const primoA = [0,1,2,3,4,5,6,7,8,9]; //array di partenza
	estraiArray(primoA, 2,6); //invoco funziona riga 6

});
function estraiArray(array, min, max)  {
	//filtro nel newArray secondo la condizione che prenda gli indici compresi tra min e max
	const newArray = array.filter((elemento, index) => array[index] >= min && array[index] <= max);
	console.log(newArray);
}
