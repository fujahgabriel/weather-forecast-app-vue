<template>
  <Card>
    <img :src="iconUrl" alt="Weather Icon" />
    <p class="md:text-[70px] text-2xl font-extralight">{{ temperature }}°C</p>

    <p class="text-lg mt-7">{{ locationName }}</p>
    <div class="mt-2 mb-5">
      <p>{{ formattedDate }}</p>
    </div>
    <hr />
    <p class="capitalize mt-4">{{ description }}</p>
    <p>Wind Speed: {{ windSpeed }} KM</p>
  </Card>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'MainForecast',
  props: {
    icon: {
      required: true
    },
    temperature: {
      required: true
    },
    description: {
      required: true
    },
    locationName: {
      required: true
    },
    dateTime: {
      required: true
    },
    windSpeed: {
      required: true
    }
  },
  components: {
    Card
  },
  computed: {
    iconUrl() {
      return `https://openweathermap.org/img/wn/${this.icon}@4x.png`
    },
    formattedDate() {
      return this.convertDateToTime(this.dateTime)
    }
  },
  methods: {
    convertDateToTime(timestamp) {
      const date = new Date(timestamp * 1000) // Convert seconds to milliseconds
      const hours = date.getUTCHours().toString().padStart(2, '0')
      const minutes = date.getUTCMinutes().toString().padStart(2, '0')
      const formattedTime = `${hours}:${minutes} UTC`
      return formattedTime
    }
  }
}
</script>

<style scoped>
/* Add any additional scoped styles if necessary */
</style>
