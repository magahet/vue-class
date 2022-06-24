<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Sunshine</v-toolbar-title>
      </div>

    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <TodaysWeather :weather-data="weatherData" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <NewLocationForm @change-location="getWeatherData" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TodaysWeather from './components/TodaysWeather.vue';
import NewLocationForm from './components/NewLocationForm.vue';
import axios from 'axios'
// Local instance of weather data for testing
// import weatherData from './json/weatherData.json'

export default {
  name: 'App',

  components: {
    TodaysWeather,
    NewLocationForm
  },

  data: () => ({
    weatherData: null
  }),

  mounted() {
    if (!process.env.VUE_APP_WEATHER_API_KEY) {
      console.log('Weather API key is not available')
      return
    }
    this.getMyLocation()
  },

  methods: {
    // Call to geolocation service to get my current location
    async getMyLocation() {
      let response = await axios.get('http://ip-api.com/json/')
      if (response.status === 200) {
        this.getWeatherData(response.data.zip)
      }
    },
    // Call to weather api service to get forecast
    async getWeatherData(query) {
      let response = await axios.get(
        'http://api.weatherapi.com/v1/forecast.json',
        {
          params: {
            key: process.env.VUE_APP_WEATHER_API_KEY, // Don't commit keys to git!
            days: 10,
            q: query
          }
        }
      )

      console.log([query, response.status])

      if (response.status === 200) {
        this.weatherData = response.data
      }
    }
  }

};
</script>
