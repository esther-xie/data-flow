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
  beforeCreate() {

    // Clear alerts on page refresh
    this.$store.state.alerts = {};
  }
};
</script>

<link rel="stylesheet" href="https://use.typekit.net/mtx7dtu.css"></link>

<style>
* {
  box-sizing: border-box;
  font-family: 'Minion Pro', serif;
  font-size: 16px;
}

body {
  height: 100vh;
  flex-direction: column;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
}

main {
  padding: 0 5em 5em;
}

a:link {
  color:black;
  filter:blur(1px);
  text-decoration: none;
}

a:visited {
  color: black;
}

a:hover {
  filter:none;
  text-decoration: underline;
}

a.router-link-active {
  filter:none;
}

.center-text{
  justify-self: center;
  position:absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
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
