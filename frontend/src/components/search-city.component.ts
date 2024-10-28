import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { ILocation } from '@/store';
@Options({
  props: {
  },
  methods: {
    ...mapActions(["updateSelectedPlace"])
  },
  computed: { 
    ...mapState(["selectedPlace"])
  }
})
export default class SearchCity extends Vue {

  selectedPlace!: ILocation[]
  updateSelectedPlace!: (place: ILocation) => Promise<void>

  placeChanged(place: any) {
    const newPlace: ILocation = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.updateSelectedPlace(newPlace);
  }

  handleMapClick(place: any) {
    const newPlace: ILocation = {
      lat: place.latLng?.lat(),
      lng: place.latLng?.lng(),
    };
    this.updateSelectedPlace(newPlace);
  }

  getCurrentLocation(position: any) {
    let lat=position.coords.latitude;
    let lng=position.coords.longitude;
    this.updateSelectedPlace({lat,lng});
  }

  mounted() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCurrentLocation);
    }
  }
}