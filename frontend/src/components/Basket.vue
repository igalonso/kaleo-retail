<template>
  <div>
    <span class="card-title activator grey-text text-darken-4 m-top-15"><b>Your order</b></span>
    <span><b>{{ $root.cart.length }} items</b></span>
    <ul class="collection">
      <li class="collection-item avatar" v-for="(product, index) in $root.cart">
        <img :src="product.imageUrl" alt="" class="circle">
        <div class="row">
          <div class="col s12 l4 m4 truncate">
            <span class="title">{{ product.title }}</span>
            <p>${{ product.price }}</p>
          </div>
          <div class="col s12 l2 m2 hide-on-med-and-down">
            <p>{{ product.quantity }}</p>
          </div>        
          <div class="col s12 l4 m4">
            <p>${{ (product.price * product.quantity).toFixed(2) }}</p>
          </div>   
          <div class="col s12 l2 m2">
            <a href="#!"><i class="material-icons">clear</i></a>
          </div>                                    
        </div>
        <!-- <a href="#!" class="secondary-content"><i class="material-icons">clear</i></a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  props: {
  },
  methods: {
  }
}
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
</style>
