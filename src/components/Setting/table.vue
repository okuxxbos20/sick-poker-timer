<template>
  <div>
    <b-table-simple responsive class="st" borderless>
      <!-- table header -->
      <b-thead class="st-header">
        <b-th>Level</b-th>
        <b-th>SB</b-th>
        <b-th>BB</b-th>
        <b-th>Ante</b-th>
        <b-th>Duration</b-th>
      </b-thead>
      <!-- table header -->
      <b-tbody
        v-for="(n, idx) in r_strategy"
        :key="n[idx]"
        class="tablebody"
        style="margin: 10px 0;"
        row
      >
        <!-- level -->
        <b-td class="t-info">{{ idx + 1 }}</b-td>
        <!-- level -->
        <!-- SB -->
        <b-td noWrap class="t-info">
          <button type="button" class="btn" @click="c_sbUp(idx)">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            class="strategy-input"
            @input="c_sbInput(idx, $event.target.value)"
            v-model="r_strategy[idx][0]"
          >
          <button type="button" class="btn" @click="c_sbDown(idx)">
            <i class="fas fa-minus"></i>
          </button>
        </b-td>
        <!-- SB -->
        <!-- BB -->
        <b-td noWrap class="t-info">
          <button type="button" class="btn" @click="c_bbUp(idx)">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            class="strategy-input"
            @input="c_bbInput(idx, $event.target.value)"
            v-model="r_strategy[idx][1]"
          >
          <button type="button" class="btn" @click="c_bbDown(idx)">
            <i class="fas fa-minus"></i>
          </button>
        </b-td>
        <!-- BB -->
        <!-- Ante -->
        <b-td noWrap class="t-info">
          <button type="button" class="btn" @click="c_anteUp(idx)">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            class="strategy-input"
            @input="c_anteInput(idx, $event.target.value)"
            v-model="r_strategy[idx][2]"
          >
          <button type="button" class="btn" @click="c_anteDown(idx)">
            <i class="fas fa-minus"></i>
          </button>
        </b-td>
        <!-- Ante -->
        <!-- Duration -->
        <b-td noWrap class="t-info">
          <button type="button" class="btn" @click="c_durationUp(idx)">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            class="strategy-input"
            @input="c_durationInput(idx, $event.target.value)"
            :value="r_strategy[idx][3]/60"
          >min
          <button type="button" class="btn" @click="c_durationDown(idx)">
            <i class="fas fa-minus"></i>
          </button>
        </b-td>
        <!-- Duration -->
      </b-tbody>
    </b-table-simple>

    <div class="level-and-break">
      <div class="box">
        <button type="button" class="strategy-btn" @click="c_strategyAdd()">
          <i class="fas fa-plus"></i>
        </button>
        <span class="strategy-span" style="margin: 0 3.345px">LEVEL</span>
        <button type="button" class="strategy-btn" @click="c_strategyRemove()">
          <i class="fas fa-minus"></i>
        </button>
      </div>
      <div class="box">
        <button type="button" class="strategy-btn" @click="c_breakAdd()">
          <i class="fas fa-plus"></i>
        </button>
        <span class="strategy-span">BREAK</span>
        <button type="button" class="strategy-btn" @click="c_breakRemove()">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    const strategy = this.$store.getters.g_strategy;
    return {
      strategy,
      borderless: true,
    }
  },
  mounted () {
    console.table(this.strategy);
  },
  methods: {
    c_sbUp (idx) {
      this.$store.commit('m_sbUp', idx);
    },
    c_sbInput (idx, input) {
      const num = Number(input);
      this.$store.commit('m_sbInput', {
        idx: idx,
        input: num
      });
    },
    c_sbDown (idx) {
      this.$store.commit('m_sbDown', idx);
    },
    c_bbUp (idx) {
      this.$store.commit('m_bbUp', idx);
    },
    c_bbInput (idx, input) {
      const num = Number(input);
      this.$store.commit('m_bbInput', {
        idx: idx,
        input: num
      });
    },
    c_bbDown (idx) {
      this.$store.commit('m_bbDown', idx);
    },
    c_anteUp (idx) {
      this.$store.commit('m_anteUp', idx);
    },
    c_anteInput (idx, input) {
      const num = Number(input);
      this.$store.commit('m_anteInput', {
        idx: idx,
        input: num
      });
    },
    c_anteDown (idx) {
      this.$store.commit('m_anteDown', idx);
    },
    c_durationUp (idx) {
      this.strategy[idx][3] / 60 + 1;
      this.$store.commit('m_durationUp', idx);
    },
    c_durationInput (idx, input) {
      const num = Number(input);
      this.$store.commit('m_durationInput', {
        idx: idx,
        input: num
      });
    },
    c_durationDown (idx) {
      this.$store.commit('m_durationDown', idx);
    },
    c_strategyAdd () {
      // scrollBy(0, 138);
      //レスポンシブにスクロールしたい
      this.$store.commit('m_strategyAdd');
    },
    c_strategyRemove () {
      //scrollBy(0, 138);
      //レスポンシブにスクロールしたい
      this.$store.commit('m_strategyRemove');
    },
    c_breakAdd () {
      this.$store.commit('m_breakAdd');
    },
    c_breakRemove () {
      this.$store.commit('m_breakRemove');
    }
  },
  computed: {
    r_strategy: function () {
      return this.$store.getters.g_strategy;
    }
  }
}

</script>

<style lang="scss" scoped>
.st {
  .st-header {
    color: var(--currentTheme);
    font-size: 20px;
    vertical-align: middle;
  }
  th {
    border-top: 1.5px solid #bbb;
    border-bottom: 1.5px solid #bbb;
    width: 20%;
    vertical-align: middle;
  }
  td {
    border-top: 1px solid #777;
  }
  .tablebody {
    color: #aaa;
    border-bottom: 1px solid #777;
  }
  .t-info {
    font-size: 17px;
    font-weight: 300;
    width: 135px;
    padding: 18px 0;
    margin: 10px;
    vertical-align: middle;
    border: none;
  }
  .btn {
    color: var(--currentTheme);
    font-size: 11px;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 3px 1px;
    border-radius: 50%;
    border: none;
    background: transparent;
    transition: 0.2s;
    &:focus { outline: none; }
    &:hover {
      color: #111;
      background: var(--currentTheme);
    }
  }
  .strategy-input {
    color: #aaa;
    text-align: center;
    width: 45px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    transition: 0.2s;
    &:focus { outline: none; }
    &:hover {
      color: var(--currentTheme);
      border-bottom: 2px solid var(--currentTheme);
      border-radius: 0;
    }
  }
}
.level-and-break {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
  justify-content: center;
  .box {
    .strategy-btn {
      color: var(--currentTheme);
      font-size: 20px;
      width: 40px;
      height: 40px;
      padding-top: 5px;
      margin: 20px 15px;
      background: transparent;
      border: none;
      border-radius: 50%;
      transition: 0.2s;
      &:hover {
        color: #111;
        background: var(--currentTheme);
      }
      &:focus { outline: none; }
    }
    .strategy-span {
      color: var(--currentTheme);
      font-size: 20px;
      font-weight: 350;
    }
  }
}
</style>
