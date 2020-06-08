<template>
    <div class="container" style="text-align: center">
        <div class="col-md-12"><h2 style="text-align: center">this is dashboard</h2></div>
        <div class="col-md-12" style="text-align: center;float: left">
            <button class="btn badge-danger " v-on:click="getText()"> CLICK ME</button>
        </div>
        <div style="text-align: center">{{message}}</div>
        <a href="http://localhost:8080/#/" @click="logOut">log out</a>

    </div>
</template>
<script>
    import axios from 'axios';

    export default {

        name: 'Dashboard',
        data() {
            return {
                message: ''
            }
        },

        methods: {
            getText: function () {
                console.log('hello world');
                axios.get('authen/au').then(res => {
                    console.log(res);
                    this.message = res.data;
                }, error => {
                    console.log(error);
                })
            },
            logOut() {

                axios.post('api/auth/logout',{username:localStorage.getItem('name'),refreshToken:localStorage.getItem('refreshToken')}).then(
                    res=>{
                        console.log(res);
                        this.$store.dispatch('logout');
                    }
                )
            }
        }
    }
</script>
<style>

</style>