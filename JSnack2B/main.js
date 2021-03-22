$(document).ready(function () {
	const primoA = [0,1,2,3,4,5,6,7,8,9]; //array di partenza
	console.log(estraiArray(primoA, 5,9)); //invoco funziona riga 6

});
function estraiArray(array, min, max)  {
	newArray = array.slice(min,max+1);
	return newArray;
}
