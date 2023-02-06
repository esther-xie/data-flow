<!-- Default page that also displays projects -->

<template>
  <main>
      <ul>
        <li> <router-link to="/work/caterhub"> Caterhub </router-link> </li>
        <li>Sync</li>
        <li>flower</li>
        <li>data flows</li>
      </ul>
  </main>
</template>


<style scoped>
section {
  display: flex;
  flex-direction: column;
}

header, header > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    margin-right: 10px;
}

section .scrollbox {
  flex: 1 0 50vh;
  padding: 3%;
  overflow-y: scroll;
}
</style>
