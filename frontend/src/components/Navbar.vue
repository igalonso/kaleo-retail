<template>
  <div class="navbar-fixed">
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">{{ this.$root.store.name }}<i class="material-icons logo-icon">{{ $root.store.materialIcon }}</i></a>

        <ul class="right hide-on-med-and-down">
          <li><a class="waves-effect waves-light" v-on:click="tracking()">Order Tracking <span v-if="$root.orderTrackingUpdates > 0" class="new badge">{{ $root.orderTrackingUpdates }}</span></a></li>
          <li><a class="waves-effect waves-light" v-on:click="checkout()">Shopping Cart ({{ $root.getFormattedTotal() }})</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a class="waves-effect waves-light">Shopping Cart (€ {{ this.$root.getFormattedTotal() }})</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>  
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  methods: {
    checkout: function() {
      $('#checkout-modal').modal('open');
    },
    tracking: function() {
      $('#tracking-modal').modal('open');
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-icon {
    font-size: 33px;
  }
</style>
