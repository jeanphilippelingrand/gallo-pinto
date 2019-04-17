 <template>

  <div>
<!--      <div class="bg" v-bind:class="{ initStyle: this.state === -1, bg0: this.state === 0, bg1: this.state === 1,bg2: this.state === 2, bg3: this.state === 3 }">-->
<!--      </div>-->
<div class="home-filter-layer" ></div>
  <div id="content">
    <header>
          <h1>Gallo Pinto</h1>
          <span id="conversion-text">Gallo Pinto is a typical meal from Central America, made from simple things it's a light meal but enough to let you enjoy this great region. I like traveling with this is mind: enough but not too much.</span>
          <span id="conversion-text">Discover some of the regions I've went through my travel pictures.</span>
          <i>Start your journey by selecting the region you'd liked to visit through the map below.</i>
    </header>

      <div class="map-wrapper">
        <div class="map">
          <div class="map__inner">
            <img src="static/map.png" class="map__img" alt="">
            <a id="hotspot1" class="map__hotspot" href="travel/nicaragua">
              <div class="popup popup-left">
                <div class="popup__inner">
                  <span class="popup__title">Nicaragua</span>
                </div>
              </div>
            </a>

              <a id="hotspot2" class="map__hotspot" href="travel/costa-rica">
                <div class="popup popup-left">
                  <div class="popup__inner">
                    <span class="popup__title">Costa Rica</span>
                  </div>
                </div>
            </a>

            <a id="hotspot3" class="map__hotspot" href="travel/las-vegas">
              <div class="popup popup-right">
                <div class="popup__inner">
                  <span class="popup__title">Las Vegas</span>
                </div>
              </div>
            </a>

            <a id="hotspot4" class="map__hotspot" href="travel/california">
              <div class="popup popup-right">
                <div class="popup__inner">
                  <span class="popup__title">California</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
  </div>

    <b-navbar class="navigation-bottom-navbar" fixed="bottom" v-bind:class="{ 'navigation-top-navbar-displayed': menuIsBig }">

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

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      left: '52%',
      top: '23%',
      state: -1
    }
  },
  methods: {
    changeState: function () {
      if (this.state === 3) {
        this.state = 0
      } else {
        this.state++
      }
    }
  },
  mounted: function () {
    let vm = this

    setTimeout(function () {
      vm.state = 0
    }, 500)
    setInterval(this.changeState, 10000)
  },
  created: function () {
    window.addEventListener('wheel', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('wheel', this.handleScroll)
  }
}
</script>

<style scoped>

  .map-wrapper {
    margin-top: 50px;
  }

  .map {
    position: relative;
    max-width: 800px;
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  .map__inner {
    position: relative;
    height: 0;
    padding-bottom: 52.91666666666667%;
  }

  #hotspot1 {
    left: 20.975%;
    top: 56.85%;
    z-index: 1000;
  }

  #hotspot2 {
    left: 22.975%;
    top: 58.85%;
    z-index: 1001;
  }

  #hotspot3 {
    left: 15.975%;
    top: 44.85%;
  }

  #hotspot4 {
    left: 12.975%;
    top: 44.85%;
  }

  .map__img {
    display: block;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .map__hotspot {
    display: block;
    background: #ffd200;
    border: 2px solid #fff;
    cursor: pointer;
    -webkit-transition: background .1s linear;
    transition: background .1s linear;
    text-decoration: none;
    color: #011852;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .map__hotspot:hover {
    background: #e92174;
  }

  .map__hotspot:hover .popup {
    opacity: 1;
    width: auto;
    height: auto;
  }

  .map__hotspot:hover .popup {
    display: inline-block;
  }

  .popup {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out;
    position: absolute;
  }
  .popup-right {
    left: -20px;
    bottom: 15px;
  }
  .popup-left {
    right: -20px;
    bottom: 15px;
  }
  .popup__inner {
    display: inline-block;
    white-space: nowrap;
    background: white;
    padding: 0px 10px;
    border: 9px solid #fff;
    border-radius: 10px;
  }

  .popup__title {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 4px;
  }

#content {
  position: relative;
  height: 100%;
}

h1 {
  letter-spacing: 8px;
  font-size: 40px;
  font-weight: 60;
  color: white;
  transition: color 5s ease-in-out;
}

h2 {
  color: #dfdfec;
  font-weight: 100;
  font-size: 50px;
  letter-spacing: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
}

h3 {
  color: black;
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 1px;
}

header {
  padding: 50px;
}
#conversion-text {
  font-style: italic;
  display: block;
  width: 70%;
  font-size: 12px;
  font-weight: 100;
  color: white;
  letter-spacing: 0.5px;
  text-align: justify;
}

.home-filter-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(#054c7de0, #d41cdf29, #e9217459);
}

@media only screen and (max-width: 600px), screen and (max-height: 600px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    padding: 10px;
  }
  p {
    font-weight: 60;
    font-size: 15px;
  }
  #conversion-text {
    width: 100%;
  }
}
</style>
