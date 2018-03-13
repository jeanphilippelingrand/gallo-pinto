<template >
  <div  id="container" v-on:mouseleave="mouseLeave" v-on:mouseover="mouseOver">
    <h3 v-if="!active">Menu</h3>

     <ul v-if="active" v-scroll-spy-link>  
<li :id="city.name" class="title" v-for="(city, index) in cities" v-bind:data="city"
    v-bind:key="city.name" v-bind:class="{ active: index == currentIndex }">
  <a :href="`#${city.name}`">
      <h3>{{city.name}}</h3>
  </a>
</li>
</ul>
  </div>
</template>

<script>
import Picture from "./Picture";

export default {
  name: "floatingMenu",

  props: {
    currentIndex: {
      type: Number
    },
    cities: {
      type: Array
    }
  },
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    mouseOver: function() {
      this.active = true;
    },
    mouseLeave: function() {
      this.active = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#containter {
  text-align: center;
}
ul {
  list-style: none;
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

.active h3 {
  color: black;
  font-weight: 400;
}

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    padding: 5px;
    font-size: 30px;
  }
}
</style>
