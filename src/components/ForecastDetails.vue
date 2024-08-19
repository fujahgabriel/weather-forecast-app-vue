<template>
  <div class="grid md:grid-cols-2 gap-2">
    <div
      v-for="detail in details"
      :key="detail.title"
      class=" bg-white shadow-md border rounded-md p-3 h-[180px] flex flex-col justify-between"
    >
      <div class="mt-1">
        <div v-if="detail.icon" class="flex gap-2 items-center">
          <img :src="detail.icon" :width="detail.iconWidth || 20" alt="this is a weather icon" />
          <p class="text-xs">{{ detail.title }}</p>
        </div>
        <p v-else class="text-xs">{{ detail.title }}</p>
        <p class="text-2xl">{{ detail.value }}</p>
      </div>
      <p v-if="detail.description" class="text-xs text-gray-400">
        {{ detail.description }}
      </p>
    </div>
  </div>
</template>

<script>
import sunriseIcon from '../assets/sunrise.png'
import humidityIcon from '../assets/humidity.jpeg'
import pressureIcon from '../assets/pressure.png'
export default {
  name: 'ForecastDetails',
  props: {
    sunrise: {
      required: true
    },
    sunset: {
      required: true
    },
    temperature: {
      required: true
    },
    humidity: {
      required: true
    },
    pressure: {
      required: true
    },
    minTemperature: {
      required: true
    },
    maxTemperature: {
      required: true
    }
  },
  computed: {
    details() {
      return [
        {
          title: 'SUNRISE',
          icon: sunriseIcon,
          value: this.convertDateToTime(this.sunrise)
        },
        {
          title: 'SUNSET',
          icon: sunriseIcon,
          value: this.convertDateToTime(this.sunset)
        },
        {
          title: 'HUMIDITY',
          icon: humidityIcon,
          value: `${this.humidity}%`,
          description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
        },
        {
          title: 'PRESSURE',
          icon: pressureIcon,
          value: `${this.pressure} hPa`
        },
        {
          title: 'MIN TEMPERATURE',
          value: `${this.minTemperature}°`,
          description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
        },
        {
          title: 'MAX TEMPERATURE',
          value: `${this.maxTemperature}°`,
          description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
        }
      ]
    }
  },
  methods: {
    convertDateToTime(dt) {
      // Your logic to convert date to time
      return new Date(dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    },
    calculateDewPoint(temperatureCelsius, humidity) {
      // Constants for the Magnus formula
      const a = 17.27
      const b = 237.7
      // Calculate the alpha value
      const alpha = (a * temperatureCelsius) / (b + temperatureCelsius) + Math.log(humidity / 100)
      // Calculate the dew point using the Magnus formula
      const dewPoint = (b * alpha) / (a - alpha)
      return dewPoint.toFixed(2)
    },
  }
}
</script>

<style scoped>
/* Add any additional scoped styles if necessary */
</style>
