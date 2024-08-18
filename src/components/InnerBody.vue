<script>
import { mapActions, mapGetters } from 'vuex'
import CustomSearch from '../components/CustomSearch.vue'
import Card from '../components/Card.vue'
import NextFiveDays from '../components/NextFiveDays.vue'
import ForecastDetails from '../components/ForecastDetails.vue'
import MainForecast from '../components/MainForecast.vue'
export default {
  data() {
    return {
      showExtraInfo: false,
      coordinates: null,
      loading: false,
      isAutoComplete: false
    }
  },
  components: {
    SearchInput: CustomSearch,
    Card,
    NextFiveDays,
    ForecastDetails,
    MainForecast
  },
  computed: {
    ...mapGetters('weather', [
      'GET_WEATHER_FORECAST',
      'GET_WEATHER_LOCATIONS',
      'WEATHER_FORECAST_HISTORY'
    ]),
    temperature() {
      const temp = this.GET_WEATHER_FORECAST?.main?.temp
      return temp !== undefined ? Math.round(temp - 273.15) : 0
    },
    description() {
      return this.GET_WEATHER_FORECAST?.weather[0]?.description
    },
    icon() {
      return this.GET_WEATHER_FORECAST?.weather[0]?.icon
    },
    humidity() {
      return this.GET_WEATHER_FORECAST?.main?.humidity ?? 0
    },
    pressure() {
      return this.GET_WEATHER_FORECAST?.main?.pressure ?? 0
    },
    min_temperature() {
      const tempMin = this.GET_WEATHER_FORECAST?.main?.temp_min
      return tempMin !== undefined ? Math.round(tempMin - 273.15) : 0
    },
    max_temperature() {
      const tempMax = this.GET_WEATHER_FORECAST?.main?.temp_max
      return tempMax !== undefined ? Math.round(tempMax - 273.15) : 0
    },
    locations() {
      return this.GET_WEATHER_LOCATIONS
    },
    sunrise() {
      return this.GET_WEATHER_FORECAST?.sys?.sunrise ?? 0
    },
    sunset() {
      return this.GET_WEATHER_FORECAST?.sys?.sunset ?? 0
    },
    dailyForecast() {
      return this.WEATHER_FORECAST_HISTORY
    },


  },

  methods: {
    ...mapActions('weather', [
      'FETCH_WEATHER_FORECAST',
      'GET_WEATHER_FORECAST_THROUGH_COORDINATES',
      'FETCH_WEATHER_LOCATIONS',
      'GET_NEXT_DAYS_FORECAST'
    ]),
    setAutoComplete() {
      this.isAutoComplete = true
    },
    fetchWeather(location) {
      this.coordinates = {
        latitude: location.lat,
        longitude: location.lon
      }
      this.GET_NEXT_DAYS_FORECAST(this.coordinates)
      this.FETCH_WEATHER_FORECAST(location.name)
    },
    fetchWeatherLocation() {
      this.isAutoComplete = true
      this.loading = true
      this.FETCH_WEATHER_LOCATIONS(this.location)
      this.loading = false
    },
    getWeatherForecastThroughCoordinate() {
      this.loading = true
      this.GET_WEATHER_FORECAST_THROUGH_COORDINATES(this.coordinates)
      this.loading = false
    },

    getNextSevenDaysForecast() {
      this.loading = true
      this.GET_NEXT_DAYS_FORECAST(this.coordinates)
      this.loading = false
    },
    toggleExtraInfo() {
      this.showExtraInfo = !this.showExtraInfo
    },



    getFirstHourDailyForecast() {
      return this.dxrailyForecast.list
    },

    async selectWeather(item) {
      this.location = `${item.name}, ${item.state}`
      this.fetchWeather(item)

      this.isAutoComplete = false
    },


  },

  created() {
    this.loading = true
    const data = navigator.geolocation.getCurrentPosition(async (position) => {
      this.coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.getWeatherForecastThroughCoordinate(position.coords.latitude, position.coords.longitude)
      this.getNextSevenDaysForecast(position.coords.latitude, position.coords.longitude)
      this.loading = false
    })
  }
}
</script>

<template>
  <div class="min-h-screen">
    <div v-if="loading" class="flex h-screen justify-center items-center">
      <p class="text-center mt-8 italic text-white">Loading...</p>
    </div>

    <section v-else class="md:px-8 px-2 md:mx-8 mx-2 pt-4">
      <div class="flex justify-center px-3">
        <div class="">
          <SearchInput v-model="location" placeholder="Enter location e.g Lagos, London, Texas..." @input="fetchWeatherLocation" />
          <!-- Auto Suggestion -->
          <div v-if="isAutoComplete" class="bg-white border w-[400px] mt-2 absolute rounded-md z-10 "
            :class="(location && location?.length) < 1 && 'hidden'">
            <ul v-for="item in locations" class="mx-2 p-1">
              <li @click="selectWeather(item)" class="hover:bg-slate-200 hover:cursor-pointer mb-1">
                {{ item.name }}, {{ item.state }}
              </li>
            </ul>
          </div>
          <!--  -->
        </div>
      </div>

      <div class="flex flex-col justify-center items-center my-4">
        <div class="rounded-md p-4 md:w-[900px] w-full">
          <NextFiveDays :weatherForecastHistory="WEATHER_FORECAST_HISTORY" />
          <div class="grid md:grid-cols-2 grid-cols-1 gap-3 mt-12">
            <MainForecast :icon="icon" :temperature="temperature" :description="description"
              :locationName="GET_WEATHER_FORECAST?.name" :dateTime="GET_WEATHER_FORECAST?.dt"
              :windSpeed="GET_WEATHER_FORECAST?.wind?.speed ?? 0" />
            <ForecastDetails :sunrise="sunrise" :sunset="sunset" :temperature="temperature" :humidity="humidity"
              :pressure="pressure" :minTemperature="min_temperature" :maxTemperature="max_temperature" />
          </div>
        </div>
      </div>
    </section>
  </div>

</template>
