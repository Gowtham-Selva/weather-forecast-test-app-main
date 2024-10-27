<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <div v-if="weatherInfo">
      <p>Temperature: {{ weatherInfo.current_weather.temperature }} °C</p>
      <p>Condition: {{ weatherInfo.current_weather.windspeed }}</p>
    </div>    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
