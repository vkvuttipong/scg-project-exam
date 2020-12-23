<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Find - Restaurants</b-navbar-brand> 
      </b-navbar>
    </div>
    <SearchMap   />
  </div>
</template>

<script>
import SearchMap from "./components/SearchMap";

export default {
  name: "App",
  components: {
    SearchMap,
  },
};
</script>

<style>
#app {
  text-align: left;
  color: #2c3e50;
}
</style>
