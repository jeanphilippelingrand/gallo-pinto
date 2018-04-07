 <template>

  <div id="slideshow-container">
    <div id="slideshow-button-bar">
       <transition name="fade" v-bind:key="currentIndex">
          <h1 id="slideshow-city-title">{{currentCityName}}</h1>
      </transition>
      <button  v-on:click="handleCloseBtnClicked()" id="close_btn"/>
    </div>
    <carousel :perPage="1" :paginationSize="5" :navigateTo="currentIndex" :paginationEnabled="false">
    <slide  v-for="image in images" v-bind:key="image.src">
        <img class="slideshow-image" :src=image.src>
    </slide>
  </carousel>
  <button v-if="currentIndex>0" v-on:click="currentIndex--" id="slideshow-left-arrow" class="slideshow-arrow"></button>
  <button  v-if="currentIndex<(images.length-1)" v-on:click="currentIndex++"  id="slideshow-right-arrow" class="slideshow-arrow"></button>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ImageURLMixin from "../mixins/imagesURL";

export default {
  name: "slideshow",
  mixins: [ImageURLMixin],
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      cities: require("../../static/data.json").cities,
      currentIndex: 0,
      images: {
        value: [],
        type: Array
      }
    };
  },
  computed: {
    currentCityName: function() {
      return this.images[this.currentIndex].city.name;
    }
  },
  created: function() {
    this.images = [];
    for (let ctIndex = 0; ctIndex < this.cities.length; ctIndex++) {
      for (
        let picIndex = 0;
        picIndex < this.cities[ctIndex].pictures.length;
        picIndex++
      ) {
        this.images.push(
          this.getImagesMap(
            this.cities[ctIndex],
            this.cities[ctIndex].pictures[picIndex]
          )
        );
      }
    }
    this.setupKeyboardListener();
  },
  methods: {
    getHD: function(image) {
      window.open(this.getImageURL(image.picture.url, true), "_blank");
    },
    getImagesMap: function(city, picture) {
      let src = this.getImageURL(picture.url);

      return { city: city, picture: picture, src: src };
    },
    setupKeyboardListener: function() {
      let vm = this;
      window.addEventListener("keydown", function(e) {
        switch (e.keyCode) {
          case 37:
            vm.currentIndex && vm.currentIndex--;
            break;
          case 39:
            vm.currentIndex < vm.images.length && vm.currentIndex++;
            break;
        }
      });
    },
    handleCloseBtnClicked: function() {
      this.$router.go(-1);
    }
  },
  mounted: function() {
    const city = this.$route.query.city || "leon";
    const photoId = this.$route.query.photoId || 0;

    let i = 0;

    for (let ctIndex = 0; ctIndex < this.cities.length; ctIndex++) {
      if (this.cities[ctIndex].name.toUpperCase() === city.toUpperCase()) {
        i += Number(photoId);
        this.currentIndex = Number(i);
        return;
      }
      i += this.cities[ctIndex].pictures.length;
    }
  }
};
</script>

<style>
#slideshow-container {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #e4ddb60a;
}
.VueCarousel {
  height: 85%;
  width: 100%;
}
.VueCarousel-wrapper {
  height: 100%;
}
.VueCarousel-inner {
  height: 100%;
}
.VueCarousel-slide {
  height: 100%;
}
.slideshow-image {
  position: relative;
  display: inline-block;
  text-align: center;
  max-width: 90%;
  max-height: 100%;
}

#slideshow-button-bar {
  position: relative;
  text-align: left;
  height: 10%;
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
  margin-right: 10%;
  opacity: 0.2;
}
#close_btn:hover {
  opacity: 1;
}
#slideshow-city-title {
  margin-left: 10%;
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
  width: 50px;
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
@media only screen and (max-width: 600px) {
  .slideshow-arrow {
    display: none;
  }
}
</style>
