<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main
    class="main-wrapper d-flex align-items-stretch"
    v-bind:class="{ SideBar: isActive }"
  >
    <the-sidebar></the-sidebar>
    <div class="main-content">
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheHeader from "@/views/template/TheHeader.vue";
import TheSidebar from "@/views/template/TheSidebar.vue";

export default defineComponent({
  mounted() {},
  data: () => ({}),
  components: { RouterView, TheHeader, TheSidebar },
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
