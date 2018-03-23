 <template>
  <div>
      <div class="bg" v-bind:class="{ bg: this.state === 0, bg1: this.state === 1,bg2: this.state === 2, bg3: this.state === 3 }">
      </div>

  <div id="content">
    
      <h1 v-bind:class="{ h1: this.state === 1  }">Gallo Pinto</h1>
      <div id="conversion-text">Gallo Pinto is a way to visit the beautiful country of Nicaragua through some travel pictures. Your travel will be starting like mine in Leon, then you will be visiting Managua, Granada and San Juan Del Sur. </div>
     
      <div id="cta">
        <router-link to="/navigation">    
          <h2>Start your journey</h2>
        </router-link>
      </div>

      <div id="cta-gallo-pinto">
        <router-link to="/gallo-pinto">    
          <h3>Know more about the gallo pinto meal</h3>
        </router-link>
      </div>

  </div>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      state: 1
    };
  },
  methods: {
    changeState: function() {
      if (this.state === 3) {
        this.state = 0;
      } else {
        this.state++;
      }
    }
  },
  mounted: function() {
    setInterval(this.changeState, 6000);
  }
};
</script>

<style scoped>
.bg {
  position: fixed;
  background-color: black;
  height: 100%;
  width: 100%;
  -webkit-transition: background-image 0.4s ease-in-out;
  transition: background-image 0.4s ease-in-out;
  -webkit-transition: transform 10s ease-in-out;
  transition: transform 10s ease-in-out;
  -webkit-transition: transform 10s ease-in-out;
  transition: transform 10s ease-in-out;

  transform: scale(1.2);
  padding: 50px;

  /* The image used */
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/salinas grandes/3.JPG");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#content {
  position: fixed;
  height: 100%;
}
h1 {
  font-size: 75px;
  font-weight: 60;
  color: white;
  -webkit-transition: color 5s ease-in-out;
  transition: color 5s ease-in-out;
}

h2 {
  color: #dfdfec;
  font-weight: 100;
  font-size: 50px;
  letter-spacing: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
}
h2:hover {
  color: #fdfdff;
}
h3 {
  color: black;
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 1px;
}
h3:hover {
  color: white;
}
a {
  text-decoration: none;
}

#conversion-text {
  width: 70%;
  margin-left: 30%;
  font-size: 20px;
  padding: 20px;
  padding-right: 5px;
  font-weight: 100;
  color: white;
  background-color: #00000014;
  letter-spacing: 0.5px;
  font-style: italic;
  text-align: justify;
}

#cta {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  bottom: 25%;
}
#cta a {
  text-decoration: none;
}

#cta-gallo-pinto {
  text-align: center;
  position: absolute;
  left: 20%;
  width: 60%;
  bottom: 5%;
}

.h1 {
  color: #b8dee2;
}

.bg1 {
  transform: scale(1.2);
  /* height: 120%; */
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/granada/6.JPG");
}

.bg2 {
  transform: scale(1);
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/san juan del sur/1.JPG");
}
.bg3 {
  transform: scale(1.2);
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/san juan del sur/6.JPG");
}

@media only screen and (max-width: 600px) {
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
}
</style>
