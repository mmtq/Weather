let fun=()=>{
    fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
    // console .log(data);
    // const weatherData = JSON.parse(data);
    // const description= weatherData.weather[0].description;
    // const temperature = weatherData.main.temp;
    // const icon= weatherData.weather[0].icon;
    // const imageUrl="https://openweathermap.org/img/wn/"+ icon+"@2x.png";
}