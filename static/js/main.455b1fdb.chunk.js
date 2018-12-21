(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(313)},124:function(e,t,a){},126:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(17),r=a.n(i),l=(a(124),a(103)),c=a(104),s=a(105),d=a(117),u=a(106),h=a(118),m=a(29),g=(a(126),a(128),a(112)),f=a.n(g),b=a(113),p=a.n(b),E=a(109),v=a.n(E),j=a(110),w=a.n(j),k=a(111),C=a.n(k),y=a(115),N=a.n(y),O=a(41),P=a.n(O),A=a(42),R=a.n(A),S=a(20),T=a.n(S),x=a(116),z=a.n(x),W=a(30),L=a.n(W),U=a(114),Z=a.n(U),B=a(107),M=a.n(B),K=a(40),D=Object(K.createMuiTheme)({palette:{primary:{main:"#212121"}},typography:{useNextVariants:!0}}),I=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){return function(a){e.setState(Object(l.a)({},t,a.target.value))}},e.handleKeyPress=function(t){"Enter"===t.key&&e.state.object&&/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(e.state.object)&&13===e.state.object.length&&!e.state.loading&&e.handleClick()};var a=new URLSearchParams(window.location.search).get("object");return a=a&&13===a.length&&/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(a)?a:null,e.state={info:"",object:a||"",loading:!0,isUrl:!0},a?e.handleClick():e.state.loading=!1,e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this;this.state.loading&&!this.state.isUrl||(this.setState({info:"",loading:!0}),M.a.get("https://correiostrackssl.joaoabrodrigues.com/v1/tracking/".concat(this.state.object)).then(function(t){return e.setState({info:t.data,loading:!1})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(K.MuiThemeProvider,{theme:D},o.a.createElement("div",{className:"App"},o.a.createElement(v.a,{position:"static",color:"primary"},o.a.createElement(w.a,null,o.a.createElement(C.a,{variant:"h6",color:"inherit"},"Correios Tracking"))),o.a.createElement("div",{className:"Margin"},o.a.createElement(f.a,{id:"track-object",label:"Objeto",type:"text",margin:"normal",helperText:"Exemplo: AB123456789BR",onChange:this.handleChange("object"),onKeyPress:this.handleKeyPress,value:this.state.object,inputProps:{maxLength:13}}),o.a.createElement(p.a,{variant:"contained",color:"primary",className:"Button",disabled:!this.state.object||!/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(this.state.object)||13!==this.state.object.length||this.state.loading,onClick:function(){e.handleClick()}},"Rastrear",o.a.createElement(Z.a,{className:"Icon"}))),this.state.info&&o.a.createElement(N.a,{className:"Margin",color:"primary",label:"Rastreamento de Objeto - "+this.state.info.objeto[0].numero}),this.state.info&&(!this.state.info.objeto[0].categoria||!this.state.info.objeto[0].categoria.includes("ERRO"))&&o.a.createElement(P.a,{className:"TableSize"},o.a.createElement(z.a,null,o.a.createElement(L.a,null,o.a.createElement(T.a,{className:"CellPadding",component:"th",scope:"row"},o.a.createElement("strong",null,"Data / Hora")),o.a.createElement(T.a,{className:"CellPadding",component:"th",scope:"row"},o.a.createElement("strong",null,"Status / Localidade")))),o.a.createElement(R.a,null,this.state.info&&this.state.info.objeto[0].evento.map(function(e){return o.a.createElement(L.a,{key:e.tipo+e.criacao},o.a.createElement(T.a,{className:"TableColor CellPadding"},e.data+" "+e.hora),o.a.createElement(P.a,null,o.a.createElement(R.a,null,o.a.createElement(L.a,{className:"TableColor",key:e.tipo+e.descricao},o.a.createElement(T.a,{className:"CellPadding"},o.a.createElement("strong",null,e.descricao))))),o.a.createElement(P.a,null,o.a.createElement(R.a,null,o.a.createElement(L.a,{key:e.tipo+e.destino},!e.destino&&o.a.createElement(T.a,{className:"CellPadding"},o.a.createElement("strong",null,"Local:")," ",e.unidade.local+" - "+e.unidade.cidade+"/"+e.unidade.uf+" - "+e.unidade.tipounidade),e.destino&&o.a.createElement(T.a,{className:"Origem CellPadding"},o.a.createElement("strong",null,"Origem:")," ",e.unidade.local+" - "+e.unidade.cidade+"/"+e.unidade.uf+" - "+e.unidade.tipounidade),e.destino&&o.a.createElement(T.a,{className:"CellPadding"},o.a.createElement("strong",null,"Destino:")," ",e.destino[0].local+" - "+e.destino[0].cidade+"/"+e.destino[0].uf)))))}))),this.state.info&&this.state.info.objeto[0].categoria&&this.state.info.objeto[0].categoria.includes("ERRO")&&o.a.createElement("div",null,"Objeto n\xe3o encontrado na base de dados dos Correios!")))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/correios-track-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/correios-track-react","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):H(t,e)})}}()}},[[119,2,1]]]);
//# sourceMappingURL=main.455b1fdb.chunk.js.map