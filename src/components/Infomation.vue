<template>
  <div>

    <div class="infomation row">
      <!-- players left -->
      <p class="info col-md-4">Players Left :
        <button @click="playersUp()" type="button">
          <i class="fas fa-plus"></i>
        </button>
        <span>{{ players_left() }}</span>
        <button @click="playersDown()" type="button">
          <i class="fas fa-minus"></i>
        </button>
        <span class="slash">/</span>
        <span class="denominator">{{ r_players() }}</span>
      </p>
      <!-- players left -->

      <!-- avg -->
      <p class="info col-md-4">AVG Stack :
        <span>${{ average_counter() }}</span>
      </p>
      <!-- avg -->

      <!-- In The Money -->
      <p class="info col-md-4">In The Money :
        <span>{{ r_itm() }}</span>
      </p>
      <!-- In The Money -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Infomation',
  props: {},
  data() {
    var original_players = this.$store.getters.g_players;
    return { original_players }
  },
  methods: {
    average_counter () {
      const delimeter = new Intl.NumberFormat();
      const avg = Math.floor( this.$store.getters.g_total / this.players_left() );
      return delimeter.format(avg);
    },
    playersUp () {
      this.original_players >= this.r_players() ? this.r_players : this.original_players ++;
    },
    playersDown () {
      this.original_players === 1 ? 1 : this.original_players --;
    },
    players_left () {
      return this.original_players;
    },
    r_players () {
      return this.$store.getters.g_players;
    },
    r_itm () {
      return this.$store.getters.g_itm;
    }
  },
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
      color: #26a65b;
      font-size: 40px;
      font-weight: 200;
    }
    .slash {
      color: #777;
      font-size: 25px;
    }
    .denominator {
      font-size: 25px;
    }
  }
  button {
    color: #26a65b;
    font-size: 11px;
    width: 25px;
    height: 25px;
    margin: 0 1px;
    padding-top: 5px;
    border-radius: 50%;
    border: none;
    background: transparent;
    transition: 0.2s;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #111;
      background: #26a65b;
    }
  }
}
</style>
