<template>
  <div class="login">
    <p @click="isFormOpen = !isFormOpen" class="login-gate">{{ welcomeSentence }}</p>
    <form v-if="isFormOpen && !isAlreadyLogin" @submit.prevent="submitForm ()" action="index.html" method="post">
      <div v-if="!isAlreadyLogin">
        <h3>{{ loginOrSignup }}</h3>
        <div class="form-group">
          <label>Email address</label>
          <input
            v-if="!isLoginForm"
            v-model="email"
            type="email"
            class="form-control"
          >
          <input
            v-if="isLoginForm"
            v-model="loginEmail"
            type="email"
            class="form-control"
          >
          <small class="warn">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-if="!isLoginForm"
            v-model="password"
            type="password"
            class="form-control"
          >
          <input
            v-if="isLoginForm"
            v-model="loginPassword"
            type="password"
            class="form-control"
          >
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <div v-if="isError" class="error-message">
          <p>{{ errorCode }}</p>
          <p>{{ errorMessage }}</p>
        </div>
        <button type="submit" name="button">{{ loginOrSignup }}</button>
        <p class="signup-sentence">{{ bottomMessage }}
          <span
            @click="switchStatus ()"
            :class="{ error: isError }"
          >
            {{ anotherGate }}.
          </span>
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
      isError: false,
      errorCode: '',
      errorMessage: '',
      loginOrSignup: 'Login',
      anotherGate: 'Sign up',
      welcomeSentence: 'Login?',
      bottomMessage: 'New to Sick-Poker-Timer?',
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
      if (this.isLoginForm && !this.isAlreadyLogin) {
        this.loginUser ();
      }
      if (!this.isLoginForm && !this.isAlreadyLogin) {
        this.registerUser ();
      }
    },
    registerUser () {
      console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        this.isError = true;
        this.errorMessage = error.message;
        this.errorCode = error.code;
      });
    },
    loginUser () {
      firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword).catch((error) => {
        this.isError = true;
        this.errorMessage = error.message;
        this.errorCode = error.code;
      });
    },
    logoutUser () {
      firebase.auth().signOut();
    },
    switchStatus () {
      this.isLoginForm = !this.isLoginForm;
      this.loginEmail = '';
      this.loginPassword = '';
      this.isError = false;
      if (this.isLoginForm) {
        this.loginOrSignup = 'Login';
        this.anotherGate = 'Sign up';
        this.bottomMessage = 'New to Sick-Poker-Timer?';
      } else {
        this.loginOrSignup = 'Sign up';
        this.anotherGate = 'Login';
        this.bottomMessage = 'Alerady have account?';
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
    .error-message {
      margin: 15px 0;
      p {
        color: #d64541;
        margin: 2px 0;
      }
    }
    button {
      color: var(--currentTheme);
      background: transparent;
      border: 1px solid var(--currentTheme);
      border-radius: 100px;
      font-size: 22px;
      padding: 5px 20px;
      margin: 10px 0 20px;
      transition: 200ms;
      &:hover {
        color: #111;
        background: var(--currentTheme);
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
      .error {
        color: var(--currentTheme);
        border-bottom: 1px solid var(--currentTheme);
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
