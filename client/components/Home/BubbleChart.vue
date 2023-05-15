<template>
  <div>
    <h1>Terms:</h1>
    <ul>
      <li v-for="item in items" :key="item.caseid">
        <p>Carescore: {{ item.carescore }}</p>
        <p>Category: {{ item.category }}</p>
        <p>Case ID: {{ item.caseid }}</p>
        <p>Title: {{ item.title }}</p>
        <p>URL: {{ item.url }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:3000/api/terms');
        if (response.ok) {
          const data = await response.json();
          this.items = data;
        } else {
          console.error('Error fetching items:', response.status);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>