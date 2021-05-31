<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- Login form -->
   <h1>Login example</h1>

    <form @submit="postLogin" method="post">
      <!-- Name input field -->
      <input type="text" name="email" v-model="user.Email"> <br>
      <!-- Password input field -->
      <input type="password" name="password" v-model="user.Password"> <br>
      <!-- Submit button -->
      <button type="submit">Login</button>

    <!-- If error is returned show this -->
      <h1 v-if="success">Invalid Credentials</h1>
    </form>

    
  </div>
</template>

<script>

//Imports
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Using vue and axios
Vue.use(VueAxios, axios)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      //User data array. Information is passed from input fields to axios
      user: {
        Email: null,
        Password: null,
        IsAdmin: Boolean
      },

        success: false

    }
  },
  methods: {
    //Login mehtod called uses axios to pass information
    postLogin(e) {
      this.axios.post("http://localhost:3000/api/login", this.user)
      .then((result)=>{
        console.log('hello' + JSON.stringify(result));
        localStorage.setItem('user', JSON.stringify(result));
        this.$router.push('/additem');
       
      // console.log(user)
      })
      console.warn(this.user);
      this.success = true;
      e.preventDefault();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
