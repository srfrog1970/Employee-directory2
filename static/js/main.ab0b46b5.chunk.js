(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(10),l=t.n(r),c=(t(59),t(38));t(60);var i=function(){return o.a.createElement(c.a,{className:"headerStyle"},o.a.createElement("h1",null,"Employee Directory"),o.a.createElement("p",null,"Click on headers to sort or filter using the search box to narrow your results."))};var s=function(e){return o.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};t(51),t(52),t(40),t(61);var u=t(41),m=t(42),d=t(53),h=t(50),f=(t(66),t(43)),p=t.n(f),g=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},w=t(49),b={columns:[{label:"Image",field:"image",sort:"asc",width:150},{label:"Name",field:"name",sort:"asc",width:270},{label:"Phone",field:"phone",sort:"asc",width:200},{label:"Email",field:"email",sort:"asc",width:100},{label:"DOB",field:"dob",sort:"asc",width:150}],rows:[]};g().then((function(e){e.data.results.map((function(e){var n=new Date(e.dob.date).toLocaleDateString("en-US");console.log(n),b.rows.push({name:e.name.first,image:e.picture.thumbnail,email:e.email,phone:e.phone,dob:n})}))})).catch((function(e){return console.log(e)}));var v=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return console.log("rendering"),console.log(b.rows),console.log(b.columns),o.a.createElement("div",null,o.a.createElement(w.c,{data:b}))}}]),t}(a.Component);var E=function(){return o.a.createElement("div",null,o.a.createElement(s,null,o.a.createElement(i,null),o.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,n,t){e.exports=t(105)},60:function(e,n,t){},61:function(e,n,t){},66:function(e,n,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.ab0b46b5.chunk.js.map