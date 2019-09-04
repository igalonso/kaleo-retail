<template>
  <div id="checkout-modal" class="modal modal-fixed-footer">
    <div class="modal-header">
      <nav>
        <!-- <div class="nav-wrapper" style="padding-left: 10px;">
          <a href="#" class="brand-logo">Checkout<i class="material-icons">shopping_cart</i></a>
        </div> -->
        <div class="col s12" style="padding-left: 10px">
          <a href="#!" v-on:click="prev()" class="breadcrumb">Checkout Information</a>
          <a href="#!" v-if="phase>0" class="breadcrumb">Summary</a>
          <a href="#!" v-if="phase>1" class="breadcrumb">Tracking</a>
        </div>
      </nav>
    </div>
    <div class="modal-content">
      <!-- <div class="container wrapper"> -->
        <div class="row">
          <div v-if="phase==0" class="col s12 m6 l6">
            <div class="card">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><b>Address</b></span>
                <div class="row m-top-15">
                  <form id="address-form" autocomplete="off" class="col s12">
                    <div class="row">
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="full_name" v-model="address.name" type="text" autocomplete="nope" class="validate" required pattern=".+ .+">
                        <label for="full_name">Full name</label> 
                        <span class="helper-text" data-error="Please enter your first and last name." data-success="">First and last name</span>
                      </div>
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <i class="material-icons prefix">business</i>
                        <input id="company" v-model="address.company" type="text">
                        <label for="company">Company (optional)</label>
                      </div>
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <i class="material-icons prefix">directions</i>
                        <input id="address" v-model="address.address" type="text" class="validate" required pattern=".+" placeholder="Enter your full address">
                        <label for="address"></label>
                        <span class="helper-text" data-error="Please enter a valid address." data-success="">Shipping address</span>
                      </div>  
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <i class="material-icons prefix">email</i>
                        <input id="email" v-model="address.email" type="text" class="validate" required pattern=".+@.+">
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="Please enter a valid email address." data-success="">A valid email address containing an @ symbol.</span>
                      </div>  
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <i class="material-icons prefix">phone</i>
                        <input id="phone" v-model="address.telephone" type="text">
                        <label for="phone">Phone (optional)</label>
                      </div>                                                                                        
                    </div>
                  </form>
                </div>
              </div> 
            </div>          
          </div>
          <div v-if="phase==0" class="col s12 m6 l6">
            <div class="card" id="step-1">
              <div class="card-content">
                <Basket />
                <div class="card-action">
                  <span><b>Total</b></span>
                  <span class="right"><b>{{this.$root.getFormattedTotal()}}</b></span>
                </div>                
              </div>
            </div>
          </div>          
          <div v-if="phase==0" class="col s12 m6 l6">
            <div class="card" id="step-1">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><b>Payment</b></span>
                <div class="row m-top-15">
                  <form action="#">
                    <p>
                      <label>
                        <input name="group1" type="radio" checked />
                        <span>Visa (XXXXX-XXXX-XXXX-XX24)</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio" />
                        <span>PayPal</span>
                      </label>
                    </p>
                  </form>
                </div>
              </div>
            </div>  
          </div>  
          <div v-if="phase==0" class="col s12 m6 l6">
            <div class="card" id="step-1">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><b>Delivery</b></span>
                <div class="row m-top-15">
                  <form action="#">
                    <p>
                      <label>
                        <input name="group1" type="radio" />
                        <span>DHL</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio" />
                        <span>FedEx</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio" checked/>
                        <span>GoNow with Live Tracking</span>
                      </label>
                    </p>                    
                  </form>
                </div>
              </div>
            </div>  
          </div>    
          <div v-if="phase==1" class="col s12 m12 l12">
            <div class="card" id="step-4" v-cloak>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><b>Order summary</b></span>
                <div class="row info">
                  <div class="col s12 m6">
                    <p><b>Billing address:</b></p>
                    <p>{{ address.name }}</p>
                    <p>{{ address.company }}</p>
                    <p>{{ address.address }}</p>
                    <p>{{ address.email }}</p>
                    <p>{{ address.telephone }}</p>
                  </div>
                  <div class="col s12 m6">
                    <p><b>Delivery address:</b></p>
                    <p>{{ address.name }}</p>
                    <p>{{ address.company }}</p>
                    <p>{{ address.address }}</p>
                    <p>{{ address.email }}</p>
                    <p>{{ address.telephone }}</p>
                  </div>
                </div>
                <Basket />
              </div>
              <div class="card-action">
                <span><b>Total</b></span>
                <span class="right"><b>{{this.$root.getFormattedTotal()}}</b></span>
              </div>
              <div class="card-action">
                <span class="card-title activator grey-text text-darken-4"><b>Payment</b></span>
                <p class="payment-info">Please choose your desired payment method. Credit card option will redirect you to the payment gateway.</p>
                <p>
                  <label>
                      <input type="checkbox"  class="filled-in" />
                      <span>Please sign me up for the newsletter</span>
                  </label></p>
                <p>
                  <label>
                      <input type="checkbox" v-model="consent" class="filled-in" />
                      <span>I hereby confirm that the information that I have provided is correct and that I accept the <a href="#" class="indigo-text text-darken-4">Terms and Conditions</a></span>
                  </label>
                </p>
              </div>
            </div>     
          </div>     
        </div>
      <!-- </div> -->
    </div>
    <div class="modal-footer">
      <a v-if="phase==0" href="#!" v-on:click="next()" class="waves-effect waves-green btn-flat">Next</a>
      <a v-if="phase==1" href="#!" v-on:click="prev()" class="waves-effect waves-green btn-flat">Back</a>
      <a v-if="phase==1" href="#!" v-on:click="submit()" class="waves-effect waves-green btn-flat">Submit</a>
    </div>
  </div>
