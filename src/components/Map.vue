<template>

  <div id="map-container">

  <gmap-map
    :center="animatedCity.center"
    :zoom="zoom"
    style="width: 100%; height: 100vh"
  >
      <!-- icon="/static/pin.png" -->
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="handleMarkerClick(m.city,index)"
    ></gmap-marker>
  </gmap-map>

  </div>

</template>
<style scoped>
#map-container {
  padding-right: 2px;
  padding-left: 2px;
  padding-top: 2px;
}
</style>

<script>
export default {
  name: 'map-container',
  props: {
    country: {
      type: Object
    },
    currentIndex: {
      type: Number,
      value: 0
    }
  },
  data () {
    return {
      zoom: this.country.cities ? this.country.cities[0].zoom : 7,
      animatedCity: {
        center: {
          lat: {
            type: Number
          },
          lng: {
            type: Number
          }
        }
      }
    }
  },
  methods: {
    handleMarkerClick: function (city, index) {
      this.$emit('cityClicked', index)
    }
  },
  created: function() {
    this.animatedCity.center.lat = this.country.lat;
    this.animatedCity.center.lng = this.country.lng;
    this.zoom = this.country.zoom;
  },
  computed: {
    currentCity: function () {
      return this.country.cities ? this.country.cities[this.currentIndex] : {}
    },
    markers: function () {
      return this.country.cities
        ? this.country.cities.map(city => {
          return {
            city: city,
            position: { lat: city.lat, lng: city.lng }
          }
        })
        : []
    }
  },
  watch: {
    currentCity: function (newCity, oldCity) {
      if (!TWEEN) {
        return (this.animatedCity = {
          center: {
            lat: newCity.lat,
            lng: oldCity.lng
          }
        })
      }
      var vm = this

      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ lat: oldCity.lat, lng: oldCity.lng })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ lat: newCity.lat, lng: newCity.lng }, 2000)
        .onUpdate(function () {
          vm.animatedCity = {
            center: {
              lat: this.lat,
              lng: this.lng
            }
          }
        })
        .start()
        .onComplete(function () {
          vm.zoom = newCity.zoom
        })

      animate()
    }
  }
  // mounted: function () {
  //   let vm = this
  //   setTimeout(function () {
  //     vm.currentIndex = 3
  //   }, 500)
  // }
}
</script>
