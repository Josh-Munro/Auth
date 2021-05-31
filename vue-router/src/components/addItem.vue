
<template>
 <!-- Vuejs uses the template tag to create the html for the component -->
  <div class="hello">

    <h1>Adding Item Example</h1>

    <!-- Creating the form and creating post method -->
    <form @submit="postData" method="post">

      <!-- Name label   -->
      <label for="name">Enter Name of Item</label> <br>
      <!-- Name of item -->
      <input type="text" name="name" v-model="item.Name"> <br>

      <!-- Description of item label -->
      <label for="name">Enter Description of Item</label> <br>
      
      <!-- Description input -->
      <input type="text" name="description" v-model="item.Description"> <br>
                   
      <!-- Submit button calls post method -->
      <button type="submit">Add Item</button>
    </form>

    <h1 v-if="success">Success</h1>
    
  </div>
</template>

<script>

//Inports
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'

//Using VueAxios
Vue.use(VueAxios, axios)

//Naming the component and props for the component
export default {
  name: 'AddItem',
  props: {
    msg: String
  },
  //Creating the user object with fields
  data() {
    return {
      item: {
        Name: null,
        Description: null
      },
      //Testing purposes
      success: false,
    
    }
  },
  methods: {

    //Passing the data through Axios to the register API backend
    postData(e) {
      this.axios.post("http://localhost:3000/api/additem", this.item)
      .then((result)=>{
        console.warn(result);
        this.success = true;
        //If register successful pass user to the dashboard
        //this.$router.push('/login');

        
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
