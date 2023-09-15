

<template>
  <main>
    <main>
      <h3 class="text-primary">Interpolation and Data</h3>
      <ul>
        <li><strong>Name: </strong>{{ name }}</li>
        <li><strong>Email: </strong>{{ email }}</li>
        <li><strong>Mobile: </strong>{{ mobile }}</li>
      </ul>

      <h3 class="text-primary">Define method and parmas</h3>
      <!-- On button click change the property value  -->
      <button @click="increment()" class="btn btn-primary mb-3">increament</button>
      <p>Count is: {{ count }}</p>
      <!-- even handling -->
     <div class="mb-4"> 
      <button v-on:click="getData('button 1 clicked')" class="btn btn-success">click me </button>
      <button v-on:dblclick="getData('button double clicked')" class="btn btn-success ms-3">click me </button>
     </div>
      <!-- mouse move on event-->
      <h3 v-on:mousemove="getConsole()">Move mouse </h3>
      <!-- two way binding -->
      <input type="text" v-model="count">
    </main>
  </main>
</template>

<script lang="ts">
  export default{
    name: "HomeView",

    data(){
      return{
        name: "Gagan Kumar",
        email: "87gagankumar@gmail.com",
        mobile: 7807536625,
        getName: function(a){
          return a;
        },
        count: 0,
      }
    },

    // you can define here functions
    methods: {
      increment() {
        this.count= this.count+2;
      },
      getData(){
        alert('function call');
      },
      getConsole(){
        console.warn('function called');
      }
    }
    
  }
</script>