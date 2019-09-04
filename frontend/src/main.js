import Vue from 'vue'
import App from './App.vue'
import StoreData from './data/store.json'

Vue.config.productionTip = false

window.vue = new Vue({
  data: {
    total: 0,
    counter: 0,
    orderId: 0,
    orderTrackingId: " ",
    orderTrackingInfo: " ",
    orderTrackingUpdates: 0,
    orderAddress: "",
    cart: [],
    store: StoreData
  },
  methods: {
    getFormattedTotal: function () {
      return ("€ ") + this.total.toFixed(2);
    },  
    getTotal: function() {
      return this.total.toFixed(2);
    },
    addToCart: function(item) {
      this.cart.push(item);
      this.total = 0;
      this.cart.forEach(element => {
        this.total += (element.price * element.quantity);
      });
    },
    emptyCart: function() {
      this.cart = [];
      this.total = 0;
    },
    getCart: function() {
      return this.cart;
    }
  },
  computed: {
    formattedTotal: function() {
      return ("€ ") + this.total.toFixed(2);      
    }
  },
  render: h => h(App),
}).$mount('#app')

