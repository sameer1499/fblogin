(this.webpackJsonpfblog=this.webpackJsonpfblog||[]).push([[0],{104:function(e,t,a){},121:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),i=(a(104),a(15)),l=a(40),s=a.n(l),u=a(81),m=a(82),d=new(function(){function e(){Object(u.a)(this,e),this.authenticated=!1}return Object(m.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"status",value:function(){return this.authenticated}}]),e}()),g=(a(121),a(163)),f=a(160),h=a(66),p=a(86),b=a(53),E=a(34),k=a(26);E.b.add(k.f,k.a,k.c,k.e,k.d,k.b);var y={GET:"get",CHANGE:"change-details",DEL:"delete-details"},v=[],j=function(e,t){switch(t.type){case y.GET:var a=t.payload.details,n=(a.location,a.phone),c=a.name,r=a.about,i=a.overall_star_rating,l=a.mission,s=a.access_token,u=a.id,m=Object(p.a)(e).slice(0),d={id:u,access_token:s,icon:o.a.createElement(b.a,{icon:["fab","facebook-f"]}),source:"Facebook",name:c,about:r,address:"Kochi",phone:n,mission:l,rating:i?"".concat(i,"/5"):"No rating yet",listed:!0};return m.push(d),m;case y.CHANGE:var g=t.payload;r=g.about,n=g.phone,l=g.mission,u=g.id;return e.map((function(e){return e.id===u?Object(h.a)(Object(h.a)({},e),{},{about:r,phone:n,mission:l}):e}));case y.DEL:return m=e.filter((function(e){return e.id<5}));default:return e}},O=Object(n.createContext)(),_=function(e){var t=e.children,a=Object(n.useReducer)(j,v),c=Object(i.a)(a,2),r=c[0],l=c[1];return o.a.createElement(O.Provider,{value:[r,l,y]},t)};E.b.add(k.f,k.a);var C=Object(f.a)((function(e){return{button:{fontSize:"1.5rem",fontWeight:"900"},fbicon:{marginRight:20},login:{backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}})),w=function(e){var t=Object(n.useContext)(O),a=Object(i.a)(t,3),c=a[1],r=a[2],l=C();Object(n.useEffect)((function(){window.FB.getLoginStatus((function(e){"not_authorized"===e.status&&alert("Try to Login after loging out of other facebook accounts in the browser")}))}),[]);var u=function(e){s.a.get("https://graph.facebook.com/".concat(e.authResponse.userID,"/accounts?access_token=").concat(e.authResponse.accessToken)).then((function(e){e.data.data.forEach((function(e){!function(e){var t=s.a.CancelToken.source();s.a.get("https://graph.facebook.com/".concat(e.id,"?fields=location,phone,name,about,overall_star_rating,mission,access_token&access_token=").concat(e.access_token),{cancelToken:t.token}).then((function(e){c({type:r.GET,payload:{details:e.data}})}))}(e)}))})).catch((function(e){return console.log(e)}))};return o.a.createElement("div",{className:l.login},o.a.createElement(g.a,{variant:"contained",color:"primary",size:"large",className:l.button,onClick:function(){window.FB.login((function(t){"not_authorized"===t.status||"unknown"===t.status?alert("User cancelled login or did not fully authorize!! Try to log out from the browser"):(console.log(t),d.login((function(){e.history.push("/home")})),u(t))}),{scope:"email,pages_manage_cta,pages_show_list,pages_read_engagement,pages_manage_metadata,pages_read_user_content,public_profile"})},startIcon:o.a.createElement(b.a,{className:l.fbicon,icon:["fab","facebook-f"]})},"Login With Facebook"))},x=a(87),N=a(10),S=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return o.a.createElement(N.b,Object.assign({},a,{render:function(e){return d.status()?o.a.createElement(t,e):o.a.createElement(N.a,{to:{pathname:"/",state:{from:e.location}}})}}))},L=a(63),T=(a(186),a(61)),z=(a(165),a(166),a(130),a(167),a(168),Object(f.a)((function(e){return{drawer:{flexShrink:0,width:270},toolbar:{backgroundColor:"#009688",height:74},drawerPaper:{width:270,backgroundColor:"#33ab9f"},typography:{marginTop:15,color:"white",fontSize:25,letterSpacing:2}}})),a(169)),G=a(183),I=a(172),A=a(131),F=Object(A.a)({app:{backgroundColor:"white",width:"100%",marginLeft:"270px",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},form:{marginRight:"70px",padding:"20px"},logout:{marginRight:20}}),R=function(e){var t=e.handleLogout,a=F();return o.a.createElement(z.a,{position:"fixed",className:a.app},o.a.createElement("div",{className:a.form},o.a.createElement(G.a,{id:"loc",defaultValue:"Kochi, IN"},o.a.createElement(I.a,{value:"Kochi, IN"},"Kochi, IN"))),o.a.createElement("div",{className:a.logout},o.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:t},"Logout")))},D=a(182),B=a(177),H=a(129),K=a(178),U=a(179),P=a(180),W=a(173),J=a(181),V=a(185),Y=a(174),q=a(175),M=a(176),Q=function(e){var t=e.listing,a=Object(n.useContext)(O),c=Object(i.a)(a,3),r=c[1],l=c[2],u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],f=m[1],h=Object(n.useState)(t.about),p=Object(i.a)(h,2),b=p[0],E=p[1],k=Object(n.useState)(t.phone),y=Object(i.a)(k,2),v=y[0],j=y[1],_=Object(n.useState)(t.mission),C=Object(i.a)(_,2),w=C[0];C[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{align:"center",style:{fontSize:"1.4rem"}},t.icon),o.a.createElement(W.a,{align:"center"},t.source),o.a.createElement(W.a,{align:"center"},t.name),o.a.createElement(W.a,{align:"center"},d?o.a.createElement(V.a,{name:"about",value:b,onChange:function(e){return E(e.target.value)},color:"secondary"}):t.about),o.a.createElement(W.a,{align:"center"},t.address),o.a.createElement(W.a,{align:"center"},d?o.a.createElement(V.a,{name:"phone",value:v,onChange:function(e){return j(e.target.value)},color:"secondary"}):t.phone),o.a.createElement(W.a,{align:"center"},t.rating),o.a.createElement(W.a,{align:"center"},t.listed?"Yes":"No"),o.a.createElement(W.a,{align:"center"},d?o.a.createElement(Y.a,{color:"secondary",style:{fontSize:35},onClick:function(){E(t.name),j(t.phone),f((function(e){return!e}))}}):o.a.createElement(q.a,{style:{fontSize:35,color:"#4caf50"}})),o.a.createElement(W.a,{align:"center"},d?o.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){f((function(e){return!e})),t.id>4?s.a.post("https://graph.facebook.com/".concat(t.id,"?about=").concat(b,"&phone=").concat(v,"&mission=").concat(w,"&access_token=").concat(t.access_token)).then((function(e){200===e.status?(r({type:l.CHANGE,payload:{about:b,phone:v,mission:w,id:t.id}}),alert("Successfully Updated")):alert("Couldn't Update.. Status : "+e.status)})):r({type:l.CHANGE,payload:{about:b,phone:v,mission:w,id:t.id}})}},"Update"):o.a.createElement(M.a,{color:"primary",onClick:function(){f((function(e){return!e}))}})))},X=Object(f.a)((function(e){return{toolbar:e.mixins.toolbar,listings:{flexGrow:1,backgroundColor:e.palette.background.desault,padding:e.spacing(3)},table:{minWidth:650},heading:{margin:30,textTransform:"uppercase"}}})),Z=function(){var e=Object(n.useContext)(O),t=Object(i.a)(e,1)[0],a=X();return o.a.createElement("div",{className:a.listings},o.a.createElement("div",{className:a.toolbar}),o.a.createElement(T.a,{align:"center",variant:"h4",className:a.heading},"Listings"),o.a.createElement(B.a,{component:H.a},o.a.createElement(K.a,null,o.a.createElement(U.a,null,o.a.createElement(P.a,null,o.a.createElement(W.a,null),o.a.createElement(W.a,{align:"center"},"Source"),o.a.createElement(W.a,{align:"center"},"Name"),o.a.createElement(W.a,{align:"center"},"About"),o.a.createElement(W.a,{align:"center"},"Address"),o.a.createElement(W.a,{align:"center"},"Phone"),o.a.createElement(W.a,{align:"center"},"Rating"),o.a.createElement(W.a,{align:"center"},"Listed"),o.a.createElement(W.a,{align:"center"},"Status"),o.a.createElement(W.a,{align:"center"},"Action"))),o.a.createElement(J.a,null,t.map((function(e){return o.a.createElement(P.a,{key:e.id},o.a.createElement(Q,{listing:e}))}))))))},$=Object(f.a)({home:{display:"flex"}}),ee=function(e){var t=$(),a=Object(n.useContext)(O),c=Object(i.a)(a,3),r=c[1],l=c[2];return o.a.createElement("div",{className:t.home},o.a.createElement(D.a,null),o.a.createElement(R,{handleLogout:function(){window.FB.logout((function(e){console.log(e)})),r({type:l.DEL}),d.logout((function(){return e.history.push("/")}))}}),o.a.createElement(Z,null))},te=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,null,o.a.createElement(L.a,null,o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/",exact:!0,component:w}),o.a.createElement(S,{path:"/home",component:ee})))))};r.a.render(o.a.createElement(te,null),document.getElementById("root"))},99:function(e,t,a){e.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.3cac2bf3.chunk.js.map