(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{443:function(e,t,a){"use strict";a.r(t);var n=a(117),r=a(124),o=a(119),c=a(118),i=a(120),l=a(132),s=a(2),u=a(0),m=a.n(u),d=a(16),g=a.n(d),p=a(161),f=a(141),E=a(123),v=a(122),b=a(145),h=a(138),O=a(5),w=a(19),j=a.n(w),y=a(38),I=a(9),x=a(246),D=a(130),S=a(158),R=a(155),C=a(156),k=a(157),P=a(137),L=a(190),F=a(116),A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.props,n=a.tagsListPageLoading,r=a.tagsListPageErrorMessage;return n(!0),Object(F.a)("/tags/"+t,"DELETE").then(function(){n(!1),e.setState({prepareDeleteRowID:0})}).catch(function(t){n(!1),r(t.message),e.setState({prepareDeleteRowID:0}),setTimeout(function(){r(t.message)},2600)})},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.props,n=a.tagsListPageLoading,r=a.tagsListPageErrorMessage;return n(!0),Object(F.a)("/tags/trash/"+t,"DELETE").then(function(){n(!1),e.setState({prepareDeleteForeverRowID:0})}).catch(function(t){n(!1),r(t.message),e.setState({prepareDeleteForeverRowID:0}),setTimeout(function(){r(t.message)},2600)})},T=function(e,t,a){var n=new FormData(document.getElementById(t)),r={},o=e.props,c=o.userListPageLoading,i=o.userListPageErrorMessage,l=!0,s=!1,u=void 0;try{for(var m,d=n.entries()[Symbol.iterator]();!(l=(m=d.next()).done);l=!0){var g=m.value;r[g[0]]=g[1]}}catch(p){s=!0,u=p}finally{try{l||null==d.return||d.return()}finally{if(s)throw u}}return Object(F.a)("/tags/"+a,"PUT",r).then(function(){e.setState({currentEditRowIndex:-1})}).catch(function(t){c(!1),i(t.message),e.setState({currentEditRowIndex:-1}),setTimeout(function(){i(t.message)},2600)})},B=function(e,t){return Object(F.a)("/tags/restore/"+t,"PUT").then(function(e){e.data,e.total}).catch(function(e){})},M=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var a=e.state,n=a.direction,r=a.sort;e.setState({sort:t,direction:r!==t?"asc":"desc"===n?"asc":"desc"},function(){document.getElementById("tags-data-fetch-submit").click()})}}},_=a(18),K=a(17),G=function(e){return function(t){t.preventDefault();var a={page:1,limit:20,sort_direction:"desc",sort_column:"created_at"};for(var n in t.target.elements)t.target.elements[n].value&&(a=Object(s.a)({},a,Object(_.a)({},t.target.elements[n].name,t.target.elements[n].value)));Object(K.c)("Tags","tags",a),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.props,r=n.tagsListPageLoading;(0,n.tagsListPageSelectedRowsIDsArray)([]),r(!0),Object(F.a)("/tags","GET",e,t).then(function(e){var t=e.data,n=e.total,o=void 0===n?0:n;r(!1),a.setState({total:o,data:t})}).catch(function(e){var t=a.props.tagsListPageErrorMessage;t(e.message),setTimeout(function(){t("")},2600),r(!1)})}(a,"",e)}},V=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){a&&e.setState({page:t<1?1:t},function(){document.getElementById("tags-data-fetch-submit").click()})}}},J=function(e,t){var a=new FormData(document.getElementById(t)),n=e.props;n.tagsListPageLoading,n.tagsListPageErrorMessage,n.catchedErrorMessage,e.state.displayAlert;console.log(666,a);var r={};return a.forEach(function(e,t){r[t]=e}),Object(F.a)("/tags","POST",r).then(function(){e.setState({addNewItemFlag:!1})}).catch(function(t){e.setState({displayAlert:t.message}),setTimeout(function(){e.setState({displayAlert:""})},2600)})},U=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state=Object(s.a)({},Object(s.a)({},Object(K.a)(),{limit:10,page:1}),{data:[],total:20,prepareDeleteRowID:0,prepareDeleteForeverRowID:0,currentEditRowIndex:-1,currentEditRowCreatedAt:null}),a.componentDidMount=function(){document.getElementById("tags-data-fetch-submit").click()},a.render=function(){var e=a.props.classes,t=a.state,n=t.data,r=void 0===n?[]:n,o=t.sort,c=void 0===o?"":o,i=t.direction,s=void 0===i?"":i,u=t.page,d=void 0===u?0:u,g=t.limit,p=void 0===g?20:g,f=t.total,h=void 0===f?0:f,O=t.prepareDeleteRowID,w=void 0===O?0:O,j=t.currentEditRowIndex,y=(t.currentEditRowCreatedAt,t.prepareDeleteForeverRowID),I=void 0===y?0:y,x=a.props.persons&&a.props.persons.map(function(e){return[e.name,e.id]});return m.a.createElement(D.a,{className:e.root},m.a.createElement(S.a,null,m.a.createElement(R.a,{columns:[m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{variant:"simple",text:"\u0418\u043c\u044f"}),m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("span",{className:"value"===c&&"asc"===s?"fa fa-sort-up":"fa fa-sort-down"}),onClick:M(Object(l.a)(Object(l.a)(a)))("value"),className:"value"===c?"active":""})),m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{variant:"simple",text:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430"}),m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("span",{className:"person"===c&&"asc"===s?"fa fa-sort-up":"fa fa-sort-down"}),onClick:M(Object(l.a)(Object(l.a)(a)))("person"),className:"person"===c?"active":""})),m.a.createElement(v.a,{variant:"simple",text:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),m.a.createElement("tbody",null,r.map(function(e,t){return m.a.createElement(C.a,{key:t,columns:[e.value,e.person&&e.person.name,m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("i",{className:"fa fa-edit"}),onClick:function(){return a.setState({currentEditRowIndex:t})}}),e.deleted_at&&m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("i",{className:"fa fa-refresh"}),onClick:function(){return B(Object(l.a)(Object(l.a)(a)),e.id).then(function(){document.getElementById("tags-data-fetch-submit").click()})}}),e.deleted_at?m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("i",{className:"fa fa-trash"}),onClick:function(){return a.setState({prepareDeleteForeverRowID:e.id})}}):m.a.createElement(E.a,{variant:"icon",text:m.a.createElement("i",{className:"fa fa-close"}),onClick:function(){return a.setState({prepareDeleteRowID:e.id})}}))]})}))),m.a.createElement("div",{className:e.pagePaginationButtons},m.a.createElement(k.a,{limit:p,total:h,page:d,onClick:V(Object(l.a)(Object(l.a)(a)))})),m.a.createElement(v.a,{text:"\u0417\u0430\u043f\u0438\u0441\u0438: ".concat((d-1)*p+1," - ").concat(d*p>h?h:d*p," \u0438\u0437 ").concat(h),className:e.pagePaginationInfo}),m.a.createElement("form",{id:"tags-data-fetch-form",onSubmit:G(Object(l.a)(Object(l.a)(a)))},m.a.createElement("button",{type:"submit",style:{display:"none"},id:"tags-data-fetch-submit"})),m.a.createElement("input",{type:"hidden",name:"sort_column",form:"tags-data-fetch-form",value:c}),m.a.createElement("input",{type:"hidden",name:"sort_direction",form:"tags-data-fetch-form",value:s}),m.a.createElement("input",{type:"hidden",name:"page",form:"tags-data-fetch-form",value:d}),m.a.createElement("input",{type:"hidden",name:"limit",form:"tags-data-fetch-form",value:p}),w?m.a.createElement(b.a,{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u044d\u0433\u0430",onClose:function(){return a.setState({prepareDeleteRowID:0})},control:m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{variant:"tab",text:"OK",onClick:function(){A(Object(l.a)(Object(l.a)(a)),w).then(function(){document.getElementById("tags-data-fetch-submit").click()})}}),m.a.createElement(E.a,{variant:"tab",text:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){return a.setState({prepareDeleteRowID:0})}}))},m.a.createElement(v.a,{text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u044d\u0433 \u0441 id ".concat(w,"?")})):"",I?m.a.createElement(b.a,{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u044d\u0433\u0430",onClose:function(){return a.setState({prepareDeleteForeverRowID:0})},control:m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{variant:"tab",text:"OK",onClick:function(){N(Object(l.a)(Object(l.a)(a)),I).then(function(){document.getElementById("tags-data-fetch-submit").click()})}}),m.a.createElement(E.a,{variant:"tab",text:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){return a.setState({prepareDeleteForeverRowID:0})}}))},m.a.createElement(v.a,{text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u044d\u0433 \u0441 id ".concat(I,"?\n\t\t\t\t\t\t\t\u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c!")})):"",j>-1?m.a.createElement(b.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClose:function(){return a.setState({currentEditRowIndex:-1})},control:m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{variant:"tab",text:"OK",onClick:function(e){T(Object(l.a)(Object(l.a)(a)),"tags-edit-form",r[j].id).then(function(){return document.getElementById("tags-data-fetch-submit").click()})}}),m.a.createElement(E.a,{variant:"tab",text:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){return a.setState({currentEditRowIndex:-1})}}))},m.a.createElement("form",{id:"tags-edit-form"},m.a.createElement(v.a,{variant:"label",text:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430"}),m.a.createElement(L.a,{defaultValue:r[j].person_id,name:"person_id",options:x}),m.a.createElement(v.a,{variant:"label",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u044d\u0433\u0430"}),m.a.createElement(P.a,{defaultValue:r[j].value,type:"text",name:"value"}))):"")},a}return Object(i.a)(t,e),t}(m.a.PureComponent),H=Object(y.b)(function(e){return{selectedRowsIdsArray:Object(p.d)(e)}},function(e){return{tagsListPageErrorMessage:Object(I.b)(x.a,e),tagsListPageSelectedRowsIDsArray:Object(I.b)(x.c,e),tagsListPageLoading:Object(I.b)(x.b,e)}})(g()(function(){return{root:{margin:12,gridArea:"tags-table","& table":{marginBottom:56}},pagePaginationButtons:{position:"absolute",bottom:12,left:12},pagePaginationInfo:{position:"absolute",bottom:12,right:12}}})(U)),q=a(129),z=a(135),Q=a(146),W=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.persons;return e=e&&e.map(function(e){return[e.name,e.id]}),console.log(e),m.a.createElement("form",{id:"tags-add-form"},m.a.createElement(q.a,{variant:"label",text:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430"}),m.a.createElement(Q.a,{name:"person_id",options:e}),m.a.createElement(q.a,{variant:"label",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u044d\u0433\u0430"}),m.a.createElement(z.a,{type:"text",name:"value"}))}}]),t}(m.a.PureComponent),X=g()(function(){return{}})(W),Y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={displayCopySeveralRows:!1,displayDeleteSeveralRows:!1,displayAlert:!1,currentAddRowCreatedAt:j()(),addNewItemFlag:!1,persons:[]},a.render=function(){var e=a.state,t=e.displayAlert,n=(e.displayDeleteSeveralRows,e.displayCopySeveralRows,e.addNewItemFlag),r=e.persons,o=a.props,c=o.classes,i=(o.selectedRowsIdsArray,o.catchedErrorMessage,o.createdAtFilterValue,o.userListPageCreatedAt,o.dataLoadingFlag);return m.a.createElement(m.a.Fragment,null,i&&m.a.createElement(O.a,null),m.a.createElement(f.a,null),m.a.createElement(v.a,{text:"\u0422\u044d\u0433\u0438",variant:"title"}),m.a.createElement("div",{className:c.control},m.a.createElement(E.a,{variant:"link",color:"secondary",text:m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fa fa-plus"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u044d\u0433"),onClick:function(){a.setState({addNewItemFlag:!0})}})),m.a.createElement(H,{persons:r}),!0===n?m.a.createElement(b.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u044d\u0433",onClose:function(){return a.setState({addNewItemFlag:!1})},control:m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{variant:"tab",text:"OK",onClick:function(){J(Object(l.a)(Object(l.a)(a)),"tags-add-form").then(function(){document.getElementById("tags-data-fetch-submit").click()})}}),m.a.createElement(E.a,{variant:"tab",text:"Cancel",onClick:function(){return a.setState({addNewItemFlag:!1})}}))},m.a.createElement(X,{persons:r})):"",t?m.a.createElement(h.a,{text:t}):"")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.props;t.tagsListPageLoading,t.tagsListPageSelectedRowsIDsArray;Object(F.a)("/person?limit=1000","GET").then(function(t){var a=t.data;t.total,e.setState({persons:a})}).catch(function(e){})}(this)}}]),t}(m.a.PureComponent),Z=g()(function(e){var t=e.Global;e.Palette;return{"@global":Object(s.a)({},t,{"#root":Object(s.a)({},t["#root"],{display:"grid",gridTemplateAreas:"\n\t\t\t\t'header header'\n\t\t\t\t'page-title control-elements'\n\t\t\t\t'tags-table tags-filters'\n\t\t\t",gridTemplateRows:"30px 50px auto",gridTemplateColumns:"auto 352px"})}),control:{lineHeight:"48px",gridArea:"control-elements","& button, & a":{margin:"0 18px 0 0"},"& .fa":{margin:"0 6px 0 0"}},title:{gridArea:"page-title"}}})(Y);t.default=Z}}]);
//# sourceMappingURL=12.fbf1637e.chunk.js.map