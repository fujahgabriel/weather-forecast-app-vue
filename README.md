# weather-forecast-app-vue

This Weather App is a responsive web application designed to provide users with detailed weather information for a specific location. Users can input a city or location to receive up-to-date weather data, including current conditions, forecasts for the next 5 days.

It uses the free version of

[![openweathermap](https://img.shields.io/badge/openweathermap-E97627?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/api)


## Features

**Location Input**
* Users geolocation and can enter the name of a city or location in the input field.
* The app fetches weather data for the input location.

**Current Weather Information**
* Displays the name of the location (e.g., Brussels, Belgium).
* Shows the current weather conditions (e.g., raining).
* Displays the current temperature in the location.
* Displays the highest and lowest temperatures for the current day.

**Additional Weather Details**
* Wind Speed
* Humidity
* Pressure
* Sunrise and Sunset Times

**7-Day Weather Forecast**
- unfortunately this feature requires a paid plan, i could only get 5 days in the specified location.

**5-Day Historical Weather Data**
- unfortunately this feature requires a paid plan,

## Project Setup

##### Set up environment variables:
- Rename the env.example file to .env file in the root directory and add the openweathermap api key.


### Install the required dependencies:
 
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- Vue Framework
- Openweathermap

