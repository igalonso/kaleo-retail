<template>
  <div class="card" style="overflow: hidden; max-height: 472px;">
    <div class="card-image" style="height: 300px;">
      <img :src="imageUrl" style="width: auto; height: 100%; margin: auto;">
      <a v-on:click="addToCart" class="btn-floating halfway-fab waves-effect waves-light indigo darken-4"><i class="material-icons">shopping_basket</i></a>
    </div>
    <div class="card-content">
      <span class="flow-text">{{ title }}</span>
      <div class="row">
        <div class="d-block input-field col s12 m12 l12">
          <span class="product-price">€ {{ price }}</span>
          <span class="product-price product-price--before grey-text text-darken-1">$179</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: String,
    title: String,
    imageUrl: String,
    description: String,
    price: Number
  },
  methods: {
    addToCart: function () {
      this.$root.addToCart({id: this.$props.id, title: this.$props.title, price: this.$props.price, imageUrl: this.$props.imageUrl, quantity: 1});
    }    
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
