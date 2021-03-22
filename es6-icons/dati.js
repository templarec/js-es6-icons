$(document).ready(() => {
	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	//scansiono array oggetti e li sparo nell'ul colorandoli creati dal template
	//nascosto in html
	icons.forEach((elemento) => {

			let template = $('.template li').clone();
			let tag = `<i class="${elemento.family} ${elemento.prefix}${elemento.name}"></i>`;
			//Milestone 2
			color = "";
			switch (elemento.type) {
				case "animal":
					color = "blue";
					break;
				case "vegetable":
					color ="#FFA500"
					break;
				case "user"	:
					color = "#800080"
					break;
			}
			template.children('span#icon').html(tag).css("color", color);
			template.children('span#desc').text(`${elemento.name}`);
			$('#animals').append(template);
		});
	let type; //variabile che mi dirà quale valore del menu a tendina è stato scelto
	$('#menu').change(function () { //al cambiamento di menu:
		$('#animals').children().remove(); //svuoto campo ul
		switch ($(this).val()) { //assegno a type il valore della option
			case "all":
				type = "all"
				break;
			case "animal":
				type = "animal"
				break;
			case "vegetable":
				type = "vegetable"
				break;
			case "user":
				type = "user"
				break;
		}
		icons.forEach((elemento) => {//come il codice fuori dall'evento change ma
			//filtrato in base al tipo
			if (type === "all"){
				let template = $('.template li').clone();
				let tag = `<i class="${elemento.family} ${elemento.prefix}${elemento.name}"></i>`;
				//Milestone 2
				color = "";
				switch (elemento.type) {
					case "animal":
						color = "blue";
						break;
					case "vegetable":
						color ="#FFA500"
						break;
					case "user"	:
						color = "#800080"
						break;

				}
				template.children('span#icon').html(tag).css("color", color);
				template.children('span#desc').text(`${elemento.name}`);
				$('#animals').append(template);
			} else if (elemento.type === type){
				let template = $('.template li').clone();
				let tag = `<i class="${elemento.family} ${elemento.prefix}${elemento.name}"></i>`;
				//Milestone 2
				color = "";
				switch (elemento.type) {
					case "animal":
						color = "blue";
						break;
					case "vegetable":
						color ="#FFA500"
						break;
					case "user"	:
						color = "#800080"
						break;

				}
				template.children('span#icon').html(tag).css("color", color);
				template.children('span#desc').text(`${elemento.name}`);
				$('#animals').append(template);
			}

		});
	});

});

