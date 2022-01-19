
// const circles = document.querySelectorAll('.circle')
// let activeLight = 0;

// function changeLight(nextColor=0) {
//     circles[activeLight].className = 'circle';
//     const currentLight = circles[nextColor]
// 	currentLight.classList.add(currentLight.getAttribute('color'));
//     activeLight = nextColor;
// }

const circles = document.querySelectorAll('.circle')
let activeLight = 0;

setInterval(() => {
	changeLight();
}, 1000);

function changeLight() {
	circles[activeLight].className = 'circle';
	activeLight++;
	
	if(activeLight > 2) {
		activeLight = 0;
	}
	
	const currentLight = circles[activeLight]
	
	currentLight.classList.add(currentLight.getAttribute('color'));
}