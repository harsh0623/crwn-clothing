(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,l=n(1),o=n.n(l),u=n(34),d=n.n(u),b=n(22),p=n(9),m=n(44),h=n(21),j=n(35),g=n(45),f=n.n(g),O=n(46),v=n.n(O),x=n(5),y="SET_CURRENT_USER",w={currentUser:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(x.a)(Object(x.a)({},e),{},{currentUser:t.payload});default:return e}},N="TOGGLE_CART_HIDDEN",C="ADD_ITEM",U="REMOVE_ITEM",E="CLEAR_ITEM_FROM_CART",I=n(51),S=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(I.a)(e),[Object(x.a)(Object(x.a)({},t),{},{quantity:1})])},P=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{quantity:e.quantity-1}):e}))},B={hidden:!0,cartItems:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(x.a)(Object(x.a)({},e),{},{hidden:!e.hidden});case C:return Object(x.a)(Object(x.a)({},e),{},{cartItems:S(e.cartItems,t.payload)});case E:return Object(x.a)(Object(x.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case U:return Object(x.a)(Object(x.a)({},e),{},{cartItems:P(e.cartItems,t.payload)});default:return e}},A={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e},M={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;return t.type,e},G={key:"root",storage:v.a,whitelist:["cart"]},J=Object(h.b)({user:k,cart:T,directory:q,shop:R}),W=Object(j.a)(G,J),D=[f.a],z=Object(h.c)(W,h.a.apply(void 0,D)),H=Object(j.b)(z),V=(n(63),n(13)),F=n.n(V),L=n(20),_=n(28),Y=n(29),Q=n(31),X=n(30),K=n(8),Z=n(7),$=(n(65),n(23)),ee=(n(66),n(2)),te=Object(K.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(ee.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(ee.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(ee.jsxs)("div",{className:"content",children:[Object(ee.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(ee.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),ne=Object(Z.a)([function(e){return e.directory}],(function(e){return e.sections})),re=(n(71),["id"]),ce=Object(p.b)((function(){return Object(Z.b)({sections:ne})}))((function(e){var t=e.sections;return Object(ee.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object($.a)(e,re);return Object(ee.jsx)(te,Object(x.a)({},n),t)}))})})),ae=n(17),ie=n(18),se=ie.b.div(r||(r=Object(ae.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]))),le=function(){return Object(ee.jsx)(se,{children:Object(ee.jsx)(ce,{})})},oe=Object(ie.a)(c||(c=Object(ae.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),ue=Object(ie.a)(a||(a=Object(ae.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),de=Object(ie.a)(i||(i=Object(ae.a)(["\n  background-color: #4285f4;\n  color: white;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),be=ie.b.button(s||(s=Object(ae.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"])),(function(e){return e.isGoogleSignIn?de:e.inverted?ue:oe})),pe=["children"],me=function(e){var t=e.children,n=Object($.a)(e,pe);return Object(ee.jsx)(be,Object(x.a)(Object(x.a)({},n),{},{children:t}))},he=function(){return{type:N}},je=function(e){return{type:C,payload:e}},ge=(n(73),Object(p.b)(null,(function(e){return{addItem:function(t){return e(je(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(ee.jsxs)("div",{className:"collection-item",children:[Object(ee.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(ee.jsxs)("div",{className:"collection-footer",children:[Object(ee.jsx)("span",{className:"name",children:r}),Object(ee.jsx)("span",{className:"price",children:c})]}),Object(ee.jsx)(me,{className:"custom-button",onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),fe=Object(Z.a)([function(e){return e.shop}],(function(e){return e.collections})),Oe=Object(Z.a)([fe],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ve=(n(74),Object(p.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(Z.a)([fe],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection;console.log(t);var n=t.title,r=t.items;return Object(ee.jsxs)("div",{className:"collection-page",children:[Object(ee.jsx)("h2",{className:"title",children:n}),Object(ee.jsx)("div",{className:"items",children:r.map((function(e){return Object(ee.jsx)(ge,{item:e},e.id)}))})]})}))),xe=(n(75),function(e){var t=e.title,n=e.items;return Object(ee.jsxs)("div",{className:"collection-preview",children:[Object(ee.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(ee.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(ee.jsx)(ge,{item:e},e.id)}))})]})}),ye=(n(76),["id"]),we=Object(p.b)((function(){return Object(Z.b)({collections:Oe})}))((function(e){var t=e.collections;return Object(ee.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object($.a)(e,ye);return Object(ee.jsx)(xe,Object(x.a)({},n),t)}))})})),ke=function(e){var t=e.match;return Object(ee.jsxs)("div",{className:"shop-page",children:[Object(ee.jsx)(K.b,{exact:!0,path:"".concat(t.path),component:we}),Object(ee.jsx)(K.b,{path:"".concat(t.path,"/:collectionId"),component:ve})]})},Ne=n(27),Ce=(n(77),["handleChange","label"]),Ue=function(e){var t=e.handleChange,n=e.label,r=Object($.a)(e,Ce);return Object(ee.jsxs)("div",{className:"group",children:[Object(ee.jsx)("input",Object(x.a)({className:"form-input",onChange:t},r)),n?Object(ee.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},Ee=n(32),Ie=(n(89),n(78),function(){var e=Object(L.a)(F.a.mark((function e(t,n){var r,c,a,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Be.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(x.a)({displayName:c,email:a,createdAT:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());Ee.a.initializeApp({apiKey:"AIzaSyAm9lnmsN9pGdMjpwiqPMg9oRIgK6gqVf0",authDomain:"crwn-db-e7c99.firebaseapp.com",projectId:"crwn-db-e7c99",storageBucket:"crwn-db-e7c99.appspot.com",messagingSenderId:"922720829103",appId:"1:922720829103:web:f111f364f0fb3c703ede5a",measurementId:"G-J4FVPQB7NQ"});var Se=function(){var e=Object(L.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Be.collection(t),console.log(r),c=Be.batch(),n.forEach((function(e){var t=r.doc();c.set(t,e)})),e.next=6,c.commit();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Pe=Ee.a.auth(),Be=Ee.a.firestore(),Te=new Ee.a.auth.GoogleAuthProvider;Te.setCustomParameters({prompt:"select_account"});var Ae,qe,Me,Re,Ge,Je,We,De,ze,He,Ve,Fe,Le,_e,Ye,Qe=function(){return Pe.signInWithPopup(Te)},Xe=(Ee.a,n(80),function(e){Object(Q.a)(n,e);var t=Object(X.a)(n);function n(e){var r;return Object(_.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(L.a)(F.a.mark((function e(t){var n,c,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,Pe.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:r.setState({email:"",password:""});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(Ne.a)({},c,n))},r.state={email:"",password:""},r}return Object(Y.a)(n,[{key:"render",value:function(){return Object(ee.jsxs)("div",{className:"sign-in",children:[Object(ee.jsx)("h2",{children:"I already have an account"}),Object(ee.jsx)("span",{children:"Sign in with your email and password"}),Object(ee.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(ee.jsx)(Ue,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(ee.jsx)(Ue,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(ee.jsxs)("div",{className:"buttons",children:[Object(ee.jsx)(me,{type:"submit",children:" Sign in "}),Object(ee.jsx)(me,{type:"button",onClick:Qe,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(o.a.Component)),Ke=(n(81),function(e){Object(Q.a)(n,e);var t=Object(X.a)(n);function n(){var e;return Object(_.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(L.a)(F.a.mark((function t(n){var r,c,a,i,s,l,o;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Pe.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,Ie(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(Ne.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(Y.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(ee.jsxs)("div",{className:"sign-up",children:[Object(ee.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(ee.jsx)("span",{children:"Sign up with your email and password"}),Object(ee.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(ee.jsx)(Ue,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(ee.jsx)(Ue,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(ee.jsx)(Ue,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(ee.jsx)(Ue,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(ee.jsx)(me,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(o.a.Component)),Ze=(n(82),function(){return Object(ee.jsxs)("div",{className:"sign-in-and-sign-up page",children:[Object(ee.jsx)(Xe,{}),Object(ee.jsx)(Ke,{})]})}),$e=function(e){return e.cart},et=Object(Z.a)([$e],(function(e){return e.cartItems})),tt=Object(Z.a)([$e],(function(e){return e.hidden})),nt=Object(Z.a)([et],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),rt=Object(Z.a)([et],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ct=n(50),at=n.n(ct),it=function(e){var t=e.price,n=100*t;return Object(ee.jsx)(at.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successfull")},stripeKey:"pk_test_51JJchpSBrbQFELpTCPikGrltaDlv0YTmXPEvkuCxDN9zE8X3d7YZuPgvP1G1kGFXxmJnUo9AECphHYqepRHqyk1300RFYI5uAJ"})},st=(n(83),Object(p.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:E,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:U,payload:e}}(t))},addItem:function(t){return e(je(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(ee.jsxs)("div",{className:"checkout-item",children:[Object(ee.jsx)("div",{className:"image-container",children:Object(ee.jsx)("img",{src:i,alt:"item"})}),Object(ee.jsx)("span",{className:"name",children:a}),Object(ee.jsxs)("span",{className:"quantity",children:[Object(ee.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(ee.jsx)("span",{className:"value",children:l}),Object(ee.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(ee.jsx)("span",{className:"price",children:s}),Object(ee.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),lt=(n(84),Object(Z.b)({cartItems:et,total:rt})),ot=Object(p.b)(lt)((function(e){var t=e.cartItems,n=e.total;return Object(ee.jsxs)("div",{className:"checkout-page",children:[Object(ee.jsxs)("div",{className:"checkout-header",children:[Object(ee.jsx)("div",{className:"header-block",children:Object(ee.jsx)("span",{children:"Product"})}),Object(ee.jsx)("div",{className:"header-block",children:Object(ee.jsx)("span",{children:"Description"})}),Object(ee.jsx)("div",{className:"header-block",children:Object(ee.jsx)("span",{children:"Quantity"})}),Object(ee.jsx)("div",{className:"header-block",children:Object(ee.jsx)("span",{children:"Price"})}),Object(ee.jsx)("div",{className:"header-block",children:Object(ee.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(ee.jsx)(st,{cartItem:e},e.id)})),Object(ee.jsx)("div",{className:"total",children:Object(ee.jsxs)("span",{children:["TOTAL : $",n]})}),Object(ee.jsxs)("div",{className:"test-warning",children:["*Plese use the following test credit card for payments*",Object(ee.jsx)("br",{}),"4242 4242 4242 4242 - Exp:Any future date - CVV: Any 3 digit"]}),Object(ee.jsx)(it,{price:n})]})})),ut=Object(Z.a)([function(e){return e.user}],(function(e){return e.currentUser})),dt=["title","titleId"];function bt(){return(bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function mt(e,t){var n=e.title,r=e.titleId,c=pt(e,dt);return l.createElement("svg",bt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,l.createElement("g",null,l.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),l.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),l.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ae||(Ae=l.createElement("g",null)),qe||(qe=l.createElement("g",null)),Me||(Me=l.createElement("g",null)),Re||(Re=l.createElement("g",null)),Ge||(Ge=l.createElement("g",null)),Je||(Je=l.createElement("g",null)),We||(We=l.createElement("g",null)),De||(De=l.createElement("g",null)),ze||(ze=l.createElement("g",null)),He||(He=l.createElement("g",null)),Ve||(Ve=l.createElement("g",null)),Fe||(Fe=l.createElement("g",null)),Le||(Le=l.createElement("g",null)),_e||(_e=l.createElement("g",null)),Ye||(Ye=l.createElement("g",null)))}var ht,jt,gt=l.forwardRef(mt),ft=(n.p,n(85),Object(Z.b)({itemCount:nt})),Ot=Object(p.b)(ft,(function(e){return{toggleCartHidden:function(){return e(he())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(ee.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(ee.jsx)(gt,{className:"shopping-icon"}),Object(ee.jsx)("span",{className:"item-count",children:n})]})})),vt=(n(86),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(ee.jsxs)("div",{className:"cart-item",children:[Object(ee.jsx)("img",{src:n,alt:"item"}),Object(ee.jsxs)("div",{className:"item-details",children:[Object(ee.jsx)("span",{className:"name",children:c}),Object(ee.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),xt=(n(87),Object(Z.b)({cartItems:et})),yt=Object(K.g)(Object(p.b)(xt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(ee.jsxs)("div",{className:"cart-dropdown",children:[Object(ee.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(ee.jsx)(vt,{item:e},e.id)})):Object(ee.jsx)("span",{className:"empty-message",children:"Your cart is empty "})}),Object(ee.jsx)(me,{onClick:function(){n.push("/checkout"),r(he())},children:"GO TO CHECKOUT"})]})}))),wt=["title","titleId"];function kt(){return(kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Nt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ct(e,t){var n=e.title,r=e.titleId,c=Nt(e,wt);return l.createElement("svg",kt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?l.createElement("title",{id:r},"Group"):n?l.createElement("title",{id:r},n):null,ht||(ht=l.createElement("desc",null,"Created with Sketch.")),jt||(jt=l.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},l.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},l.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),l.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Ut,Et,It,St,Pt=l.forwardRef(Ct),Bt=(n.p,ie.b.div(Ut||(Ut=Object(ae.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"])))),Tt=Object(ie.b)(b.b)(Et||(Et=Object(ae.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]))),At=ie.b.div(It||(It=Object(ae.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),qt=Object(ie.b)(b.b)(St||(St=Object(ae.a)(["\npadding: 10px 15px;\ncursor: pointer;\n"]))),Mt=Object(Z.b)({currentUser:ut,hidden:tt}),Rt=Object(p.b)(Mt)((function(e){var t=e.currentUser,n=e.hidden;return Object(ee.jsxs)(Bt,{children:[Object(ee.jsx)(Tt,{to:"/",children:Object(ee.jsx)(Pt,{className:"logo"})}),Object(ee.jsxs)(At,{children:[Object(ee.jsx)(qt,{to:"/shop",children:"SHOP"}),Object(ee.jsx)(qt,{to:"/shop",children:"CONTACT"}),t?Object(ee.jsx)(qt,{as:"div",onClick:function(){return Pe.signOut()},children:"SIGN OUT"}):Object(ee.jsx)(qt,{to:"/signin",children:"SIGN IN"}),Object(ee.jsx)(Ot,{})]}),n?null:Object(ee.jsx)(yt,{})]})})),Gt=function(e){Object(Q.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(_.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setCurrentUser,n=e.collectionsArray;this.unsubscribeFromAuth=Pe.onAuthStateChanged(function(){var e=Object(L.a)(F.a.mark((function e(r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,Ie(r);case 3:e.sent.onSnapshot((function(e){t(Object(x.a)({id:e.id},e.data()))}));case 5:t(r),Se("collections",n.map((function(e){return{title:e.title,items:e.items}})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(Rt,{}),Object(ee.jsxs)(K.d,{children:[Object(ee.jsx)(K.b,{exact:!0,path:"/",component:le}),Object(ee.jsx)(K.b,{path:"/shop",component:ke}),Object(ee.jsx)(K.b,{exact:!0,path:"/checkout",component:ot}),Object(ee.jsx)(K.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(ee.jsx)(K.a,{to:"/"}):Object(ee.jsx)(Ze,{})}})]})]})}}]),n}(o.a.Component),Jt=Object(Z.b)({currentUser:ut,collectionsArray:Oe}),Wt=Object(p.b)(Jt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))(Gt);d.a.render(Object(ee.jsx)(p.a,{store:z,children:Object(ee.jsx)(b.a,{children:Object(ee.jsx)(m.a,{persistor:H,children:Object(ee.jsx)(Wt,{})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d20403d5.chunk.js.map