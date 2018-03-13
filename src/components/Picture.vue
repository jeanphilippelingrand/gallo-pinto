<template>
  <div id="img-container" v-bind:class="{ big: isBig }" scroll="no">
<img v-lazy="imgURL" v-on:click="handleImageClick()" >
  <p class="photo-title">{{pic.title && (pic.title.en || pic.title.fr)}}</p>

  </div>
</template>

<script>
export default {
  name: "picture-container",
  props: {
    pic: {
      type: Object
    }
  },
  data() {
    return {
      isBig: false,
      effect: false,
      minimize: true
    };
  },
  computed: {
    imgURL: function() {
      let url = "http://res.cloudinary.com/dzcoopyjp/image/upload";
      if (this.effect) {
        url += "/e_tilt_shift:20,q_75";
      }
      if (this.minimize) {
        url += "/c_scale,w_2048";
      }
      url += "/gallo%20pinto" + this.pic.url;
      return url;
      // return require('../assets/pictures'+this.pic.url);
    }
  },
  methods: {
    handleImageClick: function() {
      this.isBig = !this.isBig;
    },
    handleScroll: function(event) {
      this.isBig = false;
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  height: auto;
}
#img-container {
  margin-bottom: 20px;
  background-color: white;
}
.big {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.7);
  z-index: 1000;
}

.big img {
  /* set relative picture size */
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
  width: auto;
  height: auto;
  margin-top: 50vh;
  transform: translateY(-50%);
}

.photo-title {
  letter-spacing: 1px;
  text-align: center;
  font-size: 10px;
  font-weight: 100;
  padding: 5px;
}
</style>
