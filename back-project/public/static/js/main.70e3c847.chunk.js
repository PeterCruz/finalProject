(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(379)},218:function(e,t,a){},220:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),i=(a(218),a(27)),c=a(28),s=a(30),m=a(29),u=a(31),p=(a(220),a(383)),h=a(382),d=a(34),g=a.n(d),f=a(42),E=a.n(f),b=a(43),y=a.n(b),w=a(32),v=a.n(w),C=a(16),S=a(49),k=a.n(S),j=a(50),O=a.n(j),x=a(51),L=a.n(x),N=a(18),I=a.n(N),F=a(96),W=a.n(F),D=a(17),T=Object(C.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(D.d),q={root:{width:"100%",marginTop:5,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:"blue"}}},P=function(e){var t=e.infoLegal;return r.a.createElement(D.a,{style:q.root},r.a.createElement(D.b,{style:q.table},r.a.createElement(D.e,null,r.a.createElement(D.f,null,r.a.createElement(T,null,"Applicant"),r.a.createElement(T,null,"Defendant"),r.a.createElement(T,null,"Judgement Type"),r.a.createElement(T,null,"State"),r.a.createElement(T,null,"Circuit"))),r.a.createElement(D.c,null,t.map(function(e,t){return r.a.createElement(D.f,{key:t},r.a.createElement(T,null,e.applicant),r.a.createElement(T,{align:"right"},e.defendant),r.a.createElement(T,{align:"right"},e.judgement_type),r.a.createElement(T,{align:"right"},e.state),r.a.createElement(T,{align:"right"},e.circuit))}))))},J=a(26),R=a.n(J),z={container:{display:"flex",justifyContent:"center",alignItems:"center"},root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},A=function(){return r.a.createElement("div",{style:z.container},r.a.createElement(R.a,{style:z.root,elevation:1},r.a.createElement(I.a,{variant:"h3",component:"h3"},"Legal Results"),r.a.createElement(I.a,{variant:"h5",component:"h5"},"In this space the results of the legal databases will be shown."),r.a.createElement(I.a,{variant:"h5",component:"h5"},"In case of not finding legal information, this space will be empty")))},B=Object(C.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(D.d),_={root:{width:"100%",marginTop:5,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:"blue"}}},M=function(e){var t=e.infoNews;return r.a.createElement(D.a,{style:_.root},t.length>1?r.a.createElement(D.b,{style:_.table},r.a.createElement(D.e,null,r.a.createElement(D.f,null,r.a.createElement(B,null,"Category"),r.a.createElement(B,null,"Confidence (0-1)"),r.a.createElement(B,null,"Searcher"),r.a.createElement(B,null,"Link"))),r.a.createElement(D.c,null,t.map(function(e,t){return r.a.createElement(D.f,{key:t},r.a.createElement(B,null,e.class.class_name),r.a.createElement(B,null,e.class.confidence),r.a.createElement(B,null,e.searcher),r.a.createElement(B,null,r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url)))}))):"")},X=a(52),U=a.n(X),V={root:{margin:"0 auto",width:"75%"},heading:{fontSize:24},container:{display:"flex",justifyContent:"center",alignItems:"center"},facebook:{margin:5,position:"relative"},facebook1:{color:"#eef3fd"},facebook2:{color:"#6798e5",animationDuration:"550ms",position:"absolute",left:0}},Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.infoLegal,a=e.infoNews,n=e.isSearched;return r.a.createElement("div",{style:V.root},r.a.createElement(k.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(W.a,null)},r.a.createElement(I.a,{style:V.heading},"News Information")),r.a.createElement(L.a,null,n?r.a.createElement("div",{style:V.facebook},r.a.createElement(U.a,{variant:"determinate",value:100,style:V.facebook1,size:24,thickness:4}),r.a.createElement(U.a,{variant:"indeterminate",disableShrink:!0,style:V.facebook2,size:24,thickness:4})):r.a.createElement(M,{infoNews:a}))),r.a.createElement(k.a,null,r.a.createElement(O.a,{expandIcon:r.a.createElement(W.a,null)},r.a.createElement(I.a,{style:V.heading},"Legal Information")),r.a.createElement(L.a,{style:V.container},t.length>1?r.a.createElement(P,{infoLegal:t}):r.a.createElement(A,null))))}}]),t}(n.Component),$=Object(C.withStyles)(V)(Y),G="https://who-i-am.herokuapp.com/",H=function(e,t){g.a.post("".concat(G,"api/auth/login"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),t.push("/")}).catch(function(e){})},K=function(e,t){g.a.post("".concat(G,"api/auth/register"),e).then(function(e){t.push("/login")}).catch(function(e){})},Q={container:{display:"flex",justifyContent:"center",alignItems:"center"},textField:{marginLeft:5,marginRight:5},dense:{marginTop:16},menu:{width:200},button:{margin:5},input:{display:"none"}},Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).logout=function(){localStorage.clear(),e.props.history.push("/login")},e.handleSubmit=function(t){t.preventDefault();var a="".concat(G,"api/search/"),n=e.state,r=n.form,l=n.user;r.user=l._id;var o=localStorage.getItem("token");if(!o)return e.props.history.push("/login");e.setState({isSearched:!0}),g.a.post(a,r,{headers:{"x-access-token":o}}).then(function(t){e.setState({infoLegal:t.data.infoDB.results})}).catch(function(t){403===t.response.status&&e.logout(),e.setState({infoLegal:[]})});var i="".concat(G,"api/search/news/");g.a.post(i,r,{headers:{"x-access-token":o}}).then(function(t){e.setState({infoNews:t.data.newsDB,isSearched:!1})}).catch(function(t){console.log(t),console.log(t.response),403===t.response.status&&e.logout(),e.setState({infoNews:[],isSearched:!1})})},e.handleChange=function(t){var a=e.state.form;a[t.target.name]=t.target.value,e.setState({form:a})},e.onClick=function(t){e.logout()},e.state={form:{name:"",firstLastname:"",secondLastname:"",location:""},user:{},infoLegal:[],infoNews:[],isSearched:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));if(!e)return this.props.history.push("/login");this.setState({user:e})}},{key:"render",value:function(){var e=this.state,t=e.infoLegal,a=e.infoNews,n=e.isSearched;return r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"logo"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit,style:Q.container,noValidate:!0,autoComplete:"off"},r.a.createElement(y.a,{required:!0,name:"name",label:"Name",style:Q.textField,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(y.a,{required:!0,name:"firstLastname",label:"First Lastname",style:Q.textField,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(y.a,{name:"secondLastname",label:"Second Lastname",style:Q.textField,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(v.a,{variant:"contained",color:"primary",type:"submit",style:Q.button},"Search"),r.a.createElement(v.a,{variant:"contained",onClick:this.onClick,color:"secondary",type:"button",style:Q.button},"Logout")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement($,{infoLegal:t,infoNews:a,isSearched:n}))}}]),t}(n.Component),ee=a(64),te=a(380),ae=a(41),ne=a.n(ae),re=a(24),le=a.n(re),oe=a(19),ie=a.n(oe),ce=a(23),se=a.n(ce),me=a(5),ue=a.n(me),pe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.value,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),H(e.state.user,e.props.history)},e.state={user:{email:"",password:""}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(JSON.parse(localStorage.getItem("user")))return this.props.history.push("/")}},{key:"render",value:function(){var e=this.props.classes,t=this.state.user,a=t.email,n=t.password;return r.a.createElement("main",{className:e.main},r.a.createElement(ne.a,null),r.a.createElement(R.a,{className:e.paper},r.a.createElement("img",{src:E.a,alt:"logo"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"email"},"Email Address"),r.a.createElement(ie.a,{id:"email",name:"email",type:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange,value:a})),r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"password"},"Password"),r.a.createElement(ie.a,{id:"password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:n})),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sig in"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"You are not yet registered ",r.a.createElement(te.a,{to:"/signup"},"Sign up")))))}}]),t}(n.Component),he=ue()(function(e){return{main:Object(ee.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(pe),de=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.value,e.setState({user:a})},e.handleSubmit=function(t){if(t.preventDefault(),e.state.user.password!==e.state.user.confirmPassword){e.setState({error:"Passwords are not equal"})}else K(e.state.user,e.props.history)},e.state={user:{username:"",email:"",password:"",confirmPassword:""}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("main",{className:e.main},r.a.createElement(ne.a,null),r.a.createElement(R.a,{className:e.paper},r.a.createElement("img",{src:E.a,alt:"logo"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Create an account"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"username"},"Username"),r.a.createElement(ie.a,{id:"username",name:"username",type:"text",autoComplete:"text",autoFocus:!0,onChange:this.handleChange})),r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"email"},"Email Address"),r.a.createElement(ie.a,{id:"email",name:"email",type:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange})),r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"password"},"Password"),r.a.createElement(ie.a,{id:"password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange})),r.a.createElement(le.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(se.a,{htmlFor:"password"},"Confirm Password"),r.a.createElement(ie.a,{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"confirm-password",onChange:this.handleChange})),this.state.error?r.a.createElement(I.a,{color:"error",variant:"h6"},this.state.error):"",r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign up"))))}}]),t}(n.Component),ge=ue()(function(e){return{main:Object(ee.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(de),fe=function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:Z}),r.a.createElement(h.a,{exact:!0,path:"/login",component:he}),r.a.createElement(h.a,{exact:!0,path:"/signup",component:ge}))},Ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(fe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(381);o.a.render(r.a.createElement(function(){return r.a.createElement(be.a,null,r.a.createElement(Ee,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a.p+"static/media/logo1.d1483894.png"}},[[213,2,1]]]);
//# sourceMappingURL=main.70e3c847.chunk.js.map