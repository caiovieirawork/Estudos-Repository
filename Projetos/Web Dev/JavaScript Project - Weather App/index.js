const container = document.querySelector('.container')
const search = document.querySelector('.search__box button')
const weatherBox = document.querySelector('.weather__box')
const weatherDetails = document.querySelector('.weather__details')
const error404 = document.querySelector('.not__found')

search.addEventListener('click', () =>{
    const APIKey = 'f737ea89e3cf86dda296d10aed1ae35c'
    const city = document.querySelector('.search__box input').value

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        if(json.cod ==='404'){
            container.style.height = '400px'
            weatherBox.style.display = 'none'
            weatherDetails.style.display = 'none'
            error404.style.display = 'block'
            error404.classList.add('fadeIn')
            return;
        }

        error404.style.display = 'none'
        error404.classList.remove('fadeIn')

        const image = document.querySelector('.weather__box img')
        const temperature = document.querySelector('.weather__box .temperature')
        const description = document.querySelector('.weather__box .description')
        const humidity = document.querySelector('.weather__details .humidity span')
        const wind = document.querySelector('.weather__details .wind span')


        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'assets/clear.png';
                break;

            case 'Rain':
                image.src = 'assets/rain.png';
                break;

            case 'Snow':
                image.src = 'assets/snow.png';
                break;

            case 'Clouds':
                image.src = 'assets/cloud.png';
                break;

            case 'Haze':
                image.src = 'assets/mist.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';
    });
});