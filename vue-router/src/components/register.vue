
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h1>Register example</h1>

    <form @submit="postData" method="post">
      <input type="text" name="email" v-model="user.Email"> <br>
      <input type="password" name="password" v-model="user.Password"> <br>
       
      <label for="">IsAdmin</label>
      <input name="isAdmin" type="checkbox" v-model="user.IsAdmin">
                   

      <button type="submit">Register</button>
    </form>

    <h1 v-if="success">Success</h1>
    
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'


Vue.use(VueAxios, axios)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        Email: null,
        Password: null,
        IsAdmin: Boolean
      },
      //Testing purposes
      success: false,
    
    }
  },
  methods: {

    postData(e) {
      this.axios.post("http://localhost:3000/api/register", this.user)
      .then((result)=>{
        console.warn(result);
        this.success = true;
        this.$router.push('/dashboard');

        
      })
      console.warn(this.user);
      e.preventDefault();
      
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  text-align: center;
  margin-bottom: 30px;
}
h3 {
  margin: 40px 0 0;
  color: #52af8a;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0e1311;
}

button {
  margin-top: 20px;
}

form {
  text-align: center;
}
</style>
