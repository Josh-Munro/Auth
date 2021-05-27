<template>
  <div id="app">

 <header>  
   <ul> 
    <li class="nav-item">
  <router-link class="nav-link" to="/register">Register</router-link>
</li>
<li class="nav-item">
  <router-link class="nav-link" to="/">Home</router-link>
 </li>
<li class="nav-item">
   <router-link class="nav-link" to="/login">Login</router-link>
 </li>
  </ul>
 </header>
    
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>

  * {
    margin: 0;
    padding: 0;
  }

  header {
    background-color: rgb(100, 192, 100);
  }

  ul {
    display: flex;
    padding: 10px;
  }

  li {
    padding: 20px;
    list-style: none;
  }

  .nav-link {
    text-decoration: none;
    color: black;
    font-family: 'Courier New', Courier, monospace;
  }

</style>