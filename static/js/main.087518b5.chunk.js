(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{27:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(32),n(17));n(33);var s=function(){return r.a.createElement(l.a,{className:"headerStyle"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on carrots to filter by heading or use the search box to narrow your results."))};var u=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))},i=n(24),m=n(25),h=n(19);n(34);var d=function(){return r.a.createElement(u,null,r.a.createElement(h.a,{className:"searchBarRow"},r.a.createElement(i.a,{className:"searchField"},r.a.createElement(m.a,{placeholder:"Search"}))))},f=n(20),E=n(21),v=n(26),p=n(23),y=(n(40),n(22)),w=n.n(y),g=function(){return w.a.get("https://randomuser.me/api/?results=200&nat=us")},b=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("API HEre"),g().then((function(t){return e.setState({users:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log("HERE!"),r.a.createElement("div",null,"Table.js New words")}}]),n}(a.Component);var k=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(s,null),r.a.createElement(d,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.087518b5.chunk.js.map