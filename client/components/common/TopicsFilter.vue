<template>
    <div class="topicfilters d-flex flex-row">
        <button type="button" class="p-2 btn btn-outline-light" v-on:click="filter = none"> all </button>
        <button type="button" class="p-2 btn btn-outline-light" v-on:click="filter = contents"> contents </button>
        <button type="button" class="p-2 btn btn-outline-light" v-on:click="filter = cookies"> cookies </button>
        <button type="button" class="p-2 btn btn-outline-light" v-on:click="filter = types"> data types </button>
        <button type="button" class="p-2 btn btn-outline-light" v-on:click="filter = accesses"> accesses </button>
    </div>
</template>

<script>
export default {
  name: 'TopicsFilterComponent',
}
</script>

<style scoped>

.btn-filter {
    border: 0px solid black !important;
    padding: 6px 0px;
    }
</style>