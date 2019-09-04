<template>
  <div ref="bar" id="app">
    <Navbar/>
      <Showcase /> 
    <div class="container">
      <br>
      <h5 class="blue-text">Featured Products</h5>
      <ProductGrid />   
      <Checkout />  
      <Tracking />     
    </div> 
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Showcase from './components/Showcase.vue'
import ProductGrid from './components/ProductGrid.vue'
import Checkout from './components/Checkout.vue'
import Basket from './components/Basket.vue'
import Tracking from './components/Tracking.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Showcase,
    ProductGrid,
    Checkout,
    Basket,
    Tracking
  }
}


</script>

<style>

</style>
