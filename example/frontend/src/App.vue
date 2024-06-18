<template>
  <nav>
    <router-link to="/"><button class="btn btn-outline-primary">Home</button></router-link> |
    <router-link to="/board"><button class="btn btn-outline-primary">전체조회</button></router-link> | 
    <router-link to="/boardForm"><button class="btn btn-outline-primary">글 등록</button></router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
