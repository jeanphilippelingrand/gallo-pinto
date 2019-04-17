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
      type: Number
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
    },
    setMapCenter: function (region, animated, oldPosition) {
      if (!TWEEN || !animated) {
        this.zoom = region.zoom;
        return (this.animatedCity = {
          center: {
            lat: region.lat,
            lng: region.lng
          }
        })
      }

      var vm = this

      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ lat: oldPosition.lat, lng: oldPosition.lng })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ lat: region.lat, lng: region.lng }, 2000)
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
          vm.zoom = region.zoom
        })

      animate()
    }
  },
  created: function () {
    this.setMapCenter(this.country)
  },
  computed: {
    currentCity: function () {
      if (this.currentIndex > -1) {
       return this.country.cities[this.currentIndex]
      } else {
        return this.country
      }
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
      this.setMapCenter(newCity, true, oldCity)
    }
  }
}
</script>
