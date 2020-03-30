window.onload = function(){
	var loc=document.getElementById("loc");
	var watchId;
	

	if ('geolocation' in navigator){
		document.getElementById('newClick').addEventListener('click',function(){
			navigator.geolocation.getCurrentPosition(function (localizar) {
			console.log(localizar.coords.latitude);
			console.log(localizar.coords.Longitude);
			loc.innerHTML="Latitude: " + localizar.coords.latitude + "<br>Longitude: " +localizar.coords.Longitude;

			var img_url="https://developers.google.com/maps/documentation/javascript/geolocation"
  			+latlon+"&zoom=14&size=400x300&sensor=false";
  			document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";

		});
		});
			
	} else{
		loc.innerText="O seu navegador não tem suporte para Geolocalização";
}

};



