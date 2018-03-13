<template>
  <div>

      <ul style="display:none;" v-scroll-spy-active>
      <li :id="city.name" class="title" v-for="city in cities" v-bind:data="city"
           v-bind:key="city.name">
        <a >
            <h2>{{city.name}}</h2>
        </a>
      </li>
 </ul>
    <ul v-scroll-spy:data="{ data: 'currentIndex' }">
      <li :id="city.name+'?lat='+city.lat+'&lng='+city.lng" class="pic" v-for="city in cities" v-bind:data="city"
           v-bind:key="city.name">
                       <h1>{{city.name}}</h1>
                                  <p class="city-title">{{city.title && (city.title.en || city.title.fr)}}

      <div class="pic" v-for="pic in city.pictures" v-bind:data="pic"
           v-bind:key="pic.imgURL">
      <pic :pic="pic">
      </pic>
      </div>
      </li>
  
    </ul>

<div id="end">
  <h2>C'est ici que le voyage se termine!</h2>
  <div id="goBackToStartBtn">
    <a href="`#Leon`">
        <h3>Repartir au debut</h3>
    </a>
  </div>
</div>
  </div>


</template>

<script>
import Picture from "./Picture";

export default {
  name: "feed",
  components: {
    pic: Picture
  },
  props: {
    cities: {
      type: Array
    }
  },
  data: function() {
    return {
      currentIndex: {
        type: Number
      }
    };
  },
  watch: {
    currentIndex: function(newVal, oldVal) {
      // watch it
      this.$emit("input", newVal);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
h1 {
  /* margin-top:30px; */
  padding-top: 50px;
  padding-bottom: 30px;
  letter-spacing: 14px;
  font-weight: 100;
  font-size: 106px;
}
h2 {
  padding: 50px;
  letter-spacing: 14px;
  font-weight: 100;
  font-size: 50px;
}

#end {
  margin-bottom: 100px;
}

#goBackToStartBtn {
  width: 100%;
  text-align: center;
}

.city-title {
  padding-right: 50px;
  font-weight: 200;
  padding-left: 50%;
  text-align: justify;
  letter-spacing: 1px;
}
@media only screen and (max-width: 700px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    padding: 5px;
    font-size: 30px;
  }
  .city-title {
    padding-left: 0;
  }
}
</style>
