(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){"use strict";t.a=function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.slice(0,4))}},163:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(27),r=n(28);t.a=Object(i.b)("translations")(Object(r.withStyles)(function(e){var t=function(e){return"spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite ".concat(e,"s")};return{container:{position:"relative",width:120,height:120},ldsRing:{display:"inline-block",position:"relative",width:64,height:64},ldsRingInner:{boxSizing:"border-box",display:"block",position:"absolute",width:51,height:51,margin:6,border:"6px solid #fff",borderRadius:"50%",borderColor:"".concat(e.palette.tertiary.main," transparent transparent transparent")},first:{animation:["glow 3s linear infinite alternate",t(-.45)].join(", ")},second:{animation:["glow 3s linear infinite alternate",t(-.3)].join(", ")},third:{animation:["glow 3s linear infinite alternate",t(-.15)].join(", ")},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},"@keyframes glow":{"0%":{borderColor:"".concat(e.palette.secondary.main," transparent transparent transparent")},"100%":{borderColor:"".concat(e.palette.tertiary.main," transparent transparent transparent")}}}})(function(e){var t=e.t,n=e.classes,a=e.scale,i=e.padding;return o.a.createElement("div",{style:{padding:i}},o.a.createElement("div",{className:n.container,style:{zoom:a&&"".concat(Math.ceil(100*a),"%"),margin:"0 auto"}},o.a.createElement("div",{className:n.ldsRing,"aria-label":t("ui.loading")},o.a.createElement("div",{className:[n.ldsRingInner,n.first].join(" ")}),o.a.createElement("div",{className:[n.ldsRingInner,n.second].join(" ")}),o.a.createElement("div",{className:[n.ldsRingInner,n.third].join(" ")}))))}))},167:function(e){e.exports={global:{listItemDelimiter:", ",colon:": ",titleDelimiter:" :: "},ui:{title:"Lionel Rowe",loading:"Loading\u2026",close:"Close",notFoundTitle:"Page Not Found",allSelected:"All",selectAll:"Select all",clearFilters:"Clear filters",notFound:"Sorry, there\u2019s nothing to see here!",backToHome:"Home",about:"About",home:"Home",work:"Portfolio",skills:"Skills",cv:"R\xe9sum\xe9",contact:"Contact",weixin:"WeChat",linkedin:"LinkedIn",github:"GitHub",ctaViewMyWork:"View my Work",technologies:"Technologies",filterByTech:"Filter by technology",email:{yourEmail:"Your email address",subject:"Subject",body:"Body",send:"Send",reset:"Clear"},egg:"\ud83e\udd5a"},meta:{title:"Lionel Rowe :: Full-Stack Web Developer",description:"Full-stack web developer specializing in vanilla JavaScript, React, and Ruby on Rails. Previously: tech writing and localization for Alibaba Cloud web apps. I like to build stuff that helps people be awesome at what they do.",image:"https://lionel-rowe.github.io/images/lionel.jpg",twitter_account:"",url:"https://www.lionelrowe.com"},fullName:"Lionel Rowe",tagline:"Full-Stack Web Developer",photo:{url:"images/lionel.jpg",alt:"Lionel Rowe mugshot",scale:1},skills:[{title:"React",icon:"fab react",color:"#00d1f7",url:"https://reactjs.org/"},{title:"JavaScript",icon:"fab js",color:"#f0db4f",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{title:"HTML",icon:"fab html5",color:"#e44d25",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{title:"CSS",icon:"fab css3",color:"#264de4",url:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{title:"Node.js",icon:"fab node-js",color:"#83cc29",url:"https://nodejs.org/en/"},{title:"Ruby",icon:"fas gem",color:"#ec1622",url:"https://www.ruby-lang.org/"},{title:"Sass",icon:"fab sass",color:"#cc679a",url:"https://sass-lang.com/"}],projects:{gestuno:{name:"Gestuno",img:"images/gestuno_cover_img.png",url:"https://gestuno.herokuapp.com/",github:"https://github.com/gestuno/gestuno-rails",shortDesc:"Remote on-demand platform for deaf customers to engage interpreters",fullDesc:"Sign-language interpreters spend 1/3 of their time traveling, which drives up the cost and wait times for vital interpreting services. Gestuno provides a convenient, affordable, on-demand solution for deaf customers to engage the interpreters they need.\n\nUsers select from available interpreters based on languages, qualifications, and other criteria to get the services they need, anytime, anywhere. Interpreting is provided over a live video connection and charged by the minute, eliminating overheads.",technologies:["Ruby on Rails","Sass","Twilio","Stripe","Web Workers"]},symbolika:{name:"Symbolika",img:"images/symbolika_screen_2.png",url:"https://chrome.google.com/webstore/detail/symbolika/llfbffepkepmcdakomdgenihlkaapoen",github:"https://github.com/lionel-rowe/symbolika",shortDesc:"Search for and insert special characters from within your browser",fullDesc:"A chrome extension allowing users to search for and insert over 28,000 unicode characters and emoji. Works with messaging apps, search engines, and more.\n\nDesign goals focused on initial load time and search speed, with a shared worker serving data from the front end.",technologies:["Chrome API","React","ElasticLunr","Web Workers","Unicode"]},b64:{name:"b64",img:"images/b64_cover_img.png",url:"https://b64.glitch.me",github:"https://github.com/lionel-rowe/b64",shortDesc:"Unicode (UTF-8) \u21d4 Base64 converter",fullDesc:"JavaScript\u2019s native implementation of Base64 encoding and decoding fails for characters outside the Latin 1 range. This project implements UTF-8 and Base64 encoding and decoding algorithms to provide Base64 encoding and decoding of arbitrary Unicode strings.\n\nThe web front-end is an experiment in progressive enhancement, providing a modern web-app experience for most users, while still allowing full functionality via the back end for legacy browsers.",technologies:["Node.js","Express","Handlebars","Unicode","Base64","Jest"]},mixalot:{name:"Mix-a-Lot",img:"images/mix-a-lot_cover_img.png",url:"http://mix-a-lot.herokuapp.com",github:"https://github.com/SebastienPoncelet/rails-mister-cocktail",shortDesc:"Cocktails for the masses",fullDesc:"A full-stack rails app with a database of cocktail recipes. Users can search for a cocktail or get a random recommendation. User-generated content is also enabled, allowing users to upload their favorite cocktail recipes, ingredients, and images.",technologies:["Ruby on Rails","Bootstrap","Sass"]},gol:{name:"Game of Life",img:"images/GoL_cover_img.png",url:"https://lionel-rowe.github.io/GoL/",github:"https://github.com/lionel-rowe/GoL",shortDesc:"Implementation of John Conway\u2019s famous cellular automaton",fullDesc:"A performant, browser-based implementation of Conway\u2019s Game of Life. This implementation includes a parser for RLE files, allowing players to upload and run their favorite patterns. Players can also draw bitmap patterns on the canvas using the mouse.",technologies:["Bootstrap","HTML5 Canvas"]},secretGardens:{name:"Secret Gardens",img:"images/secret-gardens_cover_img.png",url:"https://my-secret-gardens.herokuapp.com",github:"https://github.com/lionel-rowe/secret-gardens",shortDesc:"Matching greenery-starved city dwellers with their ideal garden for hire",fullDesc:"A full-stack React/Rails application matching greenery-starved city dwellers with their ideal garden for hire. Hosts can post their properties, and prospective customers can browse from among the available gardens.",technologies:["Ruby on Rails","React","Material UI"]}},contactInfo:{github:"https://github.com/lionel-rowe/",weixin:{qr:"https://u.wechat.com/EIPMEIYU6ZH1qGom9e6w2Vc",account:"lionel-rowe"},linkedin:"https://www.linkedin.com/in/lionel-rowe/"}}},168:function(e){e.exports={global:{listItemDelimiter:"\u3001",colon:"\uff1a",titleDelimiter:" :: "},ui:{title:"\u7f57\u5b81",loading:"\u52a0\u8f7d\u4e2d\u2026",close:"\u5173\u95ed",notFoundTitle:"\u672a\u627e\u5230\u6b64\u9875\u9762",allSelected:"\u5168\u90e8",selectAll:"\u5168\u9009",clearFilters:"\u53d6\u6d88\u7b5b\u9009",notFound:"\u8fd9\u91cc\u4e00\u7247\u7a7a\u767d~",backToHome:"\u8fd4\u56de\u9996\u9875",about:"\u5173\u4e8e\u6211",home:"\u9996\u9875",work:"\u4e8b\u4e1a",skills:"\u6280\u80fd",cv:"\u7b80\u5386",contact:"\u8054\u7cfb",weixin:"\u5fae\u4fe1",linkedin:"\u9886\u82f1",github:"GitHub",ctaViewMyWork:"\u89c2\u770b\u6211\u7684\u5de5\u4f5c",technologies:"\u6280\u672f",filterByTech:"\u6309\u6280\u672f\u7b5b\u9009",email:{yourEmail:"\u60a8\u7684\u90ae\u7bb1",subject:"\u6807\u9898",body:"\u5185\u5bb9",send:"\u53d1\u9001",reset:"\u6e05\u7a7a"},egg:"\ud83e\udd5a"},meta:{title:"\u7f57\u5b81 :: \u5168\u6808\u4e92\u8054\u7f51\u5f00\u53d1",description:"\u5168\u6808\u4e92\u8054\u7f51\u5f00\u53d1\uff0c\u81f4\u529b\u4e8e\u539f\u751f JavaScript\u3001React JS\u3001Ruby on Rails\u3002\u4e4b\u524d\uff1a\u963f\u91cc\u4e91 web app \u6280\u672f\u5199\u4f5c\u3001\u672c\u571f\u5316\u3002\u76ee\u6807\uff1a\u9020\u51fa\u80fd\u591f\u8ba9\u7528\u6237\u6210\u4e3a\u6700\u725b\u7684\u81ea\u5df1\u7684\u5de5\u5177\uff01"},fullName:"\u7f57\u5b81",tagline:"\u5168\u6808\u4e92\u8054\u7f51\u5f00\u53d1",history:[],contactInfo:{}}},5447:function(e,t,n){e.exports=n(5626)},5452:function(e,t,n){},5538:function(e,t,n){},5626:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(18),r=n.n(i),l=(n(5452),n(5538),n(108)),s=n(25),c=n(27),m=n(15),u=n(28),d=n(43),h=Object(c.b)("translations")(Object(u.withStyles)(function(e){return{gradientBar:{background:"linear-gradient(to right, ".concat(e.palette.primary.gradient,")")},fullWidthTextLeft:{display:"flex",flexGrow:1,textAlign:"left"},unstyledLink:{color:"inherit",textDecoration:"none"}}})(function(e){var t=e.t,n=e.i18n,i=e.classes,r=Object(a.useState)(null),c=Object(l.a)(r,2),u=c[0],h=c[1],g=function(){h(null)},p=function(e){n.changeLanguage(e),g()};return o.a.createElement(m.a,{component:"nav",position:"fixed",className:i.gradientBar},o.a.createElement(m.u,null,o.a.createElement("div",{className:i.fullWidthTextLeft},o.a.createElement(s.a,{to:"/",className:i.unstyledLink},o.a.createElement(m.w,{variant:"h6",color:"inherit"},t("fullName")))),o.a.createElement("div",null,o.a.createElement(m.m,{"aria-owns":u?"menu-appbar":void 0,"aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},color:"inherit"},o.a.createElement(d.f,null)),o.a.createElement(m.q,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(u),onClose:g},o.a.createElement(m.r,{onClick:function(){return p("en-US")}},"English"),o.a.createElement(m.r,{onClick:function(){return p("zh-CN")}},"\u4e2d\u6587")))))})),g=n(53),p=n(103),f=n(104),b=n(107),v=n(105),w=n(106),y=n(110),k=n(171),S=n.n(k),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zoom",o=function(e){e.cancelable&&e.preventDefault()};S()(e).on("start",function(){e.addEventListener("touchmove",o,{passive:!1,capture:!0})}).on("change",function(o,i){var r=function(e){return+getComputedStyle(e)[a]}(e)+(o-i)/350;r<t?r=t:r>n&&(r=n),function(e,t){e.style[a]="".concat(t)}(e,r)}).on("end",function(){e.removeEventListener("touchmove",o,{passive:!1,capture:!0})})},j=n(66),x=Object(y.a)(),z=function(e){var t=e.mixins.toolbar,n=t.minHeight,a=Object(g.a)(t,["minHeight"]),o=n,i=Object.keys(a).reduce(function(e,t){return e[t]=a[t].minHeight,e},{"@media all":n}),r=Object.keys(i).reduce(function(e,t){return e[t]="calc(100vh - ".concat(i[t]+n,"px)"),e},{}),l=function(e,t){return Object.keys(e).reduce(function(n,a){return n[a]={},n[a][t]=e[a],n},{})};return{scrollArea:Object(j.a)({marginBottom:o},l(i,"marginTop")),customScrollbars:Object(j.a)({width:"100vw"},l(r,"minHeight")),notSoCustomScrollbars:l(r,"minHeight"),cvViewer:Object(j.a)({},l(i,"top"),l(r,"height"))}},R=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={removeHistoryListener:function(){return null},timeout:-1},n.scrollbarRef=o.a.createRef(),n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;x&&E(document.querySelector("#foreground"));var t=s.e.listen(function(t){t.location,t.action;var n=setTimeout(function(){window.scrollTo(0,0)},100);e.setState({timeout:n})});this.setState({removeHistoryListener:t})}},{key:"componentWillUnmount",value:function(){this.state.removeHistoryListener(),clearTimeout(this.state.timeout)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=Object(g.a)(e,["classes"]);return o.a.createElement("div",Object.assign({ref:this.scrollbarRef,className:[t.notSoCustomScrollbars,t.scrollArea].join(" ")},n))}}]),t}(o.a.Component),O=Object(u.withStyles)(z)(R),C=function(e){return o.a.createElement(m.l,Object.assign({container:!0,direction:"row",justify:"center",alignItems:"center",style:{padding:"0 20px"}},e))},L=n(163),T=function(e){return o.a.createElement(C,null,o.a.createElement(L.a,{scale:.8,padding:70}))},N=o.a.lazy(function(){return n.e(1).then(n.bind(null,5667))}),U=o.a.lazy(function(){return n.e(2).then(n.bind(null,5666))}),W=o.a.lazy(function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,5665))}),D=o.a.lazy(function(){return n.e(4).then(n.bind(null,5663))}),H=o.a.lazy(function(){return n.e(5).then(n.bind(null,5664))}),I=function(){return o.a.createElement(O,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(T,null)},o.a.createElement(C,{component:s.d},o.a.createElement(N,{path:"/"}),o.a.createElement(U,{path:"/portfolio"}),o.a.createElement(s.c,{noThrow:!0,from:"/work",to:"/portfolio"}),o.a.createElement(W,{path:"/contact"}),o.a.createElement(D,{path:"/spinner"}),o.a.createElement(H,{default:!0}))))},B=Object(c.b)("translations")(Object(u.withStyles)(function(e){return{root:{zIndex:1e3,width:"100vw",position:"fixed",bottom:0},actionButton:{minWidth:50,maxWidth:250,"&$selected":{color:e.palette.secondary.main}},selected:{}}})(function(e){var t=e.t,n=e.classes,a={color:"secondary",component:s.a,classes:{root:n.actionButton,selected:n.selected}};return o.a.createElement(s.b,null,function(e){var i=e.location;return o.a.createElement(m.b,{component:"nav",value:i.pathname,showLabels:!0,className:n.root},o.a.createElement(m.c,Object.assign({value:"/",to:"/",label:t("ui.home"),icon:o.a.createElement(d.d,null)},a)),o.a.createElement(m.c,Object.assign({value:"/portfolio",to:"/portfolio",label:t("ui.work"),icon:o.a.createElement(d.c,null)},a)),o.a.createElement(m.c,Object.assign({value:"/contact",to:"/contact",label:t("ui.contact"),icon:o.a.createElement(d.e,null)},a)))})})),A=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"background",style:{background:"linear-gradient(to bottom, #fff, #eee)",height:"100vh",width:"100vw",position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:-1}}),o.a.createElement("div",{id:"foreground"},o.a.createElement(h,null),o.a.createElement(I,null),o.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(101),_=n.n(F),G=n(102),M=n(166),q=n.n(M),J=n(168),P={enUS:n(167),zhCN:J};Object.keys(P).forEach(function(e){var t=P[e];t.meta&&t.meta.description&&(t.missionStatement=t.meta.description)}),G.a.use(c.a).use(q.a).init({resources:{"en-US":{translations:P.enUS},"zh-CN":{translations:P.zhCN}},fallbackLng:{en:["en-US"],"en-GB":["en-US"],zh:["zh-CN","en-US"],"zh-HANS":["zh-CN","en-US"],"zh-HANT":["zh-CN","en-US"],default:["en-US"]},debug:!1,ns:["translations"],defaultNS:"translations",keySeparator:".",interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});G.a;var V=n(52),Y=Object(u.createMuiTheme)({palette:{primary:{main:"#222333",gradient:"".concat("#222333",", #550022"),contrastText:"#ffffff"},secondary:{main:"#f50057",gradient:"".concat("#f50057",", #FF8E53"),contrastText:"#ffffff",extraLight:Object(V.lighten)("#f50057",.5)},tertiary:{main:"#0065ff"}},typography:{useNextVariants:!0,h1:{fontSize:"2rem",padding:"0.9em 0 0.5em 0",fontWeight:500,color:"#654c55"},h2:{fontSize:"1.7em",padding:"0.9em 0 0.5em 0",fontWeight:500},h3:{fontSize:"1.5em",padding:"0.9em 0 0.5em 0",fontWeight:500},h4:{fontSize:"1.25em",padding:"0.9em 0 0.5em 0",fontWeight:500}}}),$=(n(5481),n(109)),Z=n(169),K=n(69);$.b.add(Z.a,K.c,K.b,K.a),r.a.render(o.a.createElement(_.a,{theme:Y},o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5447,8,6]]]);
//# sourceMappingURL=main.40bf8c20.chunk.js.map