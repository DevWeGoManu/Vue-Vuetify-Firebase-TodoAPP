<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Vue+Vuetify+Firebase</h2>
      </div>

    </v-app-bar>

    <v-main>
   
    </v-main>
    <v-content>
      <ToDoList />
    </v-content>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList.vue"
export default {
  name: 'App',

  components: {
    ToDoList 
  },

  data: () => ({
    //
  }),
};
</script>
