(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{114:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),l=a(39),c=a(450),i=a(452),d=a(438),u=a(451),s=a(6),p=a.n(s),E=a(16),g=a(2),b=function(){var e,t,a,n,o;return{Global:{html:{top:0,left:0,width:"100%",fontSize:14,fontFamily:"arial"},"html, body, #root":{margin:0,padding:0,height:"100%"},"#root":{background:"linear-gradient(180deg, #F5F5F5, #FFF)"},".react-datepicker-popper":{left:"-34px !important"},".react-datepicker-wrapper, .react-datepicker__input-container":{display:"block !important"},".active":{fontWeight:"bold"}},Palette:e={color1:"#000",color2:"#3D556D",color3:"#23527C",color4:"#E7E7E7",color5:"#D7D7D7",color6:"#F2F1F0",color7:"#ACAAC1",color8:"#FFF"},Button:{default:t={display:"block",border:"none",height:30,padding:"0 12px",cursor:"pointer",color:e.color2,backgroundColor:e.color3,"&:hover":{color:e.color1}},contrast:Object(g.a)({},t,{color:e.color4,"&:hover":{color:e.color4}}),tab:Object(g.a)({},t,{display:"inline-block",color:e.color3,backgroundColor:e.color6,"&:hover":{color:e.color6,backgroundColor:e.color3}}),link:a=Object(g.a)({},t,{margin:0,padding:0,fontSize:14,height:"auto",display:"inline",backgroundColor:"transparent","&:disabled":{color:e.color7}}),icon:Object(g.a)({},t,{width:30,margin:0,padding:0,display:"inline-block",backgroundColor:"transparent"})},Link:{default:{color:e.color2,textDecoration:"none","&:hover":{color:e.color1}},anti:Object(g.a)({},a,{textDecoration:"none",color:e.color4})},Typography:{default:n={fontSize:14,fontWeight:300,color:e.color2},title:{fontSize:24,padding:12,display:"block"},label:Object(g.a)({},n,{padding:"6px 0",fontSize:12,lineHeight:"28px"}),anti:{lineHeight:"30px",color:e.color4},simple:Object(g.a)({},n,{color:e.color1})},Table:{default:{width:"100%",fontSize:12,color:e.color3,borderCollapse:"collapse","& td":{padding:"8px 2px",borderBottom:"2px solid "+e.color2}}},Panel:{default:{padding:12,position:"relative",backgroundColor:e.color5}},Input:{default:o={border:"1px solid transparent",margin:0,height:28,padding:"0 6px",color:e.color3,backgroundColor:e.color6},date:Object(g.a)({},o)},Overlay:{default:{top:0,left:0,width:"100%",height:"100%",position:"fixed",backgroundColor:"rgba(0, 0, 0, .1)",zIndex:2048}},Aside:{default:{top:0,width:"200px",height:"100%",position:"fixed",backgroundColor:e.color3,zIndex:2049,"& a":{paddingLeft:12,display:"block"}}},Dialog:{default:{top:"6%",width:400,minHeight:200,zIndex:2050,left:"calc(50% - 200px)",position:"fixed",backgroundColor:e.color3},alert:{top:12,right:12,width:262,minHeight:48,zIndex:2049,padding:12,position:"absolute",backgroundColor:e.color3}},Select:{default:{width:"100%",display:"block"}}}}(),h=(a(109),a(5)),f=a(38),_=a(9),m=a(23),S=a(19),y=a.n(S),O=a(17),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{prepareDeleteRowID:0,createdAtFilterValue:Object(O.b)("created_at")||y()(),selectedRowsFlag:!1,catchedErrorMessage:"",displayCopySeveralRows:!1,displayDeleteSeveralRows:!1,dataLoadingFlag:!1,selectedRowsIdsArray:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LIST_PAGE_DELETE_ROW_ID":return Object(g.a)({},e,{prepareDeleteRowID:t.payload});case"USER_LIST_PAGE_CREATED_AT":return Object(g.a)({},e,{createdAtFilterValue:t.payload});case"USER_LIST_PAGE_ROWS_ARE_SELECTED":return Object(g.a)({},e,{selectedRowsFlag:t.payload});case"USER_LIST_PAGE_ERROR_MESSAGE":return Object(g.a)({},e,{catchedErrorMessage:t.payload});case"USER_LIST_PAGE_COPY_ROWS":return Object(g.a)({},e,{displayCopySeveralRows:t.payload});case"USER_LIST_PAGE_DELETE_ROWS":return Object(g.a)({},e,{displayDeleteSeveralRows:t.payload});case"USER_LIST_PAGE_LOADING":return Object(g.a)({},e,{dataLoadingFlag:t.payload});case"USER_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY":return Object(g.a)({},e,{selectedRowsIdsArray:Object(m.a)(t.payload)});default:return Object(g.a)({},e)}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,Object(g.a)({},e)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{displayFilesManagerFlag:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DISPLAY_FILES_MANAGER":return Object(g.a)({},e,{displayFilesManagerFlag:t.payload});case"CHANGE_DISPLAY_FILES_MANAGER_SELECT":return Object(g.a)({},e,{displayFilesManagerSelectFlag:t.payload});case"FILES_PAGE_ERROR_MESSAGE":return Object(g.a)({},e,{catchedErrorMessage:t.payload});default:return Object(g.a)({},e)}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{prepareDeleteRowID:0,createdAtFilterValue:Object(O.b)("created_at")||y()(),selectedRowsFlag:!1,catchedErrorMessage:"",displayCopySeveralRows:!1,displayDeleteSeveralRows:!1,dataLoadingFlag:!1,selectedRowsIdsArray:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS_LIST_PAGE_DELETE_ROW_ID":return Object(g.a)({},e,{prepareDeleteRowID:t.payload});case"NEWS_LIST_PAGE_CREATED_AT":return Object(g.a)({},e,{createdAtFilterValue:t.payload});case"NEWS_LIST_PAGE_ROWS_ARE_SELECTED":return Object(g.a)({},e,{selectedRowsFlag:t.payload});case"NEWS_LIST_PAGE_ERROR_MESSAGE":return Object(g.a)({},e,{catchedErrorMessage:t.payload});case"NEWS_LIST_PAGE_COPY_ROWS":return Object(g.a)({},e,{displayCopySeveralRows:t.payload});case"NEWS_LIST_PAGE_DELETE_ROWS":return Object(g.a)({},e,{displayDeleteSeveralRows:t.payload});case"NEWS_LIST_PAGE_LOADING":return Object(g.a)({},e,{dataLoadingFlag:t.payload});case"NEWS_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY":return Object(g.a)({},e,{selectedRowsIdsArray:Object(m.a)(t.payload)});default:return Object(g.a)({},e)}},j=Object(_.c)({usersListPage:R,newsListPage:v,foldersList:A,filesList:w}),I=a(56);Object(l.render)(r.a.createElement(E.ThemeProvider,{theme:b},r.a.createElement(c.a,{basename:"/manager"},r.a.createElement(f.a,{store:Object(_.d)(j,n,Object(_.a)(I.a,function(e){return function(e){return function(t){return e(t)}}}))},r.a.createElement(i.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/news"})}}),r.a.createElement(d.a,{exact:!0,path:"/login",component:p()({loader:function(){return Promise.all([a.e(1),a.e(9)]).then(a.bind(null,449))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/dashboard",component:p()({loader:function(){return a.e(10).then(a.bind(null,439))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/users",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,442))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/tags",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(7),a.e(12)]).then(a.bind(null,443))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/persons",component:p()({loader:function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,445))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/persons/:type_id/create",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(4)]).then(a.bind(null,448))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/persons/:type_id/:id",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(4)]).then(a.bind(null,448))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/news",component:p()({loader:function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,446))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/rss",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(7),a.e(15)]).then(a.bind(null,444))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/news/create",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(5)]).then(a.bind(null,447))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/news/:id",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(5)]).then(a.bind(null,447))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/page",component:p()({loader:function(){return a.e(6).then(a.bind(null,441))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/page/:id",component:p()({loader:function(){return a.e(6).then(a.bind(null,441))},loading:function(){return r.a.createElement(h.a,null)}})}),r.a.createElement(d.a,{exact:!0,path:"/media",component:p()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(16)]).then(a.bind(null,454))},loading:function(){return r.a.createElement(h.a,null)}})}))))),document.getElementById("root"))},17:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return l});a(18);var n=a(2),o=function(){var e={};return window.location.search.substr(1).split("&").forEach(function(t){var a=t.split("=");e[a[0]]=a[1]}),e},r=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return o().name||""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=[];for(var r in a){for(var l=o.length,c=void 0;l--;)if((c=o[l].split("="))[0]===r){c[1]=a[r],o[l]=c.join("=");break}l<0&&(o[o.length]=[r,a[r]].join("="))}window.history.pushState(Object(n.a)({},a),e,t+"?"+o.join("&"))}},41:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=a(54),i=a.n(c);t.a=l()({root:{top:0,left:0,width:"100%",height:"100%",zIndex:4048,position:"fixed",backgroundImage:"url("+i.a+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"148px",backgroundColor:"rgba(0, 0, 0, .1)"}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root})})},5:function(e,t,a){"use strict";var n=a(41);t.a=n.a},54:function(e,t,a){e.exports=a.p+"static/media/spinner.e46d3467.gif"},59:function(e,t,a){e.exports=a(114)}},[[59,18,17]]]);
//# sourceMappingURL=main.90059dea.chunk.js.map