import axios from 'axios'
const WEATHER_ENDPOINT_URL = 'https://api.openweathermap.org/data/'
const initialState = () => {
  return {
    weather: {
      location: '',
      longitude: 0,
      latitude: 0,
      locations: [],
      currentWeather: null,
      forecast: [],
      history: []
    }
  }
}

const state = () => initialState()

const getters = {
  WEATHER_FORECAST_HISTORY: (state: any) => state.weather.history,
  GET_WEATHER_FORECAST: (state: any) => state.weather.currentWeather,
  GET_WEATHER_LOCATIONS: (state: any) => state.weather.locations
}
const mutations = {
  SET_LOCATION(state: any, location: string) {
    state.weather.location = location
  },
  SET_CURRENT_WEATHER_FORECAST(state: any, currentWeather: any) {
    state.weather.currentWeather = currentWeather
  },
  SET_NEXT_FORECAST(state: any, currentWeather: any) {
    state.weather.history = currentWeather
  },
  SET_WEATHER_LOCATIONS(state: any, locations: any) {
    state.weather.locations = locations
  },
  SET_WEATHER_HISTORY_FORECAST(state: any, history: any) {
    state.weather.history = history
  }
}
const actions = {
  async FETCH_WEATHER_FORECAST({ commit, state }: any, location: string) {
    try {
      const weatherRes = await axios.get(
        `${WEATHER_ENDPOINT_URL}2.5/weather?q=${location}&appid=${process.env.WEATHER_FORECAST_API_KEY}`
      )
     commit('SET_CURRENT_WEATHER_FORECAST', weatherRes.data)
    } catch (err) {
      console.log(err)
    }
  },
  async FETCH_WEATHER_LOCATIONS({commit, state}: any, location: string) {
    try {
        if(location.length > 0) {
          setTimeout(async () => {
            const response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${10}&appid=${process.env.WEATHER_FORECAST_API_KEY}`
              )
              commit('SET_WEATHER_LOCATIONS', response.data)

          }, 1000)
        }
        else {
            commit('SET_WEATHER_LOCATIONS', [])
        }


    } catch (err) {
      console.log(err, 'err')
  }
},
  async GET_WEATHER_FORECAST_THROUGH_COORDINATES({ commit }: any, coordinates: any) {
    try {
      const response = await axios.get(
        `${WEATHER_ENDPOINT_URL}2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.WEATHER_FORECAST_API_KEY}`
      )
      if(response.data) {
        const res = await axios.get(
            `${WEATHER_ENDPOINT_URL}2.5/forecast?q=${response?.data.name}&appid=${process.env.WEATHER_FORECAST_API_KEY}`
    )
      }
      commit('SET_CURRENT_WEATHER_FORECAST', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async GET_NEXT_DAYS_FORECAST({ commit }: any, coordinates: any) {
    try {
      const result = await axios.get(
        `${WEATHER_ENDPOINT_URL}2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.WEATHER_FORECAST_API_KEY}`
      )
      commit('SET_WEATHER_HISTORY_FORECAST', result.data)
    } catch (err) {
      console.log(err)
    }
  },
}

export default {
  name: 'weather',
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
