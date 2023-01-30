<!-- Default page that also displays projects -->

<template>
  <main>
    <div class="center-text">
      <h1> I really should work on my portfolio. </h1>
    </div>
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
