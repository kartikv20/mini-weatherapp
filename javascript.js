

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
	let api = 'https://api.openweathermap.org/data/2.5/weather?'; // we defined here since it's related to this function - 
	// we don't want to pollute the global window.
	
	fetch(`${api}/lat=${lat}&lon=${lng}`) // we use javascript template literals
	.then(res => res.json())
	.then(res => {
		console.log(res)
	}).catch(err => {
		console.log('An error occured: ', err) //catch errors
	})
}




