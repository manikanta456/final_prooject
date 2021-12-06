<template>
  <router-link :to="{ name: 'coin_page', params: { id: id } }">
    <span>{{ name }}</span>
    <span>${{ price }}</span>
  </router-link>
</template>

<script>
export default {
  name: "CoinItem",
  props: ["id", "name", "price"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 1.25rem;
  color: black;
}

a:hover {
  border-color: cornflowerblue;
  color: cornflowerblue;
  transition: 0.25s ease;
}
</style>
