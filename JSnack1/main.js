$(document).ready(function () {
	let bici = [
		{
			nome: "City Bike",
			peso: 15
		},
		{
			nome: "Mountain Bike",
			peso: 10
		},
		{
			nome: "Racing",
			peso: 12
		},
		{
			nome: "Downhill Bike",
			peso: 12
		},
		{
			nome: "BMX",
			peso: 7
		},
		{
			nome: "Chrono Bike",
			peso: 5
		},
	];
	let min = bici[0].peso; //prendo il primo peso
	let indice = 0; //inizializzo variabile indice
	bici.forEach((elemento, index) => {
		if (elemento.peso <= min) { //se il peso è minore di min
			min = elemento.peso; //min prende valore del peso minore trovato
			indice = index; //aggiorna la posizione di dove si trova il peso minore
		}
	});
	console.log(bici[indice]); //stampa oggetto alla posizione indice peso minore
});