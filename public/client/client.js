!function(e){function r(r){for(var n,a,l=r[0],u=r[1],c=r[2],s=0,p=[];s<l.length;s++)a=l[s],o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(r);p.length;)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,r=0;r<i.length;r++){for(var t=i[r],n=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(n=!1)}n&&(i.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={1:0},i=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var f=u;i.push([528,0]),t()}({243:function(e,r,t){"use strict";t(2);var n,o=t(47),i=t(38),a=t(246),l=t.n(a),u=t(61),c=t.n(u),f=t(76),s=t.n(f),p=t(530),d=t(532),v=t(42),m=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,r,t,o){var i=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}});var b,h,y=m(p.a,{name:"phone",type:"tel",label:"Phone",margin:"normal",fullWidth:!0,component:v.b,helperText:"Optional"}),g=Object(d.a)({form:"order",onSubmit:(b=regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("http://beta2.arxip.com:8000/generate").send(r);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,t(Object(o.b)(r)),e.finish(7);case 10:case"end":return e.stop()}},e,void 0,[[0,5,7,10]])}),h=function(){var e=b.apply(this,arguments);return new Promise(function(r,t){return function n(o,i){try{var a=e[o](i),l=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});r(l)}("next")})},function(e,r){return h.apply(this,arguments)})})(function(e){var r=e.handleSubmit,t=e.submitting;return m("form",{onSubmit:r},void 0,m(s.a,{variant:"title",color:"inherit",style:{paddingTop:"20px"}},void 0,"Register Photo Session"),m("div",{},void 0,m(p.a,{name:"email",type:"email",label:"Email",margin:"normal",fullWidth:!0,component:v.b,validate:[v.c,v.a]})),m("div",{style:{marginBottom:"20px"}},void 0,y),m("div",{},void 0,m(c.a,{fullWidth:!0,variant:"contained",size:"large",color:"primary",margin:"normal",type:"submit",disabled:t},void 0,t?"Submitting...":"Get QR code")))}),O=t(245),w=t(54),j=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,t,n,o){var i=r&&r.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),S=Object(i.b)(function(e){return{user:Object(w.e)(e),email:Object(o.d)(e),phone:Object(o.e)(e)}},{reset:o.c})(function(e){var r=e.email,t=e.phone,n=e.user,o=e.reset;return j("div",{},void 0,j(s.a,{variant:"title",color:"inherit",style:{marginBottom:"10px"}},void 0,"Take a picture of that qr code as a last photo in the session"),j(s.a,{variant:"title",color:"inherit",style:{marginBottom:"20px"}},void 0,r),j(O.QRCode,{bgColor:"#FFFFFF",fgColor:"#000000",level:"Q",style:{width:"100%",marginBottom:"20px"},value:[r,t,n].join(";")}),j(c.a,{fullWidth:!0,variant:"contained",onClick:o},void 0,"Back to register session form"))}),x=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,t,n,o){var i=r&&r.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),P=x(S,{}),_=x(g,{});r.a=Object(i.b)(function(e){return{showQr:Object(o.f)(e)}})(function(e){return e.showQr?P:_})},248:function(e,r,t){"use strict";t(2);var n,o=t(61),i=t.n(o),a=t(530),l=t(532),u=t(116),c=t(54),f=t(42),s=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,r,t,o){var i=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}),p=s("div",{},void 0,s(i.a,{fullWidth:!0,variant:"contained",size:"large",color:"primary",margin:"normal",type:"submit"},void 0,"Submit"));r.a=Object(l.a)({form:"login",onSubmit:function(e,r){var t=e.email,n=e.password;return new Promise(function(e){var o=[{email:"omelniz@gmail.com",password:"1234"},{email:"ivanovo.cwi@gmail.com",password:"1234"},{email:"fot1000d@gmail.com",password:"1234"}].filter(function(e){return e.email===t});if(0===o.length)throw new u.a({email:"There is no user with that email"});if(o[0].password!==n)throw new u.a({password:"Wrong password"});r(Object(c.a)(o[0].email)),e()})}})(function(e){var r=e.handleSubmit;return s("form",{onSubmit:r},void 0,s("div",{},void 0,s(a.a,{name:"email",type:"email",label:"Email",margin:"normal",fullWidth:!0,component:f.b,validate:[f.c,f.a]})),s("div",{style:{marginBottom:"20px"}},void 0,s(a.a,{name:"password",type:"password",label:"Password",margin:"normal",validate:[f.c],fullWidth:!0,component:f.b})),p)})},252:function(e,r,t){"use strict";(function(e){var n,o=t(2),i=t(262),a=t(264),l=t(142),u=t(533),c=t(61),f=t.n(c),s=t(250),p=t.n(s),d=t(249),v=t.n(d),m=t(76),b=t.n(m),h=t(54),y=t(38),g=t(248),O=t(243),w=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,r,t,o){var i=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}),j=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var S={maxWidth:"640px",margin:"auto",display:"flex",flexDirection:"column",height:"100vh"},x={boxSizing:"border-box",padding:"20px",maxWidth:"320px",width:"100%",margin:"auto",flex:1},P=w(i.a,{},void 0,w(a.a,{path:"*",component:O.a})),_=w(i.a,{},void 0,w(a.a,{path:"*",component:g.a})),k=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,o["Component"]),j(r,[{key:"render",value:function(){return w("div",{className:"App",style:S},void 0,w(p.a,{position:"static"},void 0,w(v.a,{},void 0,w(b.a,{style:{flexGrow:1},variant:"title",color:"inherit"},void 0,"Sfotay.com"),this.props.isAuthorized&&w(f.a,{onClick:this.props.logout,color:"inherit"},void 0,"Logout"))),w("div",{style:x},void 0,this.props.isAuthorized?P:_))}}]),r}(),A=Object(y.b)(function(e){return{isAuthorized:Object(h.d)(e)}},{logout:h.c})(k),E=Object(u.a)(A);r.a=Object(l.hot)(e)(E)}).call(this,t(67)(e))},258:function(e,r,t){e.exports=null},265:function(e,r,t){"use strict";t.r(r);t(527),t(526),t(521),t(520),t(519),t(518),t(517),t(516),t(515),t(514),t(513),t(511),t(510),t(509),t(508),t(507),t(505),t(504),t(503),t(502),t(501),t(500),t(499),t(498),t(497),t(496),t(495),t(494),t(490),t(487),t(486),t(485),t(484),t(483),t(482),t(481),t(480),t(479),t(478),t(477),t(476),t(474),t(473),t(472),t(471),t(470),t(468),t(467),t(466),t(465),t(464),t(462),t(461),t(460),t(459),t(458),t(457),t(456),t(455),t(454),t(453),t(165),t(452),t(451),t(450),t(449),t(448),t(447),t(446),t(445),t(444),t(443),t(442),t(441),t(440),t(439),t(438),t(436),t(435),t(434),t(433),t(432),t(431),t(430),t(429),t(428),t(427),t(426),t(425),t(424),t(423),t(422),t(421),t(420),t(419),t(418),t(417),t(2);var n=t(41),o=t.n(n),i=t(531),a=t(142),l=t(38),u=t(12),c=t(244),f=(t(258),t(256)),s=t.n(f),p=t(130),d=regeneratorRuntime.mark(v);function v(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([]);case 2:case"end":return e.stop()}},d,this)}var m=t(529),b=t(54),h=t(47),y=Object(u.c)({app:b.b,form:m.a,order:h.a}),g={};try{g=s.a.fromJSON(__MARVIN_DEHYDRATED_STATE)}catch(e){}var O,w=t(252),j=(t(267),O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,r,t,n){var o=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&o)for(var a in o)void 0===r[a]&&(r[a]=o[a]);else r||(r=o||{});if(1===i)r.children=n;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];r.children=l}return{$$typeof:O,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}),S=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=Object(c.a)();return n=Object(u.a)(o),e=Object(u.e)(y,g,n),r?{tasks:r.map(function(e){return o.run(e,t)}),store:e}:(o.run(v),{store:e})}().store;(0,o.a.render)(j(a.AppContainer,{},void 0,j(l.a,{store:S},void 0,j(i.a,{},void 0,j(w.a,{})))),document.getElementById("root"))},267:function(e,r,t){},403:function(e,r,t){"use strict";t.r(r);var n=t(257),o=t(180),i={stateTransformer:function(e){var r={};return Object.keys(e).forEach(function(t){o.Iterable.isIterable(e[t])?r[t]=e[t].toJS():r[t]=e[t]}),r}},a=Object(n.createLogger)(i);r.default=a},42:function(e,r,t){"use strict";t.d(r,"b",function(){return v}),t.d(r,"c",function(){return m}),t.d(r,"a",function(){return b});var n,o=t(2),i=t.n(o),a=t(247),l=t.n(a),u=t(178),c=t.n(u),f=t(179),s=t.n(f),p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,r,t,o){var i=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}});var v=function(e){var r=e.input,t=e.meta,n=function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["input","meta"]);return d(s.a,{error:Boolean(t.touched&&t.error),fullWidth:!0},void 0,i.a.createElement(l.a,p({},n,r)),Boolean(t.touched&&t.error)&&d(c.a,{},void 0,t.error))},m=function(e){return e||"number"==typeof e?void 0:"Required"},b=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},47:function(e,r,t){"use strict";t.d(r,"b",function(){return u}),t.d(r,"c",function(){return c}),t.d(r,"d",function(){return f}),t.d(r,"e",function(){return s}),t.d(r,"f",function(){return p});var n,o=t(146),i=t(263),a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var u=Object(o.a)("ORDER"),c=Object(o.a)("RESET"),f=function(e){return e.order.email},s=function(e){return e.order.phone},p=function(e){return e.order.show},d={show:!1,email:null,phone:null};r.a=Object(i.a)((l(n={},u,function(e,r){return a({},e,{show:!0,email:r.payload.email,phone:r.payload.phone})}),l(n,c,function(){return a({},d)}),n),d)},528:function(e,r,t){e.exports=t(265)},54:function(e,r,t){"use strict";t.d(r,"a",function(){return u}),t.d(r,"c",function(){return c}),t.d(r,"d",function(){return f}),t.d(r,"e",function(){return s});var n,o=t(146),i=t(263),a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var u=Object(o.a)("AUTHORIZE"),c=Object(o.a)("LOGOUT"),f=function(e){return e.app.authorized},s=function(e){return e.app.user},p={authorized:localStorage.getItem("authorized"),user:localStorage.getItem("user")};r.b=Object(i.a)((l(n={},u,function(e,r){return localStorage.setItem("authorized",!0),localStorage.setItem("user",r.payload),a({},e,{authorized:!0,user:r.payload})}),l(n,c,function(e){return localStorage.clear(),a({},e,{authorized:!1,user:null})}),n),p)}});