<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Press Ctrl+F12 to open Dev tools to check Network.</p>
    <el-button type="primary" @click="getData" size="small">Get XHR Data</el-button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getData() {
      this.$http.get("passport").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>