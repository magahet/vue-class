<template>
  <v-card class="mx-auto" max-width="400" v-if="(weatherData || {}).current">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ weatherData.location.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ weatherData.location.localtime | dateString }} - {{
              weatherData.current.condition.text
          }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="text-h2" cols="6">
          {{ weatherData.current.temp_f }}&deg;F
        </v-col>
        <v-col cols="6">
          <v-img :src="weatherData.current.condition.icon"
            :alt="weatherData.current.condition.text" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ weatherData.current.wind_mph }} mi/h {{
          weatherData.current.wind_dir
      }}</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ weatherData.current.cloud }}%
      </v-list-item-subtitle>
    </v-list-item>

    <v-list class="transparent">
      <v-list-item v-for="item in weatherData.forecast.forecastday"
        :key="item.date">
        <v-list-item-title>{{ item.date | dayOfWeek }}</v-list-item-title>

        <v-list-item-icon>
          <v-img :src="item.day.condition.icon"></v-img>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.day.avgtemp_f }}&deg;F
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: ['weatherData'],
  filters: {
    dateString(datetime) {
      return moment(datetime).format('dddd, MMMM Do')
    },
    dayOfWeek(datetime) {
      return moment(datetime).format('dddd')
    }
  }
}
</script>