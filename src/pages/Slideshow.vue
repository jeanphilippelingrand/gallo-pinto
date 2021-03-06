 <template>
  <div id="slideshow-container">
    <div id="slideshow-button-bar">
       <transition name="fade" v-bind:key="currentIndex">
         <span id="slideshow-city-title">{{currentImage.city}}, {{currentImage.country}}</span>
      </transition>
      <button  v-on:click="handleCloseBtnClicked()" id="close_btn"/>
    </div>
    <div id="slideshow-caroussel-container">
    <carousel :perPage="1" :paginationSize="5" :navigateTo="currentIndex" :paginationEnabled="false">
    <slide  v-for="image in images" v-bind:key="image.src">
        <img class="slideshow-image" :src=image.src>
    </slide>
  </carousel>
    </div>
  <button v-if="currentIndex>0" v-on:click="currentIndex--" id="slideshow-left-arrow" class="slideshow-arrow"></button>
  <button  v-if="currentIndex<(images.length-1)" v-on:click="currentIndex++"  id="slideshow-right-arrow" class="slideshow-arrow"></button>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import ImageURLMixin from '../mixins/imagesURL'

export default {
  name: 'slideshow',
  mixins: [ImageURLMixin],
  components: {
    Carousel,
    Slide
  },
  data: function () {
    return {
      countries: require('../../static/navigation/data.json').countries,
      currentIndex: 0,
      images: {
        value: [],
        type: Array
      }
    }
  },
  computed: {
    currentImage: function () {
      return this.images[this.currentIndex]
    }
  },
  created: function () {
    this.images = []
    for (let countryName in this.countries) {
      let country = this.countries[countryName]
      country.name = countryName
      for (let iCity = 0; iCity < country.cities.length; iCity++) {
        let city = country.cities[iCity]
        for (
          let iPicture = 0;
          iPicture < city.pictures.length;
          iPicture++
        ) {
          this.images.push(
            this.getImagesMap(
              country,
              city,
              city.pictures[iPicture],
              iPicture
            )
          )
        }
      }
    }
    this.setupKeyboardListener()
  },
  methods: {
    getImagesMap: function (country, city, picture, index) {
      let src = this.getImageURL(picture.url)

      return {country: country.name, city: city.name, picture, src, id: index}
    },
    setupKeyboardListener: function () {
      let vm = this
      window.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            vm.currentIndex && vm.currentIndex--
            break
          case 39:
            vm.currentIndex < vm.images.length && vm.currentIndex++
            break
        }
      })
    },
    handleCloseBtnClicked: function () {
      this.$router.go(-1)
    }
  },
  mounted: function () {
    const {city, country, id} = this.$route.params
    this.currentIndex = this.images.findIndex(image => {
      return image.city === city && image.country === country && image.id === Number(id)
    })
  }
}
</script>

<style>
#slideshow-container {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #e4ddb60a;
}

.slideshow-image {
  position: relative;
  display: inline-block;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
}

#slideshow-button-bar {
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 2%;
  position: relative;
  text-align: left;
  height: 20%;
}

#close_btn {
  float: right;
  margin-top: 15px;
  background-image: url("../assets/icon_close.png");
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  opacity: 0.2;
}
#close_btn:hover {
  opacity: 1;
}
#slideshow-city-title {
  max-width: 80%;
  font-size: 35px;
  text-align: left;
  font-weight: 100;
  color: #42905f;
  letter-spacing: 4px;
  display: inline-block;
}

.slideshow-arrow {
  position: fixed;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  background-image: url("../assets/icon_left_arrow.svg");
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  opacity: 0.1;
}
#slideshow-left-arrow {
  left: 0;
}
#slideshow-right-arrow {
  right: 0;
  transform: rotate(180deg);
}

.slideshow-arrow:hover {
  opacity: 0.3;
}

.VueCarousel-slide{
  height: 100%;
}

#slideshow-caroussel-container {
  padding-bottom: 10px;
  height: 80%;
}

.VueCarousel, .VueCarousel-wrapper, .VueCarousel-inner {
  height: 100% !important;
}
@media only screen and (max-width: 600px), screen and (max-height: 600px) {
  #slideshow-city-title {
    font-size: 10px;
  }

  .slideshow-arrow {
    display: none;
  }
}
</style>
