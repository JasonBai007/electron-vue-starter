<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Press Ctrl+F12 to open Dev tools to check Network.</p>
    <el-button type="primary" @click="getData" size="small">Get XHR Data</el-button>
    <pre>{{resData}}</pre>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      resData: "",
    };
  },
  mounted() {},
  methods: {
    getData() {
      this.$http.get("passport").then((res) => {
        this.resData = JSON.stringify(res, null, 4);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
pre {
  text-align: left;
  width: 200px;
  margin: 30px auto;
  font-weight: bold;
}
</style>