(this.webpackJsonppokemosdata=this.webpackJsonppokemosdata||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){},32:function(e,a,t){e.exports=t(65)},37:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),c=t.n(r),o=t(2),m=t(1),s=t(6),u=(t(37),t(19),t(20),t(10)),i=t(7),p=t.n(i),E=t(12),d=t(13),g=t.n(d);function f(){return(f=Object(E.a)(p.a.mark((function e(a){var t,n,l,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("/pokemosdata","/pokemon.json"));case 2:return t=e.sent,n=t.data.find((function(e){return e.num===a})),152===(l=n.id+1)&&(l=1),0===(r=n.id-1)&&(r=151),c=t.data.find((function(e){return e.id===l})),o=t.data.find((function(e){return e.id===r})),e.abrupt("return",{current:n,next:c,previous:o});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(E.a)(p.a.mark((function e(a,t,n,l){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("/pokemosdata","/pokemon.json"));case 2:return r=e.sent,c=r.data,null!==t&&"Todos"!==t&&(c=c.filter((function(e){return e.type.includes(t)}))),null!==n&&(c=c.filter((function(e){return e.name.toLowerCase().includes(n)}))),c=c.sort(k(l)),e.abrupt("return",c.slice(0,a));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(E.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("/pokemosdata","/pokemon.json"));case 2:return a=e.sent,t=a.data.reduce((function(e,a){return[].concat(Object(u.a)(e),Object(u.a)(a.type))}),[]),n=Object(u.a)(new Set(t)).sort(),e.abrupt("return",["Todos"].concat(Object(u.a)(n)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var a=1;return"-"===e[0]&&(a=-1,e=e.substr(1)),function(t,n){return-1==a?n[e].localeCompare(t[e]):t[e].localeCompare(n[e])}}t(56);var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("span",null,l.a.createElement("img",{className:"title",src:"https://fontmeme.com/permalink/200906/7b92d99926934e43d9c374c8e8cd4e8f.png",alt:"fonte-de-pokemon-go",border:"0"})),l.a.createElement("div",{className:"nav"},l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/pokemons"},"Pokemons"),l.a.createElement(o.b,{to:"/login"},"Login"))))},h=function(){var e=Object(m.f)(),a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)([]),u=Object(s.a)(o,2),i=u[0],p=u[1],E=Object(n.useState)(10),d=Object(s.a)(E,2),g=d[0],f=d[1],k=Object(n.useState)(null),h=Object(s.a)(k,2),w=h[0],O=h[1],j=Object(n.useState)(null),x=Object(s.a)(j,2),C=x[0],P=x[1],y=Object(n.useState)("num"),A=Object(s.a)(y,2),S=A[0],T=A[1];Object(n.useEffect)((function(){(function(e,a,t,n){return b.apply(this,arguments)})(g,w,C,S).then((function(e){c(e)}))}),[g,w,C,S]),Object(n.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){p(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement("section",{className:"container-search"},l.a.createElement("div",{className:"container-search-type"},l.a.createElement("label",{for:""},"Buscar por tipo:"),l.a.createElement("select",{name:"select",onChange:function(e){return O(e.target.value)}},i.map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"container-list-order"},l.a.createElement("label",{for:""},"Ordenar:"),l.a.createElement("select",{name:"select",onChange:function(e){return T(e.target.value)}},l.a.createElement("option",{value:""},"Selecionar"),l.a.createElement("option",{value:"name"},"A-Z"),l.a.createElement("option",{value:"-name"},"Z-A"),l.a.createElement("option",{value:"num"},"Num-asc"),l.a.createElement("option",{value:"-num"},"Num-desc"))),l.a.createElement("input",{type:"text",placeholder:"Digite o Nome do Pok\xe9mon",onChange:function(e){return P(e.target.value.toLowerCase())}})),l.a.createElement("section",null,l.a.createElement("div",{className:"text"},l.a.createElement("p",{className:"hide"}),l.a.createElement("ul",{className:"list"},r.map((function(a){return l.a.createElement("li",{onClick:function(){return t=a.num,void e.push("/detail/".concat(t));var t}},l.a.createElement("span",null," N\xb0",a.num,l.a.createElement("img",{src:a.img})," ",a.name))}))),g<=150?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn-load-more",onClick:function(){f(g+30)}},"Carregar Mais"),l.a.createElement("button",{className:"btn-load-more",onClick:function(){f(151)}},"Carregar Tudo")):null))),l.a.createElement("footer",{className:"footer"},"\xa9 By Aline Rozetti & Mariana Barros - 2020"))},w=(t(62),function(){var e=Object(m.f)(),a=Object(n.useState)(null),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(m.g)().num;function u(a){e.push("/detail/".concat(a))}return Object(n.useEffect)((function(){(function(e){return f.apply(this,arguments)})(o).then((function(e){c(e)}))}),[o]),null===r?null:l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement("h3",{className:"name-pokemon"},r.current.name," N\xb0",r.current.num),l.a.createElement("div",{className:"next-prev"},l.a.createElement("span",{className:"next-previous",onClick:function(){return u(r.previous.num)}},l.a.createElement("img",{className:"image",src:"".concat("/pokemosdata","/img/next.png")}),r.previous.name," N\xb0",r.previous.num," "),l.a.createElement("span",{className:"next-previous",onClick:function(){return u(r.next.num)}},r.next.name," N\xb0",r.next.num,l.a.createElement("img",{className:"image",src:"".concat("/pokemosdata","/img/previous.png")})," ")),l.a.createElement("div",{className:"data-pokemon"},l.a.createElement("div",null,l.a.createElement("img",{className:"img",src:r.current.img}),l.a.createElement("div",{className:"data-type"},l.a.createElement("label",null,"TIPO"),l.a.createElement("ul",null,r.current.type.map((function(e){return l.a.createElement("li",null,e)}))))),l.a.createElement("div",{className:"data"},l.a.createElement("h3",null,"Dados do Pok\xe9mon"),l.a.createElement("div",{className:"data-flex"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",null,"ALTURA"),l.a.createElement("label",null,r.current.height)),l.a.createElement("li",null,l.a.createElement("label",null,"PESO"),l.a.createElement("label",null,r.current.weight)),l.a.createElement("li",null,l.a.createElement("label",null,"CANDY"),l.a.createElement("label",null,r.current.candy)),l.a.createElement("li",null,l.a.createElement("label",null,"CANDY COUNT"),l.a.createElement("label",null,r.current.candy_count)),l.a.createElement("li",null,l.a.createElement("label",null,"OVOS"),l.a.createElement("label",null,r.current.egg)),l.a.createElement("li",null,l.a.createElement("label",null,"CHANCE DE APARECER"),l.a.createElement("label",null,r.current.spawn_chance)),l.a.createElement("li",null,l.a.createElement("label",null,"M\xc9DIA"),l.a.createElement("label",null,r.current.avg_spawns)),l.a.createElement("li",null,l.a.createElement("label",null,"TEMPO DE DESOVA"),l.a.createElement("label",null,r.current.spawn_time)),l.a.createElement("li",null,l.a.createElement("label",null,"MULTIPLICADORES"),l.a.createElement("label",null,r.current.multipliers)),l.a.createElement("li",null,l.a.createElement("label",null,"FRAQUEZA"),l.a.createElement("label",null,r.current.weaknesses)))))),l.a.createElement("ul",{className:"evolu"}),l.a.createElement("div",{className:"btn-end"},l.a.createElement("button",{className:"btn-load-more",onClick:function(a){e.push("/pokemons")}},"Explorar Mais Pokemons"))),l.a.createElement("footer",{className:"footer"},"\xa9 By Aline Rozetti & Mariana Barros - 2020"))}),O=(t(63),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",{className:"title-home"},l.a.createElement("span",{className:"sub-title"},"Descubra o Universo Pokemon!!! teste teste")),l.a.createElement("section",{className:"gallery autoplay items-3"},l.a.createElement("div",{id:"item-1",className:"control-operator"}),l.a.createElement("div",{id:"item-2",className:"control-operator"}),l.a.createElement("div",{id:"item-3",className:"control-operator"}),l.a.createElement("figure",{className:"item"},l.a.createElement("div",null,l.a.createElement("span",{className:"top"},"Top 3 - Ataque")),l.a.createElement(o.b,{to:"/detail/150"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/150.png"})),l.a.createElement(o.b,{to:"/detail/065"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/065.png"})),l.a.createElement(o.b,{to:"/detail/149"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/149.png"}))),l.a.createElement("figure",{className:"item"},l.a.createElement("div",null,l.a.createElement("span",{className:"top"},"Top 3 - Defesa")),l.a.createElement(o.b,{to:"/detail/091"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/091.png"})),l.a.createElement(o.b,{to:"/detail/095"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/095.png"})),l.a.createElement(o.b,{to:"/detail/144"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/144.png"}))),l.a.createElement("figure",{className:"item"},l.a.createElement("div",null,l.a.createElement("span",{className:"top"},"Top 3 - HP")),l.a.createElement(o.b,{to:"/detail/113"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/113.png"})),l.a.createElement(o.b,{to:"/detail/143"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/143.png"})),l.a.createElement(o.b,{to:"/detail/134"},l.a.createElement("img",{className:"img-top3",src:"https://www.serebii.net/pokemongo/pokemon/134.png"}))),l.a.createElement("div",{className:"text-pokemon"},l.a.createElement("h1",null,"O que s\xe3o Pok\xe9mon?"),l.a.createElement("p",null,'Pok\xe9mon s\xe3o criaturas de todas as formas e tamanhos que convivem com os humanos na natureza. Na grande maioria, os Pok\xe9mon n\xe3o falam, exceto para proferir seus nomes. Os Pok\xe9mon s\xe3o criados e comandados por seus donos (os chamados "Treinadores"). No decorrer das aventuras, os Pok\xe9mon crescem e ganham experi\xeancia, podendo at\xe9 mesmo evoluir para Pok\xe9mon mais fortes. Alguns Pok\xe9mon, como Pikachu, Piplup e Charizard, possuem pap\xe9is de destaque na s\xe9rie de videogames, no jogo Estampas Ilustradas e nos programas de TV, mas eles s\xe3o apenas algumas das quase 500 criaturas que habitam o universo dos Pok\xe9mon.'))))}),j=(t(64),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"sub-title"},"P\xe1gina em Constru\xe7\xe3o!"),l.a.createElement("img",{className:"gif",src:"".concat("/pokemosdata","/img/pikachu.gif")})))}),x=function(){return l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/detail/:num",exact:!0},l.a.createElement(w,null)),l.a.createElement(m.a,{path:"/pokemons",exact:!0},l.a.createElement(h,null)),l.a.createElement(m.a,{path:"/login",exact:!0},l.a.createElement(j,null)),l.a.createElement(m.a,{path:"/",exact:!0},l.a.createElement(O,null)))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{basename:"/"},l.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c326d129.chunk.js.map