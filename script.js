
let big = document.getElementsByName('bigpic');

let links = ['Фото/food1.jpg','Фото/food2.jpeg','Фото/food3.jpeg','Фото/food4.jpg','Фото/food5.jpg']

let iter = 0;


// big = [0,1,2]


big[2].onclick = function() {


		iter++;

		if (iter == links.length) {
			iter = 0
		}

		big[0].src = links[iter];
}






big[1].onclick = function() {


		if (iter == 0) {
			iter = links.length;
		}


		big[0].src = links[iter-1];
		iter--;
		

}


let formback = document.getElementById('fix');
document.getElementById('feedback').onclick = function(){
	formback.style.display = 'block';
}


document.getElementById('close').onclick = function(){
	formback.style.display = 'none';
}



let inputs = document.getElementsByClassName('backinput');

let send = document.getElementById('submit');


send.onclick = function(event){


	for(let i=0; i< inputs.length;i++){
		if(inputs[i].value == ''){
			event.preventDefault();
			return(alert('Не все поля заполнены'));
		}
	}
}
