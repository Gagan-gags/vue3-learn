<template>
  <div class="aside-sidebar pt-0" v-bind:class="{ SideBar: !isActive }">
    <div class="d-flex justify-content-between p-3 align-items-center">
      <a class="navbar-brand p-4 mb-0" href="#">Vue App</a>
      <span class="icon-left-arrow toggle" @click="handleToggle"></span>
    </div>

    <ul class="navbar-nav custom-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link">
          <span class="icon-dashboard-icon"></span> <span>Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'employee.index' }" class="nav-link">
          <span class="icon-growers-icon"></span> <span>Employees</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'product.index' }" class="nav-link">
          <span class="icon-growers-icon"></span> <span>Product</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'learning' }" class="nav-link">
          <span class="icon-work-order"></span> <span>Learning vue</span>
        </router-link>
      </li>    
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSidebar",
  data() {
    return {
      isActive: true,
    };
  },
  computed: {},
  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
});
</script>
<style lang="sass" scoped></style>
