<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

   <h1>Use Token example</h1>

    <form @submit="postLogin" method="post">
      <label for="">Item Name</label>
      <input type="text" name="email" v-model="item.Email"> <br>
      <label for="">Promo Code</label>
      <input type="password" name="password" v-model="item.Password"> <br>
      <button type="submit">Redeem Item</button>

      <h1 v-if="failed">Could not redeem item</h1>
      <h1 v-if="redeemed">Item redeemed</h1>
    </form>

    <display-item> </display-item>

    
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import DisplayItem from './displayItem.vue'


Vue.use(VueAxios, axios)

export default {
  name: 'useToken',
  props: {
    DisplayItem,
    msg: String
  },
  data() {
    return {
      item: {
        Email: null,
        Password: null
      },

        failed: false,

        redeemed: false


    }
  },
  methods: {

    postLogin(e) {
      this.axios.post("http://localhost:3000/api/useToken", this.item)
      .then((result)=>{
        console.log('hello' + JSON.stringify(result));
        localStorage.setItem('user', JSON.stringify(result));
        this.redeemed = true;
        this.failed = false;
       
      // console.log(user)
      })
      console.warn(this.user);
      this.failed = true;
      this.redeemed = false;
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
