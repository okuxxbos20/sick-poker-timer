<template>
  <div class="infomation row">
    <p class="info col-sm-4">Players :
      <button @click="playersUp()" type="button">
        <i class="fas fa-plus"></i>
      </button>
      <span>{{ currentPlayers }}</span>
      <button @click="playersDown()" type="button">
        <i class="fas fa-minus"></i>
      </button>
      <span class="slash">/</span>
      <span class="denominator">{{ originalPlayers }}</span>
    </p>
    <p class="info col-sm-4">AVG Stack :
      <span>${{ totalStack | adComma }}</span>
    </p>
    <p class="info col-sm-4">In The Money :
      <span>{{ inTheMoney }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Infomation',
  data() {
    return {
      currentPlayers: this.$store.getters.g_players
    }
  },
  filters: {
    adComma (avg) {
      const delimeter = new Intl.NumberFormat();
      return delimeter.format(avg);
    }
  },
  computed: {
    originalPlayers () {
      return this.$store.getters.g_players;
    },
    totalStack () {
      return Math.floor( this.$store.getters.g_total / this.currentPlayers );
    },
    inTheMoney () {
      return this.$store.getters.g_itm;
    }
  },
  methods: {
    playersUp () {
      this.currentPlayers >= this.originalPlayers ? this.currentPlayers : this.currentPlayers ++;
    },
    playersDown () {
      this.currentPlayers === 1 ? 1 : this.currentPlayers --;
    }
  }
}
</script>

<style lang="scss" scoped>
.infomation {
  .info {
    color: #777;
    font-size: 20px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    span {
      color: var(--currentTheme);
      font-size: 40px;
      font-weight: 200;
    }
    .slash {
      color: #777;
      font-size: 25px;
    }
    .denominator { font-size: 25px; }
  }
  button {
    color: var(--currentTheme);
    font-size: 11px;
    width: 25px;
    height: 25px;
    margin: 0 1px;
    padding-top: 5px;
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
}
</style>
