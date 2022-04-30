const sec = document.querySelector(".secs");
const mins = document.querySelector(".mins");
const hours = document.querySelector(".hours");


function  tiktak(){
	let second = new Date().getSeconds();
	let minute = new Date().getMinutes();
	let hour = new Date().getHours();

	sec.style.transform = `rotate(${180 + (second * 6)}deg)`;
	mins.style.transform = `rotate(${180 + (minute * 6)}deg)`;
	hours.style.transform = `rotate(${180 + (hour * 6)}deg)`;


	console.log({second,minute,hour});

}

setInterval(tiktak, 1000);