import{a as A,b as pt,c as C,d as U,e as st,f as ut,g as b,h as dt,i as mt,j as ft,k as ht,l as gt,m as _t,n as yt,o as vt,p as Ct}from"./chunk-BB2YGCAB.js";import{a as W,b as xt}from"./chunk-NI2YPJH7.js";import{B as w,Ea as v,F as h,Ga as ot,Ia as s,Ja as d,K as y,La as f,N as Z,P as G,Q,R as tt,U as T,Va as at,Wa as D,Y as F,Ya as k,Z as c,_a as ct,a as I,b as E,e as Y,f as H,fa as $,ha as p,hb as N,i as J,ia as et,ib as q,j as x,ka as it,la as B,lb as lt,ma as j,mb as L,na as z,nb as V,oa as o,pa as a,qa as l,ra as nt,sa as m,ta as O,x as K,xa as u,y as X,ya as rt,za as S}from"./chunk-CF2WTLNO.js";var R=(()=>{let t=class t{get allProducts(){return this.cart.getValue()}constructor(){this.cart=new H([]),this.cart$=this.cart.asObservable(),this.feePercentage=.18,this.cart.next(this.getFromLocalStorage())}setToLocalStorage(e){localStorage.setItem("cart",JSON.stringify(e)),this.cart.next(e)}getFromLocalStorage(){return JSON.parse(localStorage.getItem("cart")||"[]")}addToCart(e,i=1){console.log("Product added to cart:",e);let n=this.getFromLocalStorage();if(n.find(_=>_.id===e.id)){this.updateCart(e,i);return}this.setToLocalStorage([...n,e])}removeFromCart(e){let i=this.getFromLocalStorage();this.setToLocalStorage(i.filter(n=>n.id!==e.id))}updateCart(e,i=1){console.log("Product updated in cart:",e);let _=this.getFromLocalStorage().map(P=>P.id===e.id?E(I({},P),{quantity:i}):P);this.setToLocalStorage(_)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var kt=(()=>{let t=class t{constructor(){this.quantity=1,this.quantityChange=new T}decrease(){this.quantity!==1&&(this.quantity-=1,this.quantityChange.emit(this.quantity))}increase(){this.quantity+=1,this.quantityChange.emit(this.quantity)}onInputChage(e){e<1&&(this.quantity=1),this.quantityChange.emit(this.quantity)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=y({type:t,selectors:[["alte-quantity-input"]],inputs:{quantity:"quantity"},outputs:{quantityChange:"quantityChange"},standalone:!0,features:[v],decls:7,vars:2,consts:[[1,"quantity-input"],[1,"quantity-input--decrease",3,"click"],["src","assets/icons/Minus.svg"],[1,"quantity-input--value"],["type","number",3,"ngModelChange","ngModel","min"],[1,"quantity-input--increase",3,"click"],["src","assets/icons/Add.svg"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1),m("click",function(){return n.decrease()}),l(2,"img",2),a(),o(3,"div",3)(4,"input",4),m("ngModelChange",function(P){return n.onInputChage(P)}),a()(),o(5,"div",5),m("click",function(){return n.increase()}),l(6,"img",6),a()()),i&2&&(c(4),p("ngModel",n.quantity)("min",1))},dependencies:[yt,pt,ft,U,_t,dt],styles:[".quantity-input[_ngcontent-%COMP%]{border:1px solid var(--neutral-black-b100);border-radius:4px;padding:0 16px;width:164px;height:44px;min-width:40px;display:flex;align-items:center;justify-content:space-between}.quantity-input--decrease[_ngcontent-%COMP%], .quantity-input--increase[_ngcontent-%COMP%]{width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer}.quantity-input--decrease[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .quantity-input--increase[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:invert(.5)}.quantity-input--value[_ngcontent-%COMP%]{height:100%}.quantity-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;width:100%;height:100%;font-family:var(--font-family);font-weight:500;font-size:14px;line-height:175%;text-align:center;color:var(--neutral-black-b800)}.quantity-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}"]});let r=t;return r})();function St(r,t){if(r&1&&l(0,"img",2),r&2){let g=O();p("src",g.product.cover,F)("width",80)("height",80)}}function wt(r,t){r&1&&l(0,"img",12),r&2&&p("ngSrc","/assets/images/logo.svg")("width",40)("height",40)}var bt=(()=>{let t=class t{constructor(){this.product={},this.remove=new T,this.update=new T}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=y({type:t,selectors:[["alte-cart-item"]],inputs:{product:"product"},outputs:{remove:"remove",update:"update"},standalone:!0,features:[v],decls:25,vars:11,consts:[[1,"cart-item"],[1,"cart-item__poster"],[3,"src","width","height"],[1,"cart-item__info"],[1,"title"],[1,"color_size"],[1,"color_round"],[1,"uppercase","bold"],[1,"cart-item__price"],[3,"quantityChange","quantity"],["alte-button","","theme","icon",1,"cart-item__remove",3,"click"],["src","/assets/icons/X.svg","alt","Remove from cart"],[3,"ngSrc","width","height"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1),$(2,St,1,3,"img",2)(3,wt,1,3),a(),o(4,"div",3)(5,"div",4),u(6),a(),o(7,"div",5)(8,"div"),u(9,"Color:"),a(),l(10,"div",6),o(11,"div"),u(12,"-"),a(),o(13,"div"),u(14," Size: "),o(15,"span",7),u(16),a()()()(),o(17,"div",8),u(18),s(19,"currency"),a(),o(20,"div")(21,"alte-quantity-input",9),m("quantityChange",function(P){return n.update.emit({product:n.product,quantity:P})}),a()(),o(22,"div")(23,"button",10),m("click",function(){return n.remove.emit(n.product)}),l(24,"img",11),a()()()),i&2&&(c(2),it(2,n.product.cover?2:3),c(4),S(" ",n.product.name," "),c(4),et("background-color",n.product.color.name),c(6),rt(n.product.size),c(2),S(" ",f(19,7,n.product.price,"USD","$")," "),c(3),p("quantity",n.product.quantity||1))},dependencies:[kt,k,ct],styles:[".cart-item[_ngcontent-%COMP%]{height:80px;display:flex;gap:16px;justify-content:space-between;align-items:center}.cart-item__poster[_ngcontent-%COMP%]{border-radius:4px;padding:0 11px;width:80px;height:80px;background:var(--neutral-white-w100);display:flex;justify-content:center;align-items:center}.cart-item__info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;gap:4px;width:100%}.cart-item__info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:500;font-size:14px;line-height:175%;color:var(--neutral-black-b900)}.cart-item__info[_ngcontent-%COMP%]   .color_size[_ngcontent-%COMP%]{display:flex;gap:6px;align-items:center;font-family:var(--font-family);font-weight:500;font-size:12px;line-height:200%;text-transform:capitalize;text-align:center;color:var(--neutral-black-b500)}.cart-item__info[_ngcontent-%COMP%]   .color_size[_ngcontent-%COMP%]   .color_round[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%}.cart-item__price[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:500;font-size:14px;line-height:175%;color:var(--neutral-black-b900)}"]});let r=t;return r})();function Ft(r,t){if(r&1){let g=nt();o(0,"alte-cart-item",16),m("remove",function(i){G(g);let n=O();return Q(n.removeFromCart(i))})("update",function(i){G(g);let n=O();return Q(n.updateToCart(i))}),a()}if(r&2){let g=t.$implicit;p("product",g)}}function qt(r,t){r&1&&(o(0,"div",5),u(1,"Your cart is empty"),a())}var ae=(()=>{let t=class t{constructor(){this.cartFacade=h(R),this.router=h(N),this.carts$=this.cartFacade.cart$,this.sum$=this.cartFacade.cart$.pipe(x(e=>e.filter(i=>i?.quantity&&i.quantity>0).reduce((i,n)=>i+ +n?.quantity*+n.price,0)))}checkout(){this.router.navigate(["/profile/checkout"])}removeFromCart(e){this.cartFacade.removeFromCart(e)}updateToCart(e){this.cartFacade.updateCart(e.product,e.quantity)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=y({type:t,selectors:[["alte-cart"]],standalone:!0,features:[v],decls:31,vars:27,consts:[["title","My Cart"],[1,"container","cart"],[1,"cart__list"],[1,"divider"],[3,"product"],[1,"empty-cart"],[1,"cart__details"],[1,"title"],[1,"finance-detail"],["key","Subtotal",3,"value"],["key","Shipping:","value","Free"],["key","Tax:",3,"value"],["key","Total:",3,"value"],["alte-button","","block","",1,"cart__checkout",3,"click","disabled"],[1,"cart__continue-shopping"],["routerLink","/",1,"cart__continue-shopping--link"],[3,"remove","update","product"]],template:function(i,n){i&1&&(l(0,"alte-auth-head",0),o(1,"div",1)(2,"div",2)(3,"h4"),u(4,"Your cart"),a(),l(5,"div",3),j(6,Ft,1,1,"alte-cart-item",4,B,!1,qt,2,0,"div",5),s(9,"async"),a(),o(10,"div",6)(11,"div",7),u(12,"Order Summary"),a(),o(13,"div",8),l(14,"alte-key-value",9),s(15,"async"),s(16,"currency"),l(17,"alte-key-value",10)(18,"alte-key-value",11),s(19,"async"),s(20,"currency"),l(21,"div",3)(22,"alte-key-value",12),s(23,"async"),s(24,"currency"),a(),o(25,"button",13),s(26,"async"),m("click",function(){return n.checkout()}),u(27," Checkout "),a(),o(28,"div",14)(29,"a",15),u(30,"Continue Shopping"),a()()()()),i&2&&(c(6),z(d(9,5,n.carts$)),c(8),p("value",f(16,9,d(15,7,n.sum$)||0,"USD","$")),c(4),p("value",f(20,15,(d(19,13,n.sum$)||0)*n.cartFacade.feePercentage,"USD","$")),c(4),p("value",f(24,21,d(23,19,n.sum$)||0,"USD","$")),c(3),p("disabled",d(26,25,n.sum$)===0))},dependencies:[A,D,k,W,bt,q,L],styles:[".cart[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:122px;margin:56px auto}.cart__details[_ngcontent-%COMP%]{flex:initial;width:340px;height:430px;display:block;border:1px solid var(--neutral-black-b100);border-radius:4px;padding:24px 16px}.cart__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:600;font-size:16px;color:var(--neutral-black-b900)}.cart__details[_ngcontent-%COMP%]   .finance-detail[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-direction:column;gap:12px}.cart__checkout[_ngcontent-%COMP%]{margin-top:32px}.cart__continue-shopping[_ngcontent-%COMP%]{margin:32px auto;display:flex;justify-content:center;align-items:center}.cart__continue-shopping--link[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:500;font-size:12px;line-height:150%;text-decoration:underline;text-decoration-skip-ink:none;color:var(--neutral-black-b900)}.cart__list[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;flex-direction:column;gap:16px}.cart__list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:600;font-size:16px;color:var(--neutral-black-b900);margin:0;padding:0}.empty-cart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:16px;font-family:var(--font-family);font-weight:500;color:var(--neutral-black-b900)}"]});let r=t;return r})();function It(r,t){if(r&1&&(o(0,"div",18),l(1,"img",29),a()),r&2){let g=t.$implicit;c(),p("src",g.cover,F)}}var xe=(()=>{let t=class t{constructor(){this.cartFacade=h(R),this.orderFacade=h(xt),this.authFacade=h(V),this.router=h(N),this.sub$=new Y,this.total=0,this.sum$=this.cartFacade.cart$.pipe(x(e=>e.filter(i=>i?.quantity&&i.quantity>0).reduce((i,n)=>i+ +n?.quantity*+n.price,0)),X(e=>this.total=e)),this.carts$=this.cartFacade.cart$.pipe(x(e=>e.map(i=>({cover:i.cover,id:i.id})))),this.form=new ut({street:new b("",C.required),city:new b("",C.required),state:new b("",C.required),zipCode:new b("",C.required),country:new b("",C.required),email:new b("",[C.required,C.email]),fullName:new b("",C.required)})}checkout(){if(this.form.markAllAsTouched(),this.form.invalid)return;let e={userId:this.authFacade.user.id,user:this.authFacade.user,products:this.cartFacade.allProducts,total:this.total,status:"pending",createdAt:new Date,shipping:this.form.value};this.orderFacade.createOrder(e).pipe(K(this.sub$)).subscribe(i=>{console.log("Order created:",i),this.cartFacade.setToLocalStorage([]),this.router.navigate(["/profile/success-order"])})}ngOnDestroy(){this.sub$.next(null),this.sub$.complete()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=y({type:t,selectors:[["alte-checkout"]],standalone:!0,features:[v],decls:46,vars:30,consts:[["title","Checkout"],[1,"container","checkout"],[1,"checkout__list"],[3,"formGroup"],[1,"one_column"],["label","Street Address","formControlName","street"],[1,"two_column"],["label","City","formControlName","city"],["label","State","formControlName","state"],["label","Zip Code","formControlName","zipCode"],["label","Country","formControlName","country"],[1,"two_column","personal-info"],["label","Email","formControlName","email"],["label","Full name","formControlName","fullName"],[1,"checkout__details"],[1,"title"],[1,"in-cart"],[1,"in-cart__images"],[1,"in-cart__images--image"],["alte-button","","theme","outline","routerLink","/profile/cart",1,"in-cart__edit",3,"disabled"],[1,"finance-detail"],["key","Subtotal",3,"value"],["key","Shipping:","value","Free"],["key","Tax:",3,"value"],[1,"divider"],["key","Total:",3,"value"],["alte-button","","block","",1,"checkout__checkout",3,"click","disabled"],[1,"checkout__continue-shopping"],["routerLink","/",1,"checkout__continue-shopping--link"],["width","24px",3,"src"]],template:function(i,n){i&1&&(l(0,"alte-auth-head",0),o(1,"div",1)(2,"div",2)(3,"h4"),u(4,"Shipping Address"),a(),o(5,"form",3)(6,"div",4),l(7,"alte-input",5),a(),o(8,"div",6),l(9,"alte-input",7)(10,"alte-input",8),a(),o(11,"div",6),l(12,"alte-input",9)(13,"alte-input",10),a(),o(14,"div",11),l(15,"alte-input",12)(16,"alte-input",13),a()()(),o(17,"div",14)(18,"div",15),u(19,"Your Order"),a(),o(20,"div",16)(21,"div",17),j(22,It,2,1,"div",18,B),s(24,"async"),a(),o(25,"button",19),s(26,"async"),u(27," Edit Cart "),a()(),o(28,"div",20),l(29,"alte-key-value",21),s(30,"async"),s(31,"currency"),l(32,"alte-key-value",22)(33,"alte-key-value",23),s(34,"async"),s(35,"currency"),l(36,"div",24)(37,"alte-key-value",25),s(38,"async"),s(39,"currency"),a(),o(40,"button",26),s(41,"async"),m("click",function(){return n.checkout()}),u(42," Place Order "),a(),o(43,"div",27)(44,"a",28),u(45,"Continue Shopping"),a()()()()),i&2&&(c(5),p("formGroup",n.form),c(17),z(d(24,6,n.carts$)),c(3),p("disabled",d(26,8,n.sum$)===0),c(4),p("value",f(31,12,d(30,10,n.sum$)||0,"USD","$")),c(4),p("value",f(35,18,(d(34,16,n.sum$)||0)*n.cartFacade.feePercentage,"USD","$")),c(4),p("value",f(39,24,d(38,22,n.sum$)||0,"USD","$")),c(3),p("disabled",d(41,28,n.sum$)===0))},dependencies:[W,Ct,A,vt,mt,U,st,ht,gt,D,k,q,L],styles:[".checkout[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:56px auto}.checkout__details[_ngcontent-%COMP%]{flex:initial;width:436px;height:504px;display:block;padding:24px 16px 24px 64px;border-left:1px solid var(--neutral-black-b100)}.checkout__details[_ngcontent-%COMP%]   .in-cart[_ngcontent-%COMP%]{height:44px;margin:64px 0;display:flex;justify-content:space-between;align-items:center}.checkout__details[_ngcontent-%COMP%]   .in-cart__images[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.checkout__details[_ngcontent-%COMP%]   .in-cart__images--image[_ngcontent-%COMP%]{padding:0 11px;width:40px;height:40px;border-radius:50%;background:var(--neutral-white-w100);display:flex;justify-content:center;align-items:center}.checkout__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:600;font-size:16px;color:var(--neutral-black-b900)}.checkout__details[_ngcontent-%COMP%]   .finance-detail[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-direction:column;gap:12px}.checkout__checkout[_ngcontent-%COMP%]{margin-top:32px}.checkout__continue-shopping[_ngcontent-%COMP%]{margin:32px auto;display:flex;justify-content:center;align-items:center}.checkout__continue-shopping--link[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:500;font-size:12px;line-height:150%;text-decoration:underline;text-decoration-skip-ink:none;color:var(--neutral-black-b900)}.checkout__list[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;flex-direction:column;gap:16px}.checkout__list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:600;font-size:16px;color:var(--neutral-black-b900);margin:0;padding:0}.checkout__list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-right:119px;display:flex;flex-direction:column;gap:16px}.checkout__list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .one_column[_ngcontent-%COMP%]{width:100%}.checkout__list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .two_column[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%}.checkout__list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .personal-info[_ngcontent-%COMP%]{margin-top:35px}"]});let r=t;return r})();var Mt=(()=>{let t=class t{transform(e){return e?"In Stock":"Out of Stock"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=Z({name:"stock",type:t,pure:!0,standalone:!0});let r=t;return r})();var Et=r=>["/product",r];function Tt(r,t){if(r&1&&(o(0,"div",7),u(1),s(2,"stock"),a()),r&2){let g=O();c(),S(" ",d(2,1,g.product.inStock)," ")}}var Se=(()=>{let t=class t{constructor(){this.product={}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=y({type:t,selectors:[["alte-product-item"]],inputs:{product:"product"},standalone:!0,features:[v],decls:10,vars:12,consts:[[1,"product-item",3,"routerLink"],[1,"product-item__image"],[3,"src","alt"],[1,"product-item__name"],[1,"product-item__info"],["class","product-item__info--stock",4,"ngIf"],[1,"product-item__info--price"],[1,"product-item__info--stock"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1),l(2,"img",2),a(),o(3,"div",3),u(4),a(),o(5,"div",4),$(6,Tt,3,3,"div",5),o(7,"div",6),u(8),s(9,"currency"),a()()()),i&2&&(p("routerLink",ot(10,Et,n.product.id)),c(2),p("src",n.product.images[0],F)("alt",n.product.name),c(2),S(" ",n.product.name," "),c(2),p("ngIf",n.product==null?null:n.product.inStock),c(2),S(" ",f(9,6,n.product.price,"USD","$")," "))},dependencies:[k,Mt,at,q],styles:["[_nghost-%COMP%]{border-radius:4px;padding:16px 8px;width:264px;height:434px}[_nghost-%COMP%]   .product-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;cursor:pointer}[_nghost-%COMP%]   .product-item__image[_ngcontent-%COMP%]{border-radius:4px;width:240px;height:312px;background:var(--neutral-white-w100)}[_nghost-%COMP%]   .product-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover}[_nghost-%COMP%]   .product-item__name[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:500;font-size:14px;line-height:175%;color:var(--neutral-black-b900)}[_nghost-%COMP%]   .product-item__info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}[_nghost-%COMP%]   .product-item__info--stock[_ngcontent-%COMP%]{border:1px solid var(--neutral-black-b100);border-radius:100px;padding:2px 16px;width:100px;height:28px;text-align:center;font-family:var(--font-family);font-weight:500;font-size:12px;line-height:200%;color:var(--neutral-black-b900);text-transform:uppercase}[_nghost-%COMP%]   .product-item__info--price[_ngcontent-%COMP%]{font-family:var(--font-family);font-weight:400;font-size:14px;line-height:175%;text-align:center;color:var(--neutral-black-b600)}"]});let r=t;return r})();var Pt=(()=>{let t=class t extends lt{getWishlists(e){return this.get("wishlists.json",{orderBy:'"userId"',equalTo:`"${e}"`})}getWishlistById(e){return this.get(`wishlists/${e}.json`)}addWishlist(e){return this.post("wishlists.json",e)}removeWishlist(e){return this.delete(`wishlists/${e}.json`)}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})(),t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var je=(()=>{let t=class t{constructor(){this.wishlistService=h(Pt),this.authFacade=h(V)}getWishlists(){return this.wishlistService.getWishlists(this.authFacade.user.id).pipe(x(e=>Object.keys(e).map(i=>E(I({},e[i]),{id:i}))))}getWishlistById(e){return this.wishlistService.getWishlistById(e).pipe(x(i=>E(I({},i),{id:e})))}addWishlist(e){if(!this.authFacade.isAuthenticated)return J(()=>new Error("User is not authenticated"));let i={product:e,userId:this.authFacade.user.id};return this.wishlistService.addWishlist(i)}removeWishlist(e){return this.wishlistService.removeWishlist(e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{Mt as a,R as b,kt as c,ae as d,Se as e,xe as f,je as g};