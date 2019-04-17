<template>
  <div id="navigation-container">
  <b-navbar class="navigation-top-navbar" fixed="top" v-bind:class="{ 'navigation-top-navbar-displayed': menuIsBig }">

            <b-nav-item>
        <router-link class="navigation-menu-home-btn" to="/">
           Gallo Pinto
        </router-link>
      </b-nav-item>
              <b-nav-item>
        <router-link class="navigation-menu-right-btn" to="/about">
           About Gallo Pinto
        </router-link>
      </b-nav-item>
        </b-navbar>

    <div id="feed">
      <feed-container v-bind:country=country v-model=currentIndex ref="feed-component"></feed-container>
    </div>

    <div id="map">
      <map-container v-bind:country=country v-bind:currentIndex=currentIndex v-on:cityClicked="handleCityClicked"></map-container>
    </div>

      <b-navbar fixed="bottom">

        <b-nav-item class="navigation-city-menu-city active">
          <b>{{country.name}}</b>
        </b-nav-item>
        <b-nav-item>

      <ul  v-scroll-spy-link >
      <li :id="city.name" v-for="(city, index) in country.cities" v-bind:data="city"
      v-bind:key="city.name" v-bind:class="{ active: index == currentIndex }">
      <a class="navigation-city-menu-city">
      <span v-if="index!=0">|</span>
      <span>{{city.name}}</span>
      </a>
      </li>
     </ul>
      </b-nav-item>

      <b-nav-item v-on:click="scrollTo(0)">
        <a class="navigation-city-menu-city">
        <span>Go to the top</span>
        <span> ↑</span>
        </a>
    </b-nav-item>
    </b-navbar>

  </div>
</template>

<script>
import Feed from '../components/Feed'
import Map from '../components/Map'
import Menu from '../components/Menu'

export default {
  name: 'navigation',
  components: {
    'feed-container': Feed,
    'map-container': Map,
    'floating-menu': Menu
  },
  data: function () {
    return {
      cityMenuVisible: false,
      currentIndex: -1,
      clickedCity: 0,
      scroll: {
        isGoingDown: false,
        minimumOffset: 50,
        lastCheck: 0,
        lastScrollYPosition: 0
      }
    }
  },
  computed: {
    country: function () {
      const name = this.$route.params.country
      const c = require('../../static/navigation/data.json').countries[name];
      c.name = name
      return c
    },
    menuIsBig: function () {
      if (this.lastScrollYPosition < 100) {
        return true
      }
      return !this.scroll.isGoingDown
    }
  },
  methods: {
    handleCityClicked: function (index) {
      this.scrollTo(index)
    },
    handleCityMenuTitleClicked: function () {
      this.cityMenuVisible = !this.cityMenuVisible
    },
    scrollTo: Function,
    saveScrollPosition: function (position, timeStamp, isGoingDown) {
      if (
        Math.abs(this.scroll.lastScrollYPosition - position) <
        this.scroll.minimumOffset
      ) {
        return
      }
      this.scroll.isGoingDown = this.scroll.lastScrollYPosition < position
      this.scroll.lastCheck = timeStamp
      this.scroll.lastScrollYPosition = position
    }
  },
  mounted: function () {
    this.scrollTo = this.$refs['feed-component'].$scrollTo

    const vm = this
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      'scroll',
      function (e) {
        if (window.scrollY < 100) {
          return vm.saveScrollPosition(window.scrollY, e.timeStamp)
        }

        vm.cityMenuVisible = false

        vm.saveScrollPosition(window.scrollY, e.timeStamp)
      },
      false
    )
  }
}
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
.nav-link ul {
  display: inline-block;
}
.navigation-city-menu-city {
  text-transform: uppercase;
  vertical-align: middle;
  font-size: 10px;
  font-weight: 100;
}
.navigation-city-menu-city span {
  padding-left: 5px;
  transition: font-size 0.1s;
}
.active .navigation-city-menu-city {
  font-weight: bold;
}
.navigation-city-menu-city:hover {
  text-decoration: underline !important;
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
