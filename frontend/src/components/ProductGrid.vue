<template>
  <div class="row">
    <div v-for="product in products" class="col s12 m6 l4"><Product :id="product.id" :title="product.title" :imageUrl="product.imageUrl" :price="product.price" /></div>
  </div>
</template>

<script>
import Product from './Product.vue'
import ProductData from '../data/products.json'

export default {
  name: 'ProductGrid',
  props: {
    msg: String
  },
  data: function() {
    return {
      products: ProductData
    }
  },
  components: {
    Product
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
