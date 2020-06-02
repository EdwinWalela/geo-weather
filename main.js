$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = '';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

        $.get(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;

            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
        })
        
    }

    getLocation();
})
