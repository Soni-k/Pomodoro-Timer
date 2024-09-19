const start = document.querySelector("#blue");
const stop = document.querySelector("#red");
const reset = document.querySelector("#green");

const timer = document.querySelector("#timer");

let minutes = 60;
let seconds = 0;
let timerId;

console.log(timer, "timer");

start.addEventListener('click', () => {
	timerId = setInterval(() => {

		if (seconds === 0) {
			seconds = 59;
			if (minutes !== 0) {
				minutes--;
			}
		}
		else {
			seconds--;
		}

		console.log(seconds);
		console.log(minutes);
		timer.textContent = `${minutes}:${seconds}`;

	}, 1000)
});

stop.addEventListener('click', () => {
	clearInterval(timerId);
})

reset.addEventListener('click', () => {
	minutes = 60;
	seconds = 0;
	timer.textContent = `${minutes}:0${seconds}`;
})