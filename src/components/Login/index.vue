<template>
  <div class="login">
    <div
      @click="isFormOpen = false"
      :class="{ overlay: isFormOpen }"
    ></div>
    <p v-if="!isAlreadyLogin" class="login-gate" @click="formOpen ()">Login?</p>
    <img
      v-if="userPhoto && isAlreadyLogin"
      :src="userPhoto"
      alt="userprofile"
      class="login-icon"
      @click="formOpen ()"
    >
    <img
      v-if="!userPhoto && isAlreadyLogin"
      src="@/assets/avatar.png"
      alt="avator"
      class="login-icon"
      @click="formOpen ()"
    >
    <form v-if="isFormOpen && !isAlreadyLogin" @submit.prevent="submitForm ()" action="index.html" method="post">
      <div v-if="!isAlreadyLogin">
        <h3>{{ loginOrSignup }}</h3>
        <div class="sns-login">
          <li @click="googleLogin ()"><GoogleIcon /></li>
          <li @click="facebookLogin ()"><FacebookIcon /></li>
          <li @click="githubLogin ()"><GithubIcon /></li>
          <li @click="twitterLogin ()"><TwitterIcon /></li>
        </div>
        <div class="form-group">
          <label>Email</label>
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
          <div class="form-check">
            <input type="checkbox">
            <label for="exampleCheck1">Remember me</label>
          </div>
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
    <div v-if="isFormOpen && isAlreadyLogin" class="user">
      <img v-if="userPhoto" :src="userPhoto" alt="userprofile">
      <img v-else src="@/assets/avatar.png" alt="avator">
      <p class="user-name">{{ userName }}</p>
      <p class="user-email">{{ userEmail }}</p>
      <p class="user-twitterid">{{ userTwitterid }}</p>
      <p class="logout-gate" @click="logoutUser ()">Log out</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import GoogleIcon from '@/assets/icons/GoogleIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import GithubIcon from '@/assets/icons/GithubIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';

export default {
  name: 'Login',
  components: { GoogleIcon, FacebookIcon, GithubIcon, TwitterIcon },
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
      bottomMessage: 'New to Sick-Poker-Timer?',
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      // user infoomation
      userName: '',
      userEmail: '',
      userTwitterid: '',
      userPhoto: ''
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAlreadyLogin = true;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.userPhoto = user.photoURL;
        console.log('login');
        console.log(user);
        console.log(`name: ${user.displayName}`);
        console.log(`email: ${user.email}`);
        console.log(`emailVerified: ${user.emailVerified}`);
        console.log(`photoURL: ${user.photoURL}`);
        console.log(`isAnonymous: ${user.isAnonymous}`);
        console.log(`uid: ${user.uid}`);
        console.log(`providerData: ${user.providerData}`);
      } else {
        this.isAlreadyLogin = false;
        console.log('logout');
      }
    });
  },
  methods: {
    formOpen () {
      this.isFormOpen = !this.isFormOpen;
      this.$emit('switchOverlay');
    },
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user);
      }).catch(error => {
        this.isError = true;
        this.errorMessage = error.message;
      });
    },
    facebookLogin () {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user);
      }).catch(error => {
        this.isError = true;
        this.errorMessage = error.message;
      });
    },
    githubLogin () {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user);
      }).catch(error => {
        this.isError = true;
        this.errorMessage = error.message;
      });
    },
    twitterLogin () {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider).then(userCredential => {
        console.log(`this is ${userCredential.additionalUserInfo.username}`);
        this.userTwitterid += `@${userCredential.additionalUserInfo.username}`
      }).catch(error => {
        this.isError = true;
        this.errorMessage = error.message;
      });
    },
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
  .login-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 5%;
    margin: 0;
    &:hover { cursor: pointer; }
  }
  .overlay {
    background: rgba(#000, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
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
      color: #aaa;
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
      .form-check {
        color: #777;
        font-size: 12.8px;
        padding: 0;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        input {
          margin: 2px 6px;
        }
        label {
          margin: 0;
        }
      }
    }
    .sns-login {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 30px 0;
      li { list-style: none; }
    }
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
  .user {
    color: #aaa;
    background: #222;
    position: absolute;
    top: 35px;
    right: 5%;
    padding: 10px 20px;
    z-index: 100;
    text-align: center;
    border-radius: 10px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 10px 0;
    }
    p { margin: 0; }
    .user-name {
      font-size: 20px;
      font-weight: 600;
    }
    .logout-gate {
      color: #666;
      transition: 200ms;
      margin: 10px 15px;
      &:hover { cursor: pointer; }
    }
  }
}
</style>
