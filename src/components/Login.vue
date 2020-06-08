<template>
    <div>
        <img class="logo " src="../assets/logos.png">
        <div id="login">
            <form class="form-group form-login">
                <label>Tên Người Dùng Hoặc Địa Chỉ Email</label>
                <input class="input-name-password" v-model="name" type="text">
                <br>
                <label>Mật Khẩu</label>
                <br>
                <input class="input-name-password" v-model="password" type="password">
                <div class="capcha ">
                    <div class="col-md-7 inline">
                        <input type="checkbox" style="display: inline" id="check" v-model="checked">
                        <span>    I'm not a robot</span>
                    </div>
                    <div class=" recapcha col-md-4">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png">
                        <span class="recaptcha">reCAPTCHA</span>
                        <div><a href="#">Privacy</a>
                            <span class="dash">-</span>
                            <a href="#">Terms</a>
                        </div>
                        <div class="triangle"></div>
                    </div>
                </div>
                <div class="button-login col-md-12 ">
                    <div style="display: inline-block;padding-left: 3px">
                        <input type="checkbox">
                        <span> tự động đăng nhập</span>
                    </div>
                    <div>
                        <button type="button" @click="login()" class="btn btn-info col-md-6"
                                v-bind:class="{ disabled: disabled}"> Đăng Nhập
                        </button>
                    </div>
                </div>
                <label style="color: red">{{errorMessage}}</label>
            </form>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'


    export default {
        name: 'Login',
        data() {

            return {
                // isActive: false,
                name: null,
                password: null,
                errorMessage: null,
                checked: false
            }
        },
        computed: {
            disabled: function () {
                if (this.checked) {
                    return false

                }
                return true;
            }
        },

        methods: {


            login() {
                axios.post('api/auth/login', {username: this.name, password: this.password,}).then(res => {

                    this.errorMessage = null
                    this.$store.dispatch('login', {
                        refreshToken: res.data.refreshToken,
                        token: res.data.authenticationToken,
                        name: res.data.username
                    })

                    this.$router.push("Dashboard")
                }, error => {
                    this.errorMessage = error.response.data.message
                })
            }
        },


        props: {
            msg: String
        }
    }
</script>
<style>
    .recapcha {
        display: inline-block;

    }

    .btn-info {
        float: right;
        margin-right: 10px;
    }

    .button-login {
        width: 100%;
        float: left;
        margin-top: 10px;
    }

    .inline {
        display: inline-block;
        margin: 10px;
    }

    label {
        background: white;
    }

    .logo {
        display: block;

        height: 200px;
        margin: auto;
    }

    .capcha {
        /*background: white;*/
        border: 1px solid #ccd0d4;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
        width: 100%;
    }

    * {
        background: #f4f4f4;
        text-align: left;
        padding-top: 0px;
    }

    .form-login {
        padding: 50px 30px 30px 30px;
        margin: auto;
        height: 500px;
        width: 500px;
        background: white;
        border: 1px solid #ccd0d4;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
    }

    .input-name-password {
        font-size: 24px;
        line-height: 1.33333333;
        width: 100%;
        border-width: .0625rem;
        padding: .1875rem .3125rem;
        min-height: 40px;
        max-height: none;
        margin-bottom: 10px;
    }

    input {
        border: 1px solid #CCD0D4;
    }


</style>
