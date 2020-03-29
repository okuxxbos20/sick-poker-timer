import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const store = new Vuex.Store({
  state: {
    status: false,
    strategy: [
      [1, 2, 0, 10],
      [5, 10, 0, 600],
      [10, 20, 0, 600],
      [20, 40, 0, 600],
      [30, 60, 0, 600],
      [40, 80, 0, 600],
      [50, 100, 0, 600],
      [100, 200, 0, 600],
      [150, 300, 0, 600],
      [200, 400, 0, 600]
    ],
    break: [10, 'min break'],
    level: 1,
    players: 10,
    total: 10000,
    itm: 3,
    timer: null
  },
  mutations: {
    m_startTimer (state) {
      state.timer = setInterval(() => {
        // if (state.strategy[state.level-1][3] === 5) {
        //   console.log('play audio!');
        //   audio.play();
        // }
        if (state.strategy[state.level-1][3] <= 0) {
          state.level ++;
        }
        state.strategy[state.level-1].splice(3, 1, state.strategy[state.level-1][3]-1);
        console.log(state.strategy[state.level-1][3]);
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
        10
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
  },
  // 非同期処理はactionsで行う.
  actions: {},
});

// history mode
// const router = new VueRouter({
//   routes,
//   mode: 'history',
//   scrollBehavior(to,from,savedPosition){
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//        return { x:0, y:0};
//     }
//   }
// });

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
});

export default store;
