import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import alarmClock from '@/assets/audio/alarmClock.mp3';
import tearDrop from '@/assets/audio/tearDrop.mp3';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCka_UjHTfc-PldajmFKkjD_oMsaekXyG0",
  authDomain: "sick-poker-timer-592aa.firebaseapp.com",
  databaseURL: "https://sick-poker-timer-592aa.firebaseio.com",
  projectId: "sick-poker-timer-592aa",
  storageBucket: "sick-poker-timer-592aa.appspot.com",
  messagingSenderId: "403411495017",
  appId: "1:403411495017:web:ff2427f86e2e2e035a5af8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = new Vuex.Store({
  state: {
    status: false,
    theme: {
      redTheme: {
        color: '#f03434',
        isSelected: false
      },
      greenTheme: {
        color: '#26a65b',
        isSelected: true
      },
      blueTheme: {
        color: '#00b5cc',
        isSelected: false
      },
      purpleTheme: {
        color: '#9a12b3',
        isSelected: false
      },
      yellowTheme: {
        color: '#f7ca18',
        isSelected: false
      },
      orangeTheme: {
        color: '#e67e22',
        isSelected: false
      },
      greyTheme: {
        color: '#dadfe1',
        isSelected: false
      }
    },
    audio: [
      {
        name: 'alarmClock',
        src: alarmClock,
        isSelectd: true
      },
      {
        name: 'tearDrop',
        src: tearDrop,
        isSelectd: false
      }
    ],
    strategy: [
      [1, 2, 0, 20],
      [5, 10, 0, 600],
      [10, 20, 0, 600],
      [20, 40, 0, 600],
      [30, 60, 0, 600],
      [40, 80, 0, 600],
      [50, 100, 0, 600],
      [60, 120, 0, 600],
      [70, 140, 0, 600],
      [80, 160, 0, 600],
      [90, 180, 0, 600],
      [100, 200, 0, 600],
      [150, 300, 0, 600],
      [200, 400, 0, 600]
    ],
    break: [10, 'min break'],
    level: 1,
    players: 6,
    total: 6000,
    itm: 3,
    timer: null
  },
  mutations: {
    m_startTimer (state) {
      state.timer = setInterval(() => {
        if (state.strategy[state.level-1][3] === 16) {
          const selectedSound = state.audio.filter((v) => v.isSelectd)[0].src
          const audio = new Audio(selectedSound);
          audio.play();
        }
        if (state.strategy[state.level-1][3] <= 0) {
          state.level ++;
        }
        state.strategy[state.level-1].splice(3, 1, state.strategy[state.level-1][3]-1);
      }, 1000);
      state.status = !state.status ? true : false;
    },
    m_stopTimer (state) {
      clearInterval(state.timer);
      this.timer = null;
      state.status = !state.status ? true : false;
    },
    m_counterUp (state) {
      state.strategy[state.level-1].splice(3, 1, state.strategy[state.level-1][3]+60);
    },
    m_counterDown (state) {
      if (state.strategy[state.level-1][3] <= 0) {
        state.level ++;
      }
      state.strategy[state.level-1].splice(3, 1, state.strategy[state.level-1][3]-60);
    },
    m_sbUp (state, idx) {
      state.strategy[idx].splice(0, 1, state.strategy[idx][0]+1);
    },
    m_sbInput (state, payload) {
      state.strategy[payload.idx][0] = payload.input;
    },
    m_sbDown (state, idx) {
      if (state.strategy[idx][0] === 1) {
        state.strategy[idx].splice(0, 1, 1);
      } else {
        state.strategy[idx].splice(0, 1, state.strategy[idx][0]-1);
      }
      console.log(state.strategy[idx][0]);
    },
    m_bbUp (state, idx) {
      state.strategy[idx].splice(1, 1, state.strategy[idx][1]+1);
    },
    m_bbInput (state, payload) {
      state.strategy[payload.idx][1] = payload.input;
    },
    m_bbDown (state, idx) {
      if (state.strategy[idx][1] === 1) {
        state.strategy[idx].splice(1, 1, 1);
      } else {
        state.strategy[idx].splice(1, 1, state.strategy[idx][1]-1);
      }
    },
    m_anteUp (state, idx) {
      state.strategy[idx].splice(2, 1, state.strategy[idx][2]+1);
    },
    m_anteInput (state, payload) {
      state.strategy[payload.idx][2] = payload.input;
    },
    m_anteDown (state, idx) {
      if (state.strategy[idx][2] === 0) {
        state.strategy[idx].splice(2, 1, 0);
      } else {
        state.strategy[idx].splice(2, 1, state.strategy[idx][2]-1);
      }
    },
    m_durationUp (state, idx) {
      state.strategy[idx].splice(3, 1, state.strategy[idx][3]+60);
    },
    m_durationInput (state, payload) {
      state.strategy[payload.idx][3] = payload.input;
    },
    m_durationDown (state, idx) {
      if (state.strategy[idx][3] === 0) {
        state.strategy[idx].splice(3, 1, 0);
      } else {
        state.strategy[idx].splice(3, 1, state.strategy[idx][3]-60);
      }
    },
    m_strategyAdd (state) {
      const len = state.strategy.length - 1;
      state.strategy.push([
        state.strategy[len][0] + 100,
        (state.strategy[len][0] + 100) * 2,
        0,
        600
      ]);
    },
    m_strategyRemove (state) {
      state.strategy.pop();
    },
    // m_breakAdd (state) {
    //
    // },
    // m_breakRemove (state) {
    //
    // },
    m_players (state, payload) {
      state.players = payload;
    },
    m_playersUp (state) {
      state.players ++;
    },
    m_playersDown (state) {
      state.players == 1 ? 1 : state.players --;
    },
    m_total (state, payload) {
      state.total = payload;
    },
    m_itm (state, payload) {
      state.itm = payload;
    }
  },
  getters: {
    g_timer: function (state) {
      var currentDuration = state.strategy[state.level-1][3];
      var min = Math.floor(currentDuration / 60);
      var sec = currentDuration - min * 60;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      return { min, sec };
    },
    g_status: function (state) {
      return state.status;
    },
    g_level: function (state) {
      return state.level;
    },
    g_players: function (state) {
      return state.players;
    },
    g_total: function (state) {
      return state.total;
    },
    g_itm: function (state) {
      return state.itm;
    },
    g_strategy: function (state) {
      return state.strategy;
    }
  }
});

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
});

export default store;
