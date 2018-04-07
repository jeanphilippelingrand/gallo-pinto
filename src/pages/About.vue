 <template>
  <div id="body">
    <h1>Gallo Pinto</h1>
    <img id="img" src="http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/salinas grandes/7.JPG">
    <p>The Gallo Pinto is a typical meal from Nicaragua made only from beans and rice. This simple combinaison is a great analogy of the way to enjoy the country. Less you have, less you can loose.</p>
    <router-link to="/travel">    <h2>Start your journey</h2>
</router-link>

  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
#body {
  padding-left: 20%;
  padding-right: 20%;
  height: 100%;
  margin: 100ppx;
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
}

#img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
  width: auto;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  padding: 4px;
  padding-left: 10px;
  font-size: 100px;
  color: grey;
  font-weight: 60;
}

h2 {
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-weight: 100;
}

p {
  font-size: 12px;
  font-weight: 100;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    padding: 10px;
  }
}
</style>
