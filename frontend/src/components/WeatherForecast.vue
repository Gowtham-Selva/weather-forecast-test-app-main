<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <div v-if="loading">Loading...</div>
    <div v-else-if="!loading && weatherInfo">
      <p>Temperature: {{ weatherInfo.current_weather.temperature }} °C</p>
      <p>Wind Speed: {{ weatherInfo.current_weather.windspeed }}</p>
    </div>    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
