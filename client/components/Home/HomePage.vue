<!-- Default page that also displays projects -->

<template>
  <main>
    <div class="center-text">
      <h1> HOME </h1>
    </div>

  <ul class="nav justify-content-center fixed-bottom" id="platform-tabs">
    <li id="title"> Platforms </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = all">All</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = facebook">Facebook</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = instagram">Instagram</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = twitter">Twitter</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = tiktok">TikTok</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = linkedin">LinkedIn</button>
    </li>
    <li class="nav-item">
      <button type="button" class="p-2 btn btn-outline-light" v-on:click="platform = reddit">Reddit</button>
    </li>
  </ul>

  </main>
</template>

<style scoped>
.p-2{
  margin: 0.5rem;
}
#title{
  margin: auto 0.75rem;
}
</style>
