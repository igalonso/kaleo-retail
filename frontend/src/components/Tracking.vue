<template>
  <div id="tracking-modal" class="modal modal-fixed-footer">
    <div class="modal-header">
      <nav>
        <div class="nav-wrapper" style="padding-left: 10px;">
          <a href="#" class="brand-logo">Order Tracking<i class="material-icons">drive_eta</i></a>
        </div>
      </nav>
    </div>
    <div class="modal-content">
      <!-- <div class="container wrapper"> -->
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="card" id="step-1">
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"><b>Information</b></span>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <input id="order_id" v-model="$root.orderTrackingId" type="text" autocomplete="order">
                        <label class="active" for="order_id">Order Tracking Id</label> 
                      </div>
                      <div class="input-field col s12 m12 l12 m-top-15">
                        <label class="active">Order Tracking Locations</label> 
                        <table>
                          <thead>
                            <th>Timestamp</th>
                            <th>Location</th>
                          </thead>
                          <tbody>
                            <tr v-for="track in trackingLocations">
                              <td>{{ track.date }}</td>
                              <td>{{ track.location }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>   
                      <div class="col s12 m12 l12">
                        <iframe width="100%" height="450" frameborder="0" style="border:0" v-bind:src="updatedMapsUrl" allowfullscreen></iframe>                    
                      </div>                                          
                    </div>
                  </form>
                </div>
              </div> 
            </div>          
          </div>
        </div>
      <!-- </div> -->
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
  name: 'Tracking',
  props: {
  },
  data: function () {
    return {
      mapsUrl: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCc3fwcWc_G8zJw1o9DHd-X1eRMNdbhSLQ",
      updatedMapsUrl: "",
      localTrackingId: "",
      trackingLocations: {},
      trackingTimer: null
    }
  },
  components: {

  },
  computed: {
    // a computed getter

  },
  methods: {
    update: function() {
      this.$forceUpdate();
    }
  },
  mounted() {
    var self = this;

    $('#tracking-modal').modal({
      onOpenEnd: function() {
        self.update();
        self.$root.orderTrackingUpdates = 0;
        self.localTrackingId = "";

        if (!self.trackingTimer != null) {
          self.trackingTimer = setInterval(function() {
            if (self.$root.orderTrackingId) {
              if (self.localTrackingId != self.$root.orderTrackingId.trim()) {
                self.localTrackingId = self.$root.orderTrackingId.trim();

                // Get order address
                axios.get('https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/' + self.localTrackingId + '?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd').then(function (response) {
                  if (response.data != null) {
                    var orderId = response.data.order;
                    axios.get('https://emea-poc13-test.apigee.net/v1/kaleo/orders/' + orderId + '?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd').then(function (response) {
                      if (response.data != null)
                        self.$root.orderAddress = response.data["shipping-address"];
                    });
                  }
                });
              }

              if (self.$root.orderAddress) {
                axios.get('https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/' + self.localTrackingId + '/locations?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd').then(function (response) {
                  if (response.data != null) {
                    var newLength = Object.keys(response.data).length;
                    var existingLength = Object.keys(self.trackingLocations).length;
                    if (newLength != existingLength) {
                      self.$root.orderTrackingUpdates = newLength - existingLength;
                      self.trackingLocations = response.data;
                      for (var i in self.trackingLocations) {
                        var track = self.trackingLocations[i];
                        var newDate = new Date(track.timestamp);
                        track["date"] = newDate.toLocaleString();
                      }

                      self.updatedMapsUrl = self.mapsUrl + "&origin=" + encodeURI(self.$root.store.address) + "&destination=" + encodeURI(self.$root.orderAddress);
                      var newUrl = self.updatedMapsUrl + "&waypoints=";
                      var first = true;
                      for (const [key, value] of Object.entries(response.data)) {
                        if (!first) 
                          newUrl = newUrl + "|";

                        newUrl = newUrl + value.location;
                        first = false;
                      }                
                      
                      self.updatedMapsUrl = newUrl;
                    }
                  } else {
                    //self.updatedMapsUrl = self.mapsUrl;
                    self.orderTrackingInfo = "";
                  }
                })
                .catch(function () {
                });
              }
            }            
          }, 2000);
        }
      },
      onCloseEnd: function() {
        //clearInterval(self.$root.orderTrackingInterval);
        self.$root.orderTrackingUpdates = 0;
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
