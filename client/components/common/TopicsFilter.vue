<template>
    <div class="topicfilters">
        <button class="btn-filter" v-on:click="filter = none"> all </button>
        <button class="btn-filter" v-on:click="filter = contents"> contents </button>
        <button class="btn-filter" v-on:click="filter = cookies"> cookies </button>
        <button class="btn-filter" v-on:click="filter = types"> data types </button>
        <button class="btn-filter" v-on:click="filter = accesses"> accesses </button>
    </div>
</template>

<script>
export default {
  name: 'TopicsFilterComponent',
}
</script>

<style scoped>
.topicfilters {
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  align-items: flex-start;
  font-size: 14px !important;
}

.btn-filter {
    border: 0px solid black !important;
    padding: 6px 0px;
    }
</style>