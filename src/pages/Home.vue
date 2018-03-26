 <template>
  <div>
      <div class="bg" v-bind:class="{ bg: this.state === 0, bg1: this.state === 1,bg2: this.state === 2, bg3: this.state === 3 }">
      </div>
<!-- v-bind:class="{ 'home-fl1': this.state === 0, 'home-fl2': this.state === 1,'home-fl3': this.state === 2, 'home-fl4': this.state === 3 }" -->
<div class="home-filter-layer" ></div>
  <div id="content">
    <header>
          <h1>Gallo Pinto</h1>
          <div id="conversion-text">Gallo Pinto is a way to visit the beautiful country of Nicaragua through some travel pictures. Your travel will be starting like mine in Leon, then you will be visiting Managua, Granada and San Juan Del Sur. </div>
    </header>
        
      <div id="cta">
        <router-link to="/navigation">    
          <h2>Start your journey</h2>
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
      state: 0
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
    this.changeState();
    setInterval(this.changeState, 10000);
  }
};
</script>

<style scoped>
.bg {
  position: fixed;
  background-color: black;
  height: 100%;
  width: 100%;
  -webkit-transition: background-image 0.4s ease-in-out,
    transform 10s ease-in-out;
  transition: background-image 0.4s ease-in-out, transform 10s ease-in-out;
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
  letter-spacing: 8px;
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
  letter-spacing: 5px;
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
header {
  padding: 30px;
  /* background-color: #00000014; */
}
#conversion-text {
  width: 70%;
  font-size: 20px;
  font-weight: 100;
  color: white;
  letter-spacing: 0.5px;
  text-align: justify;
}

#cta {
  position: fixed;
  bottom: 20%;
  width: 100%;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0),
    0 0 20px rgba(255, 255, 255, 1), 0 0 40px #ffffff00, 0 0 20px white,
    0 0 20px #ffffff00, 0 0 20px #ffffff00;
  text-align: center;
}
#cta:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1), 0 0 40px white, 0 0 20px white,
    0 0 20px white, 0 0 20px white;
}

#cta a {
  text-decoration: none;
}

.bg1 {
  transform: scale(1.2);
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/granada/6.JPG");
}

.bg2 {
  transform: scale(1);
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/san juan del sur/1.JPG");
}
.bg3 {
  transform: scale(1.4);
  background-image: url("http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/san juan del sur/6.JPG");
}

.home-filter-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(#054c7de0, #ffffff29, #4d445400);
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
