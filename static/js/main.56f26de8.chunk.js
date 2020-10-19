(this["webpackJsonpsubstrate-front-end-task"]=this["webpackJsonpsubstrate-front-end-task"]||[]).push([[0],{1142:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://dev-node.substrate.dev"}')},1149:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(127),o=n.n(c),u=n(64),i=n(1170),l=n(1165),s=n(1173),E=n(1169),p=n(1166),f=n(1172),O=(n(522),n(19)),m=n.n(O),b=n(47),d=n(37),h=n(317),v=n.n(h),S=n(499),N=n.n(S),C=n(318),y=n(319),R=n(256),j=n.n(R),_=n(503),T=n(1142),g=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]),e}),{}),k=Object(d.a)(Object(d.a)(Object(d.a)({},_),T),g),I=N.a.parse(window.location.search).rpc||k.PROVIDER_SOCKET;console.log("Connected socket: ".concat(I));var P={socket:I,jsonrpc:Object(d.a)(Object(d.a)({},v.a),k.RPC),types:k.CUSTOM_TYPES,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},D=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(d.a)(Object(d.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(d.a)(Object(d.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(d.a)(Object(d.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(d.a)(Object(d.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(d.a)(Object(d.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(d.a)(Object(d.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},w=!1,A=r.a.createContext(),x=function(e){var t=Object(d.a)({},P);["socket","types"].forEach((function(n){t[n]="undefined"===typeof e[n]?t[n]:e[n]}));var n=Object(a.useReducer)(D,t),c=Object(u.a)(n,2),o=c[0],i=c[1];return function(e,t){var n=e.apiState,a=e.socket,r=e.jsonrpc,c=e.types;if(!n){t({type:"CONNECT_INIT"});var o=new C.WsProvider(a),u=new C.ApiPromise({provider:o,types:c,rpc:r});u.on("connected",(function(){t({type:"CONNECT",payload:u}),u.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),u.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),u.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(o,i),function(e,t){var n=function(){var e=Object(b.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(y.web3Enable)(k.APP_NAME);case 4:return e.next=6,Object(y.web3Accounts)();case 6:n=(n=e.sent).map((function(e){var t=e.address,n=e.meta;return{address:t,meta:Object(d.a)(Object(d.a)({},n),{},{name:"".concat(n.name," (").concat(n.source,")")})}})),j.a.loadAll({isDevelopment:k.DEVELOPMENT_KEYRING},n),t({type:"SET_KEYRING",payload:j.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(w)return t({type:"SET_KEYRING",payload:j.a});w=!0,n()}}(o,i),r.a.createElement(A.Provider,{value:o},e.children)},K=function(){return Object(d.a)({},Object(a.useContext)(A))},Y=n(1168);function L(e){var t=K().api,n=e.finalized,c=Object(a.useState)(0),o=Object(u.a)(c,2),i=o[0],l=o[1],E=Object(a.useState)(0),p=Object(u.a)(E,2),f=(p[0],p[1]),O=Object(a.useState)(0),d=Object(u.a)(O,2),h=d[0],v=d[1],S=n?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(a.useEffect)((function(){var e=null,n=0;S((function(e){n=e.toNumber(),l(n),a(n),f(0)})).then((function(t){e=t})).catch(console.error);var a=function(){var e=Object(b.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.rpc.chain.getBlockHash(n).then((function(e){v(e.toHex())}))}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return function(){return e&&e()}}),[S]);var N=function(){f((function(e){return e+1}))};return Object(a.useEffect)((function(){var e=setInterval(N,1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement(s.a.Column,null,r.a.createElement(Y.a,{fluid:!0},r.a.createElement(Y.a.Content,null,r.a.createElement(Y.a.Header,null,"Last block number: ",i),r.a.createElement(Y.a.Description,null,"Last block hash: ",h))))}function G(e){var t=K().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?r.a.createElement(L,e):null}var H=n(1164),B=n(1150),U=n(1167);n(1148);function V(e){var t=K().api,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)({number:"",hash:""}),E=Object(u.a)(l,2),p=E[0],O=E[1];function m(){O({number:null,hash:"Bad data for search"})}return r.a.createElement("div",null,r.a.createElement(f.a,{as:"h3",dividing:!0,style:{marginTop:"3em"}},"Search for blocks"),r.a.createElement(s.a,{columns:"equal"},r.a.createElement(s.a.Row,null,r.a.createElement(s.a.Column,{width:12},r.a.createElement(H.a,{value:o,onChange:function(e){return t=e.target.value,void i(t);var t},fluid:!0,placeholder:"block number or hash"})),r.a.createElement(s.a.Column,null,r.a.createElement(B.a,{onClick:function(e){if(e.preventDefault(),!(o.length<5)){console.log("searching....",o);try{"0x"==o.trim().substr(0,2)?t.rpc.chain.getHeader(o).then((function(e){var t=JSON.parse(JSON.stringify(e));O({number:t.number,hash:o})})).catch((function(e){m()})):t.rpc.chain.getBlockHash(o).then((function(e){console.log("re-searching....",e.toHex()),O({hash:e.toHex(),number:o})})).catch((function(e){m()}))}catch(e){console.error(e)}}},color:"green"},"Search"))),r.a.createElement(s.a.Row,null,p.hash.length>0?r.a.createElement(s.a.Column,null,r.a.createElement(f.a,{as:"h5",dividing:!0,style:{marginTop:"1em"}},"Search result"),r.a.createElement(U.a,null,r.a.createElement(U.a.Item,null,"Block # ",p.number),r.a.createElement(U.a.Item,null,"Hash ",p.hash))):"")))}function J(e){return r.a.createElement(V,e)}function W(e){var t=K().api,n=Object(a.useState)({}),c=Object(u.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var n,a,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:n=e.sent,a=Object(u.a)(n,3),r=a[0],c=a[1],o=a[2],i({chain:r,nodeName:c,nodeVersion:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]),r.a.createElement(f.a,{as:"h5",style:{marginBottom:"2em",textAlign:"right",color:"#646464"}},o.nodeName," on ",o.chain)}function M(e){var t=K().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?r.a.createElement(W,e):null}function z(){var e,t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],o=(n[1],K()),O=o.apiState,m=o.keyring,b=o.keyringState,d=o.apiError,h=(c&&"READY"===b&&m.getPair(c),function(e){return r.a.createElement(i.a,{active:!0},r.a.createElement(l.a,{size:"small"},e))});if("ERROR"===O)return e=d,r.a.createElement(s.a,{centered:!0,columns:2,padded:!0},r.a.createElement(s.a.Column,null,r.a.createElement(E.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(e)})));if("READY"!==O)return h("Connecting to Substrate");if("READY"!==b)return h("Loading accounts (please review any extension's authorization)");Object(a.createRef)();return r.a.createElement(p.a,{style:{marginTop:"3em"}},r.a.createElement(f.a,{as:"h2",dividing:!0},"BEGINNER CHALLENGES Front-End Javascript block explorer"),r.a.createElement(M,null),r.a.createElement(G,null),r.a.createElement(J,null))}function F(){return r.a.createElement(x,null,r.a.createElement(z,null))}o.a.render(r.a.createElement(F,null),document.getElementById("root"))},503:function(e){e.exports=JSON.parse('{"APP_NAME":"frontend task","DEVELOPMENT_KEYRING":true,"RPC":{}}')},517:function(e,t,n){e.exports=n(1149)},591:function(e,t){},642:function(e,t){},644:function(e,t){},654:function(e,t){},656:function(e,t){},682:function(e,t){},684:function(e,t){},685:function(e,t){},691:function(e,t){},693:function(e,t){},712:function(e,t){},724:function(e,t){},727:function(e,t){},748:function(e,t){}},[[517,1,2]]]);
//# sourceMappingURL=main.56f26de8.chunk.js.map