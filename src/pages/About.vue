<template>
  <div id="body">
    <b-navbar class="navigation-top-navbar navigation-top-navbar-displayed" fixed="top">
      <b-nav-item>
        <router-link class="navigation-menu-home-btn" to="/">
          Gallo Pinto
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link class="navigation-menu-right-btn" to="/">
          Go to the journey
        </router-link>
      </b-nav-item>
    </b-navbar>
    <h1>About this meal</h1>
    <img id="img" src="http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_2048/gallo%20pinto/salinas grandes/7.JPG">
    <p>The Gallo Pinto is a typical meal from Nicaragua made only from beans and rice. This simple combination is a great analogy of the way to enjoy the country. Less you have, less you can lose. It is also a great way to start your day with, gives you energy to discover those great central america countries.</p>
    <b>Here is one of the infinite recipes</b>
    <ol>
      <li>Fry the garlic, pepper, cilantro and onion in a large frying pan for 2 to 5 minutes,</li>
      <li>Add the cooked beans</li>
      <li>Add the rice let it cook for 20 minutes</li>
    </ol>
    <h1>About the pictures</h1>
    <p>All photos done by <b>Olympus PEN Mini / E-PM1</b> with the lens <b>Olympus M.Zuiko Digital 14-42mm F3.5-5.6 II R</b></p>
    <h1>About the code</h1>
    <p><a href="https://github.com/jeanphilippelingrand/gallo-pinto">Everything is open source on github</a></p>
    <h1>About me</h1>
    <p><a href="https://www.linkedin.com/in/jeanphilippelingrand/">Find me on Linkedin</a></p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
  #body {
    padding-left: 20%;
    padding-right: 20%;
    height: 100%;
    margin: 100ppx;
    font-size: 12px;
    text-align: justify;
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
    margin-top: 50px;
    padding: 4px;
    padding-left: 10px;
    font-size: 50px;
    color: grey;
    font-weight: 60;
  }

  h2 {
    font-weight: 100;
    font-size: 30px;
    margin-bottom: 30px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  p {
    font-size: 12px;
    font-weight: 100;
  }
  @media only screen and (max-width: 600px), screen and (max-height: 600px) {
    #body{
      padding-left: 5%;
      padding-right: 5%;
    }
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 15px;
    }
    h3 {
      padding: 10px;
    }
  }
</style>
