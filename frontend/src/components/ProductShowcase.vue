<template>
  <div style="white-space: nowrap; overflow: hidden;">
    <!-- <img v-bind:src="imgUrl" height="auto" width="100%">   -->
     <img :src="require('../assets/' + imgUrl)" height="auto" width="100%">  
     <span class="promo-text2">{{promoText}}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',
  props: {
    imgUrl: String,
    promoText: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .promo-text2 {
    font-family: "Futura","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 1000;
    font-size: 60px;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: white;
    position: absolute;
    left: 10px;
    bottom: 20px;
  }

  .promo-text {
    -webkit-text-stroke: 1px white;
    /* color: white; */
    text-shadow:
        3px 3px 0 white,
      -1px -1px 0 white,  
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white;

    position: absolute; left: 10px; bottom: 10px; font-weight: bold; font-size: 38px;
  }

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

/* @charset "UTF-8"; */
@import url("//fonts.googleapis.com/css?family=Pacifico&text=Pure");
/* @import url("//fonts.googleapis.com/css?family=Roboto:700&text=css"); */
@import url("//fonts.googleapis.com/css?family=Kaushan+Script&text=!");

.stage {
  height: 200px;
  width: 300px;
  /* margin: auto; */
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 17px;
  left: 0;
  perspective: 9999px;
  transform-style: preserve-3d;
}

.layer {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;
  animation-fill-mode: forwards;
  transform: rotateY(10deg) rotateX(0) translateZ(0);
}

.layer:after {
  font: 150px/0.65 'Pacifico', 'Kaushan Script', Futura, 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;
  content: 'NIKE\A    sale!';
  white-space: pre;
  text-align: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: -50px;
  left: 50px;
  color: whitesmoke;
  letter-spacing: -2px;
  text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13);
}

.layer:nth-child(1):after {
  transform: translateZ(0px);
}

.layer:nth-child(2):after {
  transform: translateZ(-1.5px);
}

.layer:nth-child(3):after {
  transform: translateZ(-3px);
}

.layer:nth-child(4):after {
  transform: translateZ(-4.5px);
}

.layer:nth-child(5):after {
  transform: translateZ(-6px);
}

.layer:nth-child(6):after {
  transform: translateZ(-7.5px);
}

.layer:nth-child(7):after {
  transform: translateZ(-9px);
}

.layer:nth-child(8):after {
  transform: translateZ(-10.5px);
}

.layer:nth-child(9):after {
  transform: translateZ(-12px);
}

.layer:nth-child(10):after {
  transform: translateZ(-13.5px);
}

.layer:nth-child(11):after {
  transform: translateZ(-15px);
}

.layer:nth-child(12):after {
  transform: translateZ(-16.5px);
}

.layer:nth-child(13):after {
  transform: translateZ(-18px);
}

.layer:nth-child(14):after {
  transform: translateZ(-19.5px);
}

.layer:nth-child(15):after {
  transform: translateZ(-21px);
}

.layer:nth-child(16):after {
  transform: translateZ(-22.5px);
}

.layer:nth-child(17):after {
  transform: translateZ(-24px);
}

.layer:nth-child(18):after {
  transform: translateZ(-25.5px);
}

.layer:nth-child(19):after {
  transform: translateZ(-27px);
}

.layer:nth-child(20):after {
  transform: translateZ(-28.5px);
}

.layer:nth-child(n+10):after {
  -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
}

.layer:nth-child(n+11):after {
  -webkit-text-stroke: 15px dodgerblue;
  text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b;
}

.layer:nth-child(n+12):after {
  -webkit-text-stroke: 15px #0077ea;
}

.layer:last-child:after {
  -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
}

.layer:first-child:after {
  color: #fff;
  text-shadow: none;
}

/* @keyframes ಠ_ಠ {
  100% {
    transform: rotateY(0deg) rotateX(-3deg);
  }
} */

</style>
