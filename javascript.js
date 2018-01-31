

// Invoke function on load
(function(){
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
	
})();



function getWeather(lat, lng){
	let api = 'https://fcc-weather-api.glitch.me/api/current?'; // we defined here since it's related to this function - 
	// we don't want to pollute the global window.
	
	fetch(`${api}lat=${lat}&lon=${lng}`) // we use javascript template literals
	.then(res => res.json())
	.then(res => {
		document.getElementById("loc").innerText = res.name;
		document.getElementById("tempp").innerText = res.main.temp;
	}).catch(err => {
		console.log('An error occured: ', err) //catch errors
	})
}

window.onload = function() {
  document.getElementById("getloc").addEventListener('click',getLocation); 
};




