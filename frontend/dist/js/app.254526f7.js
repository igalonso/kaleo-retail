(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d8b":function(t,e,a){},"1de8":function(t,e,a){t.exports=a.p+"img/nike-shirt1.1d22aa3a.jpeg"},"229a":function(t,e,a){},"35f2":function(t,e,a){"use strict";var s=a("c162"),r=a.n(s);r.a},4640:function(t,e,a){"use strict";var s=a("e55b"),r=a.n(s);r.a},5329:function(t){t.exports=JSON.parse('{"name":"Kaleo Retail","address":"Tucholskystr. 2, 10117 Berlin, Germany","materialIcon":"sports_basketball"}')},"56d7":function(t,e,a){"use strict";a.r(e);a("ac6a"),a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"bar",attrs:{id:"app"}},[a("Navbar"),a("Showcase"),a("div",{staticClass:"container"},[a("br"),a("h5",{staticClass:"blue-text"},[t._v("Featured Products")]),a("ProductGrid"),a("Checkout"),a("Tracking")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"light-blue lighten-1",attrs:{role:"navigation"}},[a("div",{staticClass:"nav-wrapper container"},[a("a",{staticClass:"brand-logo",attrs:{id:"logo-container",href:"#"}},[t._v(t._s(this.$root.store.name)),a("i",{staticClass:"material-icons logo-icon"},[t._v(t._s(t.$root.store.materialIcon))])]),a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[a("a",{staticClass:"waves-effect waves-light",on:{click:function(e){return t.tracking()}}},[t._v("Order Tracking "),t.$root.orderTrackingUpdates>0?a("span",{staticClass:"new badge"},[t._v(t._s(t.$root.orderTrackingUpdates))]):t._e()])]),a("li",[a("a",{staticClass:"waves-effect waves-light",on:{click:function(e){return t.checkout()}}},[t._v("Shopping Cart ("+t._s(t.$root.getFormattedTotal())+")")])])]),a("ul",{staticClass:"sidenav",attrs:{id:"nav-mobile"}},[a("li",[a("a",{staticClass:"waves-effect waves-light"},[t._v("Shopping Cart (€ "+t._s(this.$root.getFormattedTotal())+")")])])]),t._m(0)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"nav-mobile"}},[a("i",{staticClass:"material-icons"},[t._v("menu")])])}],c={name:"Navbar",props:{msg:String},methods:{checkout:function(){$("#checkout-modal").modal("open")},tracking:function(){$("#tracking-modal").modal("open")}}},l=c,d=(a("35f2"),a("2877")),p=Object(d["a"])(l,n,o,!1,null,"4e594bf0",null),u=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"showcase carousel carousel-slider"},[a("a",{staticClass:"carousel-item",attrs:{href:"#one!"}},[a("ProductShowcase")],1),a("a",{staticClass:"carousel-item",attrs:{href:"#two!"}},[a("ProductShowcase")],1),a("a",{staticClass:"carousel-item",attrs:{href:"#three!"}},[a("ProductShowcase")],1)])},v=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{overflow:"hidden","max-height":"472px"}},[a("div",{staticClass:"card-image",staticStyle:{height:"300px"}},[a("img",{staticStyle:{width:"auto",height:"100%",margin:"auto"},attrs:{src:t.imageUrl}}),a("a",{staticClass:"btn-floating halfway-fab waves-effect waves-light indigo darken-4",on:{click:t.addToCart}},[a("i",{staticClass:"material-icons"},[t._v("shopping_basket")])])]),a("div",{staticClass:"card-content"},[a("span",{staticClass:"flow-text"},[t._v(t._s(t.title))]),a("div",{staticClass:"row"},[a("div",{staticClass:"d-block input-field col s12 m12 l12"},[a("span",{staticClass:"product-price"},[t._v("€ "+t._s(t.price))]),a("span",{staticClass:"product-price product-price--before grey-text text-darken-1"},[t._v("$179")])])])])])},h=[],g=(a("c5f6"),{name:"Product",props:{id:String,title:String,imageUrl:String,description:String,price:Number},methods:{addToCart:function(){this.$root.addToCart({id:this.$props.id,title:this.$props.title,price:this.$props.price,imageUrl:this.$props.imageUrl,quantity:1})}}}),_=g,C=(a("ee26"),Object(d["a"])(_,f,h,!1,null,"234f56c6",null)),k=C.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%","white-space":"nowrap"}},[s("img",{attrs:{src:a("1de8"),height:"100%",width:"auto"}}),s("img",{attrs:{src:a("a050"),height:"100%",width:"auto"}}),s("img",{attrs:{src:a("adda"),height:"100%",width:"auto"}}),s("div",{staticClass:"stage"},[s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"}),s("div",{staticClass:"layer"})])])}],x={name:"ProductShowcase",props:{msg:String}},w=x,T=(a("89f3"),Object(d["a"])(w,b,y,!1,null,"18155984",null)),P=T.exports,j=a("5118"),O={name:"Showcase",props:{msg:String},components:{Product:k,ProductShowcase:P}};$(document).ready(function(){$(".carousel").carousel({fullWidth:!0,indicators:!0})}),Object(j["setInterval"])(function(){$(".carousel").carousel("next")},1e4);var I=O,E=(a("4640"),Object(d["a"])(I,m,v,!1,null,"70077223",null)),S=E.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.products,function(t){return a("div",{staticClass:"col s12 m6 l4"},[a("Product",{attrs:{id:t.id,title:t.title,imageUrl:t.imageUrl,price:t.price}})],1)}),0)},D=[],N=a("89a8"),A={name:"ProductGrid",props:{msg:String},data:function(){return{products:N}},components:{Product:k}},F=A,q=(a("88b3"),Object(d["a"])(F,U,D,!1,null,"49613fdd",null)),B=q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal modal-fixed-footer",attrs:{id:"checkout-modal"}},[a("div",{staticClass:"modal-header"},[a("nav",[a("div",{staticClass:"col s12",staticStyle:{"padding-left":"10px"}},[a("a",{staticClass:"breadcrumb",attrs:{href:"#!"},on:{click:function(e){return t.prev()}}},[t._v("Checkout Information")]),t.phase>0?a("a",{staticClass:"breadcrumb",attrs:{href:"#!"}},[t._v("Summary")]):t._e(),t.phase>1?a("a",{staticClass:"breadcrumb",attrs:{href:"#!"}},[t._v("Tracking")]):t._e()])])]),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"row"},[0==t.phase?a("div",{staticClass:"col s12 m6 l6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t._m(0),a("div",{staticClass:"row m-top-15"},[a("form",{staticClass:"col s12",attrs:{id:"address-form",autocomplete:"off"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("i",{staticClass:"material-icons prefix"},[t._v("account_circle")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.name,expression:"address.name"}],staticClass:"validate",attrs:{id:"full_name",type:"text",autocomplete:"nope",required:"",pattern:".+ .+"},domProps:{value:t.address.name},on:{input:function(e){e.target.composing||t.$set(t.address,"name",e.target.value)}}}),a("label",{attrs:{for:"full_name"}},[t._v("Full name")]),a("span",{staticClass:"helper-text",attrs:{"data-error":"Please enter your first and last name.","data-success":""}},[t._v("First and last name")])]),a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("i",{staticClass:"material-icons prefix"},[t._v("business")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.company,expression:"address.company"}],attrs:{id:"company",type:"text"},domProps:{value:t.address.company},on:{input:function(e){e.target.composing||t.$set(t.address,"company",e.target.value)}}}),a("label",{attrs:{for:"company"}},[t._v("Company (optional)")])]),a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("i",{staticClass:"material-icons prefix"},[t._v("directions")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.address,expression:"address.address"}],staticClass:"validate",attrs:{id:"address",type:"text",required:"",pattern:".+",placeholder:"Enter your full address"},domProps:{value:t.address.address},on:{input:function(e){e.target.composing||t.$set(t.address,"address",e.target.value)}}}),a("label",{attrs:{for:"address"}}),a("span",{staticClass:"helper-text",attrs:{"data-error":"Please enter a valid address.","data-success":""}},[t._v("Shipping address")])]),a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.email,expression:"address.email"}],staticClass:"validate",attrs:{id:"email",type:"text",required:"",pattern:".+@.+"},domProps:{value:t.address.email},on:{input:function(e){e.target.composing||t.$set(t.address,"email",e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("Email")]),a("span",{staticClass:"helper-text",attrs:{"data-error":"Please enter a valid email address.","data-success":""}},[t._v("A valid email address containing an @ symbol.")])]),a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("i",{staticClass:"material-icons prefix"},[t._v("phone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.telephone,expression:"address.telephone"}],attrs:{id:"phone",type:"text"},domProps:{value:t.address.telephone},on:{input:function(e){e.target.composing||t.$set(t.address,"telephone",e.target.value)}}}),a("label",{attrs:{for:"phone"}},[t._v("Phone (optional)")])])])])])])])]):t._e(),0==t.phase?a("div",{staticClass:"col s12 m6 l6"},[a("div",{staticClass:"card",attrs:{id:"step-1"}},[a("div",{staticClass:"card-content"},[a("Basket"),a("div",{staticClass:"card-action"},[t._m(1),a("span",{staticClass:"right"},[a("b",[t._v(t._s(this.$root.getFormattedTotal()))])])])],1)])]):t._e(),0==t.phase?a("div",{staticClass:"col s12 m6 l6"},[t._m(2)]):t._e(),0==t.phase?a("div",{staticClass:"col s12 m6 l6"},[t._m(3)]):t._e(),1==t.phase?a("div",{staticClass:"col s12 m12 l12"},[a("div",{staticClass:"card",attrs:{id:"step-4"}},[a("div",{staticClass:"card-content"},[t._m(4),a("div",{staticClass:"row info"},[a("div",{staticClass:"col s12 m6"},[t._m(5),a("p",[t._v(t._s(t.address.name))]),a("p",[t._v(t._s(t.address.company))]),a("p",[t._v(t._s(t.address.address))]),a("p",[t._v(t._s(t.address.email))]),a("p",[t._v(t._s(t.address.telephone))])]),a("div",{staticClass:"col s12 m6"},[t._m(6),a("p",[t._v(t._s(t.address.name))]),a("p",[t._v(t._s(t.address.company))]),a("p",[t._v(t._s(t.address.address))]),a("p",[t._v(t._s(t.address.email))]),a("p",[t._v(t._s(t.address.telephone))])])]),a("Basket")],1),a("div",{staticClass:"card-action"},[t._m(7),a("span",{staticClass:"right"},[a("b",[t._v(t._s(this.$root.getFormattedTotal()))])])]),a("div",{staticClass:"card-action"},[t._m(8),a("p",{staticClass:"payment-info"},[t._v("Please choose your desired payment method. Credit card option will redirect you to the payment gateway.")]),t._m(9),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.consent,expression:"consent"}],staticClass:"filled-in",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.consent)?t._i(t.consent,null)>-1:t.consent},on:{change:function(e){var a=t.consent,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);s.checked?n<0&&(t.consent=a.concat([i])):n>-1&&(t.consent=a.slice(0,n).concat(a.slice(n+1)))}else t.consent=r}}}),t._m(10)])])])])]):t._e()])]),a("div",{staticClass:"modal-footer"},[0==t.phase?a("a",{staticClass:"waves-effect waves-green btn-flat",attrs:{href:"#!"},on:{click:function(e){return t.next()}}},[t._v("Next")]):t._e(),1==t.phase?a("a",{staticClass:"waves-effect waves-green btn-flat",attrs:{href:"#!"},on:{click:function(e){return t.prev()}}},[t._v("Back")]):t._e(),1==t.phase?a("a",{staticClass:"waves-effect waves-green btn-flat",attrs:{href:"#!"},on:{click:function(e){return t.submit()}}},[t._v("Submit")]):t._e()])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("b",[t._v("Total")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",attrs:{id:"step-1"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Payment")])]),a("div",{staticClass:"row m-top-15"},[a("form",{attrs:{action:"#"}},[a("p",[a("label",[a("input",{attrs:{name:"group1",type:"radio",checked:""}}),a("span",[t._v("Visa (XXXXX-XXXX-XXXX-XX24)")])])]),a("p",[a("label",[a("input",{attrs:{name:"group1",type:"radio"}}),a("span",[t._v("PayPal")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",attrs:{id:"step-1"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Delivery")])]),a("div",{staticClass:"row m-top-15"},[a("form",{attrs:{action:"#"}},[a("p",[a("label",[a("input",{attrs:{name:"group1",type:"radio"}}),a("span",[t._v("DHL")])])]),a("p",[a("label",[a("input",{attrs:{name:"group1",type:"radio"}}),a("span",[t._v("FedEx")])])]),a("p",[a("label",[a("input",{attrs:{name:"group1",type:"radio",checked:""}}),a("span",[t._v("GoNow with Live Tracking")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Order summary")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Billing address:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Delivery address:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("b",[t._v("Total")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Payment")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("label",[a("input",{staticClass:"filled-in",attrs:{type:"checkbox"}}),a("span",[t._v("Please sign me up for the newsletter")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("I hereby confirm that the information that I have provided is correct and that I accept the "),a("a",{staticClass:"indigo-text text-darken-4",attrs:{href:"#"}},[t._v("Terms and Conditions")])])}],R=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("span",[a("b",[t._v(t._s(t.$root.cart.length)+" items")])]),a("ul",{staticClass:"collection"},t._l(t.$root.cart,function(e,s){return a("li",{staticClass:"collection-item avatar"},[a("img",{staticClass:"circle",attrs:{src:e.imageUrl,alt:""}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 l4 m4 truncate"},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),a("p",[t._v("$"+t._s(e.price))])]),a("div",{staticClass:"col s12 l2 m2 hide-on-med-and-down"},[a("p",[t._v(t._s(e.quantity))])]),a("div",{staticClass:"col s12 l4 m4"},[a("p",[t._v("$"+t._s((e.price*e.quantity).toFixed(2)))])]),t._m(1,!0)])])}),0)])}),G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card-title activator grey-text text-darken-4 m-top-15"},[a("b",[t._v("Your order")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 l2 m2"},[a("a",{attrs:{href:"#!"}},[a("i",{staticClass:"material-icons"},[t._v("clear")])])])}],V={name:"Basket",props:{},methods:{}},z=V,J=(a("ad18"),Object(d["a"])(z,R,G,!1,null,"ae641054",null)),K=J.exports,Q={name:"Checkout",props:{msg:String},data:function(){return{phase:0,address:{name:"",company:"",address:"",email:"",telephone:"",zip:"",country:"",street:"",number:"",city:""},place:null,consent:!1,gmaps:null}},components:{Basket:K},computed:{cart2:function(){return this.$root.getCart()}},methods:{update:function(){var t=this;setTimeout(function(e){var a=document.getElementById("address");t.gmaps=new google.maps.places.Autocomplete(a),t.$forceUpdate()},100)},next:function(){var t=document.getElementById("full_name"),e=document.getElementById("address"),a=document.getElementById("email");if(t.validity.valid)if(e.validity.valid)if(a.validity.valid){var s=this.gmaps.getPlace();if(void 0!=s)for(var r in this.place=s,this.address.address=this.place.formatted_address,this.$root.orderAddress=this.address.address,this.place.address_components){var i=this.place.address_components[r];for(var n in i.types){var o=i.types[n];"street_number"==o?this.address.number=i.long_name:"route"==o?this.street=i.long_name:"locality"==o?this.city=i.long_name:"country"==o?this.country=i.short_name:"postal_code"==o&&(this.zip=i.long_name)}}this.phase=1}else a.focus();else e.focus();else t.focus()},prev:function(){this.phase=0,this.update(),setTimeout(function(){M.updateTextFields()},100)},submit:function(){var t=this;axios.post("https://emea-poc13-test.apigee.net/v1/kaleo/orders?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd",{"cart-token":"Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd","billing-address":this.address.address,currency:"EUR","payment-details":"VISA","shipping-address":this.address.address,"total-price":this.$root.getTotal(),"user-id":"43868"}).then(function(e){t.$root.emptyCart(),t.$root.orderId=e.data.name;var a=new Date,s=new Date;s.setDate(a.getDate()+1),axios.post("https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd",{order:t.$root.orderId,courier:"34243","sent-date":a.toISOString(),status:"in-transit","courier-tracking-id":"432432","origin-country":"DE","destination-country":t.address.country,"destination-postal-code":t.address.zip,emails:"info@gonow.de","order-promised-delivery-date":s.toISOString(),"delivery-type":"door-delivery","courier-contact-number":"454545"}).then(function(e){t.$root.orderTrackingId=e.data.name,axios.post("https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/"+t.$root.orderTrackingId+"/locations?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd",{location:t.$root.store.address}).then(function(t){$("#checkout-modal").modal("close"),$("#tracking-modal").modal("open")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)}),$("#checkout-modal").modal("close"),$("#tracking-modal").modal("open")}).catch(function(t){console.log(t)})},setOrderId:function(t){this.$root.orderId=t}},mounted:function(){var t=this;$("#checkout-modal").modal({onOpenEnd:function(){t.prev()}})}},H=Q,W=(a("ccd3"),Object(d["a"])(H,X,L,!1,null,"65c9abf4",null)),Z=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal modal-fixed-footer",attrs:{id:"tracking-modal"}},[t._m(0),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m12 l12"},[a("div",{staticClass:"card",attrs:{id:"step-1"}},[a("div",{staticClass:"card-content"},[t._m(1),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.orderTrackingId,expression:"$root.orderTrackingId"}],attrs:{id:"order_id",type:"text",autocomplete:"order"},domProps:{value:t.$root.orderTrackingId},on:{input:function(e){e.target.composing||t.$set(t.$root,"orderTrackingId",e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"order_id"}},[t._v("Order Tracking Id")])]),a("div",{staticClass:"input-field col s12 m12 l12 m-top-15"},[a("label",{staticClass:"active"},[t._v("Order Tracking Locations")]),a("table",[t._m(2),a("tbody",t._l(t.trackingLocations,function(e){return a("tr",[a("td",[t._v(t._s(e.date))]),a("td",[t._v(t._s(e.location))])])}),0)])]),a("div",{staticClass:"col s12 m12 l12"},[a("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",height:"450",frameborder:"0",src:t.updatedMapsUrl,allowfullscreen:""}})])])])])])])])])]),t._m(3)])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("nav",[a("div",{staticClass:"nav-wrapper",staticStyle:{"padding-left":"10px"}},[a("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("Order Tracking"),a("i",{staticClass:"material-icons"},[t._v("drive_eta")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("b",[t._v("Information")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("Timestamp")]),a("th",[t._v("Location")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"}},[t._v("Close")])])}],et=a("768b"),at=(a("ffc1"),a("456d"),{name:"Tracking",props:{},data:function(){return{mapsUrl:"https://www.google.com/maps/embed/v1/directions?key=AIzaSyCc3fwcWc_G8zJw1o9DHd-X1eRMNdbhSLQ",updatedMapsUrl:"",localTrackingId:"",trackingLocations:{},trackingTimer:null}},components:{},computed:{},methods:{update:function(){this.$forceUpdate()}},mounted:function(){var t=this;$("#tracking-modal").modal({onOpenEnd:function(){t.update(),t.$root.orderTrackingUpdates=0,t.localTrackingId="",null!=!t.trackingTimer&&(t.trackingTimer=Object(j["setInterval"])(function(){t.$root.orderTrackingId&&(t.localTrackingId!=t.$root.orderTrackingId.trim()&&(t.localTrackingId=t.$root.orderTrackingId.trim(),localStorage.setItem("orderTrackingId",t.localTrackingId),axios.get("https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/"+t.localTrackingId+"?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd").then(function(e){if(null!=e.data){var a=e.data.order;axios.get("https://emea-poc13-test.apigee.net/v1/kaleo/orders/"+a+"?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd").then(function(e){null!=e.data&&(t.$root.orderAddress=e.data["shipping-address"])})}})),t.$root.orderAddress&&axios.get("https://emea-poc13-test.apigee.net/v1/kaleo/tracking-orders/"+t.localTrackingId+"/locations?apikey=Ai8RrOvxa0DjdAODEVyUGQB9Kv9cqncd").then(function(e){if(null!=e.data){var a=Object.keys(e.data).length,s=Object.keys(t.trackingLocations).length;if(a!=s){for(var r in t.$root.orderTrackingUpdates=a-s,t.trackingLocations=e.data,t.trackingLocations){var i=t.trackingLocations[r],n=new Date(i.timestamp);i["date"]=n.toLocaleString()}t.updatedMapsUrl=t.mapsUrl+"&origin="+encodeURI(t.$root.store.address)+"&destination="+encodeURI(t.$root.orderAddress);for(var o=t.updatedMapsUrl+"&waypoints=",c=!0,l=0,d=Object.entries(e.data);l<d.length;l++){var p=Object(et["a"])(d[l],2),u=(p[0],p[1]);c||(o+="|"),o+=u.location,c=!1}t.updatedMapsUrl=o}}else t.orderTrackingInfo=""}).catch(function(){}))},2e3))},onCloseEnd:function(){t.$root.orderTrackingUpdates=0}})}}),st=at,rt=(a("ff5a"),Object(d["a"])(st,Y,tt,!1,null,"764da65c",null)),it=rt.exports,nt={name:"app",components:{Navbar:u,Showcase:S,ProductGrid:B,Checkout:Z,Basket:K,Tracking:it}},ot=nt,ct=Object(d["a"])(ot,r,i,!1,null,null,null),lt=ct.exports,dt=a("5329");s["a"].config.productionTip=!1,window.vue=new s["a"]({data:{total:0,counter:0,orderId:0,orderTrackingId:" ",orderTrackingInfo:" ",orderTrackingUpdates:0,orderAddress:"",cart:[],store:dt},methods:{getFormattedTotal:function(){return"€ "+this.total.toFixed(2)},getTotal:function(){return this.total.toFixed(2)},addToCart:function(t){var e=this;this.cart.push(t),this.total=0,this.cart.forEach(function(t){e.total+=t.price*t.quantity})},emptyCart:function(){this.cart=[],this.total=0},getCart:function(){return this.cart}},computed:{formattedTotal:function(){return"€ "+this.total.toFixed(2)}},render:function(t){return t(lt)}}).$mount("#app")},"88b3":function(t,e,a){"use strict";var s=a("d084"),r=a.n(s);r.a},"89a8":function(t){t.exports=JSON.parse('[{"id":"1","title":"Nike Air Max 270","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-herrenschuh-ntl0RF.jpg","brand":"Nike","department":"shoes","price":147.99},{"id":"2","title":"Nike France Jordan","imageUrl":"https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/pxyew9axfsc0htlqo38c/frankreich-jordan-herren-basketballtrikot-vxPW6h.jpg","brand":"Nike","department":"jerseys","price":90},{"id":"3","title":"Nike Dri-FIT","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jbkfxxvohy0dtteju3ji/dri-fit-laufoberteil-mit-grafik-sLs0ZH.jpg","brand":"Nike","department":"shirts","price":35},{"id":"1","title":"Nike Air Max 270","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-herrenschuh-ntl0RF.jpg","brand":"Nike","department":"shoes","price":147.99},{"id":"2","title":"Nike France Jordan","imageUrl":"https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/pxyew9axfsc0htlqo38c/frankreich-jordan-herren-basketballtrikot-vxPW6h.jpg","brand":"Nike","department":"jerseys","price":90},{"id":"3","title":"Nike Dri-FIT","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jbkfxxvohy0dtteju3ji/dri-fit-laufoberteil-mit-grafik-sLs0ZH.jpg","brand":"Nike","department":"shirts","price":35},{"id":"1","title":"Nike Air Max 270","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-herrenschuh-ntl0RF.jpg","brand":"Nike","department":"shoes","price":147.99},{"id":"2","title":"Nike France Jordan","imageUrl":"https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/pxyew9axfsc0htlqo38c/frankreich-jordan-herren-basketballtrikot-vxPW6h.jpg","brand":"Nike","department":"jerseys","price":90},{"id":"3","title":"Nike Dri-FIT","imageUrl":"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jbkfxxvohy0dtteju3ji/dri-fit-laufoberteil-mit-grafik-sLs0ZH.jpg","brand":"Nike","department":"shirts","price":35}]')},"89f3":function(t,e,a){"use strict";var s=a("b774"),r=a.n(s);r.a},a050:function(t,e,a){t.exports=a.p+"img/nike-shirt2.90feaf5e.jpeg"},ad18:function(t,e,a){"use strict";var s=a("d6ca"),r=a.n(s);r.a},adda:function(t,e,a){t.exports=a.p+"img/nike-shirt3.ecf4f78c.jpeg"},b774:function(t,e,a){},c162:function(t,e,a){},ccd3:function(t,e,a){"use strict";var s=a("1d8b"),r=a.n(s);r.a},d084:function(t,e,a){},d6ca:function(t,e,a){},d7e9:function(t,e,a){},e55b:function(t,e,a){},ee26:function(t,e,a){"use strict";var s=a("d7e9"),r=a.n(s);r.a},ff5a:function(t,e,a){"use strict";var s=a("229a"),r=a.n(s);r.a}});
//# sourceMappingURL=app.254526f7.js.map