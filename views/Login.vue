<template>
  <div id="login">
    <form
        v-on:submit.prevent="submitForm"
        class="form-signin">
      <!-- <img class="mb-4" src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
      <h1 class="h3 mb-3 font-weight-normal">Sema na Kiongozi Wako</h1>
      <label for="inputEmail" class="sr-only">Enter Username</label>
      <input v-model="form.username" type="text" id="inputEmail" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="form.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-2 mb-3 text-muted">&copy; 2021-2022</p>
    </form>
  </div>

</template>

<script>
import axios from 'axios';
const apiUrl = "http://127.0.0.1:8000/api-token-auth/";
export default {
  name: "Login",
  data(){
    return{
      form: {
        username: '',
        password:''
      },
      token: null,
      region: null,

    }
  },
  methods: {
  submitForm(){
    console.log(this.form);
    axios.post(apiUrl,this.form)
        .then((res)=>{
          this.token = res.data.token
          this.region = res.data.region
          localStorage.setItem('token', this.token )
          localStorage.setItem('region', this.region )
          this.$router.push({name: 'Dashboard'})
          localStorage.setItem('username', this.form.username)
        })
        .catch((error) =>{
          // error.response.status Check status code
        }).finally(() => {
      //Perform action in always
    });
    }
  }
}
</script>

<style scoped>


html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>