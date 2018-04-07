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
  name: "map-container",
  props: {
    cities: {
      type: Array,
      value: []
    },
    currentIndex: 0
  },
  data() {
    return {
      zoom: this.cities ? this.cities[0].zoom : 7,
      animatedCity: {
        center: {
          lat: 12.8649313, //this.cities[0].lat,
          lng: -87.2683805 //this.cities[0].lng
        }
      }
    };
  },
  methods: {
    handleMarkerClick: function(city, index) {
      this.$emit("cityClicked", index);
    }
  },
  computed: {
    currentCity: function() {
      return this.cities ? this.cities[this.currentIndex] : {};
    },
    markers: function() {
      return this.cities
        ? this.cities.map(city => {
            return {
              city: city,
              position: { lat: city.lat, lng: city.lng }
            };
          })
        : [];
    }
  },
  watch: {
    currentCity: function(newCity, oldCity) {
      if (!TWEEN) {
        return (this.animatedCity = {
          center: {
            lat: newCity.lat,
            lng: oldCity.lng
          }
        });
      }
      var vm = this;

      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween({ lat: oldCity.lat, lng: oldCity.lng })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ lat: newCity.lat, lng: newCity.lng }, 2000)
        .onUpdate(function() {
          vm.animatedCity = {
            center: {
              lat: this.lat,
              lng: this.lng
            }
          };
        })
        .start()
        .onComplete(function() {
          vm.zoom = newCity.zoom;
        });

      animate();
    }
  },
  mounted: function() {
    let vm = this;
    setTimeout(function() {
      vm.currentIndex = 3;
    }, 500);
  }
};
</script>

