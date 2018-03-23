<template>
  <div id="navigation-container">
 <b-navbar fixed="top">
    <b-navbar-brand tag="h3" class="mb-0">Gallo Pinto</b-navbar-brand>

      <!-- <b-nav-item>
        <router-link to="/slideshow/leon/leon0.JPG">    
            Slideshow mode
        </router-link>
      </b-nav-item> -->
      
        <b-nav-item>
        <router-link class="navigation-about-btn" to="/gallo-pinto">    
           About Gallo Pinto
        </router-link>
      </b-nav-item>

    <!-- <floating-menu v-if="!displayMenu" v-bind:cities=cities v-bind:currentIndex=currentIndex id="menu"></floating-menu> -->
  </b-navbar>

    <div id="feed">
      <feed-container v-bind:cities=cities v-model=currentIndex ref="feed-component"></feed-container>
    </div>

    <div id="map">
      <map-container v-bind:cities=cities v-bind:currentIndex=currentIndex v-on:cityClicked="handleCityClicked"></map-container>
    </div>
    
  </div>
</template>

<script>
import Feed from "../components/Feed";
import Map from "../components/Map";
import Menu from "../components/Menu";

export default {
  name: "navigation",
  components: {
    "feed-container": Feed,
    "map-container": Map,
    "floating-menu": Menu
  },
  data: function() {
    return {
      cities: {
        value: [],
        type: Array
      },
      currentIndex: 0,
      clickedCity: 0
    };
  },
  computed: {
    displayMenu: function() {
      return this.currentIndex == 0;
    }
  },
  methods: {
    handleCityClicked: function(index) {
      this.scrollTo(index);
    },
    scrollTo: Function
  },
  created: function() {
    this.cities = require("../../static/data.json").cities;
  },
  mounted: function() {
    this.scrollTo = this.$refs["feed-component"].$scrollTo;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #fdfafa;
}
#feed {
  width: 70%;
  height: auto;
  position: absolute;
}
#map {
  width: 30%;
  height: 100%;
  position: fixed;
  right: 0;
}

h1 {
  font-weight: 100;
  font-size: 70px;
  margin-bottom: 30px;
}

ul {
  list-style: none;
  font-size: 30px;
  padding: 0;
}

li {
  margin-bottom: 10px;
  display: inline;
}

h3 {
  padding: 4px;
  padding-left: 10px;
  font-size: 14px;
  color: grey;
  font-weight: 100;
}

h3 {
  font-weight: 100;
  letter-spacing: 8px;
}

h2 {
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-weight: 100;
}

.navbar {
  background-color: #fdfafa;
  padding: 0;
  padding-left: 5%;
  padding-right: 5%;
}
.navigation-about-btn {
  font-weight: 100;
  font-size: 12px;
}

@media only screen and (max-width: 600px) {
  #map {
    display: none;
  }
  #feed {
    width: 100%;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    padding: 10px;
  }

  ul {
    padding: 0;
  }
}
</style>
