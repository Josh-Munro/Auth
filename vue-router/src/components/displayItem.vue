<template>
    <div>
        <h1>Item List</h1>
        <table>

            <!-- Table columns -->
            <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Promo Code</td>
            </tr>

            <!-- Displaying items using v-for loop -->
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Name}}</td>
                <td>{{item.Description}}</td>
                <td>{{item.PromoCode}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

//Imports 
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios'
import axios from 'axios';

//Using VueAxios and Axios
Vue.use(VueAxios, axios)
export default {
    //Name of component
    name: 'ItemList',

    //creating a list object
    data() {
        return {list:undefined}
    },

    mounted()
    {   
        //Using Axios to call the getItems API
        Vue.axios.get('http://localhost:3000/api/events')
        //Gettign the responce
        .then((res) =>{
            //Putting the responce data to the list object
            this.list=res.data;
            console.warn(res.data)
        })
    }
}
</script>


<style>

</style>