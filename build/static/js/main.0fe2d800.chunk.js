(this["webpackJsonpmessage-board"]=this["webpackJsonpmessage-board"]||[]).push([[0],{18:function(e,s,t){},19:function(e,s,t){},20:function(e,s,t){},48:function(e,s,t){},99:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),c=t(42),i=t.n(c),r=(t(48),t.p,t(15),t(16),t(17),t(18),t(19),t(20),t(0));function l(e){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:"Kino Club"}),Object(r.jsx)("ul",{className:"nav navbar-nav m-auto",children:Object(r.jsx)("li",{children:Object(r.jsx)("h2",{style:{color:"black !important"},children:e.pageName})})}),Object(r.jsx)("ul",{className:"nav navbar-nav float-right",children:Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"dropleft mr-3",children:[Object(r.jsx)("a",{className:"dropdown-toggle profile-image",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(r.jsx)("img",{src:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",width:155})}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-haspopup":"true","aria-labelledby":"profile",children:[Object(r.jsx)("div",{className:"w-100 dropdown-item ",id:"profile-dropdown",children:Object(r.jsx)("div",{className:"card p-3",children:Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsxs)("div",{className:"image",children:[" ",Object(r.jsx)("img",{style:{borderRadius:"35%"},src:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",width:155})," "]}),Object(r.jsxs)("div",{className:"ml-3 w-100",children:[Object(r.jsx)("h4",{className:"mb-0 mt-0",children:e.username}),Object(r.jsx)("div",{className:"p-2 mt-2  d-flex justify-content-between rounded  stats",children:Object(r.jsxs)("div",{className:"d-flex flex-column",children:[" ",Object(r.jsx)("span",{className:"followers",children:"Followers"})," ",Object(r.jsx)("span",{className:"number2",children:e.followers})," "]})}),Object(r.jsxs)("div",{className:"button mt-2 d-flex flex-row align-items-center",children:[" ",Object(r.jsx)("button",{className:"btn btn-sm btn-outline-primary w-100",children:"Sign out"})," "]})]})]})})}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"}),Object(r.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"}),Object(r.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})]})]})]})})})]})}var o=t(14),m=t.n(o),j=t(11),d=t(8),b=t(21),h=t(22),u=t(12),p=t(25),x=t(24),O=t(29),g=t(23),f=t.n(g);var N=function(e){Object(p.a)(t,e);var s=Object(x.a)(t);function t(e){var a;return Object(b.a)(this,t),(a=s.call(this,e)).state={username:"",password:"",failure:""},["handleChange","submit"].forEach((function(e){a[e]=a[e].bind(Object(u.a)(a))})),a}return Object(h.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState((function(s){return Object(d.a)(Object(d.a)({},s),{},Object(j.a)({},e.target.id,e.target.value))})),console.log(this.state)}},{key:"submit",value:function(){var e=Object(O.a)(m.a.mark((function e(s){var t,a,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submitting"),s.preventDefault(),"https://clubtext.chat/api/authenticate/",t=this.state.password,a=this.state.username,console.log("CALLING ONCE"),e.prev=6,n="".concat("https://clubtext.chat/api/authenticate/").concat(a,"?password=").concat(encodeURIComponent(t)),e.next=10,f.a.post(n);case 10:c=e.sent,console.log(c.data),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),this.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{failure:"error: incorrect username or password, please try again"})})),e.t0.response&&console.log(e.t0.response.data);case 19:case"end":return e.stop()}}),e,this,[[6,14]])})));return function(s){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("title",{children:"Log in"}),Object(r.jsx)(l,{pageName:"Dashboard",username:"person mcPerson",followers:111}),Object(r.jsx)("div",{className:"container__child signup__form",children:Object(r.jsxs)("form",{action:"#",onSubmit:this.submit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"Phone-number",children:"Clubhouse Username"}),Object(r.jsx)("input",{className:"form-control",type:"text",name:"Phone-number",id:"username",onChange:this.handleChange,placeholder:"",required:!0})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"form-control",type:"password",name:"password",id:"password",onChange:this.handleChange,required:!0})]}),Object(r.jsx)("div",{className:"m-t-lg",children:Object(r.jsxs)("ul",{className:"list-inline",children:[Object(r.jsx)("li",{children:Object(r.jsx)("input",{className:"btn btn--form clubhouse-btn signup-btn",style:{color:"black"},type:"submit",defaultValue:"Sign in"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"signup_link",href:"#",children:"Sign up"})})]})}),Object(r.jsx)("div",{className:"login-error",children:this.state.failure})]})})]})}}]),t}(n.a.Component);var v=function(e){Object(p.a)(t,e);var s=Object(x.a)(t);function t(e){var a;return Object(b.a)(this,t),(a=s.call(this,e)).state={phoneNumber:"",password:"",repeatPassword:"",failure:""},["handleChange","handleSubmit","setFailure"].forEach((function(e){a[e]=a[e].bind(Object(u.a)(a))})),a}return Object(h.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState((function(s){return Object(d.a)(Object(d.a)({},s),{},Object(j.a)({},e.target.id,e.target.value))})),console.log(this.state)}},{key:"setFailure",value:function(e){this.setState((function(s){return Object(d.a)(Object(d.a)({},s),{},{failure:e})}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.password!==this.state.repeatPassword?this.setFailure("error: passwords do not match!"):alert("not doing anything for now since we wait to see how it will be fixed")}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("title",{children:"Sign up"}),Object(r.jsx)(l,{pageName:"Sign Up",username:"person mcPerson",followers:111}),Object(r.jsx)("div",{className:"container__child signup__form",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"Phone-number",children:"Phone number"}),Object(r.jsx)("input",{className:"form-control",type:"text",name:"Phone-number",id:"phoneNumber",onChange:this.handleChange,placeholder:"eg. 1625148943",required:!0})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"form-control",type:"password",name:"password",id:"password",onChange:this.handleChange,placeholder:"********",required:!0})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"passwordRepeat",children:"Repeat Password"}),Object(r.jsx)("input",{className:"form-control",type:"password",name:"passwordRepeat",id:"repeatPassword",onChange:this.handleChange,placeholder:"********",required:!0})]}),Object(r.jsx)("div",{className:"m-t-lg",children:Object(r.jsxs)("ul",{className:"list-inline",children:[Object(r.jsx)("li",{children:Object(r.jsx)("input",{className:"btn btn--form clubhouse-btn",type:"submit",defaultValue:"Register"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"signup__link",href:"#",children:"I am already a member"})})]})}),Object(r.jsx)("div",{className:"login-error",children:this.state.failure})]})})]})}}]),t}(n.a.Component),w=t(9),y=t(2);function S(e){return e.image?Object(r.jsx)("div",{className:"msg-img",children:Object(r.jsx)("img",{src:e.image,alt:"uploaded image"})}):Object(r.jsx)("div",{})}function C(e){return Object(r.jsx)("article",{className:"msg-container msg-remote",id:"msg-0",children:Object(r.jsx)("div",{className:"msg-box",children:Object(r.jsxs)("div",{className:"flr",children:[Object(r.jsxs)("span",{className:"timestamp",children:[Object(r.jsx)("span",{className:"username",children:e.userName}),"\u2022",Object(r.jsx)("span",{className:"posttime",children:e.timeStamp})]}),Object(r.jsx)(S,{image:e.image}),Object(r.jsx)("div",{className:"messages",children:Object(r.jsx)("p",{className:"msg",id:"msg-0",children:e.message})})]})})})}function k(e){return Object(r.jsx)("article",{className:"msg-container msg-self",id:"msg-0",children:Object(r.jsx)("div",{className:"msg-box",children:Object(r.jsxs)("div",{className:"flr",children:[Object(r.jsx)(S,{image:e.image}),Object(r.jsxs)("span",{className:"timestamp",children:[Object(r.jsx)("span",{className:"username"}),Object(r.jsx)("span",{className:"posttime",children:e.timeStamp})]}),Object(r.jsx)("div",{className:"messages",children:Object(r.jsx)("p",{className:"msg",id:"msg-0",children:e.message})})]})})})}function D(e){return Object(r.jsx)("article",{className:"msg-container msg-remote msg-admin",id:"msg-0",children:Object(r.jsx)("div",{className:"msg-box",children:Object(r.jsxs)("div",{className:"flr",children:[Object(r.jsx)(S,{image:e.image}),Object(r.jsxs)("span",{className:"timestamp",children:[Object(r.jsx)("span",{className:"username admin",children:e.userName}),Object(r.jsx)("span",{className:"posttime",children:e.timeStamp})]}),Object(r.jsx)("div",{className:"messages",children:Object(r.jsx)("p",{className:"msg",id:"msg-0",children:e.message})})]})})})}function P(e){return Object(r.jsx)("article",{className:"msg-container msg-self msg-admin",id:"msg-0",children:Object(r.jsx)("div",{className:"msg-box",children:Object(r.jsxs)("div",{className:"flr",children:[Object(r.jsx)(S,{image:e.image}),Object(r.jsxs)("span",{className:"timestamp",children:[Object(r.jsx)("span",{className:"username admin"}),Object(r.jsx)("span",{className:"posttime",children:e.timeStamp})]}),Object(r.jsx)("div",{className:"messages",children:Object(r.jsx)("p",{className:"msg",id:"msg-0",children:e.message})})]})})})}function L(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),Object(r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;1,300&display=swap",rel:"stylesheet"}),Object(r.jsx)("title",{children:"Dashboard"}),Object(r.jsx)(l,{pageName:"Dashboard",username:"person mcPerson",followers:111}),Object(r.jsxs)("section",{className:"chat m-auto m-",children:[Object(r.jsxs)("div",{className:"chat-header",children:[Object(r.jsx)("div",{className:"float-left",children:Object(r.jsxs)("div",{className:"live container",children:[Object(r.jsx)("div",{className:"green-circle"})," ",Object(r.jsx)("p",{className:"room-title",children:"Live"})]})}),Object(r.jsx)("div",{className:"abs-center",children:Object(r.jsx)("h2",{className:"abs-inner club-title",children:"Board name"})})]}),Object(r.jsx)("div",{className:"chat-body",children:Object(r.jsxs)("section",{className:"chatbox",children:[Object(r.jsxs)("section",{className:"chat-window",children:[Object(r.jsx)(C,{userName:"Jose",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"}),message:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius, neque non tristique tincidunt, mauris nunc efficitur erat, elementum semper justo odio id nisi."}),Object(r.jsx)(k,{message:"this is my own message",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})}),Object(r.jsx)(C,{image:"//gravatar.com/avatar/00034587632094500000000000000000?d=retro",message:"I'm writing to you again!",userName:"Sven",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})}),Object(r.jsx)(C,{image:"https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg",message:"this image is very large!",userName:"Luis",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})}),Object(r.jsx)(k,{message:"this is my last message",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})}),Object(r.jsx)(D,{message:"some admin' message",userName:"Admination",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})}),Object(r.jsx)(P,{message:"look I am an admin now!",userName:"Admination",timeStamp:(new Date).toLocaleString("en-GB",{timeZone:"UTC"})})]}),Object(r.jsxs)("form",{className:"chat-input",onsubmit:"return false;",children:[Object(r.jsx)("input",{type:"text",autoComplete:"on",placeholder:"Type a message",className:"text-input"}),Object(r.jsx)("button",{children:"Send"}),Object(r.jsxs)("div",{className:"file-link-wrapper",children:[Object(r.jsx)("button",{className:"file-submit",children:"+ File"}),Object(r.jsx)("button",{className:"link-submit",children:"+ Link"})]})]})]})})]})]})}var B=function(){return Object(r.jsx)(w.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(w.b,{to:"/room",children:"Room"})}),Object(r.jsx)("li",{children:Object(r.jsx)(w.b,{to:"/login",children:"login"})}),Object(r.jsx)("li",{children:Object(r.jsx)(w.b,{to:"/signup",children:"signup"})})]})}),Object(r.jsxs)(y.c,{children:[Object(r.jsx)(y.a,{path:"/room",children:Object(r.jsx)(L,{})}),Object(r.jsx)(y.a,{path:"/login",children:Object(r.jsx)(N,{})}),Object(r.jsx)(y.a,{path:"/signup",children:Object(r.jsx)(v,{})})]})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,c=s.getLCP,i=s.getTTFB;t(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),F()}},[[99,1,2]]]);
//# sourceMappingURL=main.0fe2d800.chunk.js.map