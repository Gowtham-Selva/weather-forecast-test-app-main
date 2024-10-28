import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import { ILocation } from '@/store';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { mapMutations, mapState } from 'vuex';

@Options({
  props: {
  },
  methods: {
    ...mapMutations(["setLoading"])
  },
  computed: { 
    ...mapState(["selectedPlace", "loading"])
  },
  watch: {
    selectedPlace(place: ILocation) {
      this.fetchWeatherForecast(place.lat, place.lng);
    }
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  loading!: boolean;
  selectedPlace!: ILocation[]
  setLoading!: (payload: boolean) => Promise<void>
  errorMessage: string = '';
  weatherInfo = null as ForecastModel | null;

  async fetchWeatherForecast(lat: number, lng: number) {
    try {
      this.errorMessage = '';
      this.setLoading(true);
      this.weatherInfo = await this.weatherService.getWeatherForecast(lat, lng);
    } catch (error) {
      this.errorMessage = 'Failed to load weather data. Please try again later.';
      this.weatherInfo = null;
    } finally {
      this.setLoading(false);
    }
  }
   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    // this.weatherService.getWeatherForecast(52.52, 13.419998).then((response) => {
    //   this.weatherInfo =  response
    // });
  }

}


