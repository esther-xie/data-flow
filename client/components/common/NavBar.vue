<!-- A basic navigation bar component -->
<!-- Example of a component which is included on all pages (via App.vue) -->
<!-- This navbar takes advantage of both flex and grid layouts for positioning elements; feel free to redesign as you see fit! -->

<template>
  <nav>
    <div class="center">
      <router-link to="/class">
        /6483
      </router-link>
      <router-link to="/work">
        work
      </router-link>
      <router-link to="/home">
        home
      </router-link>
      <router-link
        to="/about"
      >
        about
      </router-link>
    </div>
    <section class="alerts">
      <article
        v-for="(status, alert, index) in $store.state.alerts"
        :key="index"
        :class="status"
      >
        <p>{{ alert }}</p>
      </article>
    </section>
  </nav>
</template>

<style scoped>
nav {
    padding: 1vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.title {
    font-size: 32px;
    margin: 0 5px;
}

img {
    height: 32px;
}

.left {
	display: flex;
	align-items: center;
}

.right {
    font-size: 20px;
    display: grid;
    gap: 16px;
    grid-auto-flow: column;
    align-items: center;
}

.right a {
    margin-left: 5px;
}

.center {
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
  align-items: center;
}

.alerts {
    width: 25%;
}
</style>
