<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';
  
export default {
  name: 'App',
  components: {NavBar},
};
</script>

<style>

@font-face {
  font-family: "Movement";
  src: url("../client/public/Webfonts/Movement-DirectThin.woff2");
}

@font-face {
  font-family: 'Movement-black';
  src: url("../client/public/Webfonts/Movement-DirectBlack.woff2");
}

/* @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'); */

* {
  box-sizing: border-box;
  font-family: 'Movement', serif;
  font-size: 16px;
}


body {
  height: 100vh;
  flex-direction: column;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  background-color: black !important;
  -webkit-text-fill-color: #fff;
}

main {
  padding: 0 5em 5em;
}

a:link {
  color:black;
  text-decoration: none;
}

a:visited {
  color: black;
}

.center-text{
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  position:absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
}

h1 {
  font-family: 'Movement-black';
  font-size: 5rem !important;
  text-align: center;
}

.alerts {
    position: absolute;
    z-index: 99;
    bottom: 0;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 10%);
    width: 100%;
    text-align: center;
}

.alerts article {
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
}

.alerts p {
    margin: 0;
}

.alerts .error {
    background-color: rgb(166, 23, 33);
}

.alerts .success {
    background-color: rgb(45, 135, 87);
}

</style>
