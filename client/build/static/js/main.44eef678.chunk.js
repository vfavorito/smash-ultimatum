(this.webpackJsonpsmash=this.webpackJsonpsmash||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(17),s=a.n(r),o=(a(55),a(9)),c=a(6),d=a(23),l=a(5),u=(a(56),a(0));var h=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("button",{id:"googleButton",onClick:function(){window.open("https://smash-ultimatum.herokuapp.com/auth/google","_self")},children:[Object(u.jsx)("i",{class:"loginText fab ",children:"Login with Google"}),Object(u.jsx)("i",{id:"googleIcon",class:"fab fa-google"})]})})},b=a(108),p=a(109),m=a(110);a(58);var j=function(){return Object(u.jsx)(b.a,{fluid:!0,id:"container",children:Object(u.jsx)("div",{id:"master",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{sm:3,md:3}),Object(u.jsx)(m.a,{id:"loginBox",sm:6,md:6,children:Object(u.jsxs)("div",{id:"content",children:[Object(u.jsx)("h1",{class:"loginHeader",children:"Smash Ultimatum"}),Object(u.jsx)(h,{})]})}),Object(u.jsx)(m.a,{sm:3,md:3})]})})})},g=n.a.createContext({id:"",name:"",portrait:"",LobbyCode:"",participants:[],brawlers:""}),S=a(14),x=a.n(S),f={getUserByUserId:function(e){return x.a.get("/api/users/userid/"+e)},getUserByName:function(e){return x.a.get("/api/users/name/"+e)},getAllUsers:function(){return x.a.get("/api/users")},saveArena:function(e,t){return x.a.post("/api/arenas/"+t,e)},getArenaByLobbyCode:function(e){return x.a.get("/api/arenas/find/"+e)},addArenaParticipant:function(e,t){return x.a.put("/api/arenas/addParticipant/"+e,t)},updateArena:function(e,t){return x.a.put("/api/arenas/update/"+e,t)},updateUserByName:function(e,t){return x.a.put("/api/users/update/"+e,t)}},O=a(19);a(77);var _=function(e){return Object(u.jsxs)("div",{id:"charSelectWrapper",children:[Object(u.jsx)("h2",{children:"Character Select:"}),Object(u.jsx)("div",{className:"charSelectContainer",children:O.characters.map((function(t){return Object(u.jsxs)("div",{className:"charCard",onClick:function(){return e.themeChanger(t.name,t.portrait,t.quote)},children:[Object(u.jsx)("img",{alt:t.name,src:t.portrait,className:"charPic"}),Object(u.jsx)("p",{className:"charText",children:t.name})]},t.id)}))})]})};a(78);var y=function(){var e=Object(i.useContext)(g),t=e.name,a=e.portrait,n=Object(i.useState)(),r=Object(c.a)(n,2),s=r[0],o=r[1];return Object(i.useEffect)((function(){t.length>1&&f.getUserByName(t).then((function(e){o({ironManStats:e.data.ironManStats,tourneyStats:e.data.tourneyStats})}))}),[t]),void 0!==s?Object(u.jsx)(b.a,{id:"userStatsContent",children:Object(u.jsx)(p.a,{children:Object(u.jsxs)(m.a,{sm:12,md:12,children:[Object(u.jsxs)("h2",{children:[t,"'s Stats"]}),Object(u.jsx)("img",{src:a,alt:"User Portrait",id:"userStatsPortrait"}),Object(u.jsx)("h3",{children:"Iron Man Stats"}),Object(u.jsxs)("h4",{children:["Wins: ",s.ironManStats.wins]}),Object(u.jsxs)("h4",{children:["Losses: ",s.ironManStats.losses]})]})})}):Object(u.jsx)(u.Fragment,{})},B=a(20),w=a.n(B),U=a(25),k=a(22),v=a.n(k);a(89);var W=function(e){var t=Object(i.useContext)(g),a=t.name,n=t.portrait,r=t.LobbyCode,s=Object(i.useState)(!1),d=Object(c.a)(s,2),h=d[0],j=d[1],S=Object(l.f)(),x=function(){j(!0!==h)},_=Object(i.useState)({brawlers:""}),y=Object(c.a)(_,2),B=y[0],k=y[1];return Object(i.useEffect)((function(){6===r.length&&S.push("/arena/"+r)}),[r]),Object(u.jsx)(b.a,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(m.a,{sm:12,md:12,children:Object(u.jsxs)("div",{id:"createIronMan",children:[Object(u.jsx)("h1",{children:"Create"}),Object(u.jsx)("h4",{id:"createText",children:"Create An Iron Man Arena For Others To Join And Set The Team Size"}),Object(u.jsxs)(v.a,{isOpen:h,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"rgb(189, 189, 189)"}},contentLabel:"Modal",children:[Object(u.jsx)("button",{onClick:x,children:"Close"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Create Your Arena"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"How Many Brawlers on a Squad?"}),Object(u.jsx)("input",{id:"brawlwers",type:"number",min:"2",onChange:function(e){k(Object(o.a)(Object(o.a)({},B),{},{brawlers:e.target.value}))},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){var t=Date.now().toString().substring(Date.now().toString().length-6),i=function(e){for(var t=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72"],a=[],i=0;i<e;i++){var n=Math.floor(Math.random()*(71-i));a.push(t[n]),t.splice(n,1)}return a}(B.brawlers).map((function(e){return O.characters.find((function(t){return t.id===e}))})),r={brawlers:B.brawlers,lobbyCode:t.substring(t.length-6),participants:{name:a,portrait:n,squad:i,wins:0,currCharacter:i[0].name},admin:a};f.saveArena(r,t).then(function(){var t=Object(U.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.updateContext(a.data.lobbyCode,a.data.participants,a.data.brawlers);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),t.t0;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}())},children:"Go Smashing"})]}),Object(u.jsx)("button",{className:"createButton",onClick:x,children:"Smash Time"})]})})})})},C=a(49);a(96);var q=function(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(i.useContext)(g),s=r.name,o=r.portrait,d=Object(l.f)();return Object(u.jsx)(b.a,{id:"joinContent",children:Object(u.jsx)(p.a,{children:Object(u.jsx)(m.a,{sm:12,md:12,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Join"}),Object(u.jsx)("h4",{id:"joinText",children:"Join An Iron Man Arena By Entering The Arena's Lobby Code"}),Object(u.jsx)("input",{onChange:function(e){n(e.target.value)},placeholder:"Lobby Code"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:"joinButton",onClick:function(){f.getArenaByLobbyCode(a).then((function(e){if(null!==e.data){if(-1!==e.data.participants.findIndex((function(e){return e.name===s})))return void d.push("/arena/"+a);var t=function(e){for(var t=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72"],a=[],i=0;i<e;i++){var n=Math.floor(Math.random()*(71-i));a.push(t[n]),t.splice(n,1)}return a}(e.data.brawlers).map((function(e){return O.characters.find((function(t){return t.id===e}))})),i={brawlers:e.data.brawlers,lobbyCode:e.data.lobbyCode,participants:[].concat(Object(C.a)(e.data.participants),[{name:s,portrait:o,squad:t,wins:0,currCharacter:t[0].name}])};f.addArenaParticipant(a,i).then((function(e){d.push("/arena/"+a)}))}else alert("Arena Not Found!")}))},children:"Join"})]})})})})};a(97);var M=function(e){return e.stats.character.length>1?(console.log(e.stats,"props.stats"),Object(u.jsxs)("div",{id:"charCard",children:[Object(u.jsx)("h2",{children:e.stats.quote}),Object(u.jsx)("img",{id:"charImg",src:e.stats.portrait,alt:"character portrait"}),Object(u.jsxs)("h3",{children:["Wins: ",e.stats.stats.wins]}),Object(u.jsxs)("h3",{children:["Loses: ",e.stats.stats.losses]})]})):Object(u.jsx)("div",{})},P=a(111);a(98);var L=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){f.getAllUsers().then((function(e){n(e.data),console.log(a,"users"),console.log(e.data,"res.data")}))}),[]),a.length>0?(a.sort((function(e,t){return parseFloat(t.ironManStats.wins)-parseFloat(e.ironManStats.wins)})),Object(u.jsx)(p.a,{children:Object(u.jsx)(m.a,{sm:12,md:12,id:"leaderBoard",children:Object(u.jsxs)(P.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Portrait"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Wins"}),Object(u.jsx)("th",{children:"Losses"}),Object(u.jsx)("th",{children:"Win %"})]})}),Object(u.jsx)("tbody",{children:a.map((function(e){var t=parseInt(e.ironManStats.wins)+parseInt(e.ironManStats.losses),a=Math.round(parseInt(e.ironManStats.wins)/t*100);return Object(u.jsxs)("tr",{id:"tableRow",children:[Object(u.jsxs)("td",{children:[" ",Object(u.jsx)("img",{alt:"user portrait",src:e.portrait,id:"boardPortrait"})]}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.ironManStats.wins}),Object(u.jsx)("td",{children:e.ironManStats.losses}),Object(u.jsxs)("td",{children:[a,"%"]})]})}))})]})})})):Object(u.jsx)(u.Fragment,{})};a(99);var I=function(){return Object(u.jsx)("div",{id:"footer",children:Object(u.jsx)("p",{children:"For Your Pleasure"})})},A=a(112),K=a(113);a(100);var N=function(e){var t=Object(i.useContext)(g),a=t.name,n=t.portrait,r=Object(i.useState)({character:"",portrait:"",quote:""}),s=Object(c.a)(r,2),d=s[0],l=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)(b.a,{fluid:!0,id:"dashboard",children:[Object(u.jsxs)(p.a,{id:"header",children:[Object(u.jsx)(m.a,{sm:8,md:8,children:Object(u.jsx)("h1",{children:"Welcome To Smash Ultimatum"})}),Object(u.jsxs)(m.a,{sm:4,md:4,children:[Object(u.jsx)("h1",{className:"userInfo",children:a}),Object(u.jsx)("img",{className:"userInfo",id:"userPortrait",alt:"portrait",src:n})]})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)(A.a.Container,{defaultActiveKey:"first",children:Object(u.jsxs)(p.a,{children:[Object(u.jsxs)(m.a,{sm:12,md:3,children:[Object(u.jsxs)(K.a,{variant:"pills",className:"flex-column",children:[Object(u.jsx)(K.a.Item,{variant:"secondary",children:Object(u.jsx)(K.a.Link,{id:"navPill1",eventKey:"first",children:"Create an Iron Man Arena"})}),Object(u.jsx)(K.a.Item,{children:Object(u.jsx)(K.a.Link,{id:"navPill2",eventKey:"second",children:"Join an Iron Man Arena"})}),Object(u.jsx)(K.a.Item,{children:Object(u.jsxs)(K.a.Link,{id:"navPill3",eventKey:"third",children:[a,"'s Stats"]})}),Object(u.jsx)(K.a.Item,{children:Object(u.jsx)(K.a.Link,{id:"navPill4",eventKey:"fourth",children:"Character Stats"})}),Object(u.jsx)(K.a.Item,{children:Object(u.jsx)(K.a.Link,{id:"navPill5",eventKey:"fifth",children:"Leaderboard"})})]}),Object(u.jsx)(M,{stats:d})]}),Object(u.jsx)(m.a,{sm:12,md:9,children:Object(u.jsxs)(A.a.Content,{children:[Object(u.jsx)(A.a.Pane,{eventKey:"first",children:Object(u.jsx)(W,{updateContext:e.updateContext})}),Object(u.jsx)(A.a.Pane,{eventKey:"second",children:Object(u.jsx)(q,{})}),Object(u.jsx)(A.a.Pane,{eventKey:"third",children:Object(u.jsx)(y,{})}),Object(u.jsx)(A.a.Pane,{eventKey:"fourth",children:Object(u.jsx)(_,{className:"favChar",themeChanger:function(e,t,i){f.getUserByName(a).then((function(a){var n=a.data.characterStats.find((function(t){return t.name===e}));l(Object(o.a)(Object(o.a)({},d),{},{character:e,portrait:t,quote:i,stats:n}))}))}})}),Object(u.jsx)(A.a.Pane,{eventKey:"fifth",children:Object(u.jsx)(L,{})})]})})]})})})]}),Object(u.jsx)(I,{})]})};a(103);var D=function(){var e=window.location.pathname.substr(-6),t=Object(i.useContext)(g).name,a=Object(i.useState)([]),n=Object(c.a)(a,2),r=n[0],s=n[1],d=Object(i.useState)({}),l=Object(c.a)(d,2),h=l[0],j=l[1],S=Object(i.useState)({name:"",portrait:""}),x=Object(c.a)(S,2),O=x[0],_=x[1],y=Object(i.useState)(!1),B=Object(c.a)(y,2),k=B[0],W=B[1],C=function(){W(!0)},q={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"rgb(189, 189, 189)"}},M=function(){window.open("http://localhost:3000/dashboard","_self")};Object(i.useEffect)((function(){var t=setInterval((function(){f.getArenaByLobbyCode(e).then((function(e){s(e.data.participants),j({brawlers:e.data.brawlers,lobbyCode:e.data.lobbyCode,participants:e.data.participants,admin:e.data.admin})}))}),4e3);return function(){clearInterval(t)}}),[]),Object(i.useEffect)((function(){r.forEach((function(e){parseInt(e.wins)===parseInt(h.brawlers)&&(_(Object(o.a)(Object(o.a)({},O),{},{name:e.name,portrait:e.portrait})),C())}))}),[h]);var P=function(t){var a=t.target.attributes.name.value,i=r.find((function(e){return e.name===a})),n=i.squad;if(r.forEach((function(e){var t=e.currCharacter;f.getUserByName(e.name).then(function(){var i=Object(U.a)(w.a.mark((function i(n){var r,s;return w.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,n.data.name!==a){i.next=8;break}return i.next=4,n.data.characterStats.forEach((function(e){e.name===t&&(e.wins=e.wins+1)}));case 4:r={characterStats:n.data.characterStats},f.updateUserByName(n.data.name,r),i.next=12;break;case 8:return i.next=10,n.data.characterStats.forEach((function(t){t.name===e.currCharacter&&(t.losses=t.losses+1)}));case 10:s={characterStats:n.data.characterStats},f.updateUserByName(n.data.name,s);case 12:i.next=17;break;case 14:throw i.prev=14,i.t0=i.catch(0),i.t0;case 17:case"end":return i.stop()}}),i,null,[[0,14]])})));return function(e){return i.apply(this,arguments)}}())})),i.wins+1!==i.squad.length){for(var s=0;s<i.wins+1;s++)n[s].didWin=!0;if(!0===n[i.squad.length-1].hidden)for(var c=0;c<i.wins+2;c++){n[c].hidden=!1;var d=r.findIndex((function(e){return e.name===a}));h.participants[d].currCharacter=n.find((function(e){return!1===e.didWin})).name}}else n[n.length-1].didWin=!0,r.forEach((function(e){f.getUserByName(e.name).then((function(e){if(e.data.name===a){var t={ironManStats:{wins:e.data.ironManStats.wins+1,losses:e.data.ironManStats.losses}};f.updateUserByName(e.data.name,t)}else{var n={ironManStats:{wins:e.data.ironManStats.wins,losses:e.data.ironManStats.losses+1}};f.updateUserByName(e.data.name,n)}_(Object(o.a)(Object(o.a)({},O),{},{name:i.name,portrait:i.portrait})),C()}))}));var l=r.findIndex((function(e){return e.name===a}));r[l]=i,h.participants[l].wins++,j(Object(o.a)(Object(o.a)({},h),{},{participants:r})),f.updateArena(e,h)};return void 0!==r?t===h.admin?Object(u.jsx)(b.a,{fluid:!0,children:r.map((function(e){return Object(u.jsxs)(p.a,{id:"roster",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{sm:1,md:1,children:Object(u.jsx)("button",{name:e.name,onClick:P,id:"victoryButton",children:"Victorious"})}),Object(u.jsxs)(m.a,{id:"userHeader",sm:10,md:10,children:[Object(u.jsx)("img",{id:"userPortrait",src:e.portrait,alt:"participants portrait"}),Object(u.jsxs)("h3",{id:"userName",children:[e.name,"'s Roster"]})]})]}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(m.a,{id:"characterList",sm:12,md:12,children:[e.squad.map((function(t){return!0===t.hidden&&t!==e.squad[0]?Object(u.jsxs)("div",{className:"hiddenContainer",children:[Object(u.jsx)("div",{className:"hidden"}),Object(u.jsx)("p",{children:"???"})]}):Object(u.jsxs)("div",{className:"character",children:[Object(u.jsx)("img",{id:"characterPortrait",src:t.portrait,alt:"characters portrait"}),Object(u.jsx)("p",{id:"characterName",children:t.name})]})})),Object(u.jsxs)(v.a,{isOpen:k,style:q,contentLabel:"Modal",id:"winnerModal",children:[Object(u.jsx)("h1",{children:"Congratulations!"}),Object(u.jsx)("br",{}),Object(u.jsxs)("h2",{children:[" ",O.name," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("img",{alt:"winner portrait",src:O.portrait,id:"winnerPortrait"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:" You Are The Smash King"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:M,children:"Exit Arena"})]})]})})]})}))}):Object(u.jsx)(b.a,{fluid:!0,children:r.map((function(e){return Object(u.jsxs)(p.a,{id:"roster",children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)(m.a,{id:"userHeader",sm:12,md:12,children:[Object(u.jsx)("img",{id:"userPortrait",src:e.portrait,alt:"participants portrait"}),Object(u.jsxs)("h3",{id:"userName",children:[e.name,"'s Roster"]})]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(m.a,{id:"characterList",sm:12,md:12,children:[e.squad.map((function(t){return!0===t.hidden&&t!==e.squad[0]?Object(u.jsxs)("div",{className:"hiddenContainer",children:[Object(u.jsx)("div",{className:"hidden"}),Object(u.jsx)("p",{children:"???"})]}):Object(u.jsxs)("div",{className:"character",children:[Object(u.jsx)("img",{id:"characterPortrait",src:t.portrait,alt:"characters portrait"}),Object(u.jsx)("p",{id:"characterName",children:t.name})]})})),Object(u.jsxs)(v.a,{isOpen:k,style:q,contentLabel:"Modal",id:"winnerModal",children:[Object(u.jsx)("h1",{children:"Congratulations!"}),Object(u.jsx)("br",{}),Object(u.jsxs)("h2",{children:[" ",O.name," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("img",{alt:"winner portrait",src:O.portrait,id:"winnerPortrait"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:" You Are The Smash King"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:M,children:"Exit Arena"})]})]})})]})}))}):Object(u.jsx)(u.Fragment,{})};a(104);var R=function(){var e=window.location.pathname.substr(-6),t=Object(i.useState)(),a=Object(c.a)(t,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){f.getArenaByLobbyCode(e).then((function(e){r({LobbyCode:e.data.lobbyCode,brawlers:e.data.brawlers,participants:e.data.participants.length})}))}),[]),void 0!==n?Object(u.jsxs)(b.a,{id:"arena",fluid:!0,children:[Object(u.jsxs)(p.a,{id:"header",children:[Object(u.jsx)(m.a,{sm:12,md:10,children:Object(u.jsx)("h1",{id:"header1",children:"Welcome to Smash Town"})}),Object(u.jsx)(m.a,{sm:12,md:2,children:Object(u.jsx)("button",{id:"leaveButton",onClick:function(){window.open("http://localhost:3000/dashboard","_self")},children:"Leave Arena"})})]}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{className:"smallHeaders",sm:12,md:12,children:Object(u.jsxs)("h4",{children:["Lobby Code: ",n.LobbyCode]})}),Object(u.jsx)(m.a,{className:"smallHeaders",sm:12,md:12,children:Object(u.jsxs)("h4",{children:[n.brawlers," Man Iron Man"]})})]}),Object(u.jsx)(p.a,{id:"rosterWindow",children:Object(u.jsx)(D,{})})]}):Object(u.jsx)(u.Fragment,{})};var T=function(){var e=Object(i.useState)({id:"",name:"",portrait:"",LobbyCode:"",participants:[],competitors:"",brawlers:""}),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){x.a.get("/User").then((function(e){e.data.id&&f.getUserByUserId(e.data.id).then((function(e){n(Object(o.a)(Object(o.a)({},a),{},{id:e.data._id,name:e.data.name,portrait:e.data.portrait}))}))})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(g.Provider,{value:a,id:"container",children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(l.a,{exact:!0,path:"/dashboard",children:Object(u.jsx)(N,{updateContext:function(e,t,i){n(Object(o.a)(Object(o.a)({},a),{},{LobbyCode:e,participants:t,brawlers:i}))}})}),Object(u.jsx)(l.a,{path:"/arena",component:R})]})})})};a(105);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))},19:function(e){e.exports=JSON.parse('{"characters":[{"id":"1","name":"Mario","portrait":"https://ssb.wiki.gallery/images/thumb/4/44/Mario_SSBU.png/150px-Mario_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"Okey-Dokey!"},{"id":"2","name":"Luigi","portrait":"https://ssb.wiki.gallery/images/thumb/b/bb/Luigi_SSBU.png/137px-Luigi_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Pow, Pow."},{"id":"3","name":"Peach","portrait":"https://ssb.wiki.gallery/images/thumb/7/74/Peach_SSBU.png/133px-Peach_SSBU.png","color":"pink","didWin":false,"hidden":true,"quote":"Aw, Did I Win?"},{"id":"4","name":"Bowser","portrait":"https://ssb.wiki.gallery/images/thumb/4/49/Bowser_SSBU.png/150px-Bowser_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"BWAHAHA!"},{"id":"5","name":"Dr. Mario","portrait":"https://ssb.wiki.gallery/images/thumb/3/3f/Dr._Mario_SSBU.png/150px-Dr._Mario_SSBU.png","color":"brown","didWin":false,"hidden":true,"quote":"Lets-a-Go!"},{"id":"6","name":"Rosalina & Luma","portrait":"https://ssb.wiki.gallery/images/thumb/1/16/Rosalina_%26_Luma_SSBU.png/150px-Rosalina_%26_Luma_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"All Right!"},{"id":"7","name":"Bowser Jr.","portrait":"https://ssb.wiki.gallery/images/thumb/2/2b/Bowser_Jr._SSBU.png/150px-Bowser_Jr._SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Papa Told Me All About It."},{"id":"8","name":"Yoshi","portrait":"https://ssb.wiki.gallery/images/thumb/8/8d/Yoshi_SSBU.png/150px-Yoshi_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Yoshi!"},{"id":"9","name":"Donkey Kong","portrait":"https://ssb.wiki.gallery/images/thumb/c/c9/Donkey_Kong_SSBU.png/150px-Donkey_Kong_SSBU.png","color":"brown","didWin":false,"hidden":true,"quote":"Banana Slamma!"},{"id":"10","name":"Diddy Kong","portrait":"https://ssb.wiki.gallery/images/thumb/a/a7/Diddy_Kong_SSBU.png/145px-Diddy_Kong_SSBU.png","color":"brown","didWin":false,"hidden":true,"quote":"You Lazy Ape!"},{"id":"11","name":"Link","portrait":"https://ssb.wiki.gallery/images/thumb/8/84/Link_SSBU.png/150px-Link_SSBU.png","color":"aqua","didWin":false,"hidden":true,"quote":"HYAAAAAAAA!!!!"},{"id":"12","name":"Zelda","portrait":"https://ssb.wiki.gallery/images/thumb/c/c8/Zelda_SSBU.png/150px-Zelda_SSBU.png","color":"pink","didWin":false,"hidden":true,"quote":"Stow Your Fear."},{"id":"13","name":"Sheik","portrait":"https://ssb.wiki.gallery/images/thumb/0/00/Sheik_SSBU.png/150px-Sheik_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"I\'ve Been Waiting For You."},{"id":"14","name":"Ganondorf","portrait":"https://ssb.wiki.gallery/images/thumb/9/91/Ganondorf_SSBU.png/149px-Ganondorf_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"Behold! The Power Of The Demon King!"},{"id":"15","name":"Young Link","portrait":"https://ssb.wiki.gallery/images/thumb/8/8a/Young_Link_SSBU.png/150px-Young_Link_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Yah!"},{"id":"16","name":"Toon Link","portrait":"https://ssb.wiki.gallery/images/thumb/5/56/Toon_Link_SSBU.png/142px-Toon_Link_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Big Brother, You\'re So Strong!"},{"id":"17","name":"Samus","portrait":"https://ssb.wiki.gallery/images/thumb/0/03/Samus_SSBU.png/150px-Samus_SSBU.png","color":"orange","didWin":false,"hidden":true,"quote":"Be Still."},{"id":"18","name":"Zero Suit Samus","portrait":"https://ssb.wiki.gallery/images/thumb/f/f0/Zero_Suit_Samus_SSBU.png/150px-Zero_Suit_Samus_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Is That All?"},{"id":"19","name":"Kirby","portrait":"https://ssb.wiki.gallery/images/thumb/0/07/Kirby_SSBU.png/150px-Kirby_SSBU.png","color":"pink","didWin":false,"hidden":true,"quote":"Hi!"},{"id":"20","name":"Meta Knight","portrait":"https://ssb.wiki.gallery/images/thumb/0/00/Meta_Knight_SSBU.png/150px-Meta_Knight_SSBU.png","color":"purple","didWin":false,"hidden":true,"quote":"Know My Power!"},{"id":"21","name":"King DeDeDe","portrait":"https://ssb.wiki.gallery/images/thumb/f/f5/King_Dedede_SSBU.png/150px-King_Dedede_SSBU.png","color":"orange","didWin":false,"hidden":true,"quote":"Surely You Jestin."},{"id":"22","name":"Fox","portrait":"https://ssb.wiki.gallery/images/thumb/2/2f/Fox_SSBU.png/150px-Fox_SSBU.png","color":"brown","didWin":false,"hidden":true,"quote":"Mission Complete!"},{"id":"23","name":"Falco","portrait":"https://ssb.wiki.gallery/images/thumb/8/80/Falco_SSBU.png/150px-Falco_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Piece Of Cake!"},{"id":"24","name":"Wolf","portrait":"https://ssb.wiki.gallery/images/thumb/8/8a/Wolf_SSBU.png/150px-Wolf_SSBU.png","color":"purple","didWin":false,"hidden":true,"quote":"The Hunt Is On!"},{"id":"25","name":"Pikachu","portrait":"https://ssb.wiki.gallery/images/thumb/9/93/Pikachu_SSBU.png/150px-Pikachu_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Pikachu!"},{"id":"26","name":"Jigglypuff","portrait":"https://ssb.wiki.gallery/images/thumb/6/6a/Jigglypuff_SSBU.png/150px-Jigglypuff_SSBU.png","color":"pink","didWin":false,"hidden":true,"quote":"Jigglypuff!"},{"id":"27","name":"Mewtwo","portrait":"https://ssb.wiki.gallery/images/thumb/d/de/Mewtwo_SSBU.png/149px-Mewtwo_SSBU.png","color":"purple","didWin":false,"hidden":true,"quote":"One\u2019s Birth Is Irrelevant."},{"id":"28","name":"Pichu","portrait":"https://ssb.wiki.gallery/images/thumb/c/c1/Pichu_SSBU.png/150px-Pichu_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Pichu!"},{"id":"29","name":"Pokemon Trainer","portrait":"https://ssb.wiki.gallery/images/thumb/2/28/Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png/450px-Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"Way To Go!"},{"id":"30","name":"Lucario","portrait":"https://ssb.wiki.gallery/images/thumb/0/08/Lucario_SSBU.png/150px-Lucario_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"The Aura Is With Me!"},{"id":"31","name":"Greninja","portrait":"https://ssb.wiki.gallery/images/thumb/d/da/Greninja_SSBU.png/150px-Greninja_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Greninja..."},{"id":"32","name":"Captain Falcon","portrait":"https://ssb.wiki.gallery/images/thumb/d/da/Captain_Falcon_SSBU.png/150px-Captain_Falcon_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Show Me Your Moves!"},{"id":"33","name":"Ness","portrait":"https://ssb.wiki.gallery/images/thumb/8/82/Ness_SSBU.png/150px-Ness_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"PK Fire!"},{"id":"34","name":"Lucas","portrait":"https://ssb.wiki.gallery/images/thumb/8/81/Lucas_SSBU.png/150px-Lucas_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"PK Freeze!"},{"id":"35","name":"Ice Climbers","portrait":"https://ssb.wiki.gallery/images/thumb/1/12/Ice_Climbers_SSBU.png/150px-Ice_Climbers_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Popo & Nana."},{"id":"36","name":"Marth","portrait":"https://ssb.wiki.gallery/images/thumb/e/e9/Marth_SSBU.png/150px-Marth_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Predictable!"},{"id":"37","name":"Roy","portrait":"https://ssb.wiki.gallery/images/thumb/9/9d/Roy_SSBU.png/150px-Roy_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"I Won\'t Lose!"},{"id":"38","name":"Ike","portrait":"https://ssb.wiki.gallery/images/thumb/8/86/Ike_SSBU.png/150px-Ike_SSBU.png","color":"orange","didWin":false,"hidden":true,"quote":"Prepare Yourself."},{"id":"39","name":"Robin","portrait":"https://ssb.wiki.gallery/images/thumb/8/82/Robin_SSBU.png/150px-Robin_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"Arcfire!"},{"id":"40","name":"Lucina","portrait":"https://ssb.wiki.gallery/images/thumb/d/dc/Lucina_SSBU.png/150px-Lucina_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"My Turn!"},{"id":"41","name":"Corrin","portrait":"https://ssb.wiki.gallery/images/thumb/c/c4/Corrin_SSBU.png/150px-Corrin_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"Your Fate Is Clear!"},{"id":"42","name":"Game & Watch","portrait":"https://ssb.wiki.gallery/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/150px-Mr._Game_%26_Watch_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"The Chef!"},{"id":"43","name":"Pit","portrait":"https://ssb.wiki.gallery/images/thumb/3/38/Pit_SSBU.png/150px-Pit_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Stay Back!"},{"id":"44","name":"Palutena","portrait":"https://ssb.wiki.gallery/images/thumb/6/6b/Palutena_SSBU.png/142px-Palutena_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Explosive Flame!"},{"id":"45","name":"Dark Pit","portrait":"https://ssb.wiki.gallery/images/thumb/0/09/Dark_Pit_SSBU.png/142px-Dark_Pit_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"Electroshock!"},{"id":"46","name":"Wario","portrait":"https://ssb.wiki.gallery/images/thumb/0/04/Wario_SSBU.png/150px-Wario_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Yes!"},{"id":"47","name":"Olimar","portrait":"https://ssb.wiki.gallery/images/thumb/b/b3/Olimar_SSBU.png/150px-Olimar_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Olimar...!"},{"id":"48","name":"R.O.B.","portrait":"https://ssb.wiki.gallery/images/thumb/6/60/R.O.B._SSBU.png/150px-R.O.B._SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"Robert..."},{"id":"49","name":"Villager","portrait":"https://ssb.wiki.gallery/images/thumb/a/ac/Villager_SSBU.png/150px-Villager_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"*Yawn*"},{"id":"50","name":"Little Mac","portrait":"https://ssb.wiki.gallery/images/thumb/5/53/Little_Mac_SSBU.png/150px-Little_Mac_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Hit \'em, Baby!"},{"id":"51","name":"Wii Fit Trainer","portrait":"https://ssb.wiki.gallery/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/150px-Wii_Fit_Trainer_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"You\'re Wobbling!"},{"id":"52","name":"Shulk","portrait":"https://ssb.wiki.gallery/images/thumb/0/0f/Shulk_SSBU.png/150px-Shulk_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"Back Slash!"},{"id":"53","name":"Duck Hunt","portrait":"https://ssb.wiki.gallery/images/thumb/d/d8/Duck_Hunt_SSBU.png/150px-Duck_Hunt_SSBU.png","color":"brown","didWin":false,"hidden":true,"quote":"Hehehehe."},{"id":"54","name":"Snake","portrait":"https://ssb.wiki.gallery/images/thumb/0/02/Snake_SSBU.png/123px-Snake_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"Not Even Close."},{"id":"55","name":"Sonic","portrait":"https://ssb.wiki.gallery/images/thumb/b/ba/Sonic_SSBU.png/150px-Sonic_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Sonic Speed!"},{"id":"56","name":"Mega Man","portrait":"https://ssb.wiki.gallery/images/thumb/4/46/Mega_Man_SSBU.png/150px-Mega_Man_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Sizzling Circuits!"},{"id":"57","name":"Pac Man","portrait":"https://ssb.wiki.gallery/images/thumb/0/03/Pac-Man_SSBU.png/150px-Pac-Man_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Pac-Man!"},{"id":"58","name":"Ryu","portrait":"https://ssb.wiki.gallery/images/thumb/6/61/Ryu_SSBU.png/150px-Ryu_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"Hadoken!"},{"id":"59","name":"Cloud","portrait":"https://ssb.wiki.gallery/images/thumb/b/b3/Cloud_SSBU.png/150px-Cloud_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"Don\'t Really Care."},{"id":"60","name":"Bayonetta","portrait":"https://ssb.wiki.gallery/images/thumb/7/7c/Bayonetta_SSBU.png/150px-Bayonetta_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"Dreadful."},{"id":"61","name":"Daisy","portrait":"https://ssb.wiki.gallery/images/thumb/2/21/Daisy_SSBU.png/150px-Daisy_SSBU.png","color":"orange","didWin":false,"hidden":true,"quote":"Yeah!"},{"id":"62","name":"Piranha Plant","portrait":"https://ssb.wiki.gallery/images/thumb/f/f0/Piranha_Plant_SSBU.png/150px-Piranha_Plant_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"Piranha Plant!"},{"id":"63","name":"King K. Rool","portrait":"https://ssb.wiki.gallery/images/thumb/b/b6/King_K._Rool_SSBU.png/150px-King_K._Rool_SSBU.png","color":"green","didWin":false,"hidden":true,"quote":"You Stupid Monkeys."},{"id":"64","name":"Ridley","portrait":"https://ssb.wiki.gallery/images/thumb/2/27/Ridley_SSBU.png/150px-Ridley_SSBU.png","color":"gray","didWin":false,"hidden":true,"quote":"You\'re About To Die."},{"id":"65","name":"Dark Samus","portrait":"https://ssb.wiki.gallery/images/thumb/a/a6/Dark_Samus_SSBU.png/150px-Dark_Samus_SSBU.png","color":"black","didWin":false,"hidden":true,"quote":"You\'re Mine."},{"id":"66","name":"Incineroar","portrait":"https://ssb.wiki.gallery/images/thumb/c/c4/Incineroar_SSBU.png/150px-Incineroar_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"Incineroar!"},{"id":"67","name":"Chrom","portrait":"https://ssb.wiki.gallery/images/thumb/5/57/Chrom_SSBU.png/128px-Chrom_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Now I\'m Mad."},{"id":"68","name":"Isabelle","portrait":"https://ssb.wiki.gallery/images/thumb/2/2b/Isabelle_SSBU.png/150px-Isabelle_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"What Am I Saying?!"},{"id":"69","name":"Inkling","portrait":"https://ssb.wiki.gallery/images/thumb/2/2e/Inkling_SSBU.png/150px-Inkling_SSBU.png","color":"Orange","didWin":false,"hidden":true,"quote":"Yeddy!"},{"id":"70","name":"Ken","portrait":"https://ssb.wiki.gallery/images/thumb/f/f6/Ken_SSBU.png/150px-Ken_SSBU.png","color":"red","didWin":false,"hidden":true,"quote":"Get Serious!"},{"id":"71","name":"Simon","portrait":"https://ssb.wiki.gallery/images/thumb/9/95/Simon_SSBU.png/150px-Simon_SSBU.png","color":"yellow","didWin":false,"hidden":true,"quote":"Begone!"},{"id":"72","name":"Richter","portrait":"https://ssb.wiki.gallery/images/thumb/c/c2/Richter_SSBU.png/150px-Richter_SSBU.png","color":"blue","didWin":false,"hidden":true,"quote":"Grand Cross!"}]}')},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.44eef678.chunk.js.map