</template>

<script>
import Basket from './Basket.vue'

export default {
  name: 'Checkout',
  props: {
    msg: String
  },
  data: function () {
    return {
      phase: 0,
      address: {
        name: "",
        company: "",
        address: "",
        email: "",
        telephone: "",
        zip: "",
        country: "",
        street: "",
        number: "",
        city: ""
      },
      place: null,
      consent: false,
      gmaps: null
    }
  },
  components: {
    Basket
  },
  computed: {
    // a computed getter
    cart2: function () {
      // `this` points to the vm instance
      return this.$root.getCart();
    }
  },
  methods: {
    update: function() {
      var self = this;
      setTimeout(f => {
        var input = document.getElementById('address');
        self.gmaps = new google.maps.places.Autocomplete(input);
        self.$forceUpdate();        
      }, 100);
    },
    next: function() {
      var name = document.getElementById('full_name');
      var address = document.getElementById('address');
      var email = document.getElementById('email');

      if(!name.validity.valid) {
        name.focus();
      }  
      else if (!address.validity.valid) {
        address.focus();
      }
      else if (!email.validity.valid) {
        email.focus();
      }
      else {
        // Get place from GMaps
        var newPlace = this.gmaps.getPlace();
        if (newPlace != undefined) {
          this.place = newPlace;

          this.address.address = this.place.formatted_address;
          this.$root.orderAddress = this.address.address;

          for(var i in this.place.address_components) {
            var part = this.place.address_components[i];

            for(var p in part.types) {
              var type = part.types[p];
              if (type == "street_number")
                this.address.number = part.long_name;
              else if (type == "route")
                this.street = part.long_name;
              else if (type == "locality")
                this.city = part.long_name;     
              else if (type == "country")
                this.country = part.short_name;      
              else if (type == "postal_code")
                this.zip = part.long_name;                                
            }
          }
        }

        this.phase=1;
      }
    },
    prev: function() {
      this.phase = 0;
      this.update();
      setTimeout(function() {
        M.updateTextFields();
      }, 100);
    },
    submit: function() {
      // First submit order
      var self = this;

      // First create order to be claimed by shipment company
      axios.post('https://emea-poc13-test.apigee.net/v1/kaleo/orders?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd', {
          "cart-token": "Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd",
          "billing-address": this.address.address,
          "currency": "EUR",
          "payment-details": "VISA",
          "shipping-address": this.address.address,
          "total-price": this.$root.getTotal(),
          "user-id": "43868"        
        })
        .then(function (response) {

          self.$root.emptyCart();     
          self.$root.orderId = response.data.name; 
          var currentDate = new Date();
          var deliveryDate = new Date();
          deliveryDate.setDate(currentDate.getDate() + 1);
          // Then create tracking number
          axios.post('https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd', {
            "order": self.$root.orderId,
            "courier": "34243",
            "sent-date": currentDate.toISOString(),
            "status": "in-transit",
            "courier-tracking-id": "432432",
            "origin-country": "DE",
            "destination-country": self.address.country,
            "destination-postal-code": self.address.zip,
            "emails": "info@gonow.de",
            "order-promised-delivery-date": deliveryDate.toISOString(),
            "delivery-type": "door-delivery",
            "courier-contact-number": "454545"
          })
          .then(function (response) {
            self.$root.orderTrackingId = response.data.name;    
            axios.post("https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/" + self.$root.orderTrackingId + "/locations?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd", 
            {
              "location": self.$root.store.address
            }
            ).then(function (response) {
              $('#checkout-modal').modal('close');
              $('#tracking-modal').modal('open');     
            })
            .catch(function (error) {
              console.log(error);
            });               
    
          })
          .catch(function (error) {
            console.log(error);
          });  

          $('#checkout-modal').modal('close');
          $('#tracking-modal').modal('open');          
        })
        .catch(function (error) {
          console.log(error);
        });         
    },
    setOrderId: function(orderId) {
      this.$root.orderId = orderId;
    }
  },
  mounted() {
    var self = this;
    $('#checkout-modal').modal({
      onOpenEnd: function() {
        // prev does both a reset to tab 0 and a display update
        self.prev();
      }
    });    
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
