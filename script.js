
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c523a286bmshe6060ef17d50e58p196361jsn53b97cda87e7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city) =>{
	cityName.innerHTML = city
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
	}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

const textDisplay = document.getElementById('text')
const phrases = ['Weather in Hyderabad|', 'Weather in Bengaluru|', 'Weather in Chennai|', 'Weather in Canada|', 'Weather in Seoul|', 'Weather in Paris|']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false


function loop() {
	isEnd = false
	textDisplay.innerHTML = currentPhrase.join('')
	if (i < phrases.length) {
		if (!isDeleting && j <= phrases[i].length) {
			currentPhrase.push(phrases[i][j])
			j++
			textDisplay.innerHTML = currentPhrase.join('')
		}
		if (isDeleting && j <= phrases[i].length) {
			currentPhrase.pop(phrases[i][j])
			j--
			textDisplay.innerHTML = currentPhrase.join('')
		}
		if (j == phrases[i].length) {
			isEnd = true
			isDeleting = true
		}
		if (isDeleting && j == 0) {
			currentPhrase = []
			isDeleting = false
			i++
			if (i == phrases.length) {
				i = 0
			}
		}
	}
	const spedUp = Math.random() * (80 - 50) + 50
	const normalSpeed = Math.random() * (300 - 200) + 200
	const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
	setTimeout(loop, time)

}
loop()