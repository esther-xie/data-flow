<!-- A basic navigation bar component -->
<!-- Example of a component which is included on all pages (via App.vue) -->
<!-- This navbar takes advantage of both flex and grid layouts for positioning elements; feel free to redesign as you see fit! -->

<template>
  <nav v-if="isNotLanding" class="navbar" id=" navbar">
    <div class="d-flex flex-row">
    <button type="button" class="p-2 btn btn-outline-primary"> <router-link to="/">
        restart
      </router-link> </button>
      <button type="button" class="p-2 btn btn-outline-secondary"><router-link to="/extension">
        Extension
      </router-link> </button>
      <button v-if="isNotHome" type="button" class="p-2 btn btn-outline-success"><router-link to="/home">
        data flows
      </router-link></button>
      <button v-else type="button" class="p-2 btn btn-outline-success" id="btn-topics" @click="showTopics = !showTopics">
        topics
      </button>
      <TopicsFilterComponent class="p-2" v-if="showTopics && !isNotHome"/>
    </div>
    <div class="d-flex flex-row-reverse">
      <button  type="button" class="p-2 btn btn-outline-danger"><router-link to="/about">
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
.p-2{
  margin: 0.5rem !important;
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
