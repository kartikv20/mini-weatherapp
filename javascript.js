var api = 'api.openweathermap.org/data/2.5/weather?';

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var lng = position.coords.longitude;
			var latt = position.coords.latitude;
			getWeather(latt,lng);
		});
	}
	else{
		console.log("Browser not supported");
	}
}


function getWeather(latt, lng)
{
	var myUrl = api+"lat="+latt+"&+lon="+lng;
	fetch(myUrl)
	.then(response=>response.json())
	.then(data=>console.log(data.main);

	)

}




window.onload = function() {
  document.getElementById("getloc").addEventListener('click',getLocation); 
};
