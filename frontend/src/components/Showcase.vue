<template>
  <div class="showcase carousel carousel-slider">
    <a v-for="showcase in showcases" class="carousel-item" href="#"><ProductShowcase :imgUrl="showcase.photo" :promoText="showcase.text" /></a>
  </div>
</template>

<script>
import Product from './Product.vue'
import ProductShowcase from './ProductShowcase.vue'
import { setInterval } from 'timers';
import ShowcaseData from '../data/showcases.json'


export default {
  name: 'Showcase',
  data: function() {
    return {
      showcases: ShowcaseData
    }
  },
  props: {
    msg: String
  },
  components: {
    Product,
    ProductShowcase
  }  
}

$(document).ready(function(){
  $('.carousel').carousel({
    fullWidth: true,
    indicators: true
  });
});

setInterval(function() {
  $('.carousel').carousel('next');
}, 10000)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-price {
    text-align: right;
    margin-top: 15px;
    font-weight: bold;
    display: inline-block;
    float: right;
    margin-left: 10px;
    
    &:last-child {
      margin-left: 0;
    }
  }

  .product-price--before {
    font-weight: normal;
    text-decoration: line-through;
  }

  .showcase {
    height: 70vh;
    overflow: hidden;
    /* background: rgba(255,255,255,1);
    background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));
    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 ); */
  }
</style>
