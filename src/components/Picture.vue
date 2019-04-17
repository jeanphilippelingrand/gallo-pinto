<template>
  <div class="img-container" v-bind:class="{ big: isBig }" scroll="no">
     <div class="picture-button-container" v-if="mouseOver">
      <button  v-on:click="handleCloseBtnClicked()" class="picture-fullscreen-btn"/>
    </div>

    <img v-bind:alt="pic.alt" v-lazy="imgURL" v-on:mouseover="mouseOver=true" v-on:mouseleave="mouseOver=false">

  <p class="photo-title">{{pic.title && (pic.title.en || pic.title.fr)}}</p>

  </div>
</template>

<script>
import ImageURLMixin from '../mixins/imagesURL'

export default {
  name: 'picture-container',
  mixins: [ImageURLMixin],
  props: {
    pic: {
      type: Object
    }
  },
  data () {
    return {
      isBig: false,
      effect: false,
      minimize: true,
      mouseOver: false
    }
  },
  computed: {
    imgURL: function () {
      return this.getImageURL(this.pic.url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  height: auto;
}
.img-container {
  position: relative;
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

.picture-button-container {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

.picture-fullscreen-btn {
  background-image: url("../assets/icon_fullscreen.png");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  opacity: 0.5;
}
</style>
