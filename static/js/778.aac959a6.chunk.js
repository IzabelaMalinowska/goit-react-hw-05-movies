"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{778:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(689),a=n(87),c=n(439),i=n(281),o=n(791),s=n(184),u=function(){var e,t,n=function(e){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){i.TP(e).then((function(e){return a(e)}))}),[e]),{movieDetails:r}}((0,r.UO)().movieId),u=n.movieDetails,d=null!==(e=null===(t=(0,r.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.rU,{to:d,children:[" ",(0,s.jsx)("button",{type:"button",style:{margin:"15px"},children:"Go back"})]}),(0,s.jsxs)("div",{style:{marginBottom:"30px",borderTop:"1px solid #ccc",borderBottom:"1px solid #ccc",padding:"20px",display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(u.poster_path),alt:"{movieDetails.original_title}",style:{float:"left"}}),(0,s.jsxs)("div",{style:{flex:1,marginLeft:"10px"},children:[(0,s.jsxs)("h2",{children:[u.title," (",u.release_date?u.release_date.substring(0,4):"",")"]}),(0,s.jsxs)("p",{children:["User Score:"," ",u.vote_average?Math.fround(10*u.vote_average).toFixed(0):"","%"]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:u.overview}),(0,s.jsx)("h4",{children:"Genres"}),(0,s.jsx)("p",{children:u.genres?u.genres.map((function(e){return e.name})).join(" "):""})]})]}),(0,s.jsxs)("div",{style:{marginBottom:"30px",borderTop:"1px solid #ccc",borderBottom:"1px solid #ccc",padding:"20px"},children:[(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(r.j3,{})]})]})}},281:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return d},q5:function(){return p},z1:function(){return u},zv:function(){return l}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=274e7c8f561cfc4aca5d1a492dcf8b13",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie".concat(o,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t).concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=778.aac959a6.chunk.js.map