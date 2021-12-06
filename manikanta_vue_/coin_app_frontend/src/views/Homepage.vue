<template>
  <div id="app_root">
    <div v-if="loading">loading...</div>
    <div class="app_root_container" v-if="!loading && data">
      <h1>My Crypto Price App</h1>
      <div v-for="d in data" :key="d._id">
        <coin-item :id="d._id" :name="d.name" :price="d.price" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CoinItem from "../components/CoinItem.vue";

export default {
  name: "Homepage",
  components: {
    CoinItem,
  },

  data() {
    return {
      loading: false,
      data: [],
    };
  },

  mounted() {
    this.$nextTick(async () => {
      this.loading = true;
      const res = await axios.get(
        "https://arcane-woodland-14332.herokuapp.com/api"
      );
      const data = await res.data;
      this.loading = false;
      this.data = data;
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

#app {
  overflow-x: hidden;
}

#app_root {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
  font-size: 16px;
}

#app_root h1 {
  margin-bottom: 2rem;
}

.app_root_container {
  max-width: 500px;
  width: 100%;
}
</style>
