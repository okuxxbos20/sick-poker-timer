<template>
  <div class="login">
    <p @click="isFormOpen = !isFormOpen" class="login-gate">{{ welcomeSentence }}</p>
    <form v-if="isFormOpen && !isAlreadyLogin" @submit.prevent="submitForm ()" action="index.html" method="post">
      <div v-if="!isAlreadyLogin">
        <h3>{{ loginOrSignup }}</h3>
        <div class="form-group">
          <label>Email address</label>
          <input v-if="isAlreadyLogin" type="email" class="form-control" v-model="email">
          <input v-if="!isAlreadyLogin" type="email" class="form-control" v-model="loginEmail">
          <small class="warn">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-if="isAlreadyLogin" type="password" class="form-control" v-model="password">
          <input v-if="!isAlreadyLogin" type="password" class="form-control" v-model="loginPassword">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" name="button">{{ loginOrSignup }}</button>
        <p class="signup-sentence">New to Sick-Poker-Timer?
          <span @click="switchStatus ()">{{ anotherGate }}.</span>
        </p>
      </div>
    </form>
    <div v-if="isFormOpen && isAlreadyLogin" class="logout-contents">
      <p class="user-name">Hey Oku.</p>
      <p class="logout-gate" @click="logoutUser ()">Log out.</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      isFormOpen: false,
      isLoginForm: true,
      isAlreadyLogin: false,
      loginOrSignup: 'Login',
      anotherGate: 'Sign up',
      welcomeSentence: 'Login?',
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: ''
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAlreadyLogin = true;
        this.welcomeSentence = 'Welcome';
        console.log('login');
      } else {
        this.isAlreadyLogin = false;
        this.welcomeSentence = 'Login?';
        console.log('logout');
      }
    });
  },
  methods: {
    submitForm () {
      if (this.isAlreadyLogin) {
        this.registerUser ();
      } else {
        this.loginUser ();
      }
    },
    registerUser () {
      console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    },
    loginUser () {
      firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    },
    logoutUser () {
      firebase.auth().signOut();
    },
    switchStatus () {
      this.isLoginForm = !this.isLoginForm;
      if (this.isLoginForm) {
        this.loginOrSignup = 'Login';
        this.anotherGate = 'Sign up';
      } else {
        this.loginOrSignup = 'Sign up';
        this.anotherGate = 'Login';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 35px;
  .login-gate {
    color: var(--currentTheme);
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    top: 5px;
    right: 5%;
    margin: 0;
    &:hover { cursor: pointer; }
  }
  form {
    width: 75%;
    max-width: 700px;
    position: absolute;
    top: 10%;
    left: 50%;
    -webkit-transform : translateX(-50%);
    transform : translateX(-50%);
    background: #222;
    z-index: 100;
    text-align: center;
    border-radius: 10px;
    h3 {
      color: var(--currentTheme);
      margin: 20px 0 30px;
    }
    .form-group {
      color: #aaa;
      margin: 20px 30px;
      input {
        color: var(--currentTheme);
        background: #111;
        border: none;
        margin: 0;
      }
      .warn { color: #777; }
    }
    .form-check { color: #aaa; }
    button {
      color: var(--currentTheme);
      background: transparent;
      border: none;
      border-radius: 10px;
      font-size: 22px;
      padding: 10px 20px;
      margin: 20px 0;
      transition: 200ms;
      &:hover {
        color: #111;
        background: var(--currentTheme);
        border-radius: 100px;
        cursor: pointer;
      }
      &:focus { outline: none; }
    }
    .signup-sentence {
      color: #aaa;
      span {
        transition: 200ms;
        &:hover {
          color: var(--currentTheme);
          border-bottom: 1px solid var(--currentTheme);
          cursor: pointer;
        }
      }
    }
  }
  .logout-contents {
    color: #aaa;
    width: 100px;
    position: absolute;
    top: 35px;
    right: 5%;
    background: #222;
    z-index: 100;
    text-align: center;
    border-radius: 10px;
    .user-name { margin: 10px 5px; }
    .logout-gate {
      color: var(--currentTheme);
      transition: 200ms;
      margin: 10px 15px;
      &:hover {
        border-bottom: 1px solid var(--currentTheme);
        cursor: pointer;
      }
    }
  }
}
</style>
