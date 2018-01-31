// Invoke function on load
var currentDegreeCelsius;

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var lng = position.coords.longitude;
			var lat = position.coords.latitude;
			getWeather(lat,lng); //Get coords
		});
	}
	else {
		console.log("Browser not supported");
	}
	var toggle = document.getElementById("unit");
	toggle.addEventListener("click",function convert(){
		var current = document.getElementById("tempp");
		var currentdeg = current.innerHTML;
		currentUnit = documen.getElementById("unit").innerHTML;
		var newUnit = currentUnit == 'C' ? 'F' : 'C';
		document.getElementById("unit").innerHTML = newUnit;
		if(newUnit=='F'){
			currentdeg = Math.round(parseInt(currentdeg)*9/5 +32);
			current.innerHTML = currentdeg;
		}
		else
			current.innerHTML = currentDegreeCelsius;
	}
	)
}






function getWeather(lat, lng){
	let api = 'https://fcc-weather-api.glitch.me/api/current?'; // we defined here since it's related to this function - 
	// we don't want to pollute the global window.
	
	fetch(`${api}lat=${lat}&lon=${lng}`) // we use javascript template literals
	.then(res => res.json())
	.then(res => {
		document.getElementById("loc").innerText = res.name;
		document.getElementById("tempp").innerText = res.main.temp;
		currentDegreeCelsius = res.main.temp;
	}).catch(err => {
		console.log('An error occured: ', err) //catch errors
	})
}


window.onload = function() {
  document.getElementById("getloc").addEventListener('click',getLocation); 
};
