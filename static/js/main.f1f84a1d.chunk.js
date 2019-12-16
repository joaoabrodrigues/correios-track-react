(this["webpackJsonpcorreios-track"]=this["webpackJsonpcorreios-track"]||[]).push([[0],{63:function(e,a,t){e.exports=t(94)},68:function(e,a,t){},69:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(9),l=t.n(i),c=(t(68),t(47)),r=t(48),s=t(49),d=t(56),u=t(50),m=t(24),h=t(55),g=(t(69),t(70),t(144)),f=t(138),E=t(133),p=t(136),b=t(137),v=t(145),j=t(139),k=t(143),w=t(142),C=t(140),y=t(141),N=t(53),O=t.n(N),P=t(51),A=t.n(P),R=t(54),S=t(132),x=Object(R.a)({palette:{primary:{main:"#212121"}},typography:{useNextVariants:!0}}),z=function(e){function a(){var e;Object(r.a)(this,a),(e=Object(d.a)(this,Object(u.a)(a).call(this))).handleChange=function(a){return function(t){e.setState(Object(c.a)({},a,t.target.value))}},e.handleKeyPress=function(a){"Enter"===a.key&&e.state.object&&/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(e.state.object)&&13===e.state.object.length&&!e.state.loading&&e.handleClick()};var t=new URLSearchParams(window.location.search).get("object");return t=t&&13===t.length&&/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(t)?t:null,e.state={info:"",object:t||"",loading:!0,isUrl:!0},t?e.handleClick():e.state.loading=!1,e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"handleClick",value:function(){var e=this;this.state.loading&&!this.state.isUrl||(this.setState({info:"",loading:!0}),A.a.get("https://api.joaorodrigues.dev/correios-tracking-service/v1/track/".concat(this.state.object)).then((function(a){return e.setState({info:a.data,loading:!1})})))}},{key:"render",value:function(){var e=this;return o.a.createElement(S.a,{theme:x},o.a.createElement("div",{className:"App"},o.a.createElement(E.a,{position:"static",color:"primary"},o.a.createElement(p.a,null,o.a.createElement(b.a,{variant:"h6",color:"inherit"},"Correios Tracking"))),o.a.createElement("div",{className:"Margin"},o.a.createElement(g.a,{id:"track-object",label:"Objeto",type:"text",margin:"normal",helperText:"Exemplo: AB123456789BR",onChange:this.handleChange("object"),onKeyPress:this.handleKeyPress,value:this.state.object,inputProps:{maxLength:13}}),o.a.createElement(f.a,{variant:"contained",color:"primary",className:"Button",disabled:!this.state.object||!/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(this.state.object)||13!==this.state.object.length||this.state.loading,onClick:function(){e.handleClick()}},"Rastrear",o.a.createElement(O.a,{className:"Icon"}))),this.state.info&&o.a.createElement(v.a,{className:"Margin",color:"primary",label:"Rastreamento de Objeto - "+this.state.info.objeto[0].numero}),this.state.info&&(!this.state.info.objeto[0].categoria||!this.state.info.objeto[0].categoria.includes("ERRO"))&&o.a.createElement(j.a,{className:"TableSize"},o.a.createElement(C.a,null,o.a.createElement(y.a,null,o.a.createElement(w.a,{className:"CellPadding",component:"th",scope:"row"},o.a.createElement("strong",null,"Data / Hora")),o.a.createElement(w.a,{className:"CellPadding",component:"th",scope:"row"},o.a.createElement("strong",null,"Status / Localidade")))),o.a.createElement(k.a,null,this.state.info&&this.state.info.objeto[0].evento.map((function(e){return o.a.createElement(y.a,{key:e.tipo+e.criacao},o.a.createElement(w.a,{className:"TableColor CellPadding"},e.data+" "+e.hora),o.a.createElement(j.a,null,o.a.createElement(k.a,null,o.a.createElement(y.a,{className:"TableColor",key:e.tipo+e.descricao},o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,e.descricao))))),o.a.createElement(j.a,null,o.a.createElement(k.a,null,o.a.createElement(y.a,{key:e.tipo+e.destino},!e.destino&&!e.unidade.cidade&&!e.unidade.uf&&o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,"Local:"),"  ",e.unidade.local+" - "+e.unidade.tipounidade),!e.destino&&e.unidade.cidade&&e.unidade.uf&&o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,"Local:"),"  ",e.unidade.local+" - "+e.unidade.cidade+"/"+e.unidade.uf+" - "+e.unidade.tipounidade),e.destino&&!e.unidade.cidade&&!e.unidade.uf&&o.a.createElement(w.a,{className:"Origem CellPadding"},o.a.createElement("strong",null,"Origem:")," ",e.unidade.local+" - "+e.unidade.tipounidade),e.destino&&e.unidade.cidade&&e.unidade.uf&&o.a.createElement(w.a,{className:"Origem CellPadding"},o.a.createElement("strong",null,"Origem:")," ",e.unidade.local+" - "+e.unidade.cidade+"/"+e.unidade.uf+" - "+e.unidade.tipounidade),e.destino&&!e.destino[0].cidade&&!e.destino[0].uf&&o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,"Destino:")," ",e.destino[0].local),e.destino&&e.destino[0].cidade&&e.destino[0].uf&&o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,"Destino:")," ",e.destino[0].local+" - "+e.destino[0].cidade+"/"+e.destino[0].uf),e.destino&&!e.destino[0].cidade&&e.destino[0].uf&&o.a.createElement(w.a,{className:"CellPadding"},o.a.createElement("strong",null,"Destino:")," ",e.destino[0].local+" - "+e.destino[0].uf)))))})))),this.state.info&&this.state.info.objeto[0].categoria&&this.state.info.objeto[0].categoria.includes("ERRO")&&o.a.createElement("div",null,"Objeto n\xe3o encontrado na base de dados dos Correios!")))}}]),a}(n.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/correios-track-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/correios-track-react","/service-worker.js");L?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):T(a,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.f1f84a1d.chunk.js.map