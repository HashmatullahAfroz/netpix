(this.webpackJsonpnetpix=this.webpackJsonpnetpix||[]).push([[0],[,,,function(e,t,a){e.exports={formGroup:"loginForm_formGroup__2G4KG",formControl:"loginForm_formControl__3r27I",btn:"loginForm_btn__1_h33",Form:"loginForm_Form__3OaRI",signup:"loginForm_signup__25z-o",signform:"loginForm_signform__2_cci"}},,function(e,t,a){e.exports={contain:"insertion_contain__2sQdB",error:"insertion_error__3wLUA",formGroup:"insertion_formGroup__oTeLY",formControl:"insertion_formControl__2qRQ_",btn:"insertion_btn__3Yn1H",Data_btn:"insertion_Data_btn__1DWgf"}},function(e,t,a){e.exports={container:"card_container__3VGMF",card:"card_card__1sEPI",cardImg:"card_cardImg__Oqy7V",img:"card_img__2qeGf",cardBody:"card_cardBody__2SqTs",cardHeader:"card_cardHeader__33H2Q",cardSubtitle:"card_cardSubtitle__7wb0E"}},function(e,t,a){e.exports={container:"app_container__1nykq",usercontainer:"app_usercontainer__16Rul",coluserinfo:"app_coluserinfo__3w1pF",row:"app_row__371SI"}},function(e,t,a){e.exports={nav:"nav_nav__3RcAD",navbar:"nav_navbar__3fl5L",navItem:"nav_navItem__1tYsa",navLink:"nav_navLink__3HLgY",navItemLogout:"nav_navItemLogout__S9sX6"}},,,function(e,t,a){e.exports={coverLogin:"login_coverLogin__180-a",container:"login_container__39shx"}},function(e,t,a){e.exports={contain:"dataTable_contain__h52ap",row:"dataTable_row__2RxGT",btn:"dataTable_btn__2Qw72"}},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(13),r=a.n(o),s=a(2),l=a(7),i=a.n(l),d=a(9),m=a(4),u=a.n(m),j=a(11),b=a.n(j),h=a(3),p=a.n(h),g=a(0),O=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",{type:e.type,onChange:e.handler,value:e.value,autoComplete:e.autocomplete,className:e.className,name:e.name,placeholder:e.placeholder,id:e.id})})},f=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",{type:e.type,className:e.className,value:e.value,onClick:e.onClick})})},x=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),i=l[0],m=l[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),h=b[0],x=b[1],v=Object(n.useState)(""),_=Object(s.a)(v,2),y=_[0],N=_[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(p.a.signup),children:Object(g.jsx)("form",{className:"".concat(p.a.signform),children:Object(g.jsxs)("div",{className:"".concat(p.a.formGroup),children:[Object(g.jsx)("label",{htmlFor:"Name",children:"Name: "}),Object(g.jsx)(O,{handler:function(e){o(e.target.value)},type:"text",autocomplete:"off",value:c,className:"".concat(p.a.formControl),name:"name",placeholder:"Name"}),Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)(O,{handler:function(e){m(e.target.value)},type:"text",autocomplete:"off",value:i,className:"".concat(p.a.formControl),name:"username",placeholder:"example@mail.com"}),Object(g.jsx)("label",{htmlFor:"sign-password",children:"Password: "}),Object(g.jsx)(O,{handler:function(e){x(e.target.value)},type:"password",value:h,className:"".concat(p.a.formControl),name:"sign-password",placeholder:"password"}),Object(g.jsx)("label",{htmlFor:"sign2-password",children:"Re-Password: "}),Object(g.jsx)(O,{handler:function(e){N(e.target.value)},type:"password",value:y,className:"".concat(p.a.formControl),name:"sign2-password",placeholder:"password"}),Object(g.jsx)(f,{type:"button",onClick:function(){if(0===c.trim().lenght||0===i.trim().length||0===h.trim().length||0===y.trim().length)alert("fill in the blank");else if(h===y)if(i.includes("@")&&i.includes("."))if(h.length<=8)console.log("password should be more then 8 Characters");else{var e={name:c,username:i,password:h,authorization:0},t=JSON.stringify(e),a=function(){var e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/signup",{method:"POST",body:t,headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:e.sent?alert("User Created successfully"):alert("failed to Create user");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(),o(""),m(""),x(""),N("")}else alert("invalid Email Address");else alert("password should be same and more then 8 character")},value:e.valueBtn1,className:"".concat(p.a.btn)}),Object(g.jsx)(f,{type:"button",onClick:function(){e.showSignUpForm(!1)},value:e.valueBtn2,className:"".concat(p.a.btn)})]})})})})},v=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),i=l[0],d=l[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),j=u[0],b=u[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("form",{className:" ".concat(p.a.Form," "),method:"POST",children:Object(g.jsxs)("div",{className:" ".concat(p.a.formGroup),children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)(O,{handler:function(e){o(e.target.value),c.includes("@")&&c.includes(".")?(document.getElementById("user").style.border="none",document.getElementById("user").style.borderBottom="1px solid gray"):document.getElementById("user").style.border="1px solid red"},type:"text",autocomplete:"off",value:c,className:"".concat(p.a.formControl),name:"username",placeholder:"example@mail.com",id:"user"}),Object(g.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(g.jsx)(O,{handler:function(e){d(e.target.value),i.length>8?(document.getElementById("password").style.border="none",document.getElementById("password").style.borderBottom="1px solid gray"):document.getElementById("password").style.border="1px solid red"},type:"password",value:i,className:"".concat(p.a.formControl),name:"password",placeholder:"password",id:"password"}),Object(g.jsx)(f,{type:"button",onClick:function(){if(0===c.trim().length||0===i.trim().length)alert(" fill all the blanks ");else if(c.includes("@")&&c.includes("."))if(i.length<=8)alert("password should be more then 8 Characters");else{var t={username:c,password:i};e.LoginData(t),o(""),d("")}else alert("invalid Email Address")},value:"Login",className:"".concat(p.a.btn)}),Object(g.jsx)(f,{type:"button",onClick:function(){b(!0)},value:"SignUp",className:"".concat(p.a.btn)})]})}),j&&Object(g.jsx)(x,{showSignUpForm:b,valueBtn1:"signUp",valueBtn2:"Cancel"})]})},_=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(b.a.coverLogin),children:Object(g.jsx)("div",{className:"".concat(b.a.container),style:{width:"100%"},children:Object(g.jsx)(v,{LoginData:function(t){var a=function(){var a=Object(d.a)(u.a.mark((function a(){var n,c,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=JSON.stringify(t),a.next=3,fetch("http://localhost:8000/login",{method:"POST",body:n,headers:{"content-type":"application/json"}});case 3:return c=a.sent,a.next=6,c.json();case 6:(o=a.sent)?"1"===o.authorization?(localStorage.setItem("react_logged",1),localStorage.setItem("guest_authorize",0),window.open("http://localhost:3000/","_parent"),e.setLoginPage(!1)):(localStorage.setItem("guest_authorize",2),window.open("http://localhost:3000/","_parent"),e.setLoginPage(!1),e.setAuthorizeLoginPage(!1),localStorage.setItem("react_logged",1)):alert("Icorrect Email or Password");case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}})})})})},y=a(5),N=a.n(y),w=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),i=l[0],m=l[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),h=b[0],p=b[1],x=Object(n.useState)("Scary Movie"),v=Object(s.a)(x,2),_=v[0],y=v[1],w=Object(n.useState)(""),C=Object(s.a)(w,2),S=C[0],k=C[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:" ".concat(N.a.contain," "),style:{color:"white"},children:Object(g.jsx)("form",{method:"GET",style:{width:"80%"},children:Object(g.jsxs)("div",{className:"".concat(N.a.formGroup),children:[Object(g.jsx)("label",{htmlFor:"Add Movie",children:"Add Movie: "}),Object(g.jsx)("div",{className:"".concat(N.a.error),id:"fill_error",children:S}),Object(g.jsx)(O,{type:"text",handler:function(e){o(e.target.value)},value:c,name:"name",placeholder:"Add movie",className:"".concat(N.a.formControl),autocomplete:"off"}),Object(g.jsx)("label",{htmlFor:"releaseDate",children:"Release Date: "}),Object(g.jsx)(O,{type:"date",handler:function(e){m(e.target.value)},value:i,name:"releaseDate",className:"".concat(N.a.formControl),autocomplete:"off"}),Object(g.jsx)("label",{htmlFor:"moviePicture",children:"Add Movie Picture"}),Object(g.jsx)(O,{type:"file",handler:function(e){p(e.target.value)},name:"moviePicture",className:"".concat(N.a.formControl)}),Object(g.jsxs)("select",{onChange:function(e){y(e.target.value)},style:{margin:"10px 0px",padding:"10px",background:"#aaa"},children:[Object(g.jsx)("option",{children:"Scray Movie"}),Object(g.jsx)("option",{children:"Comedy Movie"}),Object(g.jsx)("option",{children:"Action Movie"})]}),Object(g.jsx)(f,{type:"button",onClick:function(){if(0===c.trim().length)k("Please fill in the blanks"),document.getElementById("fill_error").style.background="firebrick",document.getElementById("fill_error").style.display="block",setTimeout((function(){document.getElementById("fill_error").style.display="none"}),3e3);else{var e={addMovieName:c,movieReleaseDate:i,movieImg:h,movieType:_},t=JSON.stringify(e),a=function(){var e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/movie",{method:"POST",body:t,headers:{"content-type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:e.sent?(k("Data Added Successfully"),document.getElementById("fill_error").style.display="block",document.getElementById("fill_error").style.background="green",setTimeout((function(){document.getElementById("fill_error").style.display="none"}),3e3)):alert("Failed to Add");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(),o(""),m(""),y("")}},value:"Insert",className:" ".concat(N.a.btn," ")}),Object(g.jsx)(f,{type:"button",onClick:function(){e.showDataPage(!0)},value:"Show Movies",className:" ".concat(N.a.Data_btn," ")})]})})})})},C=a(12),S=a.n(C),k=a.p+"static/media/pic (3).d9d12a0a.jpg",F=a.p+"static/media/pic (1).1f3722bb.jpg",I=a(6),B=a.n(I),L=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(B.a.container),children:Object(g.jsxs)("div",{className:"".concat(B.a.card),children:[Object(g.jsx)("div",{className:"".concat(B.a.cardImg),children:Object(g.jsx)("img",{src:e.img,alt:"movie",className:"".concat(B.a.img)})}),Object(g.jsxs)("div",{className:"".concat(B.a.cardBody),children:[Object(g.jsx)("div",{className:"".concat(B.a.cardHeader),children:e.movieName}),Object(g.jsxs)("div",{className:"".concat(B.a.cardSubtitle),children:[Object(g.jsx)("p",{style:{textAlign:"center"},children:e.type}),Object(g.jsxs)("span",{style:{color:"red"},children:[" ",e.releaseDate," "]})]})]})]})})})},E=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(S.a.contain),children:Object(g.jsxs)("div",{className:"".concat(S.a.row),children:[Object(g.jsx)(L,{img:k,movieName:"Avenger",type:"Action Movie",releaseDate:"2012"}),Object(g.jsx)(L,{img:F,movieName:"The Witch",type:"Scary Movie",releaseDate:"2018"}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{}),Object(g.jsx)(L,{})]})})})},P=a(8),A=a.n(P),D=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(A.a.nav),style:{background:e.backgroundColor},children:Object(g.jsxs)("ul",{className:"".concat(A.a.navbar),children:[Object(g.jsx)("li",{className:"".concat(A.a.navItem),children:Object(g.jsx)("button",{onClick:e.onClick,className:"".concat(A.a.navLink),children:e.firstBtnName})}),Object(g.jsx)("li",{className:"".concat(A.a.navItemLogout),children:Object(g.jsx)("button",{className:"".concat(A.a.navLink),onClick:e.onClickLogout,children:e.secondBtnName})})]})})})},T=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),r=Object(s.a)(o,2),l=r[0],d=r[1],m=Object(n.useState)(!0),u=Object(s.a)(m,2),j=u[0],b=u[1],h=Object(n.useState)(!1),p=Object(s.a)(h,2),O=p[0],f=p[1],v=function(){f(!0)};Object(n.useEffect)((function(){"1"===localStorage.getItem("react_logged")&&c(!1)}),[]),Object(n.useEffect)((function(){"2"===localStorage.getItem("guest_authorize")&&d(!1)}),[]);var y=function(){localStorage.setItem("react_logged",0),window.open("http://localhost:3000/","_parent"),c(!0)};return Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsx)(_,{setLoginPage:c,setAuthorizeLoginPage:d}),O&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{firstBtnName:l?"Welcome Hashmatullah":"Welcome User",onClick:v,secondBtnName:"Logout",onClickLogout:y,backgroundColor:"#242424"}),Object(g.jsx)("div",{className:"".concat(i.a.usercontainer),children:Object(g.jsx)("div",{className:"".concat(i.a.row),children:Object(g.jsx)("div",{className:"".concat(i.a.coluserinfo),children:Object(g.jsx)(x,{showSignUpForm:function(){f(!1)},valueBtn1:"Update",valueBtn2:"Cancel"})})})})]}),!a&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"".concat(i.a.container),children:Object(g.jsx)("div",{className:"".concat(i.a.row),children:Object(g.jsxs)("div",{className:"".concat(i.a.col5),children:[!j&&l&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{firstBtnName:"Welcome Hashmatullah",onClick:v,secondBtnName:"Logout",onClickLogout:y,backgroundColor:"#242424"}),Object(g.jsx)(w,{showDataPage:b})]}),j&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{firstBtnName:l?"Add Movie":"Welcome User",onClick:l&&function(){b(!1)}||v,secondBtnName:"Logout",onClickLogout:y,backgroundColor:"#242424"}),Object(g.jsx)(E,{})]})]})})})})]})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.75a63351.chunk.js.map