<template>
  <div id="body">


    <div  id="feed">
      <feed-container v-bind:cities=cities v-model=currentIndex></feed-container>
    </div>

    <div id="map">
    <map-container v-bind:cities=cities v-bind:currentIndex=currentIndex></map-container>
    </div>

    <floating-menu v-if="!displayMenu" v-bind:cities=cities v-bind:currentIndex=currentIndex id="menu"></floating-menu>
    
    <!-- <div v-if="false" id="landing-page">

      <h1>NICARAGUA</h1>
      <h3>Start by start scrolling or choose a city to visit</h3>

            <ul  v-scroll-spy-active v-scroll-spy-link>
      <li :id="city.name" class="title" v-for="city in cities" v-bind:data="city"
           v-bind:key="city.name">
        <a >
            <h2>{{city.name}}</h2>
        </a>
      </li>
 </ul>
    </div> -->
    
  </div>
</template>

<script>
import Feed from "./Feed";
import Map from "./Map";
import Menu from "./Menu";

export default {
  name: "home",
  components: {
    "feed-container": Feed,
    "map-container": Map,
    "floating-menu": Menu
  },
  computed: {
    displayMenu: function() {
      return this.currentIndex == 0;
    }
  },
  data: function() {
    return {
      cities: {
        value: [],
        type: Array
      },
      currentIndex: 0
    };
  },
  created: function() {
    this.cities = require("../../static/data.json").cities;
    // let url ='/static/data.json';
    // fetch(url).then(stream =>{
    // stream.json().then(data => {
    //     this.cities = data.cities;
    //   })
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body {
  height: 100%;
  margin: 100ppx;
  font-size: 20px;
}
header {
  background-color: black;
  color: white;
  letter-spacing: 10px;
  font-size: 20px;
  width: 100%;
}
#feed {
  width: 60%;
  height: auto;
  position: absolute;
}
#map {
  width: 40%;
  height: 100%;
  position: fixed;
  right: 0;
}
#landing-page {
  position: fixed;
  height: 100%;
  width: 100%;
  color: black;
  background-color: white;
  text-align: center;
  padding: 50px;
}

#menu {
  position: fixed;
  width: 60%;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100;
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
  letter-spacing: 2px;
}

h2 {
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-weight: 100;
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
  #landing-page {
    padding: 0;
    padding-top: 40px;
  }

  ul {
    padding: 0;
  }
}
</style>
