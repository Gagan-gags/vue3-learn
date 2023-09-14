<template>
  <header class="header">
    <div
      class="container-fluid p-3 d-flex align-items-center justify-content-between"
    >
      <div></div>
      <div
        class="d-flex flex-wrap align-items-center user-info justify-content-end"
      >
        <div class="d-flex align-items-center">
          <router-link to="/" class="me-3"
            ><span class="icon-notifications"></span
          ></router-link>
          <router-link to="/" class="me-3"
            ><span class="icon-help"></span
          ></router-link>
          <router-link to="/">
            <span class="icon-user"></span>
          </router-link>
        </div>
        <div class="dropdown ms-3">
          <a
            class="btn bg-transparent dropdown-toggle border-0"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- {{ fullName }} -->
            User Name
            <span class="icon-down-arrow"></span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                <span class="icon-user"></span> Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span class="icon-settings"></span> Setting</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span class="icon-exit_to_app"></span> Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
  components: {},
  data() {
    return {
    };
  },
  computed: {
    // fullName() {
    //   if (this.currentUser) {
    //     return this.currentUser.full_name;
    //   }
    //   return "";
    // },
  },
  methods: {

  },

});
</script>
<style lang="sass" scoped></style>
