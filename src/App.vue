<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
button {
  padding: 0;
  border: none;
  background: none;
}
button:focus {
  outline: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  cursor: pointer;
  text-decoration: none;
}
/* unvisited link */
a:link {
  color: black;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: black;
  text-decoration: none;
}

/* selected link */
a:active {
  color: black;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.navbar {
  background-color: #fdfafa;
  padding: 0;
}
.navbar li {
  padding: 0;
  margin: 0;
  display: inline;
  float: left;
}
.navigation-top-navbar {
  max-height: 0px;
  transition: top ease 0.5s, padding-left 0.5s ease 0.5s;
  position: fixed;
  top: -100px;
}

.navigation-top-navbar-displayed {
  top: 0;
  max-height: 500px;
  opacity: 1;
  padding-left: 10%;
}
.navigation-menu-home-btn {
  font-weight: 100;
  font-size: 20px;
}
.navigation-menu-right-btn {
  font-weight: 100;
  font-size: 12px;
}
</style>
