<template>
    <div>
        <p class="text-[12px] text-light mb-2 text-gray-100">NEXT FIVE DAYS</p>
        <div class="grid md:grid-cols-5 grid-cols-1 justify-center items-center gap-4 rounded-md">
          <div v-for="list in filteredForecasts" :key="list.dt">
            <Card>
              <p class="text-sm text-center">{{ getShorthandDay(list?.dt_txt) }}</p>
              <div class="items-center flex justify-center">
                <img :src="`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`" alt="this is weather img" />
              </div>
              <p class="text-center">{{ convertDateToTime(list.dt) }}</p>
              <p class="text-[12px] text-center font-extralight">
                {{ Math.round(list.main.temp - 273.15) }}°C
              </p>
            </Card>
          </div>
        </div>

    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue';
  export default {
    name: "NextFiveDays",
    props: {
      weatherForecastHistory: {
        type: Object,
        required: true,
      },
    },
    computed: {
      filteredForecasts() {
        return this.filterDailyForecasts(this.weatherForecastHistory?.list);
      },
    },
    components: {
      Card
    },
    methods: {
     filterDailyForecasts(weatherData) {
      const filteredData = weatherData?.filter((item) => {
        // Extract the hour and day part of the date string
        const hour = new Date(item.dt_txt).getHours()
        const day = new Date(item.dt_txt).getDate()

        // Return the item where hour is 12:00 PM (adjust as needed)
        return hour === 15
      })

      return filteredData
    },
    getShorthandDay(dateTime) {
  const inputDate = new Date(dateTime);
  const today = new Date();

  // Check if the dateTime is today
  if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    return "Now";
  }

  // If not today, return the day of the week
  return inputDate.toLocaleDateString('en-US', { weekday: 'long' });
},
      convertDateToTime(dt) {
        // Your logic to convert date to time
       const date = new Date(dt * 1000) // Convert seconds to milliseconds
      const hours = date.getUTCHours().toString().padStart(2, '0')
      const minutes = date.getUTCMinutes().toString().padStart(2, '0')
      const formattedTime = `${hours}:${minutes} UTC`
      return formattedTime
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  