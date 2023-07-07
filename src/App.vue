<template>
  <div id="app">
    <div>
        <img 
          src="../src/assets/bibloteca.png"
          class="logo"
        />
        <b-nav class="nav-links">
          <b-nav-item 
            :active="isCurrentRoute('bibliographyType')" 
            :to="{ name: 'bibliographyType'}"
          >Tipo de bibliografía</b-nav-item>
          <b-nav-item
            :active="isCurrentRoute('editorial')" 
            :to="{ name: 'editorial'}"
          >Editoriales</b-nav-item>
          <b-nav-item
            :active="isCurrentRoute('authors')" 
            :to="{ name: 'authors'}"
          >Autores</b-nav-item>
        </b-nav>
      </div>
    <div class="container d-flex justify-content-center align-items-center main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isCurrentRoute(routeName) {
      console.log('routes', this.$route.name, routeName);
      return this.$route.name === routeName;
    }
  }
}
</script>

<style scoped>

.nav-links {
  margin: 0 auto;
  border: 2px solid;
  justify-content: center;
}

.logo {
  max-width: 400px;
  display: block;
  margin: 0 auto;
}

.main-content {
  /* background-color: #324c87; */
  border-radius: 10px;
  margin: 2em auto;
}
</style>