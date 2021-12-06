<template>
  <div id="coin_page">
    <div v-if="loading">loading...</div>
    <div class="coin_data_container" v-if="!loading && data">
      <h1>
        <span>{{ data.name }}</span>
        <span :style="{ marginLeft: '.75rem' }">${{ data.price }}</span>
      </h1>
      <div class="trade_apps">
        <div :style="{ marginRight: '.75rem' }">Can be traded on</div>
        <span v-for="(app, index) in data.trade_apps" :key="index">
          {{ app }}
        </span>
      </div>
      <div class="description">{{ data.description }}</div>
    </div>

    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Coinpage",
  props: ["id"],

  data() {
    return {
      loading: false,
      data: [],
      error: "",
    };
  },

  mounted() {
    this.$nextTick(async () => {
      this.loading = true;
      try {
        const res = await axios.get(
          `https://arcane-woodland-14332.herokuapp.com/api/${this.id}`
        );
        const data = await res.data;
        this.loading = false;
        this.data = data;
      } catch (error) {
        this.loading = false;
        this.error = error.message;
      }
    });
  },
};
</script>

<style>
#coin_page {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.trade_apps {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.trade_apps span {
  display: inline-block;
  border: 1px solid black;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.trade_apps span:hover {
  border-color: cornflowerblue;
  color: cornflowerblue;
  transition: 0.25s ease;
}

.coin_data_container {
  max-width: 700px;
  width: 100%;
}

.description {
  line-height: 1.75;
}
</style>
