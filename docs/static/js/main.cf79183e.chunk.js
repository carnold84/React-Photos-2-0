(this["webpackJsonpreact-photos-2-0"]=this["webpackJsonpreact-photos-2-0"]||[]).push([[0],{84:function(n,t,e){"use strict";e.r(t);var i,c,a,r,o,s,l,b,h,d,j=e(0),u=e(62),x=e.n(u),f=e(53),p=e.n(f),O=e(63),m=e(3),g=e(19),v=e.n(g),w=e(4),y=e(18),k=e(24),B=e(2),R={},I=Object(j.createContext)(R),L=I.Provider,z="setData",E=function(n){var t=n.children,e=Object(j.useReducer)((function(n,t){switch(t.type){case z:var e=t.payload.albums,i={};return{albums:e.map((function(n){var t=Object(y.a)(Object(y.a)({},n),{},{photos:n.photos.map((function(n){return Object(y.a)(Object(y.a)({},n),{},{url:n.url})}))});return i[n.id]=t,t})),albumsById:i};default:throw new Error}}),R),i=Object(k.a)(e,2),c=i[0],a=i[1];return Object(B.jsx)(L,{value:{state:c,dispatch:a},children:t})},P=function(){return Object(j.useContext)(I)},C=function(){return P().state.albums},F=Object(w.c)(i||(i=Object(m.a)(["\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),S=Object(w.c)(c||(c=Object(m.a)(["\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n"]))),U=w.b.div(a||(a=Object(m.a)(["\n  width: 34px;\n  height: 34px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),q=w.b.div(r||(r=Object(m.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 34px;\n\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 100%;\n  }\n"]))),A=w.b.svg(o||(o=Object(m.a)(["\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  animation: "," 2s linear infinite;\n  transform-origin: center center;\n  margin: auto;\n  stroke: #000000;\n"])),F),H=w.b.circle(s||(s=Object(m.a)(["\n  stroke-width: 3px;\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  animation: "," 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n"])),S),J=function(){return Object(B.jsx)(U,{children:Object(B.jsx)(q,{children:Object(B.jsx)(A,{viewBox:"25 25 50 50",children:Object(B.jsx)(H,{cx:"50",cy:"50",r:"15",fill:"none","stroke-width":"3","stroke-miterlimit":"10"})})})})},T=e(43),D=e(86),M=e(85),Q=w.b.div(l||(l=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),V=w.b.div(b||(b=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n"]))),Z=w.b.div(h||(h=Object(m.a)(["\n  width: 100%;\n"]))),_=w.b.img(d||(d=Object(m.a)(["\n  transition: opacity 500ms ease-in-out;\n  width: 100%;\n"]))),G=function(n){var t=n.alt,e=void 0===t?"":t,i=n.height,c=n.url,a=n.width,r=Object(j.useState)("60px"),o=Object(k.a)(r,2),s=o[0],l=o[1],b=Object(j.useState)(!0),h=Object(k.a)(b,2),d=h[0],u=h[1],x=Object(j.useState)(0),f=Object(k.a)(x,2),p=f[0],O=f[1],m=Object(j.useRef)(),g=Object(j.useRef)(),v=function(n,t){var e=n/t,i=m.current.getBoundingClientRect();l("".concat(i.width*e,"px"))};Object(j.useEffect)((function(){m.current&&i&&a&&v(i,a)}),[m,i,a]);var w=function(){var n=g.current.height/g.current.width,t=m.current.getBoundingClientRect();l("".concat(t.width*n,"px"))};return Object(j.useEffect)((function(){return g.current.src=c,window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}}),[c]),Object(B.jsxs)(Q,{ref:m,children:[d&&Object(B.jsx)(V,{children:Object(B.jsx)(J,{})}),Object(B.jsx)(Z,{style:{height:s,opacity:p,transition:d?null:"height 500ms ease-in-out"},children:Object(B.jsx)(_,{alt:e,onLoad:function(){v(g.current.height,g.current.width),O(1),u(!1)},ref:g,style:{opacity:p}})})]})};G.defaultProps={height:"100%",width:"100%"};var K,N,W,X,Y,$,nn,tn,en,cn,an,rn,on,sn,ln,bn,hn,dn,jn,un,xn,fn=G,pn=Object(w.b)(M.a.div)(K||(K=Object(m.a)(["\n  /*\n    safari hack to fix columns bug\n    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome\n  */\n  -webkit-backface-visibility: hidden;\n"]))),On=Object(w.b)(T.a)(N||(N=Object(m.a)(["\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: column;\n  padding: 0 0 20px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n"]))),mn=Object(w.b)(M.a.div)(W||(W=Object(m.a)(["\n  /*\n    safari hack to fix columns bug\n    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome\n  */\n  -webkit-backface-visibility: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n"]))),gn=Object(w.b)(M.a.div)(X||(X=Object(m.a)(["\n  /*\n    safari hack to fix columns bug\n    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome\n  */\n  -webkit-backface-visibility: hidden;\n  position: relative;\n  width: 100%;\n"]))),vn=w.b.h3(Y||(Y=Object(m.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.2rem;\n  margin: 8px 0 0;\n"]))),wn=w.b.p($||($=Object(m.a)(["\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1rem;\n  margin: 4px 0 0;\n"]))),yn={duration:.5,ease:[.43,.13,.23,.96]},kn={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:yn},exit:{scale:.9,opacity:0,transition:yn}},Bn={hover:{scale:.95}},Rn={hover:{scale:1.1}},In=(v.a.string,function(n){var t=n.alt,e=n.height,i=n.imageUrl,c=n.subTitle,a=n.title,r=n.to,o=n.width;return Object(B.jsx)(pn,{variants:kn,children:Object(B.jsxs)(On,{to:r,children:[Object(B.jsx)(mn,{transition:yn,variants:Bn,whileHover:"hover",children:Object(B.jsx)(gn,{variants:Rn,transition:yn,children:Object(B.jsx)(fn,{alt:t,height:e,url:i,width:o})})}),Object(B.jsx)(vn,{children:a}),c&&Object(B.jsx)(wn,{children:c})]})})}),Ln=function(n,t){return n.map((function(n){var e=void 0,i=void 0,c=void 0;return void 0!==n.photos&&n.photos.length>0?(i=n.photos[0].thumbUrl,e=n.photos[0].height,c=n.photos[0].width):void 0!==n.url&&(i=n.thumbUrl,e=n.height,c=n.width),Object(B.jsx)(In,{alt:n.title,height:e,id:n.id,imageUrl:i,subTitle:n.location,title:n.title,to:"".concat("/React-Photos-2-0","/").concat(t,"/").concat(n.id),width:c},n.id)}))},zn=Object(w.b)(M.a.div)(nn||(nn=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  height: 40px;\n  margin: 20px 0;\n  position: relative;\n"]))),En=w.b.button(tn||(tn=Object(m.a)(["\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  fill: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  margin: 0 10px 0 -2px;\n  padding: 0;\n\n  svg {\n    fill: inherit;\n    height: 28px;\n    width: 28px;\n  }\n\n  &:hover {\n    fill: rgba(0, 0, 0, 1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),Pn=w.b.h2(en||(en=Object(m.a)(["\n  font-size: 1.8rem;\n  line-height: 2.1rem;\n  font-weight: normal;\n  margin: 1px 0 0 0;\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n"]))),Cn={duration:.5},Fn=(v.a.func,function(n){var t=n.onBack,e=n.title,i=void 0;return t&&(i=Object(B.jsx)(En,{onClick:t,children:Object(B.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{d:"M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"})})})),Object(B.jsxs)(zn,{animate:"enter",exit:"exit",initial:"initial",variants:{initial:{opacity:0,transition:Cn,x:-20},enter:{opacity:1,transition:Cn,x:0},exit:{opacity:0,transition:Cn,x:-20}},children:[i,Object(B.jsx)(Pn,{children:e})]})}),Sn=e(50),Un=["children"],qn=w.b.div(cn||(cn=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n"]))),An=w.b.div(an||(an=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 25px 30px;\n  width: 100%;\n\n  @media (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),Hn=function(n){var t=n.children,e=Object(Sn.a)(n,Un);return Object(B.jsx)(qn,Object(y.a)(Object(y.a)({},e),{},{children:Object(B.jsx)(An,{children:t})}))},Jn=w.b.div(rn||(rn=Object(m.a)(["\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  display: flex;\n  flex-shrink: 0;\n  height: 65px;\n  justify-content: flex-start;\n  margin: 0 25px;\n  position: relative;\n"]))),Tn=w.b.h2(on||(on=Object(m.a)(["\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.5rem;\n  line-height: 1rem;\n  font-weight: normal;\n  margin: 1px 0 0 0;\n"]))),Dn=(v.a.func,function(){return Object(B.jsx)(Jn,{children:Object(B.jsx)(Tn,{children:"React Photos"})})}),Mn=["children"],Qn=Object(w.b)(M.a.div)(sn||(sn=Object(m.a)(["\n  /* safari hack to fix columns bug */\n  -webkit-backface-visibility: hidden;\n  columns: 1;\n  column-gap: 20px;\n  width: 100%;\n\n  @media (min-width: 460px) {\n    columns: 2;\n  }\n\n  @media (min-width: 800px) {\n    columns: 3;\n  }\n\n  @media (min-width: 1000px) {\n    columns: 4;\n  }\n\n  @media (min-width: 1250px) {\n    columns: 5;\n  }\n"]))),Vn=function(n){var t=n.children,e=Object(Sn.a)(n,Mn);return Object(B.jsx)(Qn,Object(y.a)(Object(y.a)({animate:"enter",exit:"exit",initial:"initial",variants:{enter:{transition:{staggerChildren:.1}},exit:{transition:{staggerChildren:.1}}}},e),{},{children:t}))},Zn=function(){var n=C(),t=Ln(n,"album");return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Dn,{}),Object(B.jsxs)(Hn,{children:[Object(B.jsx)(Fn,{title:"Albums"}),Object(B.jsx)(Vn,{children:t})]})]})},_n=function(n){var t=n.albumId,e=n.navigate,i=function(n){return P().state.albumsById[n]}(t),c=Ln(i.photos,"album/".concat(t,"/photo"));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Dn,{}),Object(B.jsxs)(Hn,{children:[Object(B.jsx)(Fn,{title:i.title,onBack:function(){e("".concat("/React-Photos-2-0","/"))}}),Object(B.jsx)(Vn,{children:c})]})]})},Gn=e(87),Kn=w.b.div(ln||(ln=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n"]))),Nn=Object(w.b)(M.a.div)(bn||(bn=Object(m.a)(["\n  /* safari hack to fix columns bug */\n  -webkit-backface-visibility: hidden;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n"]))),Wn=w.b.img(hn||(hn=Object(m.a)(["\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n"]))),Xn={duration:.5,ease:[.43,.13,.23,.96]},Yn={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:Xn},exit:{scale:.9,opacity:0,transition:Xn}},$n=function(n){var t=n.alt,e=void 0===t?"":t,i=n.url,c=Object(j.useState)(!0),a=Object(k.a)(c,2),r=a[0],o=a[1],s=Object(Gn.a)();return Object(B.jsxs)(Kn,{children:[r&&Object(B.jsx)(J,{}),Object(B.jsx)(Nn,{animate:s,exit:"exit",initial:"initial",variants:Yn,children:Object(B.jsx)(Wn,{alt:e,onLoad:function(){s.start("enter"),o(!1)},src:i})})]})},nt=w.b.div(dn||(dn=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n  justify-content: center;\n  position: relative;\n"]))),tt=function(n){var t=n.albumId,e=n.navigate,i=n.photoId,c=function(n,t){return P().state.albumsById[n].photos.filter((function(n){return n.id===t}))[0]}(t,i);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Dn,{}),Object(B.jsxs)(Hn,{style:{height:"calc(100vh - 65px)"},children:[Object(B.jsx)(Fn,{title:c.title,onBack:function(){e("".concat("/React-Photos-2-0","/album/").concat(t))}}),Object(B.jsx)(nt,{children:Object(B.jsx)($n,{alt:c.title,height:c.height,url:c.url,width:c.width})})]})]})},et=Object(w.b)(T.c)(jn||(jn=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),it=function(){return Object(B.jsx)(T.b,{children:function(n){var t=n.location;return Object(B.jsx)(D.a,{exitBeforeEnter:!0,children:Object(B.jsxs)(et,{basepath:"/React-Photos-2-0",location:t,children:[Object(B.jsx)(Zn,{exact:!0,path:"/"}),Object(B.jsx)(_n,{path:"/album/:albumId"}),Object(B.jsx)(tt,{path:"/album/:albumId/photo/:photoId"})]},t.key)})}})},ct=Object(w.a)(un||(un=Object(m.a)(["\n  html {\n    font-size: 14px;\n    line-height: 1.3rem;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Questrial', Arial, Helvetica, Verdana, sans-serif;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]))),at=w.b.div(xn||(xn=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]))),rt=(v.a.string,function(n){var t=n.source,e=P().dispatch,i=C();return Object(j.useEffect)((function(){(function(){var n=Object(O.a)(p.a.mark((function n(){var i,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return i=n.sent,n.next=5,i.json();case 5:c=n.sent,e({payload:c,type:z});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,t]),i?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ct,{}),Object(B.jsx)(it,{})]}):Object(B.jsx)(at,{children:Object(B.jsx)(J,{})})});x.a.render(Object(B.jsx)(E,{children:Object(B.jsx)(rt,{source:"".concat("/React-Photos-2-0","/sample_data.json")})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.cf79183e.chunk.js.map