<!-- A basic navigation bar component -->
<!-- Example of a component which is included on all pages (via App.vue) -->
<!-- This navbar takes advantage of both flex and grid layouts for positioning elements; feel free to redesign as you see fit! -->

<template>
  <nav v-if="isNotLanding">
    <div class="left">
    <button class="nav-btn" id="btn-restart"> <router-link to="/">
        restart
      </router-link> </button>
      <button class="nav-btn" id="btn-extension"><router-link to="/extension">
        Extension
      </router-link> </button>
      <button v-if="isNotHome" class="nav-btn" id="btn-topics"><router-link to="/home">
        data flows
      </router-link></button>
      <button v-else class="nav-btn" id="btn-topics" @click="showTopics = !showTopics">
        topics
      </button>
      <TopicsFilterComponent v-if="showTopics"/>
    </div>
    <div class="right">
      <button class="nav-btn" id="btn-about"><router-link to="/about">
        about
      </router-link> </button>
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

<script>
import TopicsFilterComponent from '@/components/common/TopicsFilter.vue';

export default {
  components: {TopicsFilterComponent},
  data() {
    return {
      showTopics: false,
    };
  },
  computed: {
    isNotLanding() {
      return this.$route.name !== 'Landing'
    },
    isNotHome(){
      return this.$route.name !== 'Home'
    }
  }
}
</script>

<style scoped>
.title {
    font-size: 32px;
    margin: 0 5px;
}

img {
    height: 32px;
}

nav{
  padding: 1vw 2vw;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 20px;
  margin: 40px;
}
.left {
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
  align-items: flex-start;
  left: 0px;
  position: absolute;
}
.right{
  right: 0px;
  position: absolute;
}
.nav-btn{
  padding: 6px 20px;
}
#btn-extension {
  border: 0.5px solid #BF95C4 !important;
}
#btn-restart {
  border-radius: 50px;
}
#btn-topics {
  border: 0px solid black !important;
}
#btn-about {
  border: 0.5px solid #8ACEAB !important;
}

.alerts {
    width: 25%;
}
</style>
