<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><img src="@/assets/logo.png" alt="Logo" class="logo"/> </li>
          <li><router-link to="/">Acasa</router-link></li>
          <li><router-link to="/despre">Despre</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <img src="@/assets/hero-image.jpg" alt="Hero" class="hero"/>
    <router-view class="page"/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  padding: 2rem;
}

header {
  background-color: #333;
  padding: 10px 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

nav ul li a:hover {
  text-decoration: underline;
}
.logo {
  height: 120px;
  position: absolute;
  left: 20px;
  top: 10px;
}
.hero {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-bottom: 20px solid #333;
}
</style>
<script setup lang="ts">
</script>
