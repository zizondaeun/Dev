<template>
  <div class="container">
    <nav>
      <router-link to="/compositionMouse">CompositionMouse</router-link> |
      <router-link to="/composition">Composition</router-link> |
      <router-link to="/vuetify">Vuetify</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/customer">Customer</router-link> |
      <router-link to="/board">Board</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/order">Order</router-link> |
      <router-link to="/cart">Cart</router-link>
    </nav>
    <router-view/>
  </div>
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